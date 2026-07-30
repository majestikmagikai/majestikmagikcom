<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
  <html>
    <head>
      <title>Majestik Magik - XML Sitemap</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/img/logo_majestikmagik.webp" type="image/webp" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet" />
      <style type="text/css">
        body {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #0f172a; /* Deep rich dark navy background */
          color: #f3f4f6;
          margin: 0;
          line-height: 1.6;
          padding: 2.5rem 1rem;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          background-color: #0d0f1a; /* Elevated card background */
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid rgba(99, 102, 241, 0.15); /* Faint neon-purple border line */
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        h1 {
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          margin: 0;
          background: linear-gradient(135deg, #ffffff 40%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        h3 {
          color: #6366f1; /* Pivot violet signature color */
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0.25rem;
          margin-bottom: 1rem;
        }
        p {
          color: #94a3b8;
          font-size: 0.95rem;
          margin-bottom: 2.5rem;
          max-width: 700px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }
        th {
          background-color: #111322;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          padding: 1rem;
          border-bottom: 2px solid #1e2238;
          text-align: left;
        }
        td {
          padding: 1rem;
          border-bottom: 1px solid #1e2238;
          color: #cbd5e1;
          font-size: 0.9rem;
          transition: background-color 0.15s ease;
        }
        tr:hover td {
          background-color: #161a2e; /* Sleek highlighted background on hover */
          color: #ffffff;
        }
        a {
          color: #818cf8; /* Soft indigo-violet link */
          text-decoration: none;
          word-break: break-all;
          transition: color 0.2s ease;
        }
        a:hover {
          color: #a5b4fc;
          text-decoration: underline;
        }
        .footer {
            margin-top: 3rem;
            text-align: center;
            font-size: 0.85em;
            color: #64748b;
            border-top: 1px solid #1e2238;
            padding-top: 1.5rem;
        }

        /* --- Mobile View Media Query --- */
        @media screen and (max-width: 768px) {
          body {
            padding: 1rem 0.5rem;
          }
          .container {
            padding: 1.5rem;
          }
          table, thead, tbody, th, td, tr {
            display: block;
          }
          thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }
          tr {
            border: 1px solid #1e2238;
            margin-bottom: 1.25rem;
            border-radius: 12px;
            overflow: hidden;
            background-color: #111322;
          }
          td {
            border: none;
            border-bottom: 1px solid #161a2e;
            position: relative;
            padding-left: 45%;
            text-align: right;
          }
          td:before {
            position: absolute;
            top: 1rem;
            left: 1rem;
            width: 40%;
            padding-right: 10px;
            white-space: nowrap;
            text-align: left;
            font-weight: 600;
            color: #94a3b8;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          td:nth-of-type(1):before { content: "URL"; }
          td:nth-of-type(2):before { content: "Last Modified"; }
          td:nth-of-type(3):before { content: "Change Freq."; }
          td:nth-of-type(4):before { content: "Priority"; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>MAJESTIK MAGIK</h1>
        <h3>XML Sitemap</h3>
        <p>This is an XML sitemap designed to guide search engines safely through our core application index. For more information, please visit <a href="http://www.sitemaps.org/" target="_blank">sitemaps.org</a>.</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Frequency</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <xsl:variable name="loc" select="sitemap:loc"/>
                  <a href="{$loc}"><xsl:value-of select="$loc"/></a>
                </td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td><xsl:value-of select="sitemap:priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
        <div class="footer">
            Generated on <script>document.write(new Date().toLocaleDateString());</script> by <a href="https://majestikmagik.dev">Majestik Magik</a>.
        </div>
      </div>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>
<!-- End of file: public/sitemap.xsl -->