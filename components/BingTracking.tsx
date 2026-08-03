// Microsoft Advertising (Bing) tracking.
// Inactive until NEXT_PUBLIC_BING_UET_ID (and optionally
// NEXT_PUBLIC_BING_DOMAIN_VERIFY) are set in .env.local.
export default function BingTracking() {
  const uetId = process.env.NEXT_PUBLIC_BING_UET_ID;
  const domainVerify = process.env.NEXT_PUBLIC_BING_DOMAIN_VERIFY;

  if (!uetId && !domainVerify) return null;

  return (
    <>
      {domainVerify ? <meta name="msvalidate.01" content={domainVerify} /> : null}
      {uetId ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[];f=function(){var o={ti:"${uetId}"};o.q=w[u];w[u]=new UET(o);w[u].push("pageLoad");},n=d.createElement(t);n.src=r;n.async=1;n.onload=n.onreadystatechange=function(){if(this.readyState&&this.readyState!=="loaded"&&this.readyState!=="complete")return;f();},i=d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`,
          }}
        />
      ) : null}
    </>
  );
}
