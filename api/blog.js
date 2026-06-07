const RSS_URL = 'https://jimin0703.tistory.com/rss';

function decodeEntities(value = '') {
  return value
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripHtml(value = '') {
  return decodeEntities(value)
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getTagValue(itemXml, tagName) {
  const match = itemXml.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i'));
  return stripHtml(match?.[1] || '');
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

function parseRss(xml) {
  return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
    .slice(0, 3)
    .map((match) => {
      const itemXml = match[1];
      return {
        title: getTagValue(itemXml, 'title'),
        link: getTagValue(itemXml, 'link'),
        date: formatDate(getTagValue(itemXml, 'pubDate')),
      };
    });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800');

  try {
    const response = await fetch(RSS_URL);
    if (!response.ok) {
      throw new Error(`RSS request failed: ${response.status}`);
    }

    const xml = await response.text();
    res.status(200).json(parseRss(xml));
  } catch (error) {
    res.status(500).json({
      message: '티스토리 블로그 글을 불러오지 못했습니다.',
    });
  }
};
