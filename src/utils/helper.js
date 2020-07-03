import stripTags from 'striptags';

export const stripHtml = s => stripTags(s);

export const replaceHellip = s => s.replace(' [&hellip;]', '…');
