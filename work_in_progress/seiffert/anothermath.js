function complex(x, y = 0) {
  if (y === 0 && isArbitrary(x)) y = 0n;

  return { re: x, im: y };
}

var C = complex;

function isComplex(x) {
  return typeof x === "object" && "re" in x;
}

function add( x, y ) {

  if ( arguments.length > 2 ) {

    var z = add( x, y );
    for ( var i = 2 ; i < arguments.length ; i++ ) z = add( z, arguments[i] );
    return z; 

  }
  if ( isComplex(x) || isComplex(y) ) {

    if ( !isComplex(x) ) x = complex(x);
    if ( !isComplex(y) ) y = complex(y);

    return { re: x.re + y.re, im: x.im + y.im };

  }

  return x + y;
}

function fundamentalParallelogram(x, p1, p2) {
  // x = m p1 + n p2, solve for m, n

  var m = (x.re * p2.im - x.im * p2.re) / (p1.re * p2.im - p1.im * p2.re);
  var n = (x.im * p1.re - x.re * p1.im) / (p1.re * p2.im - p1.im * p2.re);

  return add(x, mul(-Math.floor(m), p1), mul(-Math.floor(n), p2));
}
function sn(x, m) {
  if (m > 1 || isComplex(x) || isComplex(m)) {
    if (!isComplex(m)) m = complex(m); // ensure K complex

    // dlmf.nist.gov/22.17
    if (abs(m) > 1) return mul(inv(sqrt(m)), sn(mul(sqrt(m), x), inv(m)));

    // periods 4K, 2iK'
    var p1 = mul(4, ellipticK(m));
    var p2 = mul(complex(0, 2), ellipticK(sub(1, m)));

    x = fundamentalParallelogram(x, p1, p2);

    var q = ellipticNome(m);
    var t = div(x, pow(jacobiTheta(3, 0, q), 2));

    return mul(
      div(jacobiTheta(3, 0, q), jacobiTheta(2, 0, q)),
      div(jacobiTheta(1, t, q), jacobiTheta(4, t, q))
    );
  }

  // dlmf.nist.gov/22.5.ii
  if (m === 0) return sin(x);
  if (m === 1) return tanh(x);

  var q = ellipticNome(m);
  var t = x / jacobiTheta(3, 0, q) ** 2;

  if (m < 0)
    return (
      (jacobiTheta(3, 0, q) / jacobiTheta(4, t, q)) *
      div(jacobiTheta(1, t, q), jacobiTheta(2, 0, q)).re
    );

  return (
    ((jacobiTheta(3, 0, q) / jacobiTheta(2, 0, q)) * jacobiTheta(1, t, q)) /
    jacobiTheta(4, t, q)
  );
}

function jacobiTheta(n, x, q, tolerance = 1e-10) {
  if (abs(q) >= 1) throw Error("Unsupported elliptic nome");

  if (![1, 2, 3, 4].includes(n)) throw Error("Undefined Jacobi theta index");

  if (isComplex(x) || isComplex(q)) {
    if (!isComplex(x)) x = complex(x);

    var piTau = div(log(q), complex(0, 1));

    // dlmf.nist.gov/20.2 to reduce overflow
    if (Math.abs(x.im) > Math.abs(piTau.im) || Math.abs(x.re) > Math.PI) {
      // use floor for consistency with fundamentalParallelogram
      var pt = Math.floor(x.im / piTau.im);
      x = sub(x, mul(pt, piTau));

      var p = Math.floor(x.re / Math.PI);
      x = sub(x, p * Math.PI);

      var qFactor = pow(q, -pt * pt);
      var eFactor = exp(mul(-2 * pt, x, complex(0, 1)));

      // factors can become huge, so chop spurious parts first
      switch (n) {
        case 1:
          return mul(
            (-1) ** (p + pt),
            qFactor,
            eFactor,
            chop(jacobiTheta(n, x, q), tolerance)
          );

        case 2:
          return mul(
            (-1) ** p,
            qFactor,
            eFactor,
            chop(jacobiTheta(n, x, q), tolerance)
          );

        case 3:
          return mul(qFactor, eFactor, chop(jacobiTheta(n, x, q), tolerance));

        case 4:
          return mul(
            (-1) ** pt,
            qFactor,
            eFactor,
            chop(jacobiTheta(n, x, q), tolerance)
          );
      }
    }

    switch (n) {
      case 1:
        var s = complex(0);
        var p = complex(1);
        var i = 0;

        while (Math.abs(p.re) > tolerance || Math.abs(p.im) > tolerance) {
          p = mul((-1) ** i, pow(q, i * i + i), sin(mul(2 * i + 1, x)));
          s = add(s, p);
          i++;
        }

        return mul(2, pow(q, 1 / 4), s);

      case 2:
        var s = complex(0);
        var p = complex(1);
        var i = 0;

        while (Math.abs(p.re) > tolerance || Math.abs(p.im) > tolerance) {
          p = mul(pow(q, i * i + i), cos(mul(2 * i + 1, x)));
          s = add(s, p);
          i++;
        }

        return mul(2, pow(q, 1 / 4), s);

      case 3:
        var s = complex(0);
        var p = complex(1);
        var i = 1;

        while (Math.abs(p.re) > tolerance || Math.abs(p.im) > tolerance) {
          p = mul(pow(q, i * i), cos(mul(2 * i, x)));
          s = add(s, p);
          i++;
        }

        return add(1, mul(2, s));

      case 4:
        var s = complex(0);
        var p = complex(1);
        var i = 1;

        while (Math.abs(p.re) > tolerance || Math.abs(p.im) > tolerance) {
          p = mul(pow(neg(q), i * i), cos(mul(2 * i, x)));
          s = add(s, p);
          i++;
        }

        return add(1, mul(2, s));
    }
  } else {
    switch (n) {
      case 1:
        if (q < 0) return jacobiTheta(n, x, complex(q));

        var s = 0;
        var p = 1;
        var i = 0;

        while (Math.abs(p) > tolerance) {
          p = (-1) ** i * q ** (i * i + i) * sin((2 * i + 1) * x);
          s += p;
          i++;
        }

        return 2 * q ** (1 / 4) * s;

      case 2:
        if (q < 0) return jacobiTheta(n, x, complex(q));

        var s = 0;
        var p = 1;
        var i = 0;

        while (Math.abs(p) > tolerance) {
          p = q ** (i * i + i) * cos((2 * i + 1) * x);
          s += p;
          i++;
        }

        return 2 * q ** (1 / 4) * s;

      case 3:
        var s = 0;
        var p = 1;
        var i = 1;

        while (Math.abs(p) > tolerance) {
          p = q ** (i * i) * cos(2 * i * x);
          s += p;
          i++;
        }

        return 1 + 2 * s;

      case 4:
        var s = 0;
        var p = 1;
        var i = 1;

        while (Math.abs(p) > tolerance) {
          p = (-q) ** (i * i) * cos(2 * i * x);
          s += p;
          i++;
        }

        return 1 + 2 * s;
    }
  }
}
