const container = require('markdown-it-container');
const cheerio = require('cheerio');

const DEMO_REGEX = /^demo\s*(.*)$/;

function convert(str) {
  const res = str.replace(/(&#x)(\w{4});/gi, $0 =>
    String.fromCharCode(
      parseInt(
        encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'),
        16,
      ),
    ),
  );
  return res;
}

function strip(str, tags) {
  str = `<div class="demo-inner">${str}</div>`;
  const $ = cheerio.load(str, { decodeEntities: false });

  if (!tags || tags.length === 0) {
    return str;
  }

  tags = !Array.isArray(tags) ? [tags] : tags;
  let len = tags.length;

  while (len--) {
    $(tags[len]).remove();
  }

  return $.html('.demo-inner');
}

module.exports = md => {
  md.use(container, 'demo', {
    validate: params => DEMO_REGEX.test(params.trim()),
    render: (tokens, idx) => {
      const token = tokens[idx];
      const mark = token.info.trim().match(/^demo\s*(.*)$/);

      // match start tag
      if (token.nesting === 1) {
        const description =
          mark && mark.length > 1 && mark[1] ? md.render(mark[1]).html : '';
        const { content = '' } = tokens[idx + 1];
        const demoTemplate = convert(
          strip(content, ['script', 'style']),
        ).replace(/(<[^>]*)=""(?=.*>)/g, '$1');

        return `
          <demo-show>
            <template slot="description">${description}</template>
            <template slot="demo-wrapper">${demoTemplate}</template>
        `;
      }

      return `</demo-show>\n`;
    },
  });
};
