// Microsoft Advertising UET tag + conversion events.
// Conversion goals in Microsoft Ads match on these event actions:
//   download        - click on any TakeOff .msi link
//   begin_checkout  - click on a Lemon Squeezy checkout link
(function(w, d, t, u, o) {
  w[u] = w[u] || [], o.ts = (new Date).getTime();
  var n = d.createElement(t);
  n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),
  n.async = 1, n.onload = n.onreadystatechange = function() {
    var s = this.readyState;
    s && "loaded" !== s && "complete" !== s ||
    (o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),
    n.onload = n.onreadystatechange = null)
  };
  var i = d.getElementsByTagName(t)[0];
  i.parentNode.insertBefore(n, i);
})(window, document, "script", "uetq", {
  ti: "343279913",
  enableAutoSpaTracking: true
});

document.addEventListener('click', function(e) {
  var a = e.target.closest && e.target.closest('a[href]');
  if (!a) return;
  var href = a.href;
  if (/\.msi(\?|$)/i.test(href)) {
    // A download does not navigate away, so the beacon has time to send.
    window.uetq.push('event', 'download', {});
  } else if (/lemonsqueezy\.com\/checkout/i.test(href)) {
    window.uetq.push('event', 'begin_checkout', {});
    // Checkout leaves the page; give the beacon a moment before navigating.
    if (e.ctrlKey || e.metaKey || e.shiftKey || a.target === '_blank') return;
    e.preventDefault();
    setTimeout(function() { location.href = href; }, 300);
  }
});
