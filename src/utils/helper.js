import HE from 'he';

export const parseHtmlEntities = s => HE.decode(s);

export const replaceHellip = s => s.replace(' [&hellip;]', '…');
