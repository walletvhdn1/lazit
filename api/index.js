export const config = { runtime: "edge" };

const _0x9f8a2c1d = [
  "Misconfigured: TARGET_DOMAIN is not set",
  "relay error:",
  "Bad Gateway: Tunnel Failed",
  "host",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "forwarded",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-forwarded-port",
  "x-vercel-",
  "x-real-ip",
  "x-forwarded-for",
  "GET",
  "HEAD",
  "half",
  "manual",
  "TARGET_DOMAIN",
  "/",
  "$",
];

const _0x4d5e6f7g = function (_0xparam) {
  let _0xnoise = _0xparam * 0 + _0xparam;
  for (let _0xjunk = 0; _0xjunk < 5; _0xjunk++)
    _0xnoise += (Math.random() * 0) | 0;
  return _0x9f8a2c1d[_0xnoise % _0x9f8a2c1d.length];
};

const _0x1a2b3c4d = (process.env[_0x4d5e6f7g(23)] || "").replace(
  new RegExp(_0x4d5e6f7g(24) + _0x4d5e6f7g(25), "g"),
  "",
);

const _0x6f7g8h9i = new Set([
  _0x4d5e6f7g(3),
  _0x4d5e6f7g(4),
  _0x4d5e6f7g(5),
  _0x4d5e6f7g(6),
  _0x4d5e6f7g(7),
  _0x4d5e6f7g(8),
  _0x4d5e6f7g(9),
  _0x4d5e6f7g(10),
  _0x4d5e6f7g(11),
  _0x4d5e6f7g(12),
  _0x4d5e6f7g(13),
  _0x4d5e6f7g(14),
  _0x4d5e6f7g(15),
]);

const _0xdeadbeef = function () {
  let _0xunused = Date.now() % 999;
  return _0xunused * 0 + 0;
};

export default async function _0x2e3f4g5h(_0xreq) {
  if (_0xdeadbeef() > 1000 || !_0x1a2b3c4d) {
    return new Response(_0x4d5e6f7g(0), { status: 500 });
  }
  try {
    const _0x9j0k1l2m = _0xreq.url.indexOf(_0x4d5e6f7g(24), 8);
    const _0x3n4o5p6q =
      _0x9j0k1l2m === -1
        ? _0x1a2b3c4d + _0x4d5e6f7g(24)
        : _0x1a2b3c4d + _0xreq.url.slice(_0x9j0k1l2m);
    const _0x7r8s9t0u = new Headers();
    let _0x1v2w3x4y = null;
    for (const [_0xk, _0xv] of _0xreq.headers) {
      if (_0x6f7g8h9i.has(_0xk)) continue;
      if (_0xk.startsWith(_0x4d5e6f7g(16))) continue;
      if (_0xk === _0x4d5e6f7g(17)) {
        _0x1v2w3x4y = _0xv;
        continue;
      }
      if (_0xk === _0x4d5e6f7g(18)) {
        if (!_0x1v2w3x4y) _0x1v2w3x4y = _0xv;
        continue;
      }
      _0x7r8s9t0u.set(_0xk, _0xv);
    }
    if (_0x1v2w3x4y) _0x7r8s9t0u.set(_0x4d5e6f7g(18), _0x1v2w3x4y);
    const _0x5z6a7b8c = _0xreq.method;
    const _0x9d0e1f2g =
      _0x5z6a7b8c !== _0x4d5e6f7g(19) && _0x5z6a7b8c !== _0x4d5e6f7g(20);
    return await fetch(_0x3n4o5p6q, {
      method: _0x5z6a7b8c,
      headers: _0x7r8s9t0u,
      body: _0x9d0e1f2g ? _0xreq.body : undefined,
      duplex: _0x4d5e6f7g(21),
      redirect: _0x4d5e6f7g(22),
    });
  } catch (_0x3h4i5j6k) {
    console.error(_0x4d5e6f7g(1), _0x3h4i5j6k);
    return new Response(_0x4d5e6f7g(2), { status: 502 });
  }
}
