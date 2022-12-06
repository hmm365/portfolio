var Iu = Object.defineProperty,
    Hu = Object.defineProperties;
var Du = Object.getOwnPropertyDescriptors;
var Bo = Object.getOwnPropertySymbols;
var Nu = Object.prototype.hasOwnProperty,
    Bu = Object.prototype.propertyIsEnumerable;
var Vo = (t, e, n) => (e in t ? Iu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
    me = (t, e) => {
        for (var n in e || (e = {})) Nu.call(e, n) && Vo(t, n, e[n]);
        if (Bo) for (var n of Bo(e)) Bu.call(e, n) && Vo(t, n, e[n]);
        return t;
    },
    mt = (t, e) => Hu(t, Du(e));
function ji(t, e) {
    const n = Object.create(null),
        r = t.split(',');
    for (let s = 0; s < r.length; s++) n[r[s]] = !0;
    return e ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const Vu = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
    ju = ji(Vu);
function al(t) {
    return !!t || t === '';
}
function Ps(t) {
    if (Z(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                s = Ce(r) ? qu(r) : Ps(r);
            if (s) for (const i in s) e[i] = s[i];
        }
        return e;
    } else {
        if (Ce(t)) return t;
        if (ge(t)) return t;
    }
}
const zu = /;(?![^(]*\))/g,
    Uu = /:(.+)/;
function qu(t) {
    const e = {};
    return (
        t.split(zu).forEach((n) => {
            if (n) {
                const r = n.split(Uu);
                r.length > 1 && (e[r[0].trim()] = r[1].trim());
            }
        }),
        e
    );
}
function Ct(t) {
    let e = '';
    if (Ce(t)) e = t;
    else if (Z(t))
        for (let n = 0; n < t.length; n++) {
            const r = Ct(t[n]);
            r && (e += r + ' ');
        }
    else if (ge(t)) for (const n in t) t[n] && (e += n + ' ');
    return e.trim();
}
function Wu(t) {
    if (!t) return null;
    let { class: e, style: n } = t;
    return e && !Ce(e) && (t.class = Ct(e)), n && (t.style = Ps(n)), t;
}
function Zu(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let r = 0; n && r < t.length; r++) n = Ms(t[r], e[r]);
    return n;
}
function Ms(t, e) {
    if (t === e) return !0;
    let n = jo(t),
        r = jo(e);
    if (n || r) return n && r ? t.getTime() === e.getTime() : !1;
    if (((n = Z(t)), (r = Z(e)), n || r)) return n && r ? Zu(t, e) : !1;
    if (((n = ge(t)), (r = ge(e)), n || r)) {
        if (!n || !r) return !1;
        const s = Object.keys(t).length,
            i = Object.keys(e).length;
        if (s !== i) return !1;
        for (const o in t) {
            const a = t.hasOwnProperty(o),
                c = e.hasOwnProperty(o);
            if ((a && !c) || (!a && c) || !Ms(t[o], e[o])) return !1;
        }
    }
    return String(t) === String(e);
}
function Ku(t, e) {
    return t.findIndex((n) => Ms(n, e));
}
const be = (t) => (Ce(t) ? t : t == null ? '' : Z(t) || (ge(t) && (t.toString === ul || !Y(t.toString))) ? JSON.stringify(t, ll, 2) : String(t)),
    ll = (t, e) =>
        e && e.__v_isRef
            ? ll(t, e.value)
            : Nn(e)
            ? { [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, s]) => ((n[`${r} =>`] = s), n), {}) }
            : Os(e)
            ? { [`Set(${e.size})`]: [...e.values()] }
            : ge(e) && !Z(e) && !fl(e)
            ? String(e)
            : e,
    ue = {},
    Dn = [],
    ut = () => {},
    Yu = () => !1,
    Xu = /^on[^a-z]/,
    jr = (t) => Xu.test(t),
    zi = (t) => t.startsWith('onUpdate:'),
    Ee = Object.assign,
    Ui = (t, e) => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
    },
    Ju = Object.prototype.hasOwnProperty,
    ee = (t, e) => Ju.call(t, e),
    Z = Array.isArray,
    Nn = (t) => As(t) === '[object Map]',
    Os = (t) => As(t) === '[object Set]',
    jo = (t) => t instanceof Date,
    Y = (t) => typeof t == 'function',
    Ce = (t) => typeof t == 'string',
    qi = (t) => typeof t == 'symbol',
    ge = (t) => t !== null && typeof t == 'object',
    cl = (t) => ge(t) && Y(t.then) && Y(t.catch),
    ul = Object.prototype.toString,
    As = (t) => ul.call(t),
    Qu = (t) => As(t).slice(8, -1),
    fl = (t) => As(t) === '[object Object]',
    Wi = (t) => Ce(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
    _r = ji(',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'),
    $s = (t) => {
        const e = Object.create(null);
        return (n) => e[n] || (e[n] = t(n));
    },
    Gu = /-(\w)/g,
    xt = $s((t) => t.replace(Gu, (e, n) => (n ? n.toUpperCase() : ''))),
    ef = /\B([A-Z])/g,
    nr = $s((t) => t.replace(ef, '-$1').toLowerCase()),
    Ls = $s((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    qs = $s((t) => (t ? `on${Ls(t)}` : '')),
    Tr = (t, e) => !Object.is(t, e),
    rs = (t, e) => {
        for (let n = 0; n < t.length; n++) t[n](e);
    },
    os = (t, e, n) => {
        Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
    },
    Wn = (t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
    };
let zo;
const tf = () =>
    zo ||
    (zo =
        typeof globalThis != 'undefined'
            ? globalThis
            : typeof self != 'undefined'
            ? self
            : typeof window != 'undefined'
            ? window
            : typeof global != 'undefined'
            ? global
            : {});
let gt;
class dl {
    constructor(e = !1) {
        (this.active = !0),
            (this.effects = []),
            (this.cleanups = []),
            !e && gt && ((this.parent = gt), (this.index = (gt.scopes || (gt.scopes = [])).push(this) - 1));
    }
    run(e) {
        if (this.active) {
            const n = gt;
            try {
                return (gt = this), e();
            } finally {
                gt = n;
            }
        }
    }
    on() {
        gt = this;
    }
    off() {
        gt = this.parent;
    }
    stop(e) {
        if (this.active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (this.parent && !e) {
                const s = this.parent.scopes.pop();
                s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index));
            }
            this.active = !1;
        }
    }
}
function nf(t) {
    return new dl(t);
}
function rf(t, e = gt) {
    e && e.active && e.effects.push(t);
}
const Zi = (t) => {
        const e = new Set(t);
        return (e.w = 0), (e.n = 0), e;
    },
    hl = (t) => (t.w & tn) > 0,
    _l = (t) => (t.n & tn) > 0,
    sf = ({ deps: t }) => {
        if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= tn;
    },
    of = (t) => {
        const { deps: e } = t;
        if (e.length) {
            let n = 0;
            for (let r = 0; r < e.length; r++) {
                const s = e[r];
                hl(s) && !_l(s) ? s.delete(t) : (e[n++] = s), (s.w &= ~tn), (s.n &= ~tn);
            }
            e.length = n;
        }
    },
    di = new WeakMap();
let cr = 0,
    tn = 1;
const hi = 30;
let ct;
const bn = Symbol(''),
    _i = Symbol('');
class Ki {
    constructor(e, n = null, r) {
        (this.fn = e), (this.scheduler = n), (this.active = !0), (this.deps = []), (this.parent = void 0), rf(this, r);
    }
    run() {
        if (!this.active) return this.fn();
        let e = ct,
            n = Xt;
        for (; e; ) {
            if (e === this) return;
            e = e.parent;
        }
        try {
            return (this.parent = ct), (ct = this), (Xt = !0), (tn = 1 << ++cr), cr <= hi ? sf(this) : Uo(this), this.fn();
        } finally {
            cr <= hi && of(this), (tn = 1 << --cr), (ct = this.parent), (Xt = n), (this.parent = void 0), this.deferStop && this.stop();
        }
    }
    stop() {
        ct === this ? (this.deferStop = !0) : this.active && (Uo(this), this.onStop && this.onStop(), (this.active = !1));
    }
}
function Uo(t) {
    const { deps: e } = t;
    if (e.length) {
        for (let n = 0; n < e.length; n++) e[n].delete(t);
        e.length = 0;
    }
}
let Xt = !0;
const pl = [];
function rr() {
    pl.push(Xt), (Xt = !1);
}
function sr() {
    const t = pl.pop();
    Xt = t === void 0 ? !0 : t;
}
function Xe(t, e, n) {
    if (Xt && ct) {
        let r = di.get(t);
        r || di.set(t, (r = new Map()));
        let s = r.get(n);
        s || r.set(n, (s = Zi())), ml(s);
    }
}
function ml(t, e) {
    let n = !1;
    cr <= hi ? _l(t) || ((t.n |= tn), (n = !hl(t))) : (n = !t.has(ct)), n && (t.add(ct), ct.deps.push(t));
}
function Rt(t, e, n, r, s, i) {
    const o = di.get(t);
    if (!o) return;
    let a = [];
    if (e === 'clear') a = [...o.values()];
    else if (n === 'length' && Z(t))
        o.forEach((c, l) => {
            (l === 'length' || l >= r) && a.push(c);
        });
    else
        switch ((n !== void 0 && a.push(o.get(n)), e)) {
            case 'add':
                Z(t) ? Wi(n) && a.push(o.get('length')) : (a.push(o.get(bn)), Nn(t) && a.push(o.get(_i)));
                break;
            case 'delete':
                Z(t) || (a.push(o.get(bn)), Nn(t) && a.push(o.get(_i)));
                break;
            case 'set':
                Nn(t) && a.push(o.get(bn));
                break;
        }
    if (a.length === 1) a[0] && pi(a[0]);
    else {
        const c = [];
        for (const l of a) l && c.push(...l);
        pi(Zi(c));
    }
}
function pi(t, e) {
    for (const n of Z(t) ? t : [...t]) (n !== ct || n.allowRecurse) && (n.scheduler ? n.scheduler() : n.run());
}
const af = ji('__proto__,__v_isRef,__isVue'),
    gl = new Set(
        Object.getOwnPropertyNames(Symbol)
            .map((t) => Symbol[t])
            .filter(qi)
    ),
    lf = Yi(),
    cf = Yi(!1, !0),
    uf = Yi(!0),
    qo = ff();
function ff() {
    const t = {};
    return (
        ['includes', 'indexOf', 'lastIndexOf'].forEach((e) => {
            t[e] = function (...n) {
                const r = re(this);
                for (let i = 0, o = this.length; i < o; i++) Xe(r, 'get', i + '');
                const s = r[e](...n);
                return s === -1 || s === !1 ? r[e](...n.map(re)) : s;
            };
        }),
        ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((e) => {
            t[e] = function (...n) {
                rr();
                const r = re(this)[e].apply(this, n);
                return sr(), r;
            };
        }),
        t
    );
}
function Yi(t = !1, e = !1) {
    return function (r, s, i) {
        if (s === '__v_isReactive') return !t;
        if (s === '__v_isReadonly') return t;
        if (s === '__v_isShallow') return e;
        if (s === '__v_raw' && i === (t ? (e ? Ef : Cl) : e ? wl : bl).get(r)) return r;
        const o = Z(r);
        if (!t && o && ee(qo, s)) return Reflect.get(qo, s, i);
        const a = Reflect.get(r, s, i);
        return (qi(s) ? gl.has(s) : af(s)) || (t || Xe(r, 'get', s), e) ? a : we(a) ? (!o || !Wi(s) ? a.value : a) : ge(a) ? (t ? xl(a) : Ft(a)) : a;
    };
}
const df = yl(),
    hf = yl(!0);
function yl(t = !1) {
    return function (n, r, s, i) {
        let o = n[r];
        if (Sr(o) && we(o) && !we(s)) return !1;
        if (!t && !Sr(s) && (Tl(s) || ((s = re(s)), (o = re(o))), !Z(n) && we(o) && !we(s))) return (o.value = s), !0;
        const a = Z(n) && Wi(r) ? Number(r) < n.length : ee(n, r),
            c = Reflect.set(n, r, s, i);
        return n === re(i) && (a ? Tr(s, o) && Rt(n, 'set', r, s) : Rt(n, 'add', r, s)), c;
    };
}
function _f(t, e) {
    const n = ee(t, e);
    t[e];
    const r = Reflect.deleteProperty(t, e);
    return r && n && Rt(t, 'delete', e, void 0), r;
}
function pf(t, e) {
    const n = Reflect.has(t, e);
    return (!qi(e) || !gl.has(e)) && Xe(t, 'has', e), n;
}
function mf(t) {
    return Xe(t, 'iterate', Z(t) ? 'length' : bn), Reflect.ownKeys(t);
}
const vl = { get: lf, set: df, deleteProperty: _f, has: pf, ownKeys: mf },
    gf = {
        get: uf,
        set(t, e) {
            return !0;
        },
        deleteProperty(t, e) {
            return !0;
        },
    },
    yf = Ee({}, vl, { get: cf, set: hf }),
    Xi = (t) => t,
    Rs = (t) => Reflect.getPrototypeOf(t);
function Kr(t, e, n = !1, r = !1) {
    t = t.__v_raw;
    const s = re(t),
        i = re(e);
    e !== i && !n && Xe(s, 'get', e), !n && Xe(s, 'get', i);
    const { has: o } = Rs(s),
        a = r ? Xi : n ? eo : kr;
    if (o.call(s, e)) return a(t.get(e));
    if (o.call(s, i)) return a(t.get(i));
    t !== s && t.get(e);
}
function Yr(t, e = !1) {
    const n = this.__v_raw,
        r = re(n),
        s = re(t);
    return t !== s && !e && Xe(r, 'has', t), !e && Xe(r, 'has', s), t === s ? n.has(t) : n.has(t) || n.has(s);
}
function Xr(t, e = !1) {
    return (t = t.__v_raw), !e && Xe(re(t), 'iterate', bn), Reflect.get(t, 'size', t);
}
function Wo(t) {
    t = re(t);
    const e = re(this);
    return Rs(e).has.call(e, t) || (e.add(t), Rt(e, 'add', t, t)), this;
}
function Zo(t, e) {
    e = re(e);
    const n = re(this),
        { has: r, get: s } = Rs(n);
    let i = r.call(n, t);
    i || ((t = re(t)), (i = r.call(n, t)));
    const o = s.call(n, t);
    return n.set(t, e), i ? Tr(e, o) && Rt(n, 'set', t, e) : Rt(n, 'add', t, e), this;
}
function Ko(t) {
    const e = re(this),
        { has: n, get: r } = Rs(e);
    let s = n.call(e, t);
    s || ((t = re(t)), (s = n.call(e, t))), r && r.call(e, t);
    const i = e.delete(t);
    return s && Rt(e, 'delete', t, void 0), i;
}
function Yo() {
    const t = re(this),
        e = t.size !== 0,
        n = t.clear();
    return e && Rt(t, 'clear', void 0, void 0), n;
}
function Jr(t, e) {
    return function (r, s) {
        const i = this,
            o = i.__v_raw,
            a = re(o),
            c = e ? Xi : t ? eo : kr;
        return !t && Xe(a, 'iterate', bn), o.forEach((l, u) => r.call(s, c(l), c(u), i));
    };
}
function Qr(t, e, n) {
    return function (...r) {
        const s = this.__v_raw,
            i = re(s),
            o = Nn(i),
            a = t === 'entries' || (t === Symbol.iterator && o),
            c = t === 'keys' && o,
            l = s[t](...r),
            u = n ? Xi : e ? eo : kr;
        return (
            !e && Xe(i, 'iterate', c ? _i : bn),
            {
                next() {
                    const { value: f, done: d } = l.next();
                    return d ? { value: f, done: d } : { value: a ? [u(f[0]), u(f[1])] : u(f), done: d };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function Vt(t) {
    return function (...e) {
        return t === 'delete' ? !1 : this;
    };
}
function vf() {
    const t = {
            get(i) {
                return Kr(this, i);
            },
            get size() {
                return Xr(this);
            },
            has: Yr,
            add: Wo,
            set: Zo,
            delete: Ko,
            clear: Yo,
            forEach: Jr(!1, !1),
        },
        e = {
            get(i) {
                return Kr(this, i, !1, !0);
            },
            get size() {
                return Xr(this);
            },
            has: Yr,
            add: Wo,
            set: Zo,
            delete: Ko,
            clear: Yo,
            forEach: Jr(!1, !0),
        },
        n = {
            get(i) {
                return Kr(this, i, !0);
            },
            get size() {
                return Xr(this, !0);
            },
            has(i) {
                return Yr.call(this, i, !0);
            },
            add: Vt('add'),
            set: Vt('set'),
            delete: Vt('delete'),
            clear: Vt('clear'),
            forEach: Jr(!0, !1),
        },
        r = {
            get(i) {
                return Kr(this, i, !0, !0);
            },
            get size() {
                return Xr(this, !0);
            },
            has(i) {
                return Yr.call(this, i, !0);
            },
            add: Vt('add'),
            set: Vt('set'),
            delete: Vt('delete'),
            clear: Vt('clear'),
            forEach: Jr(!0, !0),
        };
    return (
        ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
            (t[i] = Qr(i, !1, !1)), (n[i] = Qr(i, !0, !1)), (e[i] = Qr(i, !1, !0)), (r[i] = Qr(i, !0, !0));
        }),
        [t, n, e, r]
    );
}
const [bf, wf, Cf, xf] = vf();
function Ji(t, e) {
    const n = e ? (t ? xf : Cf) : t ? wf : bf;
    return (r, s, i) => (s === '__v_isReactive' ? !t : s === '__v_isReadonly' ? t : s === '__v_raw' ? r : Reflect.get(ee(n, s) && s in r ? n : r, s, i));
}
const Tf = { get: Ji(!1, !1) },
    Sf = { get: Ji(!1, !0) },
    kf = { get: Ji(!0, !1) },
    bl = new WeakMap(),
    wl = new WeakMap(),
    Cl = new WeakMap(),
    Ef = new WeakMap();
function Pf(t) {
    switch (t) {
        case 'Object':
        case 'Array':
            return 1;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2;
        default:
            return 0;
    }
}
function Mf(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Pf(Qu(t));
}
function Ft(t) {
    return Sr(t) ? t : Qi(t, !1, vl, Tf, bl);
}
function Of(t) {
    return Qi(t, !1, yf, Sf, wl);
}
function xl(t) {
    return Qi(t, !0, gf, kf, Cl);
}
function Qi(t, e, n, r, s) {
    if (!ge(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
    const i = s.get(t);
    if (i) return i;
    const o = Mf(t);
    if (o === 0) return t;
    const a = new Proxy(t, o === 2 ? r : n);
    return s.set(t, a), a;
}
function Bn(t) {
    return Sr(t) ? Bn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Sr(t) {
    return !!(t && t.__v_isReadonly);
}
function Tl(t) {
    return !!(t && t.__v_isShallow);
}
function Sl(t) {
    return Bn(t) || Sr(t);
}
function re(t) {
    const e = t && t.__v_raw;
    return e ? re(e) : t;
}
function Gi(t) {
    return os(t, '__v_skip', !0), t;
}
const kr = (t) => (ge(t) ? Ft(t) : t),
    eo = (t) => (ge(t) ? xl(t) : t);
function kl(t) {
    Xt && ct && ((t = re(t)), ml(t.dep || (t.dep = Zi())));
}
function El(t, e) {
    (t = re(t)), t.dep && pi(t.dep);
}
function we(t) {
    return !!(t && t.__v_isRef === !0);
}
function ie(t) {
    return Af(t, !1);
}
function Af(t, e) {
    return we(t) ? t : new $f(t, e);
}
class $f {
    constructor(e, n) {
        (this.__v_isShallow = n), (this.dep = void 0), (this.__v_isRef = !0), (this._rawValue = n ? e : re(e)), (this._value = n ? e : kr(e));
    }
    get value() {
        return kl(this), this._value;
    }
    set value(e) {
        (e = this.__v_isShallow ? e : re(e)), Tr(e, this._rawValue) && ((this._rawValue = e), (this._value = this.__v_isShallow ? e : kr(e)), El(this));
    }
}
function Lf(t) {
    return we(t) ? t.value : t;
}
const Rf = {
    get: (t, e, n) => Lf(Reflect.get(t, e, n)),
    set: (t, e, n, r) => {
        const s = t[e];
        return we(s) && !we(n) ? ((s.value = n), !0) : Reflect.set(t, e, n, r);
    },
};
function Pl(t) {
    return Bn(t) ? t : new Proxy(t, Rf);
}
class Ff {
    constructor(e, n, r) {
        (this._object = e), (this._key = n), (this._defaultValue = r), (this.__v_isRef = !0);
    }
    get value() {
        const e = this._object[this._key];
        return e === void 0 ? this._defaultValue : e;
    }
    set value(e) {
        this._object[this._key] = e;
    }
}
function If(t, e, n) {
    const r = t[e];
    return we(r) ? r : new Ff(t, e, n);
}
class Hf {
    constructor(e, n, r, s) {
        (this._setter = n),
            (this.dep = void 0),
            (this.__v_isRef = !0),
            (this._dirty = !0),
            (this.effect = new Ki(e, () => {
                this._dirty || ((this._dirty = !0), El(this));
            })),
            (this.effect.computed = this),
            (this.effect.active = this._cacheable = !s),
            (this.__v_isReadonly = r);
    }
    get value() {
        const e = re(this);
        return kl(e), (e._dirty || !e._cacheable) && ((e._dirty = !1), (e._value = e.effect.run())), e._value;
    }
    set value(e) {
        this._setter(e);
    }
}
function Df(t, e, n = !1) {
    let r, s;
    const i = Y(t);
    return i ? ((r = t), (s = ut)) : ((r = t.get), (s = t.set)), new Hf(r, s, i || !s, n);
}
function Jt(t, e, n, r) {
    let s;
    try {
        s = r ? t(...r) : t();
    } catch (i) {
        ir(i, e, n);
    }
    return s;
}
function ot(t, e, n, r) {
    if (Y(t)) {
        const i = Jt(t, e, n, r);
        return (
            i &&
                cl(i) &&
                i.catch((o) => {
                    ir(o, e, n);
                }),
            i
        );
    }
    const s = [];
    for (let i = 0; i < t.length; i++) s.push(ot(t[i], e, n, r));
    return s;
}
function ir(t, e, n, r = !0) {
    const s = e ? e.vnode : null;
    if (e) {
        let i = e.parent;
        const o = e.proxy,
            a = n;
        for (; i; ) {
            const l = i.ec;
            if (l) {
                for (let u = 0; u < l.length; u++) if (l[u](t, o, a) === !1) return;
            }
            i = i.parent;
        }
        const c = e.appContext.config.errorHandler;
        if (c) {
            Jt(c, null, 10, [t, o, a]);
            return;
        }
    }
    Nf(t, n, s, r);
}
function Nf(t, e, n, r = !0) {
    console.error(t);
}
let as = !1,
    mi = !1;
const Ze = [];
let At = 0;
const pr = [];
let ur = null,
    Ln = 0;
const mr = [];
let Ut = null,
    Rn = 0;
const Ml = Promise.resolve();
let to = null,
    gi = null;
function Ol(t) {
    const e = to || Ml;
    return t ? e.then(this ? t.bind(this) : t) : e;
}
function Bf(t) {
    let e = At + 1,
        n = Ze.length;
    for (; e < n; ) {
        const r = (e + n) >>> 1;
        Er(Ze[r]) < t ? (e = r + 1) : (n = r);
    }
    return e;
}
function no(t) {
    (!Ze.length || !Ze.includes(t, as && t.allowRecurse ? At + 1 : At)) && t !== gi && (t.id == null ? Ze.push(t) : Ze.splice(Bf(t.id), 0, t), Al());
}
function Al() {
    !as && !mi && ((mi = !0), (to = Ml.then(Rl)));
}
function Vf(t) {
    const e = Ze.indexOf(t);
    e > At && Ze.splice(e, 1);
}
function $l(t, e, n, r) {
    Z(t) ? n.push(...t) : (!e || !e.includes(t, t.allowRecurse ? r + 1 : r)) && n.push(t), Al();
}
function jf(t) {
    $l(t, ur, pr, Ln);
}
function Ll(t) {
    $l(t, Ut, mr, Rn);
}
function ro(t, e = null) {
    if (pr.length) {
        for (gi = e, ur = [...new Set(pr)], pr.length = 0, Ln = 0; Ln < ur.length; Ln++) ur[Ln]();
        (ur = null), (Ln = 0), (gi = null), ro(t, e);
    }
}
function ls(t) {
    if (mr.length) {
        const e = [...new Set(mr)];
        if (((mr.length = 0), Ut)) {
            Ut.push(...e);
            return;
        }
        for (Ut = e, Ut.sort((n, r) => Er(n) - Er(r)), Rn = 0; Rn < Ut.length; Rn++) Ut[Rn]();
        (Ut = null), (Rn = 0);
    }
}
const Er = (t) => (t.id == null ? 1 / 0 : t.id);
function Rl(t) {
    (mi = !1), (as = !0), ro(t), Ze.sort((n, r) => Er(n) - Er(r));
    const e = ut;
    try {
        for (At = 0; At < Ze.length; At++) {
            const n = Ze[At];
            n && n.active !== !1 && Jt(n, null, 14);
        }
    } finally {
        (At = 0), (Ze.length = 0), ls(), (as = !1), (to = null), (Ze.length || pr.length || mr.length) && Rl(t);
    }
}
function zf(t, e, ...n) {
    if (t.isUnmounted) return;
    const r = t.vnode.props || ue;
    let s = n;
    const i = e.startsWith('update:'),
        o = i && e.slice(7);
    if (o && o in r) {
        const u = `${o === 'modelValue' ? 'model' : o}Modifiers`,
            { number: f, trim: d } = r[u] || ue;
        d ? (s = n.map((h) => h.trim())) : f && (s = n.map(Wn));
    }
    let a,
        c = r[(a = qs(e))] || r[(a = qs(xt(e)))];
    !c && i && (c = r[(a = qs(nr(e)))]), c && ot(c, t, 6, s);
    const l = r[a + 'Once'];
    if (l) {
        if (!t.emitted) t.emitted = {};
        else if (t.emitted[a]) return;
        (t.emitted[a] = !0), ot(l, t, 6, s);
    }
}
function Fl(t, e, n = !1) {
    const r = e.emitsCache,
        s = r.get(t);
    if (s !== void 0) return s;
    const i = t.emits;
    let o = {},
        a = !1;
    if (!Y(t)) {
        const c = (l) => {
            const u = Fl(l, e, !0);
            u && ((a = !0), Ee(o, u));
        };
        !n && e.mixins.length && e.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
    }
    return !i && !a ? (r.set(t, null), null) : (Z(i) ? i.forEach((c) => (o[c] = null)) : Ee(o, i), r.set(t, o), o);
}
function Fs(t, e) {
    return !t || !jr(e) ? !1 : ((e = e.slice(2).replace(/Once$/, '')), ee(t, e[0].toLowerCase() + e.slice(1)) || ee(t, nr(e)) || ee(t, e));
}
let Fe = null,
    Is = null;
function cs(t) {
    const e = Fe;
    return (Fe = t), (Is = (t && t.type.__scopeId) || null), e;
}
function so(t) {
    Is = t;
}
function io() {
    Is = null;
}
function Oe(t, e = Fe, n) {
    if (!e || t._n) return t;
    const r = (...s) => {
        r._d && ca(-1);
        const i = cs(e),
            o = t(...s);
        return cs(i), r._d && ca(1), o;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function Ws(t) {
    const {
        type: e,
        vnode: n,
        proxy: r,
        withProxy: s,
        props: i,
        propsOptions: [o],
        slots: a,
        attrs: c,
        emit: l,
        render: u,
        renderCache: f,
        data: d,
        setupState: h,
        ctx: y,
        inheritAttrs: m,
    } = t;
    let _, v;
    const w = cs(t);
    try {
        if (n.shapeFlag & 4) {
            const S = s || r;
            (_ = tt(u.call(S, S, f, i, h, d, y))), (v = c);
        } else {
            const S = e;
            (_ = tt(S.length > 1 ? S(i, { attrs: c, slots: a, emit: l }) : S(i, null))), (v = e.props ? c : qf(c));
        }
    } catch (S) {
        (vr.length = 0), ir(S, t, 1), (_ = N(De));
    }
    let C = _;
    if (v && m !== !1) {
        const S = Object.keys(v),
            { shapeFlag: x } = C;
        S.length && x & 7 && (o && S.some(zi) && (v = Wf(v, o)), (C = Sn(C, v)));
    }
    return n.dirs && (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && (C.transition = n.transition), (_ = C), cs(w), _;
}
function Uf(t) {
    let e;
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (Rr(r)) {
            if (r.type !== De || r.children === 'v-if') {
                if (e) return;
                e = r;
            }
        } else return;
    }
    return e;
}
const qf = (t) => {
        let e;
        for (const n in t) (n === 'class' || n === 'style' || jr(n)) && ((e || (e = {}))[n] = t[n]);
        return e;
    },
    Wf = (t, e) => {
        const n = {};
        for (const r in t) (!zi(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
        return n;
    };
function Zf(t, e, n) {
    const { props: r, children: s, component: i } = t,
        { props: o, children: a, patchFlag: c } = e,
        l = i.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? Xo(r, o, l) : !!o;
        if (c & 8) {
            const u = e.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (o[d] !== r[d] && !Fs(l, d)) return !0;
            }
        }
    } else return (s || a) && (!a || !a.$stable) ? !0 : r === o ? !1 : r ? (o ? Xo(r, o, l) : !0) : !!o;
    return !1;
}
function Xo(t, e, n) {
    const r = Object.keys(e);
    if (r.length !== Object.keys(t).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const i = r[s];
        if (e[i] !== t[i] && !Fs(n, i)) return !0;
    }
    return !1;
}
function oo({ vnode: t, parent: e }, n) {
    for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const Kf = (t) => t.__isSuspense,
    Yf = {
        name: 'Suspense',
        __isSuspense: !0,
        process(t, e, n, r, s, i, o, a, c, l) {
            t == null ? Jf(e, n, r, s, i, o, a, c, l) : Qf(t, e, n, r, s, o, a, c, l);
        },
        hydrate: Gf,
        create: ao,
        normalize: ed,
    },
    Xf = Yf;
function Pr(t, e) {
    const n = t.props && t.props[e];
    Y(n) && n();
}
function Jf(t, e, n, r, s, i, o, a, c) {
    const {
            p: l,
            o: { createElement: u },
        } = c,
        f = u('div'),
        d = (t.suspense = ao(t, s, r, e, f, n, i, o, a, c));
    l(null, (d.pendingBranch = t.ssContent), f, null, r, d, i, o),
        d.deps > 0 ? (Pr(t, 'onPending'), Pr(t, 'onFallback'), l(null, t.ssFallback, e, n, r, null, i, o), Vn(d, t.ssFallback)) : d.resolve();
}
function Qf(t, e, n, r, s, i, o, a, { p: c, um: l, o: { createElement: u } }) {
    const f = (e.suspense = t.suspense);
    (f.vnode = e), (e.el = t.el);
    const d = e.ssContent,
        h = e.ssFallback,
        { activeBranch: y, pendingBranch: m, isInFallback: _, isHydrating: v } = f;
    if (m)
        (f.pendingBranch = d),
            bt(d, m)
                ? (c(m, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : _ && (c(y, h, n, r, s, null, i, o, a), Vn(f, h)))
                : (f.pendingId++,
                  v ? ((f.isHydrating = !1), (f.activeBranch = m)) : l(m, s, f),
                  (f.deps = 0),
                  (f.effects.length = 0),
                  (f.hiddenContainer = u('div')),
                  _
                      ? (c(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 ? f.resolve() : (c(y, h, n, r, s, null, i, o, a), Vn(f, h)))
                      : y && bt(d, y)
                      ? (c(y, d, n, r, s, f, i, o, a), f.resolve(!0))
                      : (c(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0 && f.resolve()));
    else if (y && bt(d, y)) c(y, d, n, r, s, f, i, o, a), Vn(f, d);
    else if ((Pr(e, 'onPending'), (f.pendingBranch = d), f.pendingId++, c(null, d, f.hiddenContainer, null, s, f, i, o, a), f.deps <= 0)) f.resolve();
    else {
        const { timeout: w, pendingId: C } = f;
        w > 0
            ? setTimeout(() => {
                  f.pendingId === C && f.fallback(h);
              }, w)
            : w === 0 && f.fallback(h);
    }
}
function ao(t, e, n, r, s, i, o, a, c, l, u = !1) {
    const {
            p: f,
            m: d,
            um: h,
            n: y,
            o: { parentNode: m, remove: _ },
        } = l,
        v = Wn(t.props && t.props.timeout),
        w = {
            vnode: t,
            parent: e,
            parentComponent: n,
            isSVG: o,
            container: r,
            hiddenContainer: s,
            anchor: i,
            deps: 0,
            pendingId: 0,
            timeout: typeof v == 'number' ? v : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !0,
            isHydrating: u,
            isUnmounted: !1,
            effects: [],
            resolve(C = !1) {
                const { vnode: S, activeBranch: x, pendingBranch: k, pendingId: T, effects: P, parentComponent: E, container: H } = w;
                if (w.isHydrating) w.isHydrating = !1;
                else if (!C) {
                    const V = x && k.transition && k.transition.mode === 'out-in';
                    V &&
                        (x.transition.afterLeave = () => {
                            T === w.pendingId && d(k, H, W, 0);
                        });
                    let { anchor: W } = w;
                    x && ((W = y(x)), h(x, E, w, !0)), V || d(k, H, W, 0);
                }
                Vn(w, k), (w.pendingBranch = null), (w.isInFallback = !1);
                let j = w.parent,
                    O = !1;
                for (; j; ) {
                    if (j.pendingBranch) {
                        j.effects.push(...P), (O = !0);
                        break;
                    }
                    j = j.parent;
                }
                O || Ll(P), (w.effects = []), Pr(S, 'onResolve');
            },
            fallback(C) {
                if (!w.pendingBranch) return;
                const { vnode: S, activeBranch: x, parentComponent: k, container: T, isSVG: P } = w;
                Pr(S, 'onFallback');
                const E = y(x),
                    H = () => {
                        !w.isInFallback || (f(null, C, T, E, k, null, P, a, c), Vn(w, C));
                    },
                    j = C.transition && C.transition.mode === 'out-in';
                j && (x.transition.afterLeave = H), (w.isInFallback = !0), h(x, k, null, !0), j || H();
            },
            move(C, S, x) {
                w.activeBranch && d(w.activeBranch, C, S, x), (w.container = C);
            },
            next() {
                return w.activeBranch && y(w.activeBranch);
            },
            registerDep(C, S) {
                const x = !!w.pendingBranch;
                x && w.deps++;
                const k = C.vnode.el;
                C.asyncDep
                    .catch((T) => {
                        ir(T, C, 0);
                    })
                    .then((T) => {
                        if (C.isUnmounted || w.isUnmounted || w.pendingId !== C.suspenseId) return;
                        C.asyncResolved = !0;
                        const { vnode: P } = C;
                        xi(C, T, !1), k && (P.el = k);
                        const E = !k && C.subTree.el;
                        S(C, P, m(k || C.subTree.el), k ? null : y(C.subTree), w, o, c), E && _(E), oo(C, P.el), x && --w.deps === 0 && w.resolve();
                    });
            },
            unmount(C, S) {
                (w.isUnmounted = !0), w.activeBranch && h(w.activeBranch, n, C, S), w.pendingBranch && h(w.pendingBranch, n, C, S);
            },
        };
    return w;
}
function Gf(t, e, n, r, s, i, o, a, c) {
    const l = (e.suspense = ao(e, r, n, t.parentNode, document.createElement('div'), null, s, i, o, a, !0)),
        u = c(t, (l.pendingBranch = e.ssContent), n, l, i, o);
    return l.deps === 0 && l.resolve(), u;
}
function ed(t) {
    const { shapeFlag: e, children: n } = t,
        r = e & 32;
    (t.ssContent = Jo(r ? n.default : n)), (t.ssFallback = r ? Jo(n.fallback) : N(De));
}
function Jo(t) {
    let e;
    if (Y(t)) {
        const n = Lr && t._c;
        n && ((t._d = !1), B()), (t = t()), n && ((t._d = !0), (e = Qt), rc());
    }
    return Z(t) && (t = Uf(t)), (t = tt(t)), e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)), t;
}
function Il(t, e) {
    e && e.pendingBranch ? (Z(t) ? e.effects.push(...t) : e.effects.push(t)) : Ll(t);
}
function Vn(t, e) {
    t.activeBranch = e;
    const { vnode: n, parentComponent: r } = t,
        s = (n.el = e.el);
    r && r.subTree === n && ((r.vnode.el = s), oo(r, s));
}
function td(t, e) {
    if (Te) {
        let n = Te.provides;
        const r = Te.parent && Te.parent.provides;
        r === n && (n = Te.provides = Object.create(r)), (n[t] = e);
    }
}
function Zs(t, e, n = !1) {
    const r = Te || Fe;
    if (r) {
        const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
        if (s && t in s) return s[t];
        if (arguments.length > 1) return n && Y(e) ? e.call(r.proxy) : e;
    }
}
function Qo(t, e) {
    return lo(t, null, e);
}
const Go = {};
function gr(t, e, n) {
    return lo(t, e, n);
}
function lo(t, e, { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = ue) {
    const a = Te;
    let c,
        l = !1,
        u = !1;
    if (
        (we(t)
            ? ((c = () => t.value), (l = Tl(t)))
            : Bn(t)
            ? ((c = () => t), (r = !0))
            : Z(t)
            ? ((u = !0),
              (l = t.some(Bn)),
              (c = () =>
                  t.map((v) => {
                      if (we(v)) return v.value;
                      if (Bn(v)) return yn(v);
                      if (Y(v)) return Jt(v, a, 2);
                  })))
            : Y(t)
            ? e
                ? (c = () => Jt(t, a, 2))
                : (c = () => {
                      if (!(a && a.isUnmounted)) return f && f(), ot(t, a, 3, [d]);
                  })
            : (c = ut),
        e && r)
    ) {
        const v = c;
        c = () => yn(v());
    }
    let f,
        d = (v) => {
            f = _.onStop = () => {
                Jt(v, a, 4);
            };
        };
    if (Yn) return (d = ut), e ? n && ot(e, a, 3, [c(), u ? [] : void 0, d]) : c(), ut;
    let h = u ? [] : Go;
    const y = () => {
        if (!!_.active)
            if (e) {
                const v = _.run();
                (r || l || (u ? v.some((w, C) => Tr(w, h[C])) : Tr(v, h))) && (f && f(), ot(e, a, 3, [v, h === Go ? void 0 : h, d]), (h = v));
            } else _.run();
    };
    y.allowRecurse = !!e;
    let m;
    s === 'sync'
        ? (m = y)
        : s === 'post'
        ? (m = () => Be(y, a && a.suspense))
        : (m = () => {
              !a || a.isMounted ? jf(y) : y();
          });
    const _ = new Ki(c, m);
    return (
        e ? (n ? y() : (h = _.run())) : s === 'post' ? Be(_.run.bind(_), a && a.suspense) : _.run(),
        () => {
            _.stop(), a && a.scope && Ui(a.scope.effects, _);
        }
    );
}
function nd(t, e, n) {
    const r = this.proxy,
        s = Ce(t) ? (t.includes('.') ? Hl(r, t) : () => r[t]) : t.bind(r, r);
    let i;
    Y(e) ? (i = e) : ((i = e.handler), (n = e));
    const o = Te;
    Kn(this);
    const a = lo(s, i.bind(r), n);
    return o ? Kn(o) : wn(), a;
}
function Hl(t, e) {
    const n = e.split('.');
    return () => {
        let r = t;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r;
    };
}
function yn(t, e) {
    if (!ge(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
    if ((e.add(t), we(t))) yn(t.value, e);
    else if (Z(t)) for (let n = 0; n < t.length; n++) yn(t[n], e);
    else if (Os(t) || Nn(t))
        t.forEach((n) => {
            yn(n, e);
        });
    else if (fl(t)) for (const n in t) yn(t[n], e);
    return t;
}
function Dl() {
    const t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() };
    return (
        St(() => {
            t.isMounted = !0;
        }),
        Bt(() => {
            t.isUnmounting = !0;
        }),
        t
    );
}
const Qe = [Function, Array],
    rd = {
        name: 'BaseTransition',
        props: {
            mode: String,
            appear: Boolean,
            persisted: Boolean,
            onBeforeEnter: Qe,
            onEnter: Qe,
            onAfterEnter: Qe,
            onEnterCancelled: Qe,
            onBeforeLeave: Qe,
            onLeave: Qe,
            onAfterLeave: Qe,
            onLeaveCancelled: Qe,
            onBeforeAppear: Qe,
            onAppear: Qe,
            onAfterAppear: Qe,
            onAppearCancelled: Qe,
        },
        setup(t, { slots: e }) {
            const n = qr(),
                r = Dl();
            let s;
            return () => {
                const i = e.default && co(e.default(), !0);
                if (!i || !i.length) return;
                let o = i[0];
                if (i.length > 1) {
                    for (const m of i)
                        if (m.type !== De) {
                            o = m;
                            break;
                        }
                }
                const a = re(t),
                    { mode: c } = a;
                if (r.isLeaving) return Ks(o);
                const l = ea(o);
                if (!l) return Ks(o);
                const u = Mr(l, a, r, n);
                Or(l, u);
                const f = n.subTree,
                    d = f && ea(f);
                let h = !1;
                const { getTransitionKey: y } = l.type;
                if (y) {
                    const m = y();
                    s === void 0 ? (s = m) : m !== s && ((s = m), (h = !0));
                }
                if (d && d.type !== De && (!bt(l, d) || h)) {
                    const m = Mr(d, a, r, n);
                    if ((Or(d, m), c === 'out-in'))
                        return (
                            (r.isLeaving = !0),
                            (m.afterLeave = () => {
                                (r.isLeaving = !1), n.update();
                            }),
                            Ks(o)
                        );
                    c === 'in-out' &&
                        l.type !== De &&
                        (m.delayLeave = (_, v, w) => {
                            const C = Bl(r, d);
                            (C[String(d.key)] = d),
                                (_._leaveCb = () => {
                                    v(), (_._leaveCb = void 0), delete u.delayedLeave;
                                }),
                                (u.delayedLeave = w);
                        });
                }
                return o;
            };
        },
    },
    Nl = rd;
function Bl(t, e) {
    const { leavingVNodes: n } = t;
    let r = n.get(e.type);
    return r || ((r = Object.create(null)), n.set(e.type, r)), r;
}
function Mr(t, e, n, r) {
    const {
            appear: s,
            mode: i,
            persisted: o = !1,
            onBeforeEnter: a,
            onEnter: c,
            onAfterEnter: l,
            onEnterCancelled: u,
            onBeforeLeave: f,
            onLeave: d,
            onAfterLeave: h,
            onLeaveCancelled: y,
            onBeforeAppear: m,
            onAppear: _,
            onAfterAppear: v,
            onAppearCancelled: w,
        } = e,
        C = String(t.key),
        S = Bl(n, t),
        x = (T, P) => {
            T && ot(T, r, 9, P);
        },
        k = {
            mode: i,
            persisted: o,
            beforeEnter(T) {
                let P = a;
                if (!n.isMounted)
                    if (s) P = m || a;
                    else return;
                T._leaveCb && T._leaveCb(!0);
                const E = S[C];
                E && bt(t, E) && E.el._leaveCb && E.el._leaveCb(), x(P, [T]);
            },
            enter(T) {
                let P = c,
                    E = l,
                    H = u;
                if (!n.isMounted)
                    if (s) (P = _ || c), (E = v || l), (H = w || u);
                    else return;
                let j = !1;
                const O = (T._enterCb = (V) => {
                    j || ((j = !0), V ? x(H, [T]) : x(E, [T]), k.delayedLeave && k.delayedLeave(), (T._enterCb = void 0));
                });
                P ? (P(T, O), P.length <= 1 && O()) : O();
            },
            leave(T, P) {
                const E = String(t.key);
                if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return P();
                x(f, [T]);
                let H = !1;
                const j = (T._leaveCb = (O) => {
                    H || ((H = !0), P(), O ? x(y, [T]) : x(h, [T]), (T._leaveCb = void 0), S[E] === t && delete S[E]);
                });
                (S[E] = t), d ? (d(T, j), d.length <= 1 && j()) : j();
            },
            clone(T) {
                return Mr(T, e, n, r);
            },
        };
    return k;
}
function Ks(t) {
    if (zr(t)) return (t = Sn(t)), (t.children = null), t;
}
function ea(t) {
    return zr(t) ? (t.children ? t.children[0] : void 0) : t;
}
function Or(t, e) {
    t.shapeFlag & 6 && t.component
        ? Or(t.component.subTree, e)
        : t.shapeFlag & 128
        ? ((t.ssContent.transition = e.clone(t.ssContent)), (t.ssFallback.transition = e.clone(t.ssFallback)))
        : (t.transition = e);
}
function co(t, e = !1, n) {
    let r = [],
        s = 0;
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === de ? (o.patchFlag & 128 && s++, (r = r.concat(co(o.children, e, a)))) : (e || o.type !== De) && r.push(a != null ? Sn(o, { key: a }) : o);
    }
    if (s > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r;
}
function oe(t) {
    return Y(t) ? { setup: t, name: t.name } : t;
}
const Ar = (t) => !!t.type.__asyncLoader;
function sd(t) {
    Y(t) && (t = { loader: t });
    const { loader: e, loadingComponent: n, errorComponent: r, delay: s = 200, timeout: i, suspensible: o = !0, onError: a } = t;
    let c = null,
        l,
        u = 0;
    const f = () => (u++, (c = null), d()),
        d = () => {
            let h;
            return (
                c ||
                (h = c =
                    e()
                        .catch((y) => {
                            if (((y = y instanceof Error ? y : new Error(String(y))), a))
                                return new Promise((m, _) => {
                                    a(
                                        y,
                                        () => m(f()),
                                        () => _(y),
                                        u + 1
                                    );
                                });
                            throw y;
                        })
                        .then((y) => (h !== c && c ? c : (y && (y.__esModule || y[Symbol.toStringTag] === 'Module') && (y = y.default), (l = y), y))))
            );
        };
    return oe({
        name: 'AsyncComponentWrapper',
        __asyncLoader: d,
        get __asyncResolved() {
            return l;
        },
        setup() {
            const h = Te;
            if (l) return () => Ys(l, h);
            const y = (w) => {
                (c = null), ir(w, h, 13, !r);
            };
            if ((o && h.suspense) || Yn)
                return d()
                    .then((w) => () => Ys(w, h))
                    .catch((w) => (y(w), () => (r ? N(r, { error: w }) : null)));
            const m = ie(!1),
                _ = ie(),
                v = ie(!!s);
            return (
                s &&
                    setTimeout(() => {
                        v.value = !1;
                    }, s),
                i != null &&
                    setTimeout(() => {
                        if (!m.value && !_.value) {
                            const w = new Error(`Async component timed out after ${i}ms.`);
                            y(w), (_.value = w);
                        }
                    }, i),
                d()
                    .then(() => {
                        (m.value = !0), h.parent && zr(h.parent.vnode) && no(h.parent.update);
                    })
                    .catch((w) => {
                        y(w), (_.value = w);
                    }),
                () => {
                    if (m.value && l) return Ys(l, h);
                    if (_.value && r) return N(r, { error: _.value });
                    if (n && !v.value) return N(n);
                }
            );
        },
    });
}
function Ys(t, { vnode: { ref: e, props: n, children: r } }) {
    const s = N(t, n, r);
    return (s.ref = e), s;
}
const zr = (t) => t.type.__isKeepAlive;
function id(t, e) {
    Vl(t, 'a', e);
}
function od(t, e) {
    Vl(t, 'da', e);
}
function Vl(t, e, n = Te) {
    const r =
        t.__wdc ||
        (t.__wdc = () => {
            let s = n;
            for (; s; ) {
                if (s.isDeactivated) return;
                s = s.parent;
            }
            return t();
        });
    if ((Hs(e, r, n), n)) {
        let s = n.parent;
        for (; s && s.parent; ) zr(s.parent.vnode) && ad(r, e, n, s), (s = s.parent);
    }
}
function ad(t, e, n, r) {
    const s = Hs(e, t, r, !0);
    zl(() => {
        Ui(r[e], s);
    }, n);
}
function Hs(t, e, n = Te, r = !1) {
    if (n) {
        const s = n[t] || (n[t] = []),
            i =
                e.__weh ||
                (e.__weh = (...o) => {
                    if (n.isUnmounted) return;
                    rr(), Kn(n);
                    const a = ot(e, n, t, o);
                    return wn(), sr(), a;
                });
        return r ? s.unshift(i) : s.push(i), i;
    }
}
const Nt =
        (t) =>
        (e, n = Te) =>
            (!Yn || t === 'sp') && Hs(t, e, n),
    ld = Nt('bm'),
    St = Nt('m'),
    cd = Nt('bu'),
    jl = Nt('u'),
    Bt = Nt('bum'),
    zl = Nt('um'),
    ud = Nt('sp'),
    fd = Nt('rtg'),
    dd = Nt('rtc');
function yi(t, e = Te) {
    Hs('ec', t, e);
}
let vi = !0;
function hd(t) {
    const e = ql(t),
        n = t.proxy,
        r = t.ctx;
    (vi = !1), e.beforeCreate && ta(e.beforeCreate, t, 'bc');
    const {
        data: s,
        computed: i,
        methods: o,
        watch: a,
        provide: c,
        inject: l,
        created: u,
        beforeMount: f,
        mounted: d,
        beforeUpdate: h,
        updated: y,
        activated: m,
        deactivated: _,
        beforeDestroy: v,
        beforeUnmount: w,
        destroyed: C,
        unmounted: S,
        render: x,
        renderTracked: k,
        renderTriggered: T,
        errorCaptured: P,
        serverPrefetch: E,
        expose: H,
        inheritAttrs: j,
        components: O,
        directives: V,
        filters: W,
    } = e;
    if ((l && _d(l, r, null, t.appContext.config.unwrapInjectedRef), o))
        for (const Q in o) {
            const te = o[Q];
            Y(te) && (r[Q] = te.bind(n));
        }
    if (s) {
        const Q = s.call(n, n);
        ge(Q) && (t.data = Ft(Q));
    }
    if (((vi = !0), i))
        for (const Q in i) {
            const te = i[Q],
                Me = Y(te) ? te.bind(n, n) : Y(te.get) ? te.get.bind(n, n) : ut,
                kt = !Y(te) && Y(te.set) ? te.set.bind(n) : ut,
                Ue = It({ get: Me, set: kt });
            Object.defineProperty(r, Q, { enumerable: !0, configurable: !0, get: () => Ue.value, set: (Et) => (Ue.value = Et) });
        }
    if (a) for (const Q in a) Ul(a[Q], r, n, Q);
    if (c) {
        const Q = Y(c) ? c.call(n) : c;
        Reflect.ownKeys(Q).forEach((te) => {
            td(te, Q[te]);
        });
    }
    u && ta(u, t, 'c');
    function J(Q, te) {
        Z(te) ? te.forEach((Me) => Q(Me.bind(n))) : te && Q(te.bind(n));
    }
    if ((J(ld, f), J(St, d), J(cd, h), J(jl, y), J(id, m), J(od, _), J(yi, P), J(dd, k), J(fd, T), J(Bt, w), J(zl, S), J(ud, E), Z(H)))
        if (H.length) {
            const Q = t.exposed || (t.exposed = {});
            H.forEach((te) => {
                Object.defineProperty(Q, te, { get: () => n[te], set: (Me) => (n[te] = Me) });
            });
        } else t.exposed || (t.exposed = {});
    x && t.render === ut && (t.render = x), j != null && (t.inheritAttrs = j), O && (t.components = O), V && (t.directives = V);
}
function _d(t, e, n = ut, r = !1) {
    Z(t) && (t = bi(t));
    for (const s in t) {
        const i = t[s];
        let o;
        ge(i) ? ('default' in i ? (o = Zs(i.from || s, i.default, !0)) : (o = Zs(i.from || s))) : (o = Zs(i)),
            we(o) && r ? Object.defineProperty(e, s, { enumerable: !0, configurable: !0, get: () => o.value, set: (a) => (o.value = a) }) : (e[s] = o);
    }
}
function ta(t, e, n) {
    ot(Z(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Ul(t, e, n, r) {
    const s = r.includes('.') ? Hl(n, r) : () => n[r];
    if (Ce(t)) {
        const i = e[t];
        Y(i) && gr(s, i);
    } else if (Y(t)) gr(s, t.bind(n));
    else if (ge(t))
        if (Z(t)) t.forEach((i) => Ul(i, e, n, r));
        else {
            const i = Y(t.handler) ? t.handler.bind(n) : e[t.handler];
            Y(i) && gr(s, i, t);
        }
}
function ql(t) {
    const e = t.type,
        { mixins: n, extends: r } = e,
        {
            mixins: s,
            optionsCache: i,
            config: { optionMergeStrategies: o },
        } = t.appContext,
        a = i.get(e);
    let c;
    return a ? (c = a) : !s.length && !n && !r ? (c = e) : ((c = {}), s.length && s.forEach((l) => us(c, l, o, !0)), us(c, e, o)), i.set(e, c), c;
}
function us(t, e, n, r = !1) {
    const { mixins: s, extends: i } = e;
    i && us(t, i, n, !0), s && s.forEach((o) => us(t, o, n, !0));
    for (const o in e)
        if (!(r && o === 'expose')) {
            const a = pd[o] || (n && n[o]);
            t[o] = a ? a(t[o], e[o]) : e[o];
        }
    return t;
}
const pd = {
    data: na,
    props: dn,
    emits: dn,
    methods: dn,
    computed: dn,
    beforeCreate: He,
    created: He,
    beforeMount: He,
    mounted: He,
    beforeUpdate: He,
    updated: He,
    beforeDestroy: He,
    beforeUnmount: He,
    destroyed: He,
    unmounted: He,
    activated: He,
    deactivated: He,
    errorCaptured: He,
    serverPrefetch: He,
    components: dn,
    directives: dn,
    watch: gd,
    provide: na,
    inject: md,
};
function na(t, e) {
    return e
        ? t
            ? function () {
                  return Ee(Y(t) ? t.call(this, this) : t, Y(e) ? e.call(this, this) : e);
              }
            : e
        : t;
}
function md(t, e) {
    return dn(bi(t), bi(e));
}
function bi(t) {
    if (Z(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
        return e;
    }
    return t;
}
function He(t, e) {
    return t ? [...new Set([].concat(t, e))] : e;
}
function dn(t, e) {
    return t ? Ee(Ee(Object.create(null), t), e) : e;
}
function gd(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = Ee(Object.create(null), t);
    for (const r in e) n[r] = He(t[r], e[r]);
    return n;
}
function yd(t, e, n, r = !1) {
    const s = {},
        i = {};
    os(i, Ds, 1), (t.propsDefaults = Object.create(null)), Wl(t, e, s, i);
    for (const o in t.propsOptions[0]) o in s || (s[o] = void 0);
    n ? (t.props = r ? s : Of(s)) : t.type.props ? (t.props = s) : (t.props = i), (t.attrs = i);
}
function vd(t, e, n, r) {
    const {
            props: s,
            attrs: i,
            vnode: { patchFlag: o },
        } = t,
        a = re(s),
        [c] = t.propsOptions;
    let l = !1;
    if ((r || o > 0) && !(o & 16)) {
        if (o & 8) {
            const u = t.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (Fs(t.emitsOptions, d)) continue;
                const h = e[d];
                if (c)
                    if (ee(i, d)) h !== i[d] && ((i[d] = h), (l = !0));
                    else {
                        const y = xt(d);
                        s[y] = wi(c, a, y, h, t, !1);
                    }
                else h !== i[d] && ((i[d] = h), (l = !0));
            }
        }
    } else {
        Wl(t, e, s, i) && (l = !0);
        let u;
        for (const f in a)
            (!e || (!ee(e, f) && ((u = nr(f)) === f || !ee(e, u)))) &&
                (c ? n && (n[f] !== void 0 || n[u] !== void 0) && (s[f] = wi(c, a, f, void 0, t, !0)) : delete s[f]);
        if (i !== a) for (const f in i) (!e || (!ee(e, f) && !0)) && (delete i[f], (l = !0));
    }
    l && Rt(t, 'set', '$attrs');
}
function Wl(t, e, n, r) {
    const [s, i] = t.propsOptions;
    let o = !1,
        a;
    if (e)
        for (let c in e) {
            if (_r(c)) continue;
            const l = e[c];
            let u;
            s && ee(s, (u = xt(c)))
                ? !i || !i.includes(u)
                    ? (n[u] = l)
                    : ((a || (a = {}))[u] = l)
                : Fs(t.emitsOptions, c) || ((!(c in r) || l !== r[c]) && ((r[c] = l), (o = !0)));
        }
    if (i) {
        const c = re(n),
            l = a || ue;
        for (let u = 0; u < i.length; u++) {
            const f = i[u];
            n[f] = wi(s, c, f, l[f], t, !ee(l, f));
        }
    }
    return o;
}
function wi(t, e, n, r, s, i) {
    const o = t[n];
    if (o != null) {
        const a = ee(o, 'default');
        if (a && r === void 0) {
            const c = o.default;
            if (o.type !== Function && Y(c)) {
                const { propsDefaults: l } = s;
                n in l ? (r = l[n]) : (Kn(s), (r = l[n] = c.call(null, e)), wn());
            } else r = c;
        }
        o[0] && (i && !a ? (r = !1) : o[1] && (r === '' || r === nr(n)) && (r = !0));
    }
    return r;
}
function Zl(t, e, n = !1) {
    const r = e.propsCache,
        s = r.get(t);
    if (s) return s;
    const i = t.props,
        o = {},
        a = [];
    let c = !1;
    if (!Y(t)) {
        const u = (f) => {
            c = !0;
            const [d, h] = Zl(f, e, !0);
            Ee(o, d), h && a.push(...h);
        };
        !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
    }
    if (!i && !c) return r.set(t, Dn), Dn;
    if (Z(i))
        for (let u = 0; u < i.length; u++) {
            const f = xt(i[u]);
            ra(f) && (o[f] = ue);
        }
    else if (i)
        for (const u in i) {
            const f = xt(u);
            if (ra(f)) {
                const d = i[u],
                    h = (o[f] = Z(d) || Y(d) ? { type: d } : d);
                if (h) {
                    const y = oa(Boolean, h.type),
                        m = oa(String, h.type);
                    (h[0] = y > -1), (h[1] = m < 0 || y < m), (y > -1 || ee(h, 'default')) && a.push(f);
                }
            }
        }
    const l = [o, a];
    return r.set(t, l), l;
}
function ra(t) {
    return t[0] !== '$';
}
function sa(t) {
    const e = t && t.toString().match(/^\s*function (\w+)/);
    return e ? e[1] : t === null ? 'null' : '';
}
function ia(t, e) {
    return sa(t) === sa(e);
}
function oa(t, e) {
    return Z(e) ? e.findIndex((n) => ia(n, t)) : Y(e) && ia(e, t) ? 0 : -1;
}
const Kl = (t) => t[0] === '_' || t === '$stable',
    uo = (t) => (Z(t) ? t.map(tt) : [tt(t)]),
    bd = (t, e, n) => {
        const r = Oe((...s) => uo(e(...s)), n);
        return (r._c = !1), r;
    },
    Yl = (t, e, n) => {
        const r = t._ctx;
        for (const s in t) {
            if (Kl(s)) continue;
            const i = t[s];
            if (Y(i)) e[s] = bd(s, i, r);
            else if (i != null) {
                const o = uo(i);
                e[s] = () => o;
            }
        }
    },
    Xl = (t, e) => {
        const n = uo(e);
        t.slots.default = () => n;
    },
    wd = (t, e) => {
        if (t.vnode.shapeFlag & 32) {
            const n = e._;
            n ? ((t.slots = re(e)), os(e, '_', n)) : Yl(e, (t.slots = {}));
        } else (t.slots = {}), e && Xl(t, e);
        os(t.slots, Ds, 1);
    },
    Cd = (t, e, n) => {
        const { vnode: r, slots: s } = t;
        let i = !0,
            o = ue;
        if (r.shapeFlag & 32) {
            const a = e._;
            a ? (n && a === 1 ? (i = !1) : (Ee(s, e), !n && a === 1 && delete s._)) : ((i = !e.$stable), Yl(e, s)), (o = e);
        } else e && (Xl(t, e), (o = { default: 1 }));
        if (i) for (const a in s) !Kl(a) && !(a in o) && delete s[a];
    };
function aa(t, e) {
    const n = Fe;
    if (n === null) return t;
    const r = Ns(n) || n.proxy,
        s = t.dirs || (t.dirs = []);
    for (let i = 0; i < e.length; i++) {
        let [o, a, c, l = ue] = e[i];
        Y(o) && (o = { mounted: o, updated: o }), o.deep && yn(a), s.push({ dir: o, instance: r, value: a, oldValue: void 0, arg: c, modifiers: l });
    }
    return t;
}
function vt(t, e, n, r) {
    const s = t.dirs,
        i = e && e.dirs;
    for (let o = 0; o < s.length; o++) {
        const a = s[o];
        i && (a.oldValue = i[o].value);
        let c = a.dir[r];
        c && (rr(), ot(c, n, 8, [t.el, a, t, e]), sr());
    }
}
function Jl() {
    return {
        app: null,
        config: {
            isNativeTag: Yu,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let xd = 0;
function Td(t, e) {
    return function (r, s = null) {
        Y(r) || (r = Object.assign({}, r)), s != null && !ge(s) && (s = null);
        const i = Jl(),
            o = new Set();
        let a = !1;
        const c = (i.app = {
            _uid: xd++,
            _component: r,
            _props: s,
            _container: null,
            _context: i,
            _instance: null,
            version: jd,
            get config() {
                return i.config;
            },
            set config(l) {},
            use(l, ...u) {
                return o.has(l) || (l && Y(l.install) ? (o.add(l), l.install(c, ...u)) : Y(l) && (o.add(l), l(c, ...u))), c;
            },
            mixin(l) {
                return i.mixins.includes(l) || i.mixins.push(l), c;
            },
            component(l, u) {
                return u ? ((i.components[l] = u), c) : i.components[l];
            },
            directive(l, u) {
                return u ? ((i.directives[l] = u), c) : i.directives[l];
            },
            mount(l, u, f) {
                if (!a) {
                    const d = N(r, s);
                    return (
                        (d.appContext = i),
                        u && e ? e(d, l) : t(d, l, f),
                        (a = !0),
                        (c._container = l),
                        (l.__vue_app__ = c),
                        Ns(d.component) || d.component.proxy
                    );
                }
            },
            unmount() {
                a && (t(null, c._container), delete c._container.__vue_app__);
            },
            provide(l, u) {
                return (i.provides[l] = u), c;
            },
        });
        return c;
    };
}
function fs(t, e, n, r, s = !1) {
    if (Z(t)) {
        t.forEach((d, h) => fs(d, e && (Z(e) ? e[h] : e), n, r, s));
        return;
    }
    if (Ar(r) && !s) return;
    const i = r.shapeFlag & 4 ? Ns(r.component) || r.component.proxy : r.el,
        o = s ? null : i,
        { i: a, r: c } = t,
        l = e && e.r,
        u = a.refs === ue ? (a.refs = {}) : a.refs,
        f = a.setupState;
    if ((l != null && l !== c && (Ce(l) ? ((u[l] = null), ee(f, l) && (f[l] = null)) : we(l) && (l.value = null)), Y(c))) Jt(c, a, 12, [o, u]);
    else {
        const d = Ce(c),
            h = we(c);
        if (d || h) {
            const y = () => {
                if (t.f) {
                    const m = d ? u[c] : c.value;
                    s
                        ? Z(m) && Ui(m, i)
                        : Z(m)
                        ? m.includes(i) || m.push(i)
                        : d
                        ? ((u[c] = [i]), ee(f, c) && (f[c] = u[c]))
                        : ((c.value = [i]), t.k && (u[t.k] = c.value));
                } else d ? ((u[c] = o), ee(f, c) && (f[c] = o)) : we(c) && ((c.value = o), t.k && (u[t.k] = o));
            };
            o ? ((y.id = -1), Be(y, n)) : y();
        }
    }
}
let jt = !1;
const Gr = (t) => /svg/.test(t.namespaceURI) && t.tagName !== 'foreignObject',
    Xs = (t) => t.nodeType === 8;
function Sd(t) {
    const {
            mt: e,
            p: n,
            o: { patchProp: r, nextSibling: s, parentNode: i, remove: o, insert: a, createComment: c },
        } = t,
        l = (_, v) => {
            if (!v.hasChildNodes()) {
                n(null, _, v), ls();
                return;
            }
            (jt = !1), u(v.firstChild, _, null, null, null), ls(), jt && console.error('Hydration completed but contains mismatches.');
        },
        u = (_, v, w, C, S, x = !1) => {
            const k = Xs(_) && _.data === '[',
                T = () => y(_, v, w, C, S, k),
                { type: P, ref: E, shapeFlag: H } = v,
                j = _.nodeType;
            v.el = _;
            let O = null;
            switch (P) {
                case $r:
                    j !== 3 ? (O = T()) : (_.data !== v.children && ((jt = !0), (_.data = v.children)), (O = s(_)));
                    break;
                case De:
                    j !== 8 || k ? (O = T()) : (O = s(_));
                    break;
                case yr:
                    if (j !== 1) O = T();
                    else {
                        O = _;
                        const V = !v.children.length;
                        for (let W = 0; W < v.staticCount; W++) V && (v.children += O.outerHTML), W === v.staticCount - 1 && (v.anchor = O), (O = s(O));
                        return O;
                    }
                    break;
                case de:
                    k ? (O = h(_, v, w, C, S, x)) : (O = T());
                    break;
                default:
                    if (H & 1) j !== 1 || v.type.toLowerCase() !== _.tagName.toLowerCase() ? (O = T()) : (O = f(_, v, w, C, S, x));
                    else if (H & 6) {
                        v.slotScopeIds = S;
                        const V = i(_);
                        if ((e(v, V, null, w, C, Gr(V), x), (O = k ? m(_) : s(_)), Ar(v))) {
                            let W;
                            k ? ((W = N(de)), (W.anchor = O ? O.previousSibling : V.lastChild)) : (W = _.nodeType === 3 ? ve('') : N('div')),
                                (W.el = _),
                                (v.component.subTree = W);
                        }
                    } else
                        H & 64
                            ? j !== 8
                                ? (O = T())
                                : (O = v.type.hydrate(_, v, w, C, S, x, t, d))
                            : H & 128 && (O = v.type.hydrate(_, v, w, C, Gr(i(_)), S, x, t, u));
            }
            return E != null && fs(E, null, C, v), O;
        },
        f = (_, v, w, C, S, x) => {
            x = x || !!v.dynamicChildren;
            const { type: k, props: T, patchFlag: P, shapeFlag: E, dirs: H } = v,
                j = (k === 'input' && H) || k === 'option';
            if (j || P !== -1) {
                if ((H && vt(v, null, w, 'created'), T))
                    if (j || !x || P & 48) for (const V in T) ((j && V.endsWith('value')) || (jr(V) && !_r(V))) && r(_, V, null, T[V], !1, void 0, w);
                    else T.onClick && r(_, 'onClick', null, T.onClick, !1, void 0, w);
                let O;
                if (
                    ((O = T && T.onVnodeBeforeMount) && Ge(O, w, v),
                    H && vt(v, null, w, 'beforeMount'),
                    ((O = T && T.onVnodeMounted) || H) &&
                        Il(() => {
                            O && Ge(O, w, v), H && vt(v, null, w, 'mounted');
                        }, C),
                    E & 16 && !(T && (T.innerHTML || T.textContent)))
                ) {
                    let V = d(_.firstChild, v, _, w, C, S, x);
                    for (; V; ) {
                        jt = !0;
                        const W = V;
                        (V = V.nextSibling), o(W);
                    }
                } else E & 8 && _.textContent !== v.children && ((jt = !0), (_.textContent = v.children));
            }
            return _.nextSibling;
        },
        d = (_, v, w, C, S, x, k) => {
            k = k || !!v.dynamicChildren;
            const T = v.children,
                P = T.length;
            for (let E = 0; E < P; E++) {
                const H = k ? T[E] : (T[E] = tt(T[E]));
                if (_) _ = u(_, H, C, S, x, k);
                else {
                    if (H.type === $r && !H.children) continue;
                    (jt = !0), n(null, H, w, null, C, S, Gr(w), x);
                }
            }
            return _;
        },
        h = (_, v, w, C, S, x) => {
            const { slotScopeIds: k } = v;
            k && (S = S ? S.concat(k) : k);
            const T = i(_),
                P = d(s(_), v, T, w, C, S, x);
            return P && Xs(P) && P.data === ']' ? s((v.anchor = P)) : ((jt = !0), a((v.anchor = c(']')), T, P), P);
        },
        y = (_, v, w, C, S, x) => {
            if (((jt = !0), (v.el = null), x)) {
                const P = m(_);
                for (;;) {
                    const E = s(_);
                    if (E && E !== P) o(E);
                    else break;
                }
            }
            const k = s(_),
                T = i(_);
            return o(_), n(null, v, T, k, w, C, Gr(T), S), k;
        },
        m = (_) => {
            let v = 0;
            for (; _; )
                if (((_ = s(_)), _ && Xs(_) && (_.data === '[' && v++, _.data === ']'))) {
                    if (v === 0) return s(_);
                    v--;
                }
            return _;
        };
    return [l, u];
}
const Be = Il;
function kd(t) {
    return Ql(t);
}
function Ed(t) {
    return Ql(t, Sd);
}
function Ql(t, e) {
    const n = tf();
    n.__VUE__ = !0;
    const {
            insert: r,
            remove: s,
            patchProp: i,
            createElement: o,
            createText: a,
            createComment: c,
            setText: l,
            setElementText: u,
            parentNode: f,
            nextSibling: d,
            setScopeId: h = ut,
            cloneNode: y,
            insertStaticContent: m,
        } = t,
        _ = (g, b, M, $ = null, A = null, F = null, D = !1, R = null, I = !!b.dynamicChildren) => {
            if (g === b) return;
            g && !bt(g, b) && (($ = Zr(g)), Se(g, A, F, !0), (g = null)), b.patchFlag === -2 && ((I = !1), (b.dynamicChildren = null));
            const { type: L, ref: U, shapeFlag: z } = b;
            switch (L) {
                case $r:
                    v(g, b, M, $);
                    break;
                case De:
                    w(g, b, M, $);
                    break;
                case yr:
                    g == null && C(b, M, $, D);
                    break;
                case de:
                    V(g, b, M, $, A, F, D, R, I);
                    break;
                default:
                    z & 1
                        ? k(g, b, M, $, A, F, D, R, I)
                        : z & 6
                        ? W(g, b, M, $, A, F, D, R, I)
                        : (z & 64 || z & 128) && L.process(g, b, M, $, A, F, D, R, I, On);
            }
            U != null && A && fs(U, g && g.ref, F, b || g, !b);
        },
        v = (g, b, M, $) => {
            if (g == null) r((b.el = a(b.children)), M, $);
            else {
                const A = (b.el = g.el);
                b.children !== g.children && l(A, b.children);
            }
        },
        w = (g, b, M, $) => {
            g == null ? r((b.el = c(b.children || '')), M, $) : (b.el = g.el);
        },
        C = (g, b, M, $) => {
            [g.el, g.anchor] = m(g.children, b, M, $, g.el, g.anchor);
        },
        S = ({ el: g, anchor: b }, M, $) => {
            let A;
            for (; g && g !== b; ) (A = d(g)), r(g, M, $), (g = A);
            r(b, M, $);
        },
        x = ({ el: g, anchor: b }) => {
            let M;
            for (; g && g !== b; ) (M = d(g)), s(g), (g = M);
            s(b);
        },
        k = (g, b, M, $, A, F, D, R, I) => {
            (D = D || b.type === 'svg'), g == null ? T(b, M, $, A, F, D, R, I) : H(g, b, A, F, D, R, I);
        },
        T = (g, b, M, $, A, F, D, R) => {
            let I, L;
            const { type: U, props: z, shapeFlag: q, transition: X, patchFlag: ne, dirs: _e } = g;
            if (g.el && y !== void 0 && ne === -1) I = g.el = y(g.el);
            else {
                if (
                    ((I = g.el = o(g.type, F, z && z.is, z)),
                    q & 8 ? u(I, g.children) : q & 16 && E(g.children, I, null, $, A, F && U !== 'foreignObject', D, R),
                    _e && vt(g, null, $, 'created'),
                    z)
                ) {
                    for (const he in z) he !== 'value' && !_r(he) && i(I, he, null, z[he], F, g.children, $, A, Pt);
                    'value' in z && i(I, 'value', null, z.value), (L = z.onVnodeBeforeMount) && Ge(L, $, g);
                }
                P(I, g, g.scopeId, D, $);
            }
            _e && vt(g, null, $, 'beforeMount');
            const le = (!A || (A && !A.pendingBranch)) && X && !X.persisted;
            le && X.beforeEnter(I),
                r(I, b, M),
                ((L = z && z.onVnodeMounted) || le || _e) &&
                    Be(() => {
                        L && Ge(L, $, g), le && X.enter(I), _e && vt(g, null, $, 'mounted');
                    }, A);
        },
        P = (g, b, M, $, A) => {
            if ((M && h(g, M), $)) for (let F = 0; F < $.length; F++) h(g, $[F]);
            if (A) {
                let F = A.subTree;
                if (b === F) {
                    const D = A.vnode;
                    P(g, D, D.scopeId, D.slotScopeIds, A.parent);
                }
            }
        },
        E = (g, b, M, $, A, F, D, R, I = 0) => {
            for (let L = I; L < g.length; L++) {
                const U = (g[L] = R ? qt(g[L]) : tt(g[L]));
                _(null, U, b, M, $, A, F, D, R);
            }
        },
        H = (g, b, M, $, A, F, D) => {
            const R = (b.el = g.el);
            let { patchFlag: I, dynamicChildren: L, dirs: U } = b;
            I |= g.patchFlag & 16;
            const z = g.props || ue,
                q = b.props || ue;
            let X;
            M && ln(M, !1), (X = q.onVnodeBeforeUpdate) && Ge(X, M, b, g), U && vt(b, g, M, 'beforeUpdate'), M && ln(M, !0);
            const ne = A && b.type !== 'foreignObject';
            if ((L ? j(g.dynamicChildren, L, R, M, $, ne, F) : D || Me(g, b, R, null, M, $, ne, F, !1), I > 0)) {
                if (I & 16) O(R, b, z, q, M, $, A);
                else if ((I & 2 && z.class !== q.class && i(R, 'class', null, q.class, A), I & 4 && i(R, 'style', z.style, q.style, A), I & 8)) {
                    const _e = b.dynamicProps;
                    for (let le = 0; le < _e.length; le++) {
                        const he = _e[le],
                            lt = z[he],
                            An = q[he];
                        (An !== lt || he === 'value') && i(R, he, lt, An, A, g.children, M, $, Pt);
                    }
                }
                I & 1 && g.children !== b.children && u(R, b.children);
            } else !D && L == null && O(R, b, z, q, M, $, A);
            ((X = q.onVnodeUpdated) || U) &&
                Be(() => {
                    X && Ge(X, M, b, g), U && vt(b, g, M, 'updated');
                }, $);
        },
        j = (g, b, M, $, A, F, D) => {
            for (let R = 0; R < b.length; R++) {
                const I = g[R],
                    L = b[R],
                    U = I.el && (I.type === de || !bt(I, L) || I.shapeFlag & 70) ? f(I.el) : M;
                _(I, L, U, null, $, A, F, D, !0);
            }
        },
        O = (g, b, M, $, A, F, D) => {
            if (M !== $) {
                for (const R in $) {
                    if (_r(R)) continue;
                    const I = $[R],
                        L = M[R];
                    I !== L && R !== 'value' && i(g, R, L, I, D, b.children, A, F, Pt);
                }
                if (M !== ue) for (const R in M) !_r(R) && !(R in $) && i(g, R, M[R], null, D, b.children, A, F, Pt);
                'value' in $ && i(g, 'value', M.value, $.value);
            }
        },
        V = (g, b, M, $, A, F, D, R, I) => {
            const L = (b.el = g ? g.el : a('')),
                U = (b.anchor = g ? g.anchor : a(''));
            let { patchFlag: z, dynamicChildren: q, slotScopeIds: X } = b;
            X && (R = R ? R.concat(X) : X),
                g == null
                    ? (r(L, M, $), r(U, M, $), E(b.children, M, U, A, F, D, R, I))
                    : z > 0 && z & 64 && q && g.dynamicChildren
                    ? (j(g.dynamicChildren, q, M, A, F, D, R), (b.key != null || (A && b === A.subTree)) && Gl(g, b, !0))
                    : Me(g, b, M, U, A, F, D, R, I);
        },
        W = (g, b, M, $, A, F, D, R, I) => {
            (b.slotScopeIds = R), g == null ? (b.shapeFlag & 512 ? A.ctx.activate(b, M, $, D, I) : ae(b, M, $, A, F, D, I)) : J(g, b, I);
        },
        ae = (g, b, M, $, A, F, D) => {
            const R = (g.component = Fd(g, $, A));
            if ((zr(g) && (R.ctx.renderer = On), Id(R), R.asyncDep)) {
                if ((A && A.registerDep(R, Q), !g.el)) {
                    const I = (R.subTree = N(De));
                    w(null, I, b, M);
                }
                return;
            }
            Q(R, g, b, M, A, F, D);
        },
        J = (g, b, M) => {
            const $ = (b.component = g.component);
            if (Zf(g, b, M))
                if ($.asyncDep && !$.asyncResolved) {
                    te($, b, M);
                    return;
                } else ($.next = b), Vf($.update), $.update();
            else (b.component = g.component), (b.el = g.el), ($.vnode = b);
        },
        Q = (g, b, M, $, A, F, D) => {
            const R = () => {
                    if (g.isMounted) {
                        let { next: U, bu: z, u: q, parent: X, vnode: ne } = g,
                            _e = U,
                            le;
                        ln(g, !1),
                            U ? ((U.el = ne.el), te(g, U, D)) : (U = ne),
                            z && rs(z),
                            (le = U.props && U.props.onVnodeBeforeUpdate) && Ge(le, X, U, ne),
                            ln(g, !0);
                        const he = Ws(g),
                            lt = g.subTree;
                        (g.subTree = he),
                            _(lt, he, f(lt.el), Zr(lt), g, A, F),
                            (U.el = he.el),
                            _e === null && oo(g, he.el),
                            q && Be(q, A),
                            (le = U.props && U.props.onVnodeUpdated) && Be(() => Ge(le, X, U, ne), A);
                    } else {
                        let U;
                        const { el: z, props: q } = b,
                            { bm: X, m: ne, parent: _e } = g,
                            le = Ar(b);
                        if ((ln(g, !1), X && rs(X), !le && (U = q && q.onVnodeBeforeMount) && Ge(U, _e, b), ln(g, !0), z && Us)) {
                            const he = () => {
                                (g.subTree = Ws(g)), Us(z, g.subTree, g, A, null);
                            };
                            le ? b.type.__asyncLoader().then(() => !g.isUnmounted && he()) : he();
                        } else {
                            const he = (g.subTree = Ws(g));
                            _(null, he, M, $, g, A, F), (b.el = he.el);
                        }
                        if ((ne && Be(ne, A), !le && (U = q && q.onVnodeMounted))) {
                            const he = b;
                            Be(() => Ge(U, _e, he), A);
                        }
                        b.shapeFlag & 256 && g.a && Be(g.a, A), (g.isMounted = !0), (b = M = $ = null);
                    }
                },
                I = (g.effect = new Ki(R, () => no(g.update), g.scope)),
                L = (g.update = I.run.bind(I));
            (L.id = g.uid), ln(g, !0), L();
        },
        te = (g, b, M) => {
            b.component = g;
            const $ = g.vnode.props;
            (g.vnode = b), (g.next = null), vd(g, b.props, $, M), Cd(g, b.children, M), rr(), ro(void 0, g.update), sr();
        },
        Me = (g, b, M, $, A, F, D, R, I = !1) => {
            const L = g && g.children,
                U = g ? g.shapeFlag : 0,
                z = b.children,
                { patchFlag: q, shapeFlag: X } = b;
            if (q > 0) {
                if (q & 128) {
                    Ue(L, z, M, $, A, F, D, R, I);
                    return;
                } else if (q & 256) {
                    kt(L, z, M, $, A, F, D, R, I);
                    return;
                }
            }
            X & 8
                ? (U & 16 && Pt(L, A, F), z !== L && u(M, z))
                : U & 16
                ? X & 16
                    ? Ue(L, z, M, $, A, F, D, R, I)
                    : Pt(L, A, F, !0)
                : (U & 8 && u(M, ''), X & 16 && E(z, M, $, A, F, D, R, I));
        },
        kt = (g, b, M, $, A, F, D, R, I) => {
            (g = g || Dn), (b = b || Dn);
            const L = g.length,
                U = b.length,
                z = Math.min(L, U);
            let q;
            for (q = 0; q < z; q++) {
                const X = (b[q] = I ? qt(b[q]) : tt(b[q]));
                _(g[q], X, M, null, A, F, D, R, I);
            }
            L > U ? Pt(g, A, F, !0, !1, z) : E(b, M, $, A, F, D, R, I, z);
        },
        Ue = (g, b, M, $, A, F, D, R, I) => {
            let L = 0;
            const U = b.length;
            let z = g.length - 1,
                q = U - 1;
            for (; L <= z && L <= q; ) {
                const X = g[L],
                    ne = (b[L] = I ? qt(b[L]) : tt(b[L]));
                if (bt(X, ne)) _(X, ne, M, null, A, F, D, R, I);
                else break;
                L++;
            }
            for (; L <= z && L <= q; ) {
                const X = g[z],
                    ne = (b[q] = I ? qt(b[q]) : tt(b[q]));
                if (bt(X, ne)) _(X, ne, M, null, A, F, D, R, I);
                else break;
                z--, q--;
            }
            if (L > z) {
                if (L <= q) {
                    const X = q + 1,
                        ne = X < U ? b[X].el : $;
                    for (; L <= q; ) _(null, (b[L] = I ? qt(b[L]) : tt(b[L])), M, ne, A, F, D, R, I), L++;
                }
            } else if (L > q) for (; L <= z; ) Se(g[L], A, F, !0), L++;
            else {
                const X = L,
                    ne = L,
                    _e = new Map();
                for (L = ne; L <= q; L++) {
                    const qe = (b[L] = I ? qt(b[L]) : tt(b[L]));
                    qe.key != null && _e.set(qe.key, L);
                }
                let le,
                    he = 0;
                const lt = q - ne + 1;
                let An = !1,
                    Ho = 0;
                const or = new Array(lt);
                for (L = 0; L < lt; L++) or[L] = 0;
                for (L = X; L <= z; L++) {
                    const qe = g[L];
                    if (he >= lt) {
                        Se(qe, A, F, !0);
                        continue;
                    }
                    let pt;
                    if (qe.key != null) pt = _e.get(qe.key);
                    else
                        for (le = ne; le <= q; le++)
                            if (or[le - ne] === 0 && bt(qe, b[le])) {
                                pt = le;
                                break;
                            }
                    pt === void 0 ? Se(qe, A, F, !0) : ((or[pt - ne] = L + 1), pt >= Ho ? (Ho = pt) : (An = !0), _(qe, b[pt], M, null, A, F, D, R, I), he++);
                }
                const Do = An ? Pd(or) : Dn;
                for (le = Do.length - 1, L = lt - 1; L >= 0; L--) {
                    const qe = ne + L,
                        pt = b[qe],
                        No = qe + 1 < U ? b[qe + 1].el : $;
                    or[L] === 0 ? _(null, pt, M, No, A, F, D, R, I) : An && (le < 0 || L !== Do[le] ? Et(pt, M, No, 2) : le--);
                }
            }
        },
        Et = (g, b, M, $, A = null) => {
            const { el: F, type: D, transition: R, children: I, shapeFlag: L } = g;
            if (L & 6) {
                Et(g.component.subTree, b, M, $);
                return;
            }
            if (L & 128) {
                g.suspense.move(b, M, $);
                return;
            }
            if (L & 64) {
                D.move(g, b, M, On);
                return;
            }
            if (D === de) {
                r(F, b, M);
                for (let z = 0; z < I.length; z++) Et(I[z], b, M, $);
                r(g.anchor, b, M);
                return;
            }
            if (D === yr) {
                S(g, b, M);
                return;
            }
            if ($ !== 2 && L & 1 && R)
                if ($ === 0) R.beforeEnter(F), r(F, b, M), Be(() => R.enter(F), A);
                else {
                    const { leave: z, delayLeave: q, afterLeave: X } = R,
                        ne = () => r(F, b, M),
                        _e = () => {
                            z(F, () => {
                                ne(), X && X();
                            });
                        };
                    q ? q(F, ne, _e) : _e();
                }
            else r(F, b, M);
        },
        Se = (g, b, M, $ = !1, A = !1) => {
            const { type: F, props: D, ref: R, children: I, dynamicChildren: L, shapeFlag: U, patchFlag: z, dirs: q } = g;
            if ((R != null && fs(R, null, M, g, !0), U & 256)) {
                b.ctx.deactivate(g);
                return;
            }
            const X = U & 1 && q,
                ne = !Ar(g);
            let _e;
            if ((ne && (_e = D && D.onVnodeBeforeUnmount) && Ge(_e, b, g), U & 6)) Fu(g.component, M, $);
            else {
                if (U & 128) {
                    g.suspense.unmount(M, $);
                    return;
                }
                X && vt(g, null, b, 'beforeUnmount'),
                    U & 64
                        ? g.type.remove(g, b, M, A, On, $)
                        : L && (F !== de || (z > 0 && z & 64))
                        ? Pt(L, b, M, !1, !0)
                        : ((F === de && z & 384) || (!A && U & 16)) && Pt(I, b, M),
                    $ && _t(g);
            }
            ((ne && (_e = D && D.onVnodeUnmounted)) || X) &&
                Be(() => {
                    _e && Ge(_e, b, g), X && vt(g, null, b, 'unmounted');
                }, M);
        },
        _t = (g) => {
            const { type: b, el: M, anchor: $, transition: A } = g;
            if (b === de) {
                Ru(M, $);
                return;
            }
            if (b === yr) {
                x(g);
                return;
            }
            const F = () => {
                s(M), A && !A.persisted && A.afterLeave && A.afterLeave();
            };
            if (g.shapeFlag & 1 && A && !A.persisted) {
                const { leave: D, delayLeave: R } = A,
                    I = () => D(M, F);
                R ? R(g.el, F, I) : I();
            } else F();
        },
        Ru = (g, b) => {
            let M;
            for (; g !== b; ) (M = d(g)), s(g), (g = M);
            s(b);
        },
        Fu = (g, b, M) => {
            const { bum: $, scope: A, update: F, subTree: D, um: R } = g;
            $ && rs($),
                A.stop(),
                F && ((F.active = !1), Se(D, g, b, M)),
                R && Be(R, b),
                Be(() => {
                    g.isUnmounted = !0;
                }, b),
                b &&
                    b.pendingBranch &&
                    !b.isUnmounted &&
                    g.asyncDep &&
                    !g.asyncResolved &&
                    g.suspenseId === b.pendingId &&
                    (b.deps--, b.deps === 0 && b.resolve());
        },
        Pt = (g, b, M, $ = !1, A = !1, F = 0) => {
            for (let D = F; D < g.length; D++) Se(g[D], b, M, $, A);
        },
        Zr = (g) => (g.shapeFlag & 6 ? Zr(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : d(g.anchor || g.el)),
        Io = (g, b, M) => {
            g == null ? b._vnode && Se(b._vnode, null, null, !0) : _(b._vnode || null, g, b, null, null, null, M), ls(), (b._vnode = g);
        },
        On = { p: _, um: Se, m: Et, r: _t, mt: ae, mc: E, pc: Me, pbc: j, n: Zr, o: t };
    let zs, Us;
    return e && ([zs, Us] = e(On)), { render: Io, hydrate: zs, createApp: Td(Io, zs) };
}
function ln({ effect: t, update: e }, n) {
    t.allowRecurse = e.allowRecurse = n;
}
function Gl(t, e, n = !1) {
    const r = t.children,
        s = e.children;
    if (Z(r) && Z(s))
        for (let i = 0; i < r.length; i++) {
            const o = r[i];
            let a = s[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = s[i] = qt(s[i])), (a.el = o.el)), n || Gl(o, a));
        }
}
function Pd(t) {
    const e = t.slice(),
        n = [0];
    let r, s, i, o, a;
    const c = t.length;
    for (r = 0; r < c; r++) {
        const l = t[r];
        if (l !== 0) {
            if (((s = n[n.length - 1]), t[s] < l)) {
                (e[r] = s), n.push(r);
                continue;
            }
            for (i = 0, o = n.length - 1; i < o; ) (a = (i + o) >> 1), t[n[a]] < l ? (i = a + 1) : (o = a);
            l < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), (n[i] = r));
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = e[o]);
    return n;
}
const Md = (t) => t.__isTeleport,
    fo = 'components';
function Fn(t, e) {
    return nc(fo, t, !0, e) || t;
}
const ec = Symbol();
function tc(t) {
    return Ce(t) ? nc(fo, t, !1) || t : t || ec;
}
function nc(t, e, n = !0, r = !1) {
    const s = Fe || Te;
    if (s) {
        const i = s.type;
        if (t === fo) {
            const a = Bd(i);
            if (a && (a === e || a === xt(e) || a === Ls(xt(e)))) return i;
        }
        const o = la(s[t] || i[t], e) || la(s.appContext[t], e);
        return !o && r ? i : o;
    }
}
function la(t, e) {
    return t && (t[e] || t[xt(e)] || t[Ls(xt(e))]);
}
const de = Symbol(void 0),
    $r = Symbol(void 0),
    De = Symbol(void 0),
    yr = Symbol(void 0),
    vr = [];
let Qt = null;
function B(t = !1) {
    vr.push((Qt = t ? null : []));
}
function rc() {
    vr.pop(), (Qt = vr[vr.length - 1] || null);
}
let Lr = 1;
function ca(t) {
    Lr += t;
}
function sc(t) {
    return (t.dynamicChildren = Lr > 0 ? Qt || Dn : null), rc(), Lr > 0 && Qt && Qt.push(t), t;
}
function K(t, e, n, r, s, i) {
    return sc(p(t, e, n, r, s, i, !0));
}
function Ne(t, e, n, r, s) {
    return sc(N(t, e, n, r, s, !0));
}
function Rr(t) {
    return t ? t.__v_isVNode === !0 : !1;
}
function bt(t, e) {
    return t.type === e.type && t.key === e.key;
}
const Ds = '__vInternal',
    ic = ({ key: t }) => (t != null ? t : null),
    ss = ({ ref: t, ref_key: e, ref_for: n }) => (t != null ? (Ce(t) || we(t) || Y(t) ? { i: Fe, r: t, k: e, f: !!n } : t) : null);
function p(t, e = null, n = null, r = 0, s = null, i = t === de ? 0 : 1, o = !1, a = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && ic(e),
        ref: e && ss(e),
        scopeId: Is,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
    };
    return (
        a ? (_o(c, n), i & 128 && t.normalize(c)) : n && (c.shapeFlag |= Ce(n) ? 8 : 16),
        Lr > 0 && !o && Qt && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Qt.push(c),
        c
    );
}
const N = Od;
function Od(t, e = null, n = null, r = 0, s = null, i = !1) {
    if (((!t || t === ec) && (t = De), Rr(t))) {
        const a = Sn(t, e, !0);
        return n && _o(a, n), a;
    }
    if ((Vd(t) && (t = t.__vccOpts), e)) {
        e = oc(e);
        let { class: a, style: c } = e;
        a && !Ce(a) && (e.class = Ct(a)), ge(c) && (Sl(c) && !Z(c) && (c = Ee({}, c)), (e.style = Ps(c)));
    }
    const o = Ce(t) ? 1 : Kf(t) ? 128 : Md(t) ? 64 : ge(t) ? 4 : Y(t) ? 2 : 0;
    return p(t, e, n, r, s, o, i, !0);
}
function oc(t) {
    return t ? (Sl(t) || Ds in t ? Ee({}, t) : t) : null;
}
function Sn(t, e, n = !1) {
    const { props: r, ref: s, patchFlag: i, children: o } = t,
        a = e ? Ad(r || {}, e) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: a,
        key: a && ic(a),
        ref: e && e.ref ? (n && s ? (Z(s) ? s.concat(ss(e)) : [s, ss(e)]) : ss(e)) : s,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: o,
        target: t.target,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== de ? (i === -1 ? 16 : i | 16) : i,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: t.transition,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && Sn(t.ssContent),
        ssFallback: t.ssFallback && Sn(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
    };
}
function ve(t = ' ', e = 0) {
    return N($r, null, t, e);
}
function ho(t, e) {
    const n = N(yr, null, t);
    return (n.staticCount = e), n;
}
function Zn(t = '', e = !1) {
    return e ? (B(), Ne(De, null, t)) : N(De, null, t);
}
function tt(t) {
    return t == null || typeof t == 'boolean' ? N(De) : Z(t) ? N(de, null, t.slice()) : typeof t == 'object' ? qt(t) : N($r, null, String(t));
}
function qt(t) {
    return t.el === null || t.memo ? t : Sn(t);
}
function _o(t, e) {
    let n = 0;
    const { shapeFlag: r } = t;
    if (e == null) e = null;
    else if (Z(e)) n = 16;
    else if (typeof e == 'object')
        if (r & 65) {
            const s = e.default;
            s && (s._c && (s._d = !1), _o(t, s()), s._c && (s._d = !0));
            return;
        } else {
            n = 32;
            const s = e._;
            !s && !(Ds in e) ? (e._ctx = Fe) : s === 3 && Fe && (Fe.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
        }
    else Y(e) ? ((e = { default: e, _ctx: Fe }), (n = 32)) : ((e = String(e)), r & 64 ? ((n = 16), (e = [ve(e)])) : (n = 8));
    (t.children = e), (t.shapeFlag |= n);
}
function Ad(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        for (const s in r)
            if (s === 'class') e.class !== r.class && (e.class = Ct([e.class, r.class]));
            else if (s === 'style') e.style = Ps([e.style, r.style]);
            else if (jr(s)) {
                const i = e[s],
                    o = r[s];
                o && i !== o && !(Z(i) && i.includes(o)) && (e[s] = i ? [].concat(i, o) : o);
            } else s !== '' && (e[s] = r[s]);
    }
    return e;
}
function Ge(t, e, n, r = null) {
    ot(t, e, 7, [n, r]);
}
function ft(t, e, n, r) {
    let s;
    const i = n && n[r];
    if (Z(t) || Ce(t)) {
        s = new Array(t.length);
        for (let o = 0, a = t.length; o < a; o++) s[o] = e(t[o], o, void 0, i && i[o]);
    } else if (typeof t == 'number') {
        s = new Array(t);
        for (let o = 0; o < t; o++) s[o] = e(o + 1, o, void 0, i && i[o]);
    } else if (ge(t))
        if (t[Symbol.iterator]) s = Array.from(t, (o, a) => e(o, a, void 0, i && i[a]));
        else {
            const o = Object.keys(t);
            s = new Array(o.length);
            for (let a = 0, c = o.length; a < c; a++) {
                const l = o[a];
                s[a] = e(t[l], l, a, i && i[a]);
            }
        }
    else s = [];
    return n && (n[r] = s), s;
}
function Ur(t, e, n = {}, r, s) {
    if (Fe.isCE || (Fe.parent && Ar(Fe.parent) && Fe.parent.isCE)) return N('slot', e === 'default' ? null : { name: e }, r && r());
    let i = t[e];
    i && i._c && (i._d = !1), B();
    const o = i && ac(i(n)),
        a = Ne(de, { key: n.key || `_${e}` }, o || (r ? r() : []), o && t._ === 1 ? 64 : -2);
    return !s && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']), i && i._c && (i._d = !0), a;
}
function ac(t) {
    return t.some((e) => (Rr(e) ? !(e.type === De || (e.type === de && !ac(e.children))) : !0)) ? t : null;
}
const Ci = (t) => (t ? (lc(t) ? Ns(t) || t.proxy : Ci(t.parent)) : null),
    ds = Ee(Object.create(null), {
        $: (t) => t,
        $el: (t) => t.vnode.el,
        $data: (t) => t.data,
        $props: (t) => t.props,
        $attrs: (t) => t.attrs,
        $slots: (t) => t.slots,
        $refs: (t) => t.refs,
        $parent: (t) => Ci(t.parent),
        $root: (t) => Ci(t.root),
        $emit: (t) => t.emit,
        $options: (t) => ql(t),
        $forceUpdate: (t) => () => no(t.update),
        $nextTick: (t) => Ol.bind(t.proxy),
        $watch: (t) => nd.bind(t),
    }),
    $d = {
        get({ _: t }, e) {
            const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: a, appContext: c } = t;
            let l;
            if (e[0] !== '$') {
                const h = o[e];
                if (h !== void 0)
                    switch (h) {
                        case 1:
                            return r[e];
                        case 2:
                            return s[e];
                        case 4:
                            return n[e];
                        case 3:
                            return i[e];
                    }
                else {
                    if (r !== ue && ee(r, e)) return (o[e] = 1), r[e];
                    if (s !== ue && ee(s, e)) return (o[e] = 2), s[e];
                    if ((l = t.propsOptions[0]) && ee(l, e)) return (o[e] = 3), i[e];
                    if (n !== ue && ee(n, e)) return (o[e] = 4), n[e];
                    vi && (o[e] = 0);
                }
            }
            const u = ds[e];
            let f, d;
            if (u) return e === '$attrs' && Xe(t, 'get', e), u(t);
            if ((f = a.__cssModules) && (f = f[e])) return f;
            if (n !== ue && ee(n, e)) return (o[e] = 4), n[e];
            if (((d = c.config.globalProperties), ee(d, e))) return d[e];
        },
        set({ _: t }, e, n) {
            const { data: r, setupState: s, ctx: i } = t;
            return s !== ue && ee(s, e)
                ? ((s[e] = n), !0)
                : r !== ue && ee(r, e)
                ? ((r[e] = n), !0)
                : ee(t.props, e) || (e[0] === '$' && e.slice(1) in t)
                ? !1
                : ((i[e] = n), !0);
        },
        has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, o) {
            let a;
            return (
                !!n[o] ||
                (t !== ue && ee(t, o)) ||
                (e !== ue && ee(e, o)) ||
                ((a = i[0]) && ee(a, o)) ||
                ee(r, o) ||
                ee(ds, o) ||
                ee(s.config.globalProperties, o)
            );
        },
        defineProperty(t, e, n) {
            return n.get != null ? (t._.accessCache[e] = 0) : ee(n, 'value') && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
        },
    },
    Ld = Jl();
let Rd = 0;
function Fd(t, e, n) {
    const r = t.type,
        s = (e ? e.appContext : t.appContext) || Ld,
        i = {
            uid: Rd++,
            vnode: t,
            type: r,
            parent: e,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new dl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: e ? e.provides : Object.create(s.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Zl(r, s),
            emitsOptions: Fl(r, s),
            emit: null,
            emitted: null,
            propsDefaults: ue,
            inheritAttrs: r.inheritAttrs,
            ctx: ue,
            data: ue,
            props: ue,
            attrs: ue,
            slots: ue,
            refs: ue,
            setupState: ue,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (i.ctx = { _: i }), (i.root = e ? e.root : i), (i.emit = zf.bind(null, i)), t.ce && t.ce(i), i;
}
let Te = null;
const qr = () => Te || Fe,
    Kn = (t) => {
        (Te = t), t.scope.on();
    },
    wn = () => {
        Te && Te.scope.off(), (Te = null);
    };
function lc(t) {
    return t.vnode.shapeFlag & 4;
}
let Yn = !1;
function Id(t, e = !1) {
    Yn = e;
    const { props: n, children: r } = t.vnode,
        s = lc(t);
    yd(t, n, s, e), wd(t, r);
    const i = s ? Hd(t, e) : void 0;
    return (Yn = !1), i;
}
function Hd(t, e) {
    const n = t.type;
    (t.accessCache = Object.create(null)), (t.proxy = Gi(new Proxy(t.ctx, $d)));
    const { setup: r } = n;
    if (r) {
        const s = (t.setupContext = r.length > 1 ? Nd(t) : null);
        Kn(t), rr();
        const i = Jt(r, t, 0, [t.props, s]);
        if ((sr(), wn(), cl(i))) {
            if ((i.then(wn, wn), e))
                return i
                    .then((o) => {
                        xi(t, o, e);
                    })
                    .catch((o) => {
                        ir(o, t, 0);
                    });
            t.asyncDep = i;
        } else xi(t, i, e);
    } else cc(t, e);
}
function xi(t, e, n) {
    Y(e) ? (t.type.__ssrInlineRender ? (t.ssrRender = e) : (t.render = e)) : ge(e) && (t.setupState = Pl(e)), cc(t, n);
}
let ua;
function cc(t, e, n) {
    const r = t.type;
    if (!t.render) {
        if (!e && ua && !r.render) {
            const s = r.template;
            if (s) {
                const { isCustomElement: i, compilerOptions: o } = t.appContext.config,
                    { delimiters: a, compilerOptions: c } = r,
                    l = Ee(Ee({ isCustomElement: i, delimiters: a }, o), c);
                r.render = ua(s, l);
            }
        }
        t.render = r.render || ut;
    }
    Kn(t), rr(), hd(t), sr(), wn();
}
function Dd(t) {
    return new Proxy(t.attrs, {
        get(e, n) {
            return Xe(t, 'get', '$attrs'), e[n];
        },
    });
}
function Nd(t) {
    const e = (r) => {
        t.exposed = r || {};
    };
    let n;
    return {
        get attrs() {
            return n || (n = Dd(t));
        },
        slots: t.slots,
        emit: t.emit,
        expose: e,
    };
}
function Ns(t) {
    if (t.exposed)
        return (
            t.exposeProxy ||
            (t.exposeProxy = new Proxy(Pl(Gi(t.exposed)), {
                get(e, n) {
                    if (n in e) return e[n];
                    if (n in ds) return ds[n](t);
                },
            }))
        );
}
function Bd(t) {
    return (Y(t) && t.displayName) || t.name;
}
function Vd(t) {
    return Y(t) && '__vccOpts' in t;
}
const It = (t, e) => Df(t, e, Yn);
function Xn(t, e, n) {
    const r = arguments.length;
    return r === 2
        ? ge(e) && !Z(e)
            ? Rr(e)
                ? N(t, null, [e])
                : N(t, e)
            : N(t, null, e)
        : (r > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : r === 3 && Rr(n) && (n = [n]), N(t, e, n));
}
const jd = '3.2.33',
    zd = 'http://www.w3.org/2000/svg',
    mn = typeof document != 'undefined' ? document : null,
    fa = mn && mn.createElement('template'),
    Ud = {
        insert: (t, e, n) => {
            e.insertBefore(t, n || null);
        },
        remove: (t) => {
            const e = t.parentNode;
            e && e.removeChild(t);
        },
        createElement: (t, e, n, r) => {
            const s = e ? mn.createElementNS(zd, t) : mn.createElement(t, n ? { is: n } : void 0);
            return t === 'select' && r && r.multiple != null && s.setAttribute('multiple', r.multiple), s;
        },
        createText: (t) => mn.createTextNode(t),
        createComment: (t) => mn.createComment(t),
        setText: (t, e) => {
            t.nodeValue = e;
        },
        setElementText: (t, e) => {
            t.textContent = e;
        },
        parentNode: (t) => t.parentNode,
        nextSibling: (t) => t.nextSibling,
        querySelector: (t) => mn.querySelector(t),
        setScopeId(t, e) {
            t.setAttribute(e, '');
        },
        cloneNode(t) {
            const e = t.cloneNode(!0);
            return '_value' in t && (e._value = t._value), e;
        },
        insertStaticContent(t, e, n, r, s, i) {
            const o = n ? n.previousSibling : e.lastChild;
            if (s && (s === i || s.nextSibling)) for (; e.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); );
            else {
                fa.innerHTML = r ? `<svg>${t}</svg>` : t;
                const a = fa.content;
                if (r) {
                    const c = a.firstChild;
                    for (; c.firstChild; ) a.appendChild(c.firstChild);
                    a.removeChild(c);
                }
                e.insertBefore(a, n);
            }
            return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
        },
    };
function qd(t, e, n) {
    const r = t._vtc;
    r && (e = (e ? [e, ...r] : [...r]).join(' ')), e == null ? t.removeAttribute('class') : n ? t.setAttribute('class', e) : (t.className = e);
}
function Wd(t, e, n) {
    const r = t.style,
        s = Ce(n);
    if (n && !s) {
        for (const i in n) Ti(r, i, n[i]);
        if (e && !Ce(e)) for (const i in e) n[i] == null && Ti(r, i, '');
    } else {
        const i = r.display;
        s ? e !== n && (r.cssText = n) : e && t.removeAttribute('style'), '_vod' in t && (r.display = i);
    }
}
const da = /\s*!important$/;
function Ti(t, e, n) {
    if (Z(n)) n.forEach((r) => Ti(t, e, r));
    else if ((n == null && (n = ''), e.startsWith('--'))) t.setProperty(e, n);
    else {
        const r = Zd(t, e);
        da.test(n) ? t.setProperty(nr(r), n.replace(da, ''), 'important') : (t[r] = n);
    }
}
const ha = ['Webkit', 'Moz', 'ms'],
    Js = {};
function Zd(t, e) {
    const n = Js[e];
    if (n) return n;
    let r = xt(e);
    if (r !== 'filter' && r in t) return (Js[e] = r);
    r = Ls(r);
    for (let s = 0; s < ha.length; s++) {
        const i = ha[s] + r;
        if (i in t) return (Js[e] = i);
    }
    return e;
}
const _a = 'http://www.w3.org/1999/xlink';
function Kd(t, e, n, r, s) {
    if (r && e.startsWith('xlink:')) n == null ? t.removeAttributeNS(_a, e.slice(6, e.length)) : t.setAttributeNS(_a, e, n);
    else {
        const i = ju(e);
        n == null || (i && !al(n)) ? t.removeAttribute(e) : t.setAttribute(e, i ? '' : n);
    }
}
function Yd(t, e, n, r, s, i, o) {
    if (e === 'innerHTML' || e === 'textContent') {
        r && o(r, s, i), (t[e] = n == null ? '' : n);
        return;
    }
    if (e === 'value' && t.tagName !== 'PROGRESS' && !t.tagName.includes('-')) {
        t._value = n;
        const c = n == null ? '' : n;
        (t.value !== c || t.tagName === 'OPTION') && (t.value = c), n == null && t.removeAttribute(e);
        return;
    }
    let a = !1;
    if (n === '' || n == null) {
        const c = typeof t[e];
        c === 'boolean' ? (n = al(n)) : n == null && c === 'string' ? ((n = ''), (a = !0)) : c === 'number' && ((n = 0), (a = !0));
    }
    try {
        t[e] = n;
    } catch {}
    a && t.removeAttribute(e);
}
const [uc, Xd] = (() => {
    let t = Date.now,
        e = !1;
    if (typeof window != 'undefined') {
        Date.now() > document.createEvent('Event').timeStamp && (t = () => performance.now());
        const n = navigator.userAgent.match(/firefox\/(\d+)/i);
        e = !!(n && Number(n[1]) <= 53);
    }
    return [t, e];
})();
let Si = 0;
const Jd = Promise.resolve(),
    Qd = () => {
        Si = 0;
    },
    Gd = () => Si || (Jd.then(Qd), (Si = uc()));
function gn(t, e, n, r) {
    t.addEventListener(e, n, r);
}
function eh(t, e, n, r) {
    t.removeEventListener(e, n, r);
}
function th(t, e, n, r, s = null) {
    const i = t._vei || (t._vei = {}),
        o = i[e];
    if (r && o) o.value = r;
    else {
        const [a, c] = nh(e);
        if (r) {
            const l = (i[e] = rh(r, s));
            gn(t, a, l, c);
        } else o && (eh(t, a, o, c), (i[e] = void 0));
    }
}
const pa = /(?:Once|Passive|Capture)$/;
function nh(t) {
    let e;
    if (pa.test(t)) {
        e = {};
        let n;
        for (; (n = t.match(pa)); ) (t = t.slice(0, t.length - n[0].length)), (e[n[0].toLowerCase()] = !0);
    }
    return [nr(t.slice(2)), e];
}
function rh(t, e) {
    const n = (r) => {
        const s = r.timeStamp || uc();
        (Xd || s >= n.attached - 1) && ot(sh(r, n.value), e, 5, [r]);
    };
    return (n.value = t), (n.attached = Gd()), n;
}
function sh(t, e) {
    if (Z(e)) {
        const n = t.stopImmediatePropagation;
        return (
            (t.stopImmediatePropagation = () => {
                n.call(t), (t._stopped = !0);
            }),
            e.map((r) => (s) => !s._stopped && r && r(s))
        );
    } else return e;
}
const ma = /^on[a-z]/,
    ih = (t, e, n, r, s = !1, i, o, a, c) => {
        e === 'class'
            ? qd(t, r, s)
            : e === 'style'
            ? Wd(t, n, r)
            : jr(e)
            ? zi(e) || th(t, e, n, r, o)
            : (e[0] === '.' ? ((e = e.slice(1)), !0) : e[0] === '^' ? ((e = e.slice(1)), !1) : oh(t, e, r, s))
            ? Yd(t, e, r, i, o, a, c)
            : (e === 'true-value' ? (t._trueValue = r) : e === 'false-value' && (t._falseValue = r), Kd(t, e, r, s));
    };
function oh(t, e, n, r) {
    return r
        ? !!(e === 'innerHTML' || e === 'textContent' || (e in t && ma.test(e) && Y(n)))
        : e === 'spellcheck' ||
          e === 'draggable' ||
          e === 'translate' ||
          e === 'form' ||
          (e === 'list' && t.tagName === 'INPUT') ||
          (e === 'type' && t.tagName === 'TEXTAREA') ||
          (ma.test(e) && Ce(n))
        ? !1
        : e in t;
}
const zt = 'transition',
    ar = 'animation',
    Bs = (t, { slots: e }) => Xn(Nl, dc(t), e);
Bs.displayName = 'Transition';
const fc = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String,
    },
    ah = (Bs.props = Ee({}, Nl.props, fc)),
    cn = (t, e = []) => {
        Z(t) ? t.forEach((n) => n(...e)) : t && t(...e);
    },
    ga = (t) => (t ? (Z(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function dc(t) {
    const e = {};
    for (const O in t) O in fc || (e[O] = t[O]);
    if (t.css === !1) return e;
    const {
            name: n = 'v',
            type: r,
            duration: s,
            enterFromClass: i = `${n}-enter-from`,
            enterActiveClass: o = `${n}-enter-active`,
            enterToClass: a = `${n}-enter-to`,
            appearFromClass: c = i,
            appearActiveClass: l = o,
            appearToClass: u = a,
            leaveFromClass: f = `${n}-leave-from`,
            leaveActiveClass: d = `${n}-leave-active`,
            leaveToClass: h = `${n}-leave-to`,
        } = t,
        y = lh(s),
        m = y && y[0],
        _ = y && y[1],
        {
            onBeforeEnter: v,
            onEnter: w,
            onEnterCancelled: C,
            onLeave: S,
            onLeaveCancelled: x,
            onBeforeAppear: k = v,
            onAppear: T = w,
            onAppearCancelled: P = C,
        } = e,
        E = (O, V, W) => {
            hn(O, V ? u : a), hn(O, V ? l : o), W && W();
        },
        H = (O, V) => {
            hn(O, h), hn(O, d), V && V();
        },
        j = (O) => (V, W) => {
            const ae = O ? T : w,
                J = () => E(V, O, W);
            cn(ae, [V, J]),
                ya(() => {
                    hn(V, O ? c : i), Mt(V, O ? u : a), ga(ae) || va(V, r, m, J);
                });
        };
    return Ee(e, {
        onBeforeEnter(O) {
            cn(v, [O]), Mt(O, i), Mt(O, o);
        },
        onBeforeAppear(O) {
            cn(k, [O]), Mt(O, c), Mt(O, l);
        },
        onEnter: j(!1),
        onAppear: j(!0),
        onLeave(O, V) {
            const W = () => H(O, V);
            Mt(O, f),
                _c(),
                Mt(O, d),
                ya(() => {
                    hn(O, f), Mt(O, h), ga(S) || va(O, r, _, W);
                }),
                cn(S, [O, W]);
        },
        onEnterCancelled(O) {
            E(O, !1), cn(C, [O]);
        },
        onAppearCancelled(O) {
            E(O, !0), cn(P, [O]);
        },
        onLeaveCancelled(O) {
            H(O), cn(x, [O]);
        },
    });
}
function lh(t) {
    if (t == null) return null;
    if (ge(t)) return [Qs(t.enter), Qs(t.leave)];
    {
        const e = Qs(t);
        return [e, e];
    }
}
function Qs(t) {
    return Wn(t);
}
function Mt(t, e) {
    e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t._vtc || (t._vtc = new Set())).add(e);
}
function hn(t, e) {
    e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
    const { _vtc: n } = t;
    n && (n.delete(e), n.size || (t._vtc = void 0));
}
function ya(t) {
    requestAnimationFrame(() => {
        requestAnimationFrame(t);
    });
}
let ch = 0;
function va(t, e, n, r) {
    const s = (t._endId = ++ch),
        i = () => {
            s === t._endId && r();
        };
    if (n) return setTimeout(i, n);
    const { type: o, timeout: a, propCount: c } = hc(t, e);
    if (!o) return r();
    const l = o + 'end';
    let u = 0;
    const f = () => {
            t.removeEventListener(l, d), i();
        },
        d = (h) => {
            h.target === t && ++u >= c && f();
        };
    setTimeout(() => {
        u < c && f();
    }, a + 1),
        t.addEventListener(l, d);
}
function hc(t, e) {
    const n = window.getComputedStyle(t),
        r = (y) => (n[y] || '').split(', '),
        s = r(zt + 'Delay'),
        i = r(zt + 'Duration'),
        o = ba(s, i),
        a = r(ar + 'Delay'),
        c = r(ar + 'Duration'),
        l = ba(a, c);
    let u = null,
        f = 0,
        d = 0;
    e === zt
        ? o > 0 && ((u = zt), (f = o), (d = i.length))
        : e === ar
        ? l > 0 && ((u = ar), (f = l), (d = c.length))
        : ((f = Math.max(o, l)), (u = f > 0 ? (o > l ? zt : ar) : null), (d = u ? (u === zt ? i.length : c.length) : 0));
    const h = u === zt && /\b(transform|all)(,|$)/.test(n[zt + 'Property']);
    return { type: u, timeout: f, propCount: d, hasTransform: h };
}
function ba(t, e) {
    for (; t.length < e.length; ) t = t.concat(t);
    return Math.max(...e.map((n, r) => wa(n) + wa(t[r])));
}
function wa(t) {
    return Number(t.slice(0, -1).replace(',', '.')) * 1e3;
}
function _c() {
    return document.body.offsetHeight;
}
const pc = new WeakMap(),
    mc = new WeakMap(),
    uh = {
        name: 'TransitionGroup',
        props: Ee({}, ah, { tag: String, moveClass: String }),
        setup(t, { slots: e }) {
            const n = qr(),
                r = Dl();
            let s, i;
            return (
                jl(() => {
                    if (!s.length) return;
                    const o = t.moveClass || `${t.name || 'v'}-move`;
                    if (!_h(s[0].el, n.vnode.el, o)) return;
                    s.forEach(fh), s.forEach(dh);
                    const a = s.filter(hh);
                    _c(),
                        a.forEach((c) => {
                            const l = c.el,
                                u = l.style;
                            Mt(l, o), (u.transform = u.webkitTransform = u.transitionDuration = '');
                            const f = (l._moveCb = (d) => {
                                (d && d.target !== l) ||
                                    ((!d || /transform$/.test(d.propertyName)) && (l.removeEventListener('transitionend', f), (l._moveCb = null), hn(l, o)));
                            });
                            l.addEventListener('transitionend', f);
                        });
                }),
                () => {
                    const o = re(t),
                        a = dc(o);
                    let c = o.tag || de;
                    (s = i), (i = e.default ? co(e.default()) : []);
                    for (let l = 0; l < i.length; l++) {
                        const u = i[l];
                        u.key != null && Or(u, Mr(u, a, r, n));
                    }
                    if (s)
                        for (let l = 0; l < s.length; l++) {
                            const u = s[l];
                            Or(u, Mr(u, a, r, n)), pc.set(u, u.el.getBoundingClientRect());
                        }
                    return N(c, null, i);
                }
            );
        },
    },
    s4 = uh;
function fh(t) {
    const e = t.el;
    e._moveCb && e._moveCb(), e._enterCb && e._enterCb();
}
function dh(t) {
    mc.set(t, t.el.getBoundingClientRect());
}
function hh(t) {
    const e = pc.get(t),
        n = mc.get(t),
        r = e.left - n.left,
        s = e.top - n.top;
    if (r || s) {
        const i = t.el.style;
        return (i.transform = i.webkitTransform = `translate(${r}px,${s}px)`), (i.transitionDuration = '0s'), t;
    }
}
function _h(t, e, n) {
    const r = t.cloneNode();
    t._vtc &&
        t._vtc.forEach((o) => {
            o.split(/\s+/).forEach((a) => a && r.classList.remove(a));
        }),
        n.split(/\s+/).forEach((o) => o && r.classList.add(o)),
        (r.style.display = 'none');
    const s = e.nodeType === 1 ? e : e.parentNode;
    s.appendChild(r);
    const { hasTransform: i } = hc(r);
    return s.removeChild(r), i;
}
const hs = (t) => {
    const e = t.props['onUpdate:modelValue'];
    return Z(e) ? (n) => rs(e, n) : e;
};
function ph(t) {
    t.target.composing = !0;
}
function Ca(t) {
    const e = t.target;
    e.composing && ((e.composing = !1), mh(e, 'input'));
}
function mh(t, e) {
    const n = document.createEvent('HTMLEvents');
    n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
const gh = {
        created(t, { modifiers: { lazy: e, trim: n, number: r } }, s) {
            t._assign = hs(s);
            const i = r || (s.props && s.props.type === 'number');
            gn(t, e ? 'change' : 'input', (o) => {
                if (o.target.composing) return;
                let a = t.value;
                n ? (a = a.trim()) : i && (a = Wn(a)), t._assign(a);
            }),
                n &&
                    gn(t, 'change', () => {
                        t.value = t.value.trim();
                    }),
                e || (gn(t, 'compositionstart', ph), gn(t, 'compositionend', Ca), gn(t, 'change', Ca));
        },
        mounted(t, { value: e }) {
            t.value = e == null ? '' : e;
        },
        beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: r, number: s } }, i) {
            if (
                ((t._assign = hs(i)),
                t.composing || (document.activeElement === t && (n || (r && t.value.trim() === e) || ((s || t.type === 'number') && Wn(t.value) === e))))
            )
                return;
            const o = e == null ? '' : e;
            t.value !== o && (t.value = o);
        },
    },
    yh = {
        deep: !0,
        created(t, { value: e, modifiers: { number: n } }, r) {
            const s = Os(e);
            gn(t, 'change', () => {
                const i = Array.prototype.filter.call(t.options, (o) => o.selected).map((o) => (n ? Wn(_s(o)) : _s(o)));
                t._assign(t.multiple ? (s ? new Set(i) : i) : i[0]);
            }),
                (t._assign = hs(r));
        },
        mounted(t, { value: e }) {
            xa(t, e);
        },
        beforeUpdate(t, e, n) {
            t._assign = hs(n);
        },
        updated(t, { value: e }) {
            xa(t, e);
        },
    };
function xa(t, e) {
    const n = t.multiple;
    if (!(n && !Z(e) && !Os(e))) {
        for (let r = 0, s = t.options.length; r < s; r++) {
            const i = t.options[r],
                o = _s(i);
            if (n) Z(e) ? (i.selected = Ku(e, o) > -1) : (i.selected = e.has(o));
            else if (Ms(_s(i), e)) {
                t.selectedIndex !== r && (t.selectedIndex = r);
                return;
            }
        }
        !n && t.selectedIndex !== -1 && (t.selectedIndex = -1);
    }
}
function _s(t) {
    return '_value' in t ? t._value : t.value;
}
const vh = ['ctrl', 'shift', 'alt', 'meta'],
    bh = {
        stop: (t) => t.stopPropagation(),
        prevent: (t) => t.preventDefault(),
        self: (t) => t.target !== t.currentTarget,
        ctrl: (t) => !t.ctrlKey,
        shift: (t) => !t.shiftKey,
        alt: (t) => !t.altKey,
        meta: (t) => !t.metaKey,
        left: (t) => 'button' in t && t.button !== 0,
        middle: (t) => 'button' in t && t.button !== 1,
        right: (t) => 'button' in t && t.button !== 2,
        exact: (t, e) => vh.some((n) => t[`${n}Key`] && !e.includes(n)),
    },
    ps =
        (t, e) =>
        (n, ...r) => {
            for (let s = 0; s < e.length; s++) {
                const i = bh[e[s]];
                if (i && i(n, e)) return;
            }
            return t(n, ...r);
        },
    gc = Ee({ patchProp: ih }, Ud);
let br,
    Ta = !1;
function wh() {
    return br || (br = kd(gc));
}
function Ch() {
    return (br = Ta ? br : Ed(gc)), (Ta = !0), br;
}
const xh = (...t) => {
        const e = wh().createApp(...t),
            { mount: n } = e;
        return (
            (e.mount = (r) => {
                const s = yc(r);
                if (!s) return;
                const i = e._component;
                !Y(i) && !i.render && !i.template && (i.template = s.innerHTML), (s.innerHTML = '');
                const o = n(s, !1, s instanceof SVGElement);
                return s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), o;
            }),
            e
        );
    },
    Th = (...t) => {
        const e = Ch().createApp(...t),
            { mount: n } = e;
        return (
            (e.mount = (r) => {
                const s = yc(r);
                if (s) return n(s, !0, s instanceof SVGElement);
            }),
            e
        );
    };
function yc(t) {
    return Ce(t) ? document.querySelector(t) : t;
}
const Sh = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
    kh =
        /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Eh = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function Ph(t, e) {
    if (!(t === '__proto__' || t === 'constructor')) return e;
}
function Mh(t) {
    if (typeof t != 'string') return t;
    const e = t.toLowerCase();
    if (e === 'true') return !0;
    if (e === 'false') return !1;
    if (e === 'null') return null;
    if (e === 'nan') return NaN;
    if (e === 'infinity') return 1 / 0;
    if (e !== 'undefined') {
        if (!Eh.test(t)) return t;
        try {
            return Sh.test(t) || kh.test(t) ? JSON.parse(t, Ph) : JSON.parse(t);
        } catch {
            return t;
        }
    }
}
const Oh = /#/g,
    Ah = /&/g,
    $h = /=/g,
    vc = /\+/g,
    Lh = /%5B/gi,
    Rh = /%5D/gi,
    Fh = /%5E/gi,
    Ih = /%60/gi,
    Hh = /%7B/gi,
    Dh = /%7C/gi,
    Nh = /%7D/gi,
    Bh = /%20/gi;
function Vh(t) {
    return encodeURI('' + t)
        .replace(Dh, '|')
        .replace(Lh, '[')
        .replace(Rh, ']');
}
function ki(t) {
    return Vh(t).replace(vc, '%2B').replace(Bh, '+').replace(Oh, '%23').replace(Ah, '%26').replace(Ih, '`').replace(Hh, '{').replace(Nh, '}').replace(Fh, '^');
}
function Gs(t) {
    return ki(t).replace($h, '%3D');
}
function bc(t = '') {
    try {
        return decodeURIComponent('' + t);
    } catch {
        return '' + t;
    }
}
function jh(t) {
    return bc(t.replace(vc, ' '));
}
function wc(t = '') {
    const e = {};
    t[0] === '?' && (t = t.substr(1));
    for (const n of t.split('&')) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const s = bc(r[1]);
        if (s === '__proto__' || s === 'constructor') continue;
        const i = jh(r[2] || '');
        e[s] ? (Array.isArray(e[s]) ? e[s].push(i) : (e[s] = [e[s], i])) : (e[s] = i);
    }
    return e;
}
function zh(t, e) {
    return (
        (typeof e == 'number' || typeof e == 'boolean') && (e = String(e)),
        e ? (Array.isArray(e) ? e.map((n) => `${Gs(t)}=${ki(n)}`).join('&') : `${Gs(t)}=${ki(e)}`) : Gs(t)
    );
}
function Uh(t) {
    return Object.keys(t)
        .map((e) => zh(e, t[e]))
        .join('&');
}
const qh = /^\w+:(\/\/)?/,
    Wh = /^\/\/[^/]+/;
function Cc(t, e = !1) {
    return qh.test(t) || (e && Wh.test(t));
}
const Zh = /\/$|\/\?/;
function Ei(t = '', e = !1) {
    return e ? Zh.test(t) : t.endsWith('/');
}
function Kh(t = '', e = !1) {
    if (!e) return (Ei(t) ? t.slice(0, -1) : t) || '/';
    if (!Ei(t, !0)) return t || '/';
    const [n, ...r] = t.split('?');
    return (n.slice(0, -1) || '/') + (r.length ? `?${r.join('?')}` : '');
}
function Yh(t = '', e = !1) {
    if (!e) return t.endsWith('/') ? t : t + '/';
    if (Ei(t, !0)) return t || '/';
    const [n, ...r] = t.split('?');
    return n + '/' + (r.length ? `?${r.join('?')}` : '');
}
function Xh(t = '') {
    return t.startsWith('/');
}
function Jh(t = '') {
    return (Xh(t) ? t.substr(1) : t) || '/';
}
function Qh(t, e) {
    if (e_(e)) return t;
    const n = Kh(e);
    return t.startsWith(n) ? t : n_(n, t);
}
function Gh(t, e) {
    const n = po(t),
        r = me(me({}, wc(n.search)), e);
    return (n.search = Uh(r)), r_(n);
}
function e_(t) {
    return !t || t === '/';
}
function t_(t) {
    return t && t !== '/';
}
function n_(t, ...e) {
    let n = t || '';
    for (const r of e.filter(t_)) n = n ? Yh(n) + Jh(r) : r;
    return n;
}
function po(t = '', e) {
    if (!Cc(t, !0)) return e ? po(e + t) : Sa(t);
    const [n = '', r, s = ''] = (t.replace(/\\/g, '/').match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1),
        [i = '', o = ''] = (s.match(/([^/?#]*)(.*)?/) || []).splice(1),
        { pathname: a, search: c, hash: l } = Sa(o);
    return { protocol: n, auth: r ? r.substr(0, r.length - 1) : '', host: i, pathname: a, search: c, hash: l };
}
function Sa(t = '') {
    const [e = '', n = '', r = ''] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return { pathname: e, search: n, hash: r };
}
function r_(t) {
    const e = t.pathname + (t.search ? (t.search.startsWith('?') ? '' : '?') + t.search : '') + t.hash;
    return t.protocol ? t.protocol + '//' + (t.auth ? t.auth + '@' : '') + t.host + e : e;
}
class s_ extends Error {
    constructor() {
        super(...arguments), (this.name = 'FetchError');
    }
}
function i_(t, e, n) {
    let r = '';
    t && n && (r = `${n.status} ${n.statusText} (${t.toString()})`), e && (r = `${e.message} (${r})`);
    const s = new s_(r);
    return (
        Object.defineProperty(s, 'request', {
            get() {
                return t;
            },
        }),
        Object.defineProperty(s, 'response', {
            get() {
                return n;
            },
        }),
        Object.defineProperty(s, 'data', {
            get() {
                return n && n._data;
            },
        }),
        s
    );
}
const o_ = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']));
function ka(t = 'GET') {
    return o_.has(t.toUpperCase());
}
function a_(t) {
    if (t === void 0) return !1;
    const e = typeof t;
    return e === 'string' || e === 'number' || e === 'boolean' || e === null
        ? !0
        : e !== 'object'
        ? !1
        : Array.isArray(t)
        ? !0
        : (t.constructor && t.constructor.name === 'Object') || typeof t.toJSON == 'function';
}
const l_ = new Set(['image/svg', 'application/xml', 'application/xhtml', 'application/html']),
    c_ = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function u_(t = '') {
    if (!t) return 'json';
    const e = t.split(';').shift();
    return c_.test(e) ? 'json' : l_.has(e) || e.startsWith('text/') ? 'text' : 'blob';
}
const f_ = new Set([408, 409, 425, 429, 500, 502, 503, 504]);
function xc(t) {
    const { fetch: e, Headers: n } = t;
    function r(o) {
        if (o.options.retry !== !1) {
            const c = typeof o.options.retry == 'number' ? o.options.retry : ka(o.options.method) ? 0 : 1,
                l = (o.response && o.response.status) || 500;
            if (c > 0 && f_.has(l)) return s(o.request, mt(me({}, o.options), { retry: c - 1 }));
        }
        const a = i_(o.request, o.error, o.response);
        throw (Error.captureStackTrace && Error.captureStackTrace(a, s), a);
    }
    const s = async function (a, c = {}) {
            const l = { request: a, options: me(me({}, t.defaults), c), response: void 0, error: void 0 };
            l.options.onRequest && (await l.options.onRequest(l)),
                typeof l.request == 'string' &&
                    (l.options.baseURL && (l.request = Qh(l.request, l.options.baseURL)),
                    l.options.params && (l.request = Gh(l.request, l.options.params)),
                    l.options.body &&
                        ka(l.options.method) &&
                        a_(l.options.body) &&
                        ((l.options.body = JSON.stringify(l.options.body)),
                        (l.options.headers = new n(l.options.headers)),
                        l.options.headers.has('content-type') || l.options.headers.set('content-type', 'application/json'),
                        l.options.headers.has('accept') || l.options.headers.set('accept', 'application/json'))),
                (l.response = await e(l.request, l.options).catch(
                    async (f) => ((l.error = f), l.options.onRequestError && (await l.options.onRequestError(l)), r(l))
                ));
            const u = (l.options.parseResponse ? 'json' : l.options.responseType) || u_(l.response.headers.get('content-type') || '');
            if (u === 'json') {
                const f = await l.response.text(),
                    d = l.options.parseResponse || Mh;
                l.response._data = d(f);
            } else l.response._data = await l.response[u]();
            return (
                l.options.onResponse && (await l.options.onResponse(l)),
                l.response.ok || (l.options.onResponseError && (await l.options.onResponseError(l))),
                l.response.ok ? l.response : r(l)
            );
        },
        i = function (a, c) {
            return s(a, c).then((l) => l._data);
        };
    return (i.raw = s), (i.create = (o = {}) => xc(mt(me({}, t), { defaults: me(me({}, t.defaults), o) }))), i;
}
const Tc = (function () {
        if (typeof globalThis != 'undefined') return globalThis;
        if (typeof self != 'undefined') return self;
        if (typeof window != 'undefined') return window;
        if (typeof global != 'undefined') return global;
        throw new Error('unable to locate global object');
    })(),
    d_ = Tc.fetch || (() => Promise.reject(new Error('[ohmyfetch] global.fetch is not supported!'))),
    h_ = Tc.Headers,
    __ = xc({ fetch: d_, Headers: h_ }),
    p_ = () => {
        var t;
        return ((t = window == null ? void 0 : window.__NUXT__) == null ? void 0 : t.config) || {};
    },
    Sc = p_().app,
    m_ = () => Sc.baseURL,
    g_ = () => Sc.buildAssetsDir;
function Pi(t, e = {}, n) {
    for (const r in t) {
        const s = t[r],
            i = n ? `${n}:${r}` : r;
        typeof s == 'object' && s !== null ? Pi(s, e, i) : typeof s == 'function' && (e[i] = s);
    }
    return e;
}
function y_(t, e) {
    return t.reduce((n, r) => n.then(() => r.apply(void 0, e)), Promise.resolve(null));
}
function v_(t, e) {
    return Promise.all(t.map((n) => n.apply(void 0, e)));
}
class b_ {
    constructor() {
        (this._hooks = {}),
            (this._deprecatedHooks = {}),
            (this.hook = this.hook.bind(this)),
            (this.callHook = this.callHook.bind(this)),
            (this.callHookWith = this.callHookWith.bind(this));
    }
    hook(e, n) {
        if (!e || typeof n != 'function') return () => {};
        const r = e;
        let s;
        for (; this._deprecatedHooks[e]; ) {
            const i = this._deprecatedHooks[e];
            typeof i == 'string' ? (s = { to: i }) : (s = i), (e = s.to);
        }
        return (
            s && (s.message ? console.warn(s.message) : console.warn(`${r} hook has been deprecated` + (s.to ? `, please use ${s.to}` : ''))),
            (this._hooks[e] = this._hooks[e] || []),
            this._hooks[e].push(n),
            () => {
                n && (this.removeHook(e, n), (n = null));
            }
        );
    }
    hookOnce(e, n) {
        let r,
            s = (...i) => (r(), (r = null), (s = null), n(...i));
        return (r = this.hook(e, s)), r;
    }
    removeHook(e, n) {
        if (this._hooks[e]) {
            const r = this._hooks[e].indexOf(n);
            r !== -1 && this._hooks[e].splice(r, 1), this._hooks[e].length === 0 && delete this._hooks[e];
        }
    }
    deprecateHook(e, n) {
        this._deprecatedHooks[e] = n;
    }
    deprecateHooks(e) {
        Object.assign(this._deprecatedHooks, e);
    }
    addHooks(e) {
        const n = Pi(e),
            r = Object.keys(n).map((s) => this.hook(s, n[s]));
        return () => {
            r.splice(0, r.length).forEach((s) => s());
        };
    }
    removeHooks(e) {
        const n = Pi(e);
        for (const r in n) this.removeHook(r, n[r]);
    }
    callHook(e, ...n) {
        return y_(this._hooks[e] || [], n);
    }
    callHookParallel(e, ...n) {
        return v_(this._hooks[e] || [], n);
    }
    callHookWith(e, n, ...r) {
        return e(this._hooks[n] || [], r);
    }
}
function w_() {
    return new b_();
}
function C_() {
    let t = null,
        e = !1;
    const n = (r) => {
        if (t && t !== r) throw new Error('Context conflict');
    };
    return {
        use: () => t,
        set: (r, s) => {
            s || n(r), (t = r), (e = !0);
        },
        unset: () => {
            (t = null), (e = !1);
        },
        call: (r, s) => {
            n(r), (t = r);
            try {
                return s();
            } finally {
                e || (t = null);
            }
        },
        async callAsync(r, s) {
            t = r;
            const i = () => {
                    t = r;
                },
                o = () => (t === r ? i : void 0);
            Ma.add(o);
            try {
                const a = s();
                return e || (t = null), await a;
            } finally {
                Ma.delete(o);
            }
        },
    };
}
function x_() {
    const t = {};
    return {
        get(e) {
            return t[e] || (t[e] = C_()), t[e], t[e];
        },
    };
}
const ms =
        typeof globalThis != 'undefined'
            ? globalThis
            : typeof self != 'undefined'
            ? self
            : typeof global != 'undefined'
            ? global
            : typeof window != 'undefined'
            ? window
            : {},
    Ea = '__unctx__',
    T_ = ms[Ea] || (ms[Ea] = x_()),
    S_ = (t) => T_.get(t),
    Pa = '__unctx_async_handlers__',
    Ma = ms[Pa] || (ms[Pa] = new Set());
function fr(t, e = {}) {
    const n = function () {};
    n.prototype.name = t;
    const r = {};
    return new Proxy(n, {
        get(s, i) {
            return i === 'caller' ? null : i === '__createMock__' ? fr : i in e ? e[i] : (r[i] = r[i] || fr(`${t}.${i.toString()}`));
        },
        apply(s, i, o) {
            return fr(`${t}()`);
        },
        construct(s, i, o) {
            return fr(`[${t}]`);
        },
        enumerate(s) {
            return [];
        },
    });
}
var k_ = fr('mock');
function es(t) {
    return console.warn(t), k_;
}
const E_ = new Set(['store', 'spa', 'fetchCounters']),
    P_ = new Set([
        'isHMR',
        'base',
        'payload',
        'from',
        'next',
        'error',
        'redirect',
        'redirected',
        'enablePreview',
        '$preview',
        'beforeNuxtRender',
        'beforeSerialize',
    ]),
    M_ = new Set(['req', 'res', 'ssrContext']),
    O_ = ['route', 'params', 'query'],
    Oa = { isClient: !0, isServer: !1, isDev: !1, isStatic: void 0, target: 'server', modern: !1 },
    A_ = (t) => {
        (t._legacyContext = new Proxy(t, {
            get(e, n) {
                if (E_.has(n)) return es(`Accessing ${n} is not supported in Nuxt 3.`);
                if (P_.has(n)) return es(`Accessing ${n} is not yet supported in Nuxt 3.`);
                if (O_.includes(n)) {
                    if (!('$router' in t)) return es('vue-router is not being used in this project.');
                    switch (n) {
                        case 'route':
                            return e.$router.currentRoute.value;
                        case 'params':
                        case 'query':
                            return e.$router.currentRoute.value[n];
                    }
                }
                if (n === '$config' || n === 'env') return H_();
                if (n in Oa) return Oa[n];
                if (!M_.has(n))
                    return n === 'ssrContext'
                        ? e._legacyContext
                        : e.ssrContext && n in e.ssrContext
                        ? e.ssrContext[n]
                        : n === 'nuxt'
                        ? e.payload
                        : n === 'nuxtState'
                        ? e.payload.data
                        : n in t.vueApp
                        ? t.vueApp[n]
                        : n in t
                        ? t[n]
                        : es(`Accessing ${n} is not supported in Nuxt3.`);
            },
        })),
            t.hook('app:created', () => {
                const e = new Proxy(t.vueApp, {
                    get(n, r) {
                        return ['$root', 'constructor'].includes(r) ? e : n[r] || t[r];
                    },
                });
                window[`$${t.globalName}`] = e;
            });
    },
    kc = S_('nuxt-app'),
    Ec = '__nuxt_plugin';
function $_(t) {
    const e = me(
        {
            provide: void 0,
            globalName: 'nuxt',
            payload: Ft(me({ data: {}, state: {}, _errors: {} }, window.__NUXT__)),
            isHydrating: !0,
            _asyncDataPromises: {},
        },
        t
    );
    (e.hooks = w_()),
        (e.hook = e.hooks.hook),
        (e.callHook = e.hooks.callHook),
        (e.provide = (s, i) => {
            const o = '$' + s;
            ts(e, o, i), ts(e.vueApp.config.globalProperties, o, i);
        }),
        ts(e.vueApp, '$nuxt', e),
        ts(e.vueApp.config.globalProperties, '$nuxt', e),
        e.ssrContext && (e.ssrContext.nuxt = e);
    const n = Ft(e.payload.config),
        r = new Proxy(n, {
            get(s, i) {
                var o;
                return i === 'public' ? s.public : (o = s[i]) != null ? o : s.public[i];
            },
            set(s, i, o) {
                return i === 'public' || i === 'app' ? !1 : ((s[i] = o), (s.public[i] = o), !0);
            },
        });
    return e.provide('config', r), e;
}
async function L_(t, e) {
    if (typeof e != 'function') return;
    const { provide: n } = (await gs(t, e, [t])) || {};
    if (n && typeof n == 'object') for (const r in n) t.provide(r, n[r]);
}
async function R_(t, e) {
    for (const n of e) await L_(t, n);
}
function F_(t) {
    let e = !1;
    const n = t.map((r) => (typeof r != 'function' ? () => {} : I_(r) ? ((e = !0), (s) => r(s._legacyContext, s.provide)) : r));
    return e && n.unshift(A_), n;
}
function mo(t) {
    return (t[Ec] = !0), t;
}
function I_(t) {
    return !t[Ec];
}
function gs(t, e, n) {
    const r = () => (n ? e(...n) : e());
    return kc.set(t), r();
}
function dt() {
    const t = qr();
    if (!t) {
        const e = kc.use();
        if (!e) throw new Error('nuxt instance unavailable');
        return e;
    }
    return t.appContext.app.$nuxt;
}
function H_() {
    return dt().$config;
}
function ts(t, e, n) {
    Object.defineProperty(t, e, { get: () => n });
}
const jn = (t, e) => {
        const n = dt(),
            r = If(n.payload.state, t);
        if (r.value === void 0 && e) {
            const s = e();
            if (we(s)) return (n.payload.state[t] = s), s;
            r.value = s;
        }
        return r;
    },
    ys = () => {
        const t = dt();
        return jn('error', () => t.payload.error);
    },
    D_ = (t) => {
        const e = dt(),
            n = ys(),
            r = typeof t == 'string' ? new Error(t) : t;
        return e.callHook('app:error', r), (n.value = n.value || r), r;
    },
    N_ = async (t = {}) => {
        const e = dt(),
            n = ys();
        e.callHook('app:error:cleared', t), t.redirect && (await e.$router.replace(t.redirect)), (n.value = null);
    },
    B_ = () => {
        var t;
        return (t = dt()) == null ? void 0 : t.$router;
    },
    Pc = () => dt()._route,
    V_ = (...t) => t.find((e) => e !== void 0),
    j_ = 'noopener noreferrer';
function z_(t) {
    const e = t.componentName || 'NuxtLink';
    return oe({
        name: e,
        props: {
            to: { type: [String, Object], default: void 0, required: !1 },
            href: { type: [String, Object], default: void 0, required: !1 },
            target: { type: String, default: void 0, required: !1 },
            rel: { type: String, default: void 0, required: !1 },
            noRel: { type: Boolean, default: void 0, required: !1 },
            activeClass: { type: String, default: void 0, required: !1 },
            exactActiveClass: { type: String, default: void 0, required: !1 },
            replace: { type: Boolean, default: void 0, required: !1 },
            ariaCurrentValue: { type: String, default: void 0, required: !1 },
            external: { type: Boolean, default: void 0, required: !1 },
            custom: { type: Boolean, default: void 0, required: !1 },
        },
        setup(n, { slots: r }) {
            const s = B_(),
                i = It(() => n.to || n.href || ''),
                o = It(() => (n.external || (n.target && n.target !== '_self') ? !0 : typeof i.value == 'object' ? !1 : i.value === '' || Cc(i.value, !0)));
            return () => {
                var u, f;
                if (!o.value)
                    return Xn(
                        Fn('RouterLink'),
                        {
                            to: i.value,
                            activeClass: n.activeClass || t.activeClass,
                            exactActiveClass: n.exactActiveClass || t.exactActiveClass,
                            replace: n.replace,
                            ariaCurrentValue: n.ariaCurrentValue,
                        },
                        r.default
                    );
                const a = typeof i.value == 'object' ? ((f = (u = s.resolve(i.value)) == null ? void 0 : u.href) != null ? f : null) : i.value || null,
                    c = n.target || null,
                    l = n.noRel ? null : V_(n.rel, t.externalRelAttribute, a ? j_ : '') || null;
                return Xn('a', { href: a, rel: l, target: c }, r.default());
            };
        },
    });
}
var go = z_({ componentName: 'NuxtLink' });
function Tt(t) {
    const e = Y(t) ? It(t) : t;
    dt()._useHead(e);
}
const ei = {};
function U_(t) {
    for (const e in ei) t.vueApp.component(e, ei[e]), t.vueApp.component('Lazy' + e, ei[e]);
}
var q_ = Object.defineProperty,
    Aa = Object.getOwnPropertySymbols,
    W_ = Object.prototype.hasOwnProperty,
    Z_ = Object.prototype.propertyIsEnumerable,
    $a = (t, e, n) => (e in t ? q_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n)),
    K_ = (t, e) => {
        for (var n in e || (e = {})) W_.call(e, n) && $a(t, n, e[n]);
        if (Aa) for (var n of Aa(e)) Z_.call(e, n) && $a(t, n, e[n]);
        return t;
    },
    Y_ = 'usehead',
    La = 'head:count',
    ti = 'data-head-attrs',
    X_ = (t, e, n) => {
        const r = n.createElement(t);
        for (const s of Object.keys(e)) {
            let i = e[s];
            s === 'key' || i === !1 || (s === 'children' ? (r.textContent = i) : r.setAttribute(s, i));
        }
        return r;
    };
function J_(t, e) {
    if (t instanceof HTMLElement && e instanceof HTMLElement) {
        const n = e.getAttribute('nonce');
        if (n && !t.getAttribute('nonce')) {
            const r = e.cloneNode(!0);
            return r.setAttribute('nonce', ''), (r.nonce = n), n === t.nonce && t.isEqualNode(r);
        }
    }
    return t.isEqualNode(e);
}
var Q_ = (t) => {
        const e = ['key', 'id', 'name', 'property'];
        for (const n of e) {
            const r = typeof t.getAttribute == 'function' ? (t.hasAttribute(n) ? t.getAttribute(n) : void 0) : t[n];
            if (r !== void 0) return { name: n, value: r };
        }
    },
    G_ = ['title', 'meta', 'link', 'base', 'style', 'script', 'htmlAttrs', 'bodyAttrs'],
    e1 = (t) => {
        const e = [];
        for (const n of Object.keys(t))
            if (t[n] != null) {
                if (n === 'title') e.push({ tag: n, props: { children: t[n] } });
                else if (n === 'base') e.push({ tag: n, props: K_({ key: 'default' }, t[n]) });
                else if (G_.includes(n)) {
                    const r = t[n];
                    Array.isArray(r)
                        ? r.forEach((s) => {
                              e.push({ tag: n, props: s });
                          })
                        : r && e.push({ tag: n, props: r });
                }
            }
        return e;
    },
    Ra = (t, e) => {
        const n = t.getAttribute(ti);
        if (n) for (const s of n.split(',')) s in e || t.removeAttribute(s);
        const r = [];
        for (const s in e) {
            const i = e[s];
            i != null && (i === !1 ? t.removeAttribute(s) : t.setAttribute(s, i), r.push(s));
        }
        r.length ? t.setAttribute(ti, r.join(',')) : t.removeAttribute(ti);
    },
    t1 = (t = window.document, e, n) => {
        var r;
        const s = t.head;
        let i = s.querySelector(`meta[name="${La}"]`);
        const o = i ? Number(i.getAttribute('content')) : 0,
            a = [];
        if (i)
            for (let l = 0, u = i.previousElementSibling; l < o; l++, u = (u == null ? void 0 : u.previousElementSibling) || null)
                ((r = u == null ? void 0 : u.tagName) == null ? void 0 : r.toLowerCase()) === e && a.push(u);
        else (i = t.createElement('meta')), i.setAttribute('name', La), i.setAttribute('content', '0'), s.append(i);
        let c = n.map((l) => X_(l.tag, l.props, t));
        (c = c.filter((l) => {
            for (let u = 0; u < a.length; u++) {
                const f = a[u];
                if (J_(f, l)) return a.splice(u, 1), !1;
            }
            return !0;
        })),
            a.forEach((l) => {
                var u;
                return (u = l.parentNode) == null ? void 0 : u.removeChild(l);
            }),
            c.forEach((l) => {
                s.insertBefore(l, i);
            }),
            i.setAttribute('content', '' + (o - a.length + c.length));
    },
    n1 = () => {
        let t = [],
            e = new Set();
        const n = {
            install(r) {
                (r.config.globalProperties.$head = n), r.provide(Y_, n);
            },
            get headTags() {
                const r = [];
                return (
                    t.forEach((s) => {
                        e1(s.value).forEach((o) => {
                            if (o.tag === 'meta' || o.tag === 'base' || o.tag === 'script') {
                                const a = Q_(o.props);
                                if (a) {
                                    let c = -1;
                                    for (let l = 0; l < r.length; l++) {
                                        const u = r[l],
                                            f = u.props[a.name],
                                            d = o.props[a.name];
                                        if (u.tag === o.tag && f === d) {
                                            c = l;
                                            break;
                                        }
                                    }
                                    c !== -1 && r.splice(c, 1);
                                }
                            }
                            r.push(o);
                        });
                    }),
                    r
                );
            },
            addHeadObjs(r) {
                t.push(r);
            },
            removeHeadObjs(r) {
                t = t.filter((s) => s !== r);
            },
            updateDOM(r = window.document) {
                let s,
                    i = {},
                    o = {};
                const a = {};
                for (const l of n.headTags) {
                    if (l.tag === 'title') {
                        s = l.props.children;
                        continue;
                    }
                    if (l.tag === 'htmlAttrs') {
                        Object.assign(i, l.props);
                        continue;
                    }
                    if (l.tag === 'bodyAttrs') {
                        Object.assign(o, l.props);
                        continue;
                    }
                    (a[l.tag] = a[l.tag] || []), a[l.tag].push(l);
                }
                s !== void 0 && (r.title = s), Ra(r.documentElement, i), Ra(r.body, o);
                const c = new Set([...Object.keys(a), ...e]);
                for (const l of c) t1(r, l, a[l] || []);
                e.clear(), Object.keys(a).forEach((l) => e.add(l));
            },
        };
        return n;
    };
function ni(t) {
    return t !== null && typeof t == 'object';
}
function Mi(t, e, n = '.', r) {
    if (!ni(e)) return Mi(t, {}, n, r);
    const s = Object.assign({}, e);
    for (const i in t) {
        if (i === '__proto__' || i === 'constructor') continue;
        const o = t[i];
        o != null &&
            ((r && r(s, i, o, n)) ||
                (Array.isArray(o) && Array.isArray(s[i])
                    ? (s[i] = o.concat(s[i]))
                    : ni(o) && ni(s[i])
                    ? (s[i] = Mi(o, s[i], (n ? `${n}.` : '') + i.toString(), r))
                    : (s[i] = o)));
    }
    return s;
}
function r1(t) {
    return (...e) => e.reduce((n, r) => Mi(n, r, '', t), {});
}
const s1 = r1();
var i1 = mo((t) => {
    const e = n1();
    t.vueApp.use(e);
    let n = !1;
    t.hooks.hookOnce('app:mounted', () => {
        Qo(() => {
            e.updateDOM();
        }),
            (n = !0);
    });
    const r = ie();
    t._useHead = (s) => {
        const i = ie(s);
        'titleTemplate' in i.value && (r.value = i.value.titleTemplate);
        const o = It(() => {
            const c = { meta: [] };
            return (
                r.value && 'title' in i.value && (c.title = typeof r.value == 'function' ? r.value(i.value.title) : r.value.replace(/%s/g, i.value.title)),
                i.value.charset && c.meta.push({ key: 'charset', charset: i.value.charset }),
                i.value.viewport && c.meta.push({ name: 'viewport', content: i.value.viewport }),
                s1(c, i.value)
            );
        });
        e.addHeadObjs(o),
            n &&
                Qo(() => {
                    e.updateDOM();
                }),
            qr() &&
                Bt(() => {
                    e.removeHeadObjs(o), e.updateDOM();
                });
    };
});
const o1 = (t) => Object.fromEntries(Object.entries(t).filter(([, e]) => e !== void 0)),
    on = (t, e) => (n, r) => (
        Tt(() => t(me(me({}, o1(n)), r.attrs), r)),
        () => {
            var s, i;
            return e ? ((i = (s = r.slots).default) == null ? void 0 : i.call(s)) : null;
        }
    ),
    Pn = {
        accesskey: String,
        autocapitalize: String,
        autofocus: { type: Boolean, default: void 0 },
        class: String,
        contenteditable: { type: Boolean, default: void 0 },
        contextmenu: String,
        dir: String,
        draggable: { type: Boolean, default: void 0 },
        enterkeyhint: String,
        exportparts: String,
        hidden: { type: Boolean, default: void 0 },
        id: String,
        inputmode: String,
        is: String,
        itemid: String,
        itemprop: String,
        itemref: String,
        itemscope: String,
        itemtype: String,
        lang: String,
        nonce: String,
        part: String,
        slot: String,
        spellcheck: { type: Boolean, default: void 0 },
        style: String,
        tabindex: String,
        title: String,
        translate: String,
    },
    a1 = oe({
        name: 'Script',
        props: mt(me({}, Pn), {
            async: Boolean,
            crossorigin: { type: [Boolean, String], default: void 0 },
            defer: Boolean,
            integrity: String,
            nomodule: Boolean,
            nonce: String,
            referrerpolicy: String,
            src: String,
            type: String,
            charset: String,
            language: String,
        }),
        setup: on((t) => ({ script: [t] })),
    }),
    l1 = oe({
        name: 'Link',
        props: mt(me({}, Pn), {
            as: String,
            crossorigin: String,
            disabled: Boolean,
            href: String,
            hreflang: String,
            imagesizes: String,
            imagesrcset: String,
            integrity: String,
            media: String,
            prefetch: { type: Boolean, default: void 0 },
            referrerpolicy: String,
            rel: String,
            sizes: String,
            title: String,
            type: String,
            methods: String,
            target: String,
        }),
        setup: on((t) => ({ link: [t] })),
    }),
    c1 = oe({ name: 'Base', props: mt(me({}, Pn), { href: String, target: String }), setup: on((t) => ({ base: t })) }),
    u1 = oe({
        name: 'Title',
        setup: on((t, { slots: e }) => {
            var r, s;
            return { title: ((s = (r = e.default()) == null ? void 0 : r[0]) == null ? void 0 : s.children) || null };
        }),
    }),
    f1 = oe({ name: 'Meta', props: mt(me({}, Pn), { charset: String, content: String, httpEquiv: String, name: String }), setup: on((t) => ({ meta: [t] })) }),
    d1 = oe({
        name: 'Style',
        props: mt(me({}, Pn), { type: String, media: String, nonce: String, title: String, scoped: { type: Boolean, default: void 0 } }),
        setup: on((t, { slots: e }) => {
            var s, i, o;
            const n = me({}, t),
                r = (o = (i = (s = e.default) == null ? void 0 : s.call(e)) == null ? void 0 : i[0]) == null ? void 0 : o.children;
            return r && (n.children = r), { style: [n] };
        }),
    }),
    h1 = oe({
        name: 'Head',
        setup: (t, e) => () => {
            var n, r;
            return (r = (n = e.slots).default) == null ? void 0 : r.call(n);
        },
    }),
    _1 = oe({ name: 'Html', props: mt(me({}, Pn), { manifest: String, version: String, xmlns: String }), setup: on((t) => ({ htmlAttrs: t }), !0) }),
    p1 = oe({ name: 'Body', props: Pn, setup: on((t) => ({ bodyAttrs: t }), !0) });
var Fa = Object.freeze(
        Object.defineProperty(
            { __proto__: null, Script: a1, Link: l1, Base: c1, Title: u1, Meta: f1, Style: d1, Head: h1, Html: _1, Body: p1 },
            Symbol.toStringTag,
            { value: 'Module' }
        )
    ),
    Mc = { globalMeta: { charset: 'utf-8', viewport: 'width=device-width, initial-scale=1', meta: [], link: [], style: [], script: [] }, mixinKey: 'created' };
const m1 = {
    [Mc.mixinKey]() {
        var s;
        const t = qr();
        if (!t) return;
        const e = t.type || ((s = t.proxy) == null ? void 0 : s.$options);
        if (!e || !('head' in e)) return;
        const n = dt(),
            r = typeof e.head == 'function' ? It(() => e.head(n)) : e.head;
        Tt(r);
    },
};
var g1 = mo((t) => {
    Tt(Mc.globalMeta), t.vueApp.mixin(m1);
    for (const e in Fa) t.vueApp.component(e, Fa[e]);
});
function ri(t) {
    if (typeof t == 'object') throw new TypeError('[nuxt] Route location object cannot be resolved when vue-router is disabled (no pages).');
    const e = po(t.toString());
    return {
        path: e.pathname,
        fullPath: t,
        query: wc(e.search),
        hash: e.hash,
        params: {},
        name: void 0,
        matched: [],
        redirectedFrom: void 0,
        meta: {},
        href: t,
    };
}
var y1 = mo((t) => {
    const e = [],
        n = { 'navigate:before': [], 'resolve:before': [], 'navigate:after': [], error: [] },
        r = (a, c) => (n[a].push(c), () => n[a].splice(n[a].indexOf(c), 1)),
        s = Ft(ri(window.location.href));
    async function i(a, c) {
        try {
            const l = ri(a);
            t.isHydrating || (await gs(t, N_));
            for (const u of n['navigate:before']) {
                const f = await u(l, s);
                if (f === !1 || f instanceof Error) return;
                if (f) return i(f, !0);
            }
            for (const u of n['resolve:before']) await u(l, s);
            Object.assign(s, l), window.history[c ? 'replaceState' : 'pushState']({}, '', a);
            for (const u of n['navigate:after']) await u(l, s);
        } catch (l) {
            for (const u of n.error) await u(l);
        }
    }
    const o = {
        currentRoute: s,
        isReady: () => Promise.resolve(),
        options: {},
        install: () => Promise.resolve(),
        push: (a) => i(a, !1),
        replace: (a) => i(a, !0),
        back: () => window.history.go(-1),
        go: (a) => window.history.go(a),
        forward: () => window.history.go(1),
        beforeResolve: (a) => r('resolve:before', a),
        beforeEach: (a) => r('navigate:before', a),
        afterEach: (a) => r('navigate:after', a),
        onError: (a) => r('error', a),
        resolve: ri,
        addRoute: (a, c) => {
            e.push(c);
        },
        getRoutes: () => e,
        hasRoute: (a) => e.some((c) => c.name === a),
        removeRoute: (a) => {
            const c = e.findIndex((l) => l.name === a);
            c !== -1 && e.splice(c, 1);
        },
    };
    return (
        t.vueApp.component('RouterLink', {
            functional: !0,
            props: { to: String },
            setup:
                (a, { slots: c }) =>
                () =>
                    Xn(
                        'a',
                        {
                            href: a.to,
                            onClick: (l) => {
                                l.preventDefault(), o.push(a.to);
                            },
                        },
                        c
                    ),
        }),
        window.addEventListener('popstate', (a) => {
            const c = a.target.location;
            o.replace(c.href.replace(c.origin, ''));
        }),
        (t._route = s),
        (t._middleware = t._middleware || { global: [], named: {} }),
        o.beforeEach(async (a, c) => {
            (a.meta = Ft(a.meta || {})), (t._processingMiddleware = !0);
            const l = new Set(t._middleware.global);
            for (const u of l) {
                const f = await gs(t, u, [a, c]);
                if (f || f === !1) return f;
            }
        }),
        o.afterEach(() => {
            delete t._processingMiddleware;
        }),
        { provide: { route: s, router: o } }
    );
});
const v1 = !1;
/*!
 * pinia v2.0.13
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Oc = (t) => t,
    b1 = Symbol();
var Ia;
(function (t) {
    (t.direct = 'direct'), (t.patchObject = 'patch object'), (t.patchFunction = 'patch function');
})(Ia || (Ia = {}));
function w1() {
    const t = nf(!0),
        e = t.run(() => ie({}));
    let n = [],
        r = [];
    const s = Gi({
        install(i) {
            Oc(s), (s._a = i), i.provide(b1, s), (i.config.globalProperties.$pinia = s), r.forEach((o) => n.push(o)), (r = []);
        },
        use(i) {
            return !this._a && !v1 ? r.push(i) : n.push(i), this;
        },
        _p: n,
        _a: null,
        _e: t,
        _s: new Map(),
        state: e,
    });
    return s;
}
const C1 = (t, e) => {
    const n = w1();
    t.vueApp.use(n),
        e('pinia', n),
        (t.pinia = n),
        Oc(n),
        n._p.push(({ store: r }) => {
            Object.defineProperty(r, '$nuxt', { value: t });
        }),
        t.nuxtState && t.nuxtState.pinia && (n.state.value = t.nuxtState.pinia);
};
var x1 = [U_, i1, g1, y1, C1];
const T1 = () => ({
        benefits: [
            {
                title: 'No-code',
                text: "Yeah, it's almost a no-code decision. This service is like a breath of fresh air: ease in use and functional. You don't need to know programming languages to get a request from a potential client in a convenient place",
            },
            {
                title: 'Beautiful and simple',
                text: "You know, we really made a lot of effort to make such a banal at first glance service a pleasure to use. Fresh design with familiar elements. Isn't this happiness? Is the Flashform looks simple? You are all right!",
            },
            {
                title: 'One function',
                text: 'You understand, nothing extra. We simply take and send data from website contact forms to messengers of your choice. One service \u2014 one function. And it does the job as it should, without much fuss',
            },
            {
                title: 'To anyone',
                text: 'And that, is one of the best features of this product. It is designed both for professional developers who hate routine actions in their work, and for beginners in business who are making their first or second website in their life',
            },
            {
                title: 'Who loves quality',
                text: 'A business needs a contact form to work properly, right? The flash form will do its main job well \u2014 it will send you a messenger message about a new application from the website as soon as someone fills out the form',
            },
            {
                title: 'And that\u2019s all',
                text: 'With practical experience, the developers of this product have only one goal in mind \u2014 to make work life a little easier. No, no less functional (this is important). Namely, it is easier, throwing a lifeline from boring tasks',
            },
        ],
        integrations: [
            { name: 'What\u2019sApp', icon: '/icons/whatsapp.svg' },
            { name: 'Email', icon: '/icons/email.svg' },
            { name: 'Telegram', icon: '/icons/telegram.svg' },
            { name: 'Facebook Messanger', icon: '/icons/messanger.svg' },
            { name: 'Discord', icon: '/icons/discord.svg' },
            { name: 'Etc.', icon: '/icons/plus.svg' },
        ],
        steps: [
            'Create and copy your personal ID link',
            'Paste it in your HTML form or in fetch as URL',
            'Choose where you want to send data from form',
            'Done! The data from your website form is almost here',
        ],
        faq: [
            {
                title: 'Is it form builder?',
                text: 'No, this is the web service that provide an API for implementing backend function to HTML form. It just send all data from your website form to convinient messengers or other chanels.',
            },
            {
                title: 'What I must to do for implementing this to my website form?',
                text: `Just follow these three steps:
      <br/>1. Create an copy your personal ID link.
      <br/>2. Paste it in your HTML form or in fetch as URL.
      <br/>3. Choose where you want to send data from form.
      <br/>4. Done! The data from your website form is almost here. `,
            },
            {
                title: 'Are the instructions different for integration with different messengers?',
                text: 'Yes, there are certain differences in the instructions for each messenger. But we have done everything so that you as a user do not experience any inconvenience:)',
            },
            {
                title: 'Is FlashForm a paid product?',
                text: 'You can use a free account if it is sufficient for your purposes. But if you need more integrations, then for $10 per month you get unlimited access to integrations.',
            },
        ],
    }),
    Ac = () => {
        const t = jn('inLoaded', () => !1),
            e = jn('isWaiting', () => !1),
            n = jn('isSceneInited', () => !1);
        return { isLoaded: t, isWaiting: e, isSceneInited: n };
    };
var Oi = ((t) => ((t.primary = 'primate'), (t.danger = 'danger'), (t.success = 'success'), t))(Oi || {});
const S1 = () => {
        const t = jn('toasts', () => []);
        return {
            toasts: t,
            addToast: (r) => {
                const s = mt(me({}, r), { id: Date.now().toString() });
                t.value = [s, ...t.value];
            },
            updateToasts: (r) => {
                t.value = r;
            },
        };
    },
    k1 = 'https://formspree.io/f/xyyvopzy',
    $c = (t, e, n = 'Flashform Website', r = []) => {
        const s = [k1, ...r],
            { isWaiting: i } = Ac(),
            { addToast: o } = S1(),
            a = () => {
                e.value.forEach((f) => f.throwError());
            },
            c = () => {
                var f;
                (f = t.inputs) == null ||
                    f.forEach((d) => {
                        (d.error = !0), (d.value = '');
                    }),
                    e.value.forEach((d) => d.reset()),
                    (t.hasErrors = !1);
            };
        return {
            onInputValue: (f) => {
                const d = t.inputs.findIndex((h) => h.id === f.id);
                (t.inputs[d].value = f.value), (t.inputs[d].error = f.error);
            },
            onSubmit: async () =>
                new Promise(async (f, d) => {
                    const h = t.inputs;
                    if (h.find((_) => _.error)) {
                        a();
                        return;
                    }
                    const m = new FormData();
                    m.append('From:', n),
                        h.forEach((_) => {
                            m.append(_.name, _.value);
                        });
                    try {
                        (i.value = !0),
                            s.forEach(async (_) => {
                                await fetch(_, { method: 'POST', body: m, mode: 'no-cors' });
                            }),
                            f(h),
                            o({ color: Oi.success, id: Date.now().toString(), text: 'You have successfully registered for the beta' }),
                            c();
                    } catch (_) {
                        console.log(_.message),
                            (t.hasErrors = !0),
                            d(_.message),
                            o({ color: Oi.danger, id: Date.now().toString(), text: 'An error has occurred:(' });
                    } finally {
                        setTimeout(() => {
                            i.value = !1;
                        }, 400);
                    }
                }),
        };
    },
    yo = () => {
        const t = jn('isPopupOpened', () => !1);
        return {
            isOpened: t,
            openPopup: () => {
                t.value = !0;
            },
        };
    },
    E1 = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
class P1 {
    required(e) {
        return !!e.trim();
    }
    minLength(e, n) {
        return !(e.trim().length < n);
    }
    email(e) {
        if (!e) return !1;
        const n = e.split('@');
        if (n.length !== 2) return !1;
        const r = n[0],
            s = n[1];
        return r.length > 64
            ? !1
            : !(
                  s.length > 255 ||
                  s.split('.').some(function (o) {
                      return o.length > 63;
                  }) ||
                  !E1.test(e)
              );
    }
    maxlength(e, n) {
        return !(e.trim().length > n);
    }
    isEqual(e, n) {
        return e.trim() === n.trim();
    }
}
var M1 = new P1();
const O1 = (t, e) => {
    var y;
    const n = ie((y = e.value) != null ? y : ''),
        r = ie(!1),
        s = ie(!1),
        i = ie(null),
        o = () => {
            r.value = !0;
        },
        a = () => {
            n.value.trim().length || (r.value = !1);
        },
        c = () => {
            n.value.trim() !== '' && (o(), i.value.focus(), t('inputValue', { id: e.id, value: n.value, error: s.value }));
        },
        l = () =>
            e.validation
                ? e.validation
                      .split(' ')
                      .map((v) => {
                          const w = v.replace(/[\d(].{0,}/gm, ''),
                              C = v.replace(/.{0,}\(|\)/gm, '');
                          return { method: w, param: C };
                      })
                      .map((v) => !M1[v.method](n.value, v.param && v.param))
                : [!1],
        u = () => {
            (s.value = l().includes(!0)), t('inputValue', { id: e.id, value: n.value, error: s.value });
        },
        f = () => {
            l().includes(!0) && ((r.value = !0), (s.value = !0), i.value.focus());
        },
        d = () => {
            (n.value = ''), (s.value = !1), a(), c();
        },
        h = () => {
            d(), t('inputValue', { id: e.id, value: '', error: s.value });
        };
    return (
        St(() => {
            c();
        }),
        { inputValue: n, inputFocus: r, error: s, $input: i, onFocus: o, onBlur: a, onInput: u, reset: d, resetSearch: h, throwError: f }
    );
};
function Ot(t) {
    if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function Lc(t, e) {
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
}
/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ye = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
    Jn = { duration: 0.5, overwrite: !1, delay: 0 },
    vo,
    rt = 1e8,
    fe = 1 / rt,
    Ai = Math.PI * 2,
    A1 = Ai / 4,
    $1 = 0,
    Rc = Math.sqrt,
    L1 = Math.cos,
    R1 = Math.sin,
    Pe = function (e) {
        return typeof e == 'string';
    },
    ke = function (e) {
        return typeof e == 'function';
    },
    Ht = function (e) {
        return typeof e == 'number';
    },
    bo = function (e) {
        return typeof e == 'undefined';
    },
    Dt = function (e) {
        return typeof e == 'object';
    },
    Ve = function (e) {
        return e !== !1;
    },
    Fc = function () {
        return typeof window != 'undefined';
    },
    ns = function (e) {
        return ke(e) || Pe(e);
    },
    Ic = (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
    Ie = Array.isArray,
    $i = /(?:-?\.?\d|\.)+/gi,
    Hc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    In = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    si = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Dc = /[+-]=-?[.\d]+/,
    Nc = /[^,'"\[\]\s]+/gi,
    F1 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    pe,
    yt,
    Li,
    wo,
    Je = {},
    vs = {},
    Bc,
    Vc = function (e) {
        return (vs = kn(e, Je)) && ht;
    },
    Co = function (e, n) {
        return console.warn('Invalid property', e, 'set to', n, 'Missing plugin? gsap.registerPlugin()');
    },
    bs = function (e, n) {
        return !n && console.warn(e);
    },
    jc = function (e, n) {
        return (e && (Je[e] = n) && vs && (vs[e] = n)) || Je;
    },
    Fr = function () {
        return 0;
    },
    xo = {},
    Gt = [],
    Ri = {},
    zc,
    We = {},
    ii = {},
    Ha = 30,
    is = [],
    To = '',
    So = function (e) {
        var n = e[0],
            r,
            s;
        if ((Dt(n) || ke(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
            for (s = is.length; s-- && !is[s].targetTest(n); );
            r = is[s];
        }
        for (s = e.length; s--; ) (e[s] && (e[s]._gsap || (e[s]._gsap = new fu(e[s], r)))) || e.splice(s, 1);
        return e;
    },
    Cn = function (e) {
        return e._gsap || So(st(e))[0]._gsap;
    },
    Uc = function (e, n, r) {
        return (r = e[n]) && ke(r) ? e[n]() : (bo(r) && e.getAttribute && e.getAttribute(n)) || r;
    },
    je = function (e, n) {
        return (e = e.split(',')).forEach(n) || e;
    },
    ye = function (e) {
        return Math.round(e * 1e5) / 1e5 || 0;
    },
    $e = function (e) {
        return Math.round(e * 1e7) / 1e7 || 0;
    },
    zn = function (e, n) {
        var r = n.charAt(0),
            s = parseFloat(n.substr(2));
        return (e = parseFloat(e)), r === '+' ? e + s : r === '-' ? e - s : r === '*' ? e * s : e / s;
    },
    I1 = function (e, n) {
        for (var r = n.length, s = 0; e.indexOf(n[s]) < 0 && ++s < r; );
        return s < r;
    },
    ws = function () {
        var e = Gt.length,
            n = Gt.slice(0),
            r,
            s;
        for (Ri = {}, Gt.length = 0, r = 0; r < e; r++) (s = n[r]), s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
    },
    qc = function (e, n, r, s) {
        Gt.length && ws(), e.render(n, r, s), Gt.length && ws();
    },
    Wc = function (e) {
        var n = parseFloat(e);
        return (n || n === 0) && (e + '').match(Nc).length < 2 ? n : Pe(e) ? e.trim() : e;
    },
    Zc = function (e) {
        return e;
    },
    at = function (e, n) {
        for (var r in n) r in e || (e[r] = n[r]);
        return e;
    },
    H1 = function (e) {
        return function (n, r) {
            for (var s in r) s in n || (s === 'duration' && e) || s === 'ease' || (n[s] = r[s]);
        };
    },
    kn = function (e, n) {
        for (var r in n) e[r] = n[r];
        return e;
    },
    Da = function t(e, n) {
        for (var r in n) r !== '__proto__' && r !== 'constructor' && r !== 'prototype' && (e[r] = Dt(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
        return e;
    },
    Cs = function (e, n) {
        var r = {},
            s;
        for (s in e) s in n || (r[s] = e[s]);
        return r;
    },
    wr = function (e) {
        var n = e.parent || pe,
            r = e.keyframes ? H1(Ie(e.keyframes)) : at;
        if (Ve(e.inherit)) for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
        return e;
    },
    D1 = function (e, n) {
        for (var r = e.length, s = r === n.length; s && r-- && e[r] === n[r]; );
        return r < 0;
    },
    Kc = function (e, n, r, s, i) {
        r === void 0 && (r = '_first'), s === void 0 && (s = '_last');
        var o = e[s],
            a;
        if (i) for (a = n[i]; o && o[i] > a; ) o = o._prev;
        return (
            o ? ((n._next = o._next), (o._next = n)) : ((n._next = e[r]), (e[r] = n)),
            n._next ? (n._next._prev = n) : (e[s] = n),
            (n._prev = o),
            (n.parent = n._dp = e),
            n
        );
    },
    Vs = function (e, n, r, s) {
        r === void 0 && (r = '_first'), s === void 0 && (s = '_last');
        var i = n._prev,
            o = n._next;
        i ? (i._next = o) : e[r] === n && (e[r] = o), o ? (o._prev = i) : e[s] === n && (e[s] = i), (n._next = n._prev = n.parent = null);
    },
    $t = function (e, n) {
        e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0);
    },
    xn = function (e, n) {
        if (e && (!n || n._end > e._dur || n._start < 0)) for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
        return e;
    },
    N1 = function (e) {
        for (var n = e.parent; n && n.parent; ) (n._dirty = 1), n.totalDuration(), (n = n.parent);
        return e;
    },
    B1 = function t(e) {
        return !e || (e._ts && t(e.parent));
    },
    Na = function (e) {
        return e._repeat ? Qn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Qn = function (e, n) {
        var r = Math.floor((e /= n));
        return e && r === e ? r - 1 : r;
    },
    xs = function (e, n) {
        return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
    },
    js = function (e) {
        return (e._end = $e(e._start + (e._tDur / Math.abs(e._ts || e._rts || fe) || 0)));
    },
    ko = function (e, n) {
        var r = e._dp;
        return (
            r &&
                r.smoothChildTiming &&
                e._ts &&
                ((e._start = $e(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts))), js(e), r._dirty || xn(r, e)),
            e
        );
    },
    Yc = function (e, n) {
        var r;
        if (
            ((n._time || (n._initted && !n._dur)) && ((r = xs(e.rawTime(), n)), (!n._dur || Wr(0, n.totalDuration(), r) - n._tTime > fe) && n.render(r, !0)),
            xn(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
            if (e._dur < e.duration()) for (r = e; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            e._zTime = -fe;
        }
    },
    wt = function (e, n, r, s) {
        return (
            n.parent && $t(n),
            (n._start = $e((Ht(r) ? r : r || e !== pe ? et(e, r, n) : e._time) + n._delay)),
            (n._end = $e(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0))),
            Kc(e, n, '_first', '_last', e._sort ? '_start' : 0),
            Fi(n) || (e._recent = n),
            s || Yc(e, n),
            e
        );
    },
    Xc = function (e, n) {
        return (Je.ScrollTrigger || Co('scrollTrigger', n)) && Je.ScrollTrigger.create(n, e);
    },
    Jc = function (e, n, r, s) {
        if ((Po(e, n), !e._initted)) return 1;
        if (!r && e._pt && ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) && zc !== Ke.frame) return Gt.push(e), (e._lazy = [n, s]), 1;
    },
    V1 = function t(e) {
        var n = e.parent;
        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
    },
    Fi = function (e) {
        var n = e.data;
        return n === 'isFromStart' || n === 'isStart';
    },
    j1 = function (e, n, r, s) {
        var i = e.ratio,
            o = n < 0 || (!n && ((!e._start && V1(e) && !(!e._initted && Fi(e))) || ((e._ts < 0 || e._dp._ts < 0) && !Fi(e)))) ? 0 : 1,
            a = e._rDelay,
            c = 0,
            l,
            u,
            f;
        if (
            (a &&
                e._repeat &&
                ((c = Wr(0, e._tDur, n)),
                (u = Qn(c, a)),
                e._yoyo && u & 1 && (o = 1 - o),
                u !== Qn(e._tTime, a) && ((i = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
            o !== i || s || e._zTime === fe || (!n && e._zTime))
        ) {
            if (!e._initted && Jc(e, n, s, r)) return;
            for (f = e._zTime, e._zTime = n || (r ? fe : 0), r || (r = n && !f), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = c, l = e._pt; l; )
                l.r(o, l.d), (l = l._next);
            e._startAt && n < 0 && e._startAt.render(n, !0, !0),
                e._onUpdate && !r && it(e, 'onUpdate'),
                c && e._repeat && !r && e.parent && it(e, 'onRepeat'),
                (n >= e._tDur || n < 0) && e.ratio === o && (o && $t(e, 1), r || (it(e, o ? 'onComplete' : 'onReverseComplete', !0), e._prom && e._prom()));
        } else e._zTime || (e._zTime = n);
    },
    z1 = function (e, n, r) {
        var s;
        if (r > n)
            for (s = e._first; s && s._start <= r; ) {
                if (s.data === 'isPause' && s._start > n) return s;
                s = s._next;
            }
        else
            for (s = e._last; s && s._start >= r; ) {
                if (s.data === 'isPause' && s._start < n) return s;
                s = s._prev;
            }
    },
    Gn = function (e, n, r, s) {
        var i = e._repeat,
            o = $e(n) || 0,
            a = e._tTime / e._tDur;
        return (
            a && !s && (e._time *= o / e._dur),
            (e._dur = o),
            (e._tDur = i ? (i < 0 ? 1e10 : $e(o * (i + 1) + e._rDelay * i)) : o),
            a > 0 && !s ? ko(e, (e._tTime = e._tDur * a)) : e.parent && js(e),
            r || xn(e.parent, e),
            e
        );
    },
    Ba = function (e) {
        return e instanceof Re ? xn(e) : Gn(e, e._dur);
    },
    U1 = { _start: 0, endTime: Fr, totalDuration: Fr },
    et = function t(e, n, r) {
        var s = e.labels,
            i = e._recent || U1,
            o = e.duration() >= rt ? i.endTime(!1) : e._dur,
            a,
            c,
            l;
        return Pe(n) && (isNaN(n) || n in s)
            ? ((c = n.charAt(0)),
              (l = n.substr(-1) === '%'),
              (a = n.indexOf('=')),
              c === '<' || c === '>'
                  ? (a >= 0 && (n = n.replace(/=/, '')),
                    (c === '<' ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (l ? (a < 0 ? i : r).totalDuration() / 100 : 1))
                  : a < 0
                  ? (n in s || (s[n] = o), s[n])
                  : ((c = parseFloat(n.charAt(a - 1) + n.substr(a + 1))),
                    l && r && (c = (c / 100) * (Ie(r) ? r[0] : r).totalDuration()),
                    a > 1 ? t(e, n.substr(0, a - 1), r) + c : o + c))
            : n == null
            ? o
            : +n;
    },
    Cr = function (e, n, r) {
        var s = Ht(n[1]),
            i = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            o = n[i],
            a,
            c;
        if ((s && (o.duration = n[1]), (o.parent = r), e)) {
            for (a = o, c = r; c && !('immediateRender' in a); ) (a = c.vars.defaults || {}), (c = Ve(c.vars.inherit) && c.parent);
            (o.immediateRender = Ve(a.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = n[i - 1]);
        }
        return new xe(n[0], o, n[i + 1]);
    },
    an = function (e, n) {
        return e || e === 0 ? n(e) : n;
    },
    Wr = function (e, n, r) {
        return r < e ? e : r > n ? n : r;
    },
    Le = function (e, n) {
        return !Pe(e) || !(n = F1.exec(e)) ? '' : n[1];
    },
    q1 = function (e, n, r) {
        return an(r, function (s) {
            return Wr(e, n, s);
        });
    },
    Ii = [].slice,
    Qc = function (e, n) {
        return e && Dt(e) && 'length' in e && ((!n && !e.length) || (e.length - 1 in e && Dt(e[0]))) && !e.nodeType && e !== yt;
    },
    W1 = function (e, n, r) {
        return (
            r === void 0 && (r = []),
            e.forEach(function (s) {
                var i;
                return (Pe(s) && !n) || Qc(s, 1) ? (i = r).push.apply(i, st(s)) : r.push(s);
            }) || r
        );
    },
    st = function (e, n, r) {
        return Pe(e) && !r && (Li || !er()) ? Ii.call((n || wo).querySelectorAll(e), 0) : Ie(e) ? W1(e, r) : Qc(e) ? Ii.call(e, 0) : e ? [e] : [];
    },
    Z1 = function (e) {
        return (
            (e = st(e)[0] || bs('Invalid scope') || {}),
            function (n) {
                var r = e.current || e.nativeElement || e;
                return st(n, r.querySelectorAll ? r : r === e ? bs('Invalid scope') || wo.createElement('div') : e);
            }
        );
    },
    Gc = function (e) {
        return e.sort(function () {
            return 0.5 - Math.random();
        });
    },
    eu = function (e) {
        if (ke(e)) return e;
        var n = Dt(e) ? e : { each: e },
            r = Tn(n.ease),
            s = n.from || 0,
            i = parseFloat(n.base) || 0,
            o = {},
            a = s > 0 && s < 1,
            c = isNaN(s) || a,
            l = n.axis,
            u = s,
            f = s;
        return (
            Pe(s) ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[s] || 0) : !a && c && ((u = s[0]), (f = s[1])),
            function (d, h, y) {
                var m = (y || n).length,
                    _ = o[m],
                    v,
                    w,
                    C,
                    S,
                    x,
                    k,
                    T,
                    P,
                    E;
                if (!_) {
                    if (((E = n.grid === 'auto' ? 0 : (n.grid || [1, rt])[1]), !E)) {
                        for (T = -rt; T < (T = y[E++].getBoundingClientRect().left) && E < m; );
                        E--;
                    }
                    for (
                        _ = o[m] = [], v = c ? Math.min(E, m) * u - 0.5 : s % E, w = E === rt ? 0 : c ? (m * f) / E - 0.5 : (s / E) | 0, T = 0, P = rt, k = 0;
                        k < m;
                        k++
                    )
                        (C = (k % E) - v),
                            (S = w - ((k / E) | 0)),
                            (_[k] = x = l ? Math.abs(l === 'y' ? S : C) : Rc(C * C + S * S)),
                            x > T && (T = x),
                            x < P && (P = x);
                    s === 'random' && Gc(_),
                        (_.max = T - P),
                        (_.min = P),
                        (_.v = m =
                            (parseFloat(n.amount) || parseFloat(n.each) * (E > m ? m - 1 : l ? (l === 'y' ? m / E : E) : Math.max(E, m / E)) || 0) *
                            (s === 'edges' ? -1 : 1)),
                        (_.b = m < 0 ? i - m : i),
                        (_.u = Le(n.amount || n.each) || 0),
                        (r = r && m < 0 ? lu(r) : r);
                }
                return (m = (_[d] - _.min) / _.max || 0), $e(_.b + (r ? r(m) : m) * _.v) + _.u;
            }
        );
    },
    Hi = function (e) {
        var n = Math.pow(10, ((e + '').split('.')[1] || '').length);
        return function (r) {
            var s = Math.round(parseFloat(r) / e) * e * n;
            return (s - (s % 1)) / n + (Ht(r) ? 0 : Le(r));
        };
    },
    tu = function (e, n) {
        var r = Ie(e),
            s,
            i;
        return (
            !r && Dt(e) && ((s = r = e.radius || rt), e.values ? ((e = st(e.values)), (i = !Ht(e[0])) && (s *= s)) : (e = Hi(e.increment))),
            an(
                n,
                r
                    ? ke(e)
                        ? function (o) {
                              return (i = e(o)), Math.abs(i - o) <= s ? i : o;
                          }
                        : function (o) {
                              for (var a = parseFloat(i ? o.x : o), c = parseFloat(i ? o.y : 0), l = rt, u = 0, f = e.length, d, h; f--; )
                                  i ? ((d = e[f].x - a), (h = e[f].y - c), (d = d * d + h * h)) : (d = Math.abs(e[f] - a)), d < l && ((l = d), (u = f));
                              return (u = !s || l <= s ? e[u] : o), i || u === o || Ht(o) ? u : u + Le(o);
                          }
                    : Hi(e)
            )
        );
    },
    nu = function (e, n, r, s) {
        return an(Ie(e) ? !n : r === !0 ? !!(r = 0) : !s, function () {
            return Ie(e)
                ? e[~~(Math.random() * e.length)]
                : (r = r || 1e-5) &&
                      (s = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
                      Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) * r * s) / s;
        });
    },
    K1 = function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        return function (s) {
            return n.reduce(function (i, o) {
                return o(i);
            }, s);
        };
    },
    Y1 = function (e, n) {
        return function (r) {
            return e(parseFloat(r)) + (n || Le(r));
        };
    },
    X1 = function (e, n, r) {
        return su(e, n, 0, 1, r);
    },
    ru = function (e, n, r) {
        return an(r, function (s) {
            return e[~~n(s)];
        });
    },
    J1 = function t(e, n, r) {
        var s = n - e;
        return Ie(e)
            ? ru(e, t(0, e.length), n)
            : an(r, function (i) {
                  return ((s + ((i - e) % s)) % s) + e;
              });
    },
    Q1 = function t(e, n, r) {
        var s = n - e,
            i = s * 2;
        return Ie(e)
            ? ru(e, t(0, e.length - 1), n)
            : an(r, function (o) {
                  return (o = (i + ((o - e) % i)) % i || 0), e + (o > s ? i - o : o);
              });
    },
    Ir = function (e) {
        for (var n = 0, r = '', s, i, o, a; ~(s = e.indexOf('random(', n)); )
            (o = e.indexOf(')', s)),
                (a = e.charAt(s + 7) === '['),
                (i = e.substr(s + 7, o - s - 7).match(a ? Nc : $i)),
                (r += e.substr(n, s - n) + nu(a ? i : +i[0], a ? 0 : +i[1], +i[2] || 1e-5)),
                (n = o + 1);
        return r + e.substr(n, e.length - n);
    },
    su = function (e, n, r, s, i) {
        var o = n - e,
            a = s - r;
        return an(i, function (c) {
            return r + (((c - e) / o) * a || 0);
        });
    },
    G1 = function t(e, n, r, s) {
        var i = isNaN(e + n)
            ? 0
            : function (h) {
                  return (1 - h) * e + h * n;
              };
        if (!i) {
            var o = Pe(e),
                a = {},
                c,
                l,
                u,
                f,
                d;
            if ((r === !0 && (s = 1) && (r = null), o)) (e = { p: e }), (n = { p: n });
            else if (Ie(e) && !Ie(n)) {
                for (u = [], f = e.length, d = f - 2, l = 1; l < f; l++) u.push(t(e[l - 1], e[l]));
                f--,
                    (i = function (y) {
                        y *= f;
                        var m = Math.min(d, ~~y);
                        return u[m](y - m);
                    }),
                    (r = n);
            } else s || (e = kn(Ie(e) ? [] : {}, e));
            if (!u) {
                for (c in n) Eo.call(a, e, c, 'get', n[c]);
                i = function (y) {
                    return Ao(y, a) || (o ? e.p : e);
                };
            }
        }
        return an(r, i);
    },
    Va = function (e, n, r) {
        var s = e.labels,
            i = rt,
            o,
            a,
            c;
        for (o in s) (a = s[o] - n), a < 0 == !!r && a && i > (a = Math.abs(a)) && ((c = o), (i = a));
        return c;
    },
    it = function (e, n, r) {
        var s = e.vars,
            i = s[n],
            o,
            a;
        if (!!i) return (o = s[n + 'Params']), (a = s.callbackScope || e), r && Gt.length && ws(), o ? i.apply(a, o) : i.call(a);
    },
    dr = function (e) {
        return $t(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && it(e, 'onInterrupt'), e;
    },
    Hn,
    ep = function (e) {
        e = (!e.name && e.default) || e;
        var n = e.name,
            r = ke(e),
            s =
                n && !r && e.init
                    ? function () {
                          this._props = [];
                      }
                    : e,
            i = { init: Fr, render: Ao, add: Eo, kill: mp, modifier: pp, rawVars: 0 },
            o = { targetTest: 0, get: 0, getSetter: Oo, aliases: {}, register: 0 };
        if ((er(), e !== s)) {
            if (We[n]) return;
            at(s, at(Cs(e, i), o)),
                kn(s.prototype, kn(i, Cs(e, o))),
                (We[(s.prop = n)] = s),
                e.targetTest && (is.push(s), (xo[n] = 1)),
                (n = (n === 'css' ? 'CSS' : n.charAt(0).toUpperCase() + n.substr(1)) + 'Plugin');
        }
        jc(n, s), e.register && e.register(ht, s, ze);
    },
    ce = 255,
    hr = {
        aqua: [0, ce, ce],
        lime: [0, ce, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, ce],
        navy: [0, 0, 128],
        white: [ce, ce, ce],
        olive: [128, 128, 0],
        yellow: [ce, ce, 0],
        orange: [ce, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [ce, 0, 0],
        pink: [ce, 192, 203],
        cyan: [0, ce, ce],
        transparent: [ce, ce, ce, 0],
    },
    oi = function (e, n, r) {
        return (
            (e += e < 0 ? 1 : e > 1 ? -1 : 0), ((e * 6 < 1 ? n + (r - n) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * ce + 0.5) | 0
        );
    },
    iu = function (e, n, r) {
        var s = e ? (Ht(e) ? [e >> 16, (e >> 8) & ce, e & ce] : 0) : hr.black,
            i,
            o,
            a,
            c,
            l,
            u,
            f,
            d,
            h,
            y;
        if (!s) {
            if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), hr[e])) s = hr[e];
            else if (e.charAt(0) === '#') {
                if (
                    (e.length < 6 &&
                        ((i = e.charAt(1)),
                        (o = e.charAt(2)),
                        (a = e.charAt(3)),
                        (e = '#' + i + i + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
                    e.length === 9)
                )
                    return (s = parseInt(e.substr(1, 6), 16)), [s >> 16, (s >> 8) & ce, s & ce, parseInt(e.substr(7), 16) / 255];
                (e = parseInt(e.substr(1), 16)), (s = [e >> 16, (e >> 8) & ce, e & ce]);
            } else if (e.substr(0, 3) === 'hsl') {
                if (((s = y = e.match($i)), !n))
                    (c = (+s[0] % 360) / 360),
                        (l = +s[1] / 100),
                        (u = +s[2] / 100),
                        (o = u <= 0.5 ? u * (l + 1) : u + l - u * l),
                        (i = u * 2 - o),
                        s.length > 3 && (s[3] *= 1),
                        (s[0] = oi(c + 1 / 3, i, o)),
                        (s[1] = oi(c, i, o)),
                        (s[2] = oi(c - 1 / 3, i, o));
                else if (~e.indexOf('=')) return (s = e.match(Hc)), r && s.length < 4 && (s[3] = 1), s;
            } else s = e.match($i) || hr.transparent;
            s = s.map(Number);
        }
        return (
            n &&
                !y &&
                ((i = s[0] / ce),
                (o = s[1] / ce),
                (a = s[2] / ce),
                (f = Math.max(i, o, a)),
                (d = Math.min(i, o, a)),
                (u = (f + d) / 2),
                f === d
                    ? (c = l = 0)
                    : ((h = f - d),
                      (l = u > 0.5 ? h / (2 - f - d) : h / (f + d)),
                      (c = f === i ? (o - a) / h + (o < a ? 6 : 0) : f === o ? (a - i) / h + 2 : (i - o) / h + 4),
                      (c *= 60)),
                (s[0] = ~~(c + 0.5)),
                (s[1] = ~~(l * 100 + 0.5)),
                (s[2] = ~~(u * 100 + 0.5))),
            r && s.length < 4 && (s[3] = 1),
            s
        );
    },
    ou = function (e) {
        var n = [],
            r = [],
            s = -1;
        return (
            e.split(en).forEach(function (i) {
                var o = i.match(In) || [];
                n.push.apply(n, o), r.push((s += o.length + 1));
            }),
            (n.c = r),
            n
        );
    },
    ja = function (e, n, r) {
        var s = '',
            i = (e + s).match(en),
            o = n ? 'hsla(' : 'rgba(',
            a = 0,
            c,
            l,
            u,
            f;
        if (!i) return e;
        if (
            ((i = i.map(function (d) {
                return (d = iu(d, n, 1)) && o + (n ? d[0] + ',' + d[1] + '%,' + d[2] + '%,' + d[3] : d.join(',')) + ')';
            })),
            r && ((u = ou(e)), (c = r.c), c.join(s) !== u.c.join(s)))
        )
            for (l = e.replace(en, '1').split(In), f = l.length - 1; a < f; a++)
                s += l[a] + (~c.indexOf(a) ? i.shift() || o + '0,0,0,0)' : (u.length ? u : i.length ? i : r).shift());
        if (!l) for (l = e.split(en), f = l.length - 1; a < f; a++) s += l[a] + i[a];
        return s + l[f];
    },
    en = (function () {
        var t = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
            e;
        for (e in hr) t += '|' + e + '\\b';
        return new RegExp(t + ')', 'gi');
    })(),
    tp = /hsl[a]?\(/,
    au = function (e) {
        var n = e.join(' '),
            r;
        if (((en.lastIndex = 0), en.test(n))) return (r = tp.test(n)), (e[1] = ja(e[1], r)), (e[0] = ja(e[0], r, ou(e[1]))), !0;
    },
    Hr,
    Ke = (function () {
        var t = Date.now,
            e = 500,
            n = 33,
            r = t(),
            s = r,
            i = 1e3 / 240,
            o = i,
            a = [],
            c,
            l,
            u,
            f,
            d,
            h,
            y = function m(_) {
                var v = t() - s,
                    w = _ === !0,
                    C,
                    S,
                    x,
                    k;
                if (
                    (v > e && (r += v - n),
                    (s += v),
                    (x = s - r),
                    (C = x - o),
                    (C > 0 || w) && ((k = ++f.frame), (d = x - f.time * 1e3), (f.time = x = x / 1e3), (o += C + (C >= i ? 4 : i - C)), (S = 1)),
                    w || (c = l(m)),
                    S)
                )
                    for (h = 0; h < a.length; h++) a[h](x, d, k, _);
            };
        return (
            (f = {
                time: 0,
                frame: 0,
                tick: function () {
                    y(!0);
                },
                deltaRatio: function (_) {
                    return d / (1e3 / (_ || 60));
                },
                wake: function () {
                    Bc &&
                        (!Li &&
                            Fc() &&
                            ((yt = Li = window),
                            (wo = yt.document || {}),
                            (Je.gsap = ht),
                            (yt.gsapVersions || (yt.gsapVersions = [])).push(ht.version),
                            Vc(vs || yt.GreenSockGlobals || (!yt.gsap && yt) || {}),
                            (u = yt.requestAnimationFrame)),
                        c && f.sleep(),
                        (l =
                            u ||
                            function (_) {
                                return setTimeout(_, (o - f.time * 1e3 + 1) | 0);
                            }),
                        (Hr = 1),
                        y(2));
                },
                sleep: function () {
                    (u ? yt.cancelAnimationFrame : clearTimeout)(c), (Hr = 0), (l = Fr);
                },
                lagSmoothing: function (_, v) {
                    (e = _ || 1 / fe), (n = Math.min(v, e, 0));
                },
                fps: function (_) {
                    (i = 1e3 / (_ || 240)), (o = f.time * 1e3 + i);
                },
                add: function (_, v, w) {
                    var C = v
                        ? function (S, x, k, T) {
                              _(S, x, k, T), f.remove(C);
                          }
                        : _;
                    return f.remove(_), a[w ? 'unshift' : 'push'](C), er(), C;
                },
                remove: function (_, v) {
                    ~(v = a.indexOf(_)) && a.splice(v, 1) && h >= v && h--;
                },
                _listeners: a,
            }),
            f
        );
    })(),
    er = function () {
        return !Hr && Ke.wake();
    },
    G = {},
    np = /^[\d.\-M][\d.\-,\s]/,
    rp = /["']/g,
    sp = function (e) {
        for (var n = {}, r = e.substr(1, e.length - 3).split(':'), s = r[0], i = 1, o = r.length, a, c, l; i < o; i++)
            (c = r[i]),
                (a = i !== o - 1 ? c.lastIndexOf(',') : c.length),
                (l = c.substr(0, a)),
                (n[s] = isNaN(l) ? l.replace(rp, '').trim() : +l),
                (s = c.substr(a + 1).trim());
        return n;
    },
    ip = function (e) {
        var n = e.indexOf('(') + 1,
            r = e.indexOf(')'),
            s = e.indexOf('(', n);
        return e.substring(n, ~s && s < r ? e.indexOf(')', r + 1) : r);
    },
    op = function (e) {
        var n = (e + '').split('('),
            r = G[n[0]];
        return r && n.length > 1 && r.config
            ? r.config.apply(null, ~e.indexOf('{') ? [sp(n[1])] : ip(e).split(',').map(Wc))
            : G._CE && np.test(e)
            ? G._CE('', e)
            : r;
    },
    lu = function (e) {
        return function (n) {
            return 1 - e(1 - n);
        };
    },
    cu = function t(e, n) {
        for (var r = e._first, s; r; )
            r instanceof Re
                ? t(r, n)
                : r.vars.yoyoEase &&
                  (!r._yoyo || !r._repeat) &&
                  r._yoyo !== n &&
                  (r.timeline ? t(r.timeline, n) : ((s = r._ease), (r._ease = r._yEase), (r._yEase = s), (r._yoyo = n))),
                (r = r._next);
    },
    Tn = function (e, n) {
        return (e && (ke(e) ? e : G[e] || op(e))) || n;
    },
    Mn = function (e, n, r, s) {
        r === void 0 &&
            (r = function (c) {
                return 1 - n(1 - c);
            }),
            s === void 0 &&
                (s = function (c) {
                    return c < 0.5 ? n(c * 2) / 2 : 1 - n((1 - c) * 2) / 2;
                });
        var i = { easeIn: n, easeOut: r, easeInOut: s },
            o;
        return (
            je(e, function (a) {
                (G[a] = Je[a] = i), (G[(o = a.toLowerCase())] = r);
                for (var c in i) G[o + (c === 'easeIn' ? '.in' : c === 'easeOut' ? '.out' : '.inOut')] = G[a + '.' + c] = i[c];
            }),
            i
        );
    },
    uu = function (e) {
        return function (n) {
            return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
        };
    },
    ai = function t(e, n, r) {
        var s = n >= 1 ? n : 1,
            i = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            o = (i / Ai) * (Math.asin(1 / s) || 0),
            a = function (u) {
                return u === 1 ? 1 : s * Math.pow(2, -10 * u) * R1((u - o) * i) + 1;
            },
            c =
                e === 'out'
                    ? a
                    : e === 'in'
                    ? function (l) {
                          return 1 - a(1 - l);
                      }
                    : uu(a);
        return (
            (i = Ai / i),
            (c.config = function (l, u) {
                return t(e, l, u);
            }),
            c
        );
    },
    li = function t(e, n) {
        n === void 0 && (n = 1.70158);
        var r = function (o) {
                return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
            },
            s =
                e === 'out'
                    ? r
                    : e === 'in'
                    ? function (i) {
                          return 1 - r(1 - i);
                      }
                    : uu(r);
        return (
            (s.config = function (i) {
                return t(e, i);
            }),
            s
        );
    };
je('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
    var n = e < 5 ? e + 1 : e;
    Mn(
        t + ',Power' + (n - 1),
        e
            ? function (r) {
                  return Math.pow(r, n);
              }
            : function (r) {
                  return r;
              },
        function (r) {
            return 1 - Math.pow(1 - r, n);
        },
        function (r) {
            return r < 0.5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2;
        }
    );
});
G.Linear.easeNone = G.none = G.Linear.easeIn;
Mn('Elastic', ai('in'), ai('out'), ai());
(function (t, e) {
    var n = 1 / e,
        r = 2 * n,
        s = 2.5 * n,
        i = function (a) {
            return a < n
                ? t * a * a
                : a < r
                ? t * Math.pow(a - 1.5 / e, 2) + 0.75
                : a < s
                ? t * (a -= 2.25 / e) * a + 0.9375
                : t * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
    Mn(
        'Bounce',
        function (o) {
            return 1 - i(1 - o);
        },
        i
    );
})(7.5625, 2.75);
Mn('Expo', function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
Mn('Circ', function (t) {
    return -(Rc(1 - t * t) - 1);
});
Mn('Sine', function (t) {
    return t === 1 ? 1 : -L1(t * A1) + 1;
});
Mn('Back', li('in'), li('out'), li());
G.SteppedEase =
    G.steps =
    Je.SteppedEase =
        {
            config: function (e, n) {
                e === void 0 && (e = 1);
                var r = 1 / e,
                    s = e + (n ? 0 : 1),
                    i = n ? 1 : 0,
                    o = 1 - fe;
                return function (a) {
                    return (((s * Wr(0, o, a)) | 0) + i) * r;
                };
            },
        };
Jn.ease = G['quad.out'];
je('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (t) {
    return (To += t + ',' + t + 'Params,');
});
var fu = function (e, n) {
        (this.id = $1++), (e._gsap = this), (this.target = e), (this.harness = n), (this.get = n ? n.get : Uc), (this.set = n ? n.getSetter : Oo);
    },
    Dr = (function () {
        function t(n) {
            (this.vars = n),
                (this._delay = +n.delay || 0),
                (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && ((this._rDelay = n.repeatDelay || 0), (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
                (this._ts = 1),
                Gn(this, +n.duration, 1, 1),
                (this.data = n.data),
                Hr || Ke.wake();
        }
        var e = t.prototype;
        return (
            (e.delay = function (r) {
                return r || r === 0
                    ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), (this._delay = r), this)
                    : this._delay;
            }),
            (e.duration = function (r) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (r) {
                return arguments.length
                    ? ((this._dirty = 0), Gn(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1)))
                    : this._tDur;
            }),
            (e.totalTime = function (r, s) {
                if ((er(), !arguments.length)) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (ko(this, r), !i._dp || i.parent || Yc(i, this); i && i.parent; )
                        i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0),
                            (i = i.parent);
                    !this.parent &&
                        this._dp.autoRemoveChildren &&
                        ((this._ts > 0 && r < this._tDur) || (this._ts < 0 && r > 0) || (!this._tDur && !r)) &&
                        wt(this._dp, this, this._start - this._delay);
                }
                return (
                    (this._tTime !== r ||
                        (!this._dur && !s) ||
                        (this._initted && Math.abs(this._zTime) === fe) ||
                        (!r && !this._initted && (this.add || this._ptLookup))) &&
                        (this._ts || (this._pTime = r), qc(this, r, s)),
                    this
                );
            }),
            (e.time = function (r, s) {
                return arguments.length
                    ? this.totalTime(Math.min(this.totalDuration(), r + Na(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s)
                    : this._time;
            }),
            (e.totalProgress = function (r, s) {
                return arguments.length
                    ? this.totalTime(this.totalDuration() * r, s)
                    : this.totalDuration()
                    ? Math.min(1, this._tTime / this._tDur)
                    : this.ratio;
            }),
            (e.progress = function (r, s) {
                return arguments.length
                    ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Na(this), s)
                    : this.duration()
                    ? Math.min(1, this._time / this._dur)
                    : this.ratio;
            }),
            (e.iteration = function (r, s) {
                var i = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (r - 1) * i, s) : this._repeat ? Qn(this._tTime, i) + 1 : 1;
            }),
            (e.timeScale = function (r) {
                if (!arguments.length) return this._rts === -fe ? 0 : this._rts;
                if (this._rts === r) return this;
                var s = this.parent && this._ts ? xs(this.parent._time, this) : this._tTime;
                return (
                    (this._rts = +r || 0),
                    (this._ts = this._ps || r === -fe ? 0 : this._rts),
                    this.totalTime(Wr(-this._delay, this._tDur, s), !0),
                    js(this),
                    N1(this)
                );
            }),
            (e.paused = function (r) {
                return arguments.length
                    ? (this._ps !== r &&
                          ((this._ps = r),
                          r
                              ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                              : (er(),
                                (this._ts = this._rts),
                                this.totalTime(
                                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                                    this.progress() === 1 && Math.abs(this._zTime) !== fe && (this._tTime -= fe)
                                ))),
                      this)
                    : this._ps;
            }),
            (e.startTime = function (r) {
                if (arguments.length) {
                    this._start = r;
                    var s = this.parent || this._dp;
                    return s && (s._sort || !this.parent) && wt(s, this, r - this._delay), this;
                }
                return this._start;
            }),
            (e.endTime = function (r) {
                return this._start + (Ve(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            }),
            (e.rawTime = function (r) {
                var s = this.parent || this._dp;
                return s
                    ? r && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                        ? this._tTime % (this._dur + this._rDelay)
                        : this._ts
                        ? xs(s.rawTime(r), this)
                        : this._tTime
                    : this._tTime;
            }),
            (e.globalTime = function (r) {
                for (var s = this, i = arguments.length ? r : s.rawTime(); s; ) (i = s._start + i / (s._ts || 1)), (s = s._dp);
                return i;
            }),
            (e.repeat = function (r) {
                return arguments.length ? ((this._repeat = r === 1 / 0 ? -2 : r), Ba(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
            }),
            (e.repeatDelay = function (r) {
                if (arguments.length) {
                    var s = this._time;
                    return (this._rDelay = r), Ba(this), s ? this.time(s) : this;
                }
                return this._rDelay;
            }),
            (e.yoyo = function (r) {
                return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
            }),
            (e.seek = function (r, s) {
                return this.totalTime(et(this, r), Ve(s));
            }),
            (e.restart = function (r, s) {
                return this.play().totalTime(r ? -this._delay : 0, Ve(s));
            }),
            (e.play = function (r, s) {
                return r != null && this.seek(r, s), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (r, s) {
                return r != null && this.seek(r || this.totalDuration(), s), this.reversed(!0).paused(!1);
            }),
            (e.pause = function (r, s) {
                return r != null && this.seek(r, s), this.paused(!0);
            }),
            (e.resume = function () {
                return this.paused(!1);
            }),
            (e.reversed = function (r) {
                return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -fe : 0)), this) : this._rts < 0;
            }),
            (e.invalidate = function () {
                return (this._initted = this._act = 0), (this._zTime = -fe), this;
            }),
            (e.isActive = function () {
                var r = this.parent || this._dp,
                    s = this._start,
                    i;
                return !!(!r || (this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= s && i < this.endTime(!0) - fe));
            }),
            (e.eventCallback = function (r, s, i) {
                var o = this.vars;
                return arguments.length > 1
                    ? (s ? ((o[r] = s), i && (o[r + 'Params'] = i), r === 'onUpdate' && (this._onUpdate = s)) : delete o[r], this)
                    : o[r];
            }),
            (e.then = function (r) {
                var s = this;
                return new Promise(function (i) {
                    var o = ke(r) ? r : Zc,
                        a = function () {
                            var l = s.then;
                            (s.then = null), ke(o) && (o = o(s)) && (o.then || o === s) && (s.then = l), i(o), (s.then = l);
                        };
                    (s._initted && s.totalProgress() === 1 && s._ts >= 0) || (!s._tTime && s._ts < 0) ? a() : (s._prom = a);
                });
            }),
            (e.kill = function () {
                dr(this);
            }),
            t
        );
    })();
at(Dr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -fe,
    _prom: 0,
    _ps: !1,
    _rts: 1,
});
var Re = (function (t) {
    Lc(e, t);
    function e(r, s) {
        var i;
        return (
            r === void 0 && (r = {}),
            (i = t.call(this, r) || this),
            (i.labels = {}),
            (i.smoothChildTiming = !!r.smoothChildTiming),
            (i.autoRemoveChildren = !!r.autoRemoveChildren),
            (i._sort = Ve(r.sortChildren)),
            pe && wt(r.parent || pe, Ot(i), s),
            r.reversed && i.reverse(),
            r.paused && i.paused(!0),
            r.scrollTrigger && Xc(Ot(i), r.scrollTrigger),
            i
        );
    }
    var n = e.prototype;
    return (
        (n.to = function (s, i, o) {
            return Cr(0, arguments, this), this;
        }),
        (n.from = function (s, i, o) {
            return Cr(1, arguments, this), this;
        }),
        (n.fromTo = function (s, i, o, a) {
            return Cr(2, arguments, this), this;
        }),
        (n.set = function (s, i, o) {
            return (
                (i.duration = 0),
                (i.parent = this),
                wr(i).repeatDelay || (i.repeat = 0),
                (i.immediateRender = !!i.immediateRender),
                new xe(s, i, et(this, o), 1),
                this
            );
        }),
        (n.call = function (s, i, o) {
            return wt(this, xe.delayedCall(0, s, i), o);
        }),
        (n.staggerTo = function (s, i, o, a, c, l, u) {
            return (
                (o.duration = i), (o.stagger = o.stagger || a), (o.onComplete = l), (o.onCompleteParams = u), (o.parent = this), new xe(s, o, et(this, c)), this
            );
        }),
        (n.staggerFrom = function (s, i, o, a, c, l, u) {
            return (o.runBackwards = 1), (wr(o).immediateRender = Ve(o.immediateRender)), this.staggerTo(s, i, o, a, c, l, u);
        }),
        (n.staggerFromTo = function (s, i, o, a, c, l, u, f) {
            return (a.startAt = o), (wr(a).immediateRender = Ve(a.immediateRender)), this.staggerTo(s, i, a, c, l, u, f);
        }),
        (n.render = function (s, i, o) {
            var a = this._time,
                c = this._dirty ? this.totalDuration() : this._tDur,
                l = this._dur,
                u = s <= 0 ? 0 : $e(s),
                f = this._zTime < 0 != s < 0 && (this._initted || !l),
                d,
                h,
                y,
                m,
                _,
                v,
                w,
                C,
                S,
                x,
                k,
                T;
            if ((this !== pe && u > c && s >= 0 && (u = c), u !== this._tTime || o || f)) {
                if (
                    (a !== this._time && l && ((u += this._time - a), (s += this._time - a)),
                    (d = u),
                    (S = this._start),
                    (C = this._ts),
                    (v = !C),
                    f && (l || (a = this._zTime), (s || !i) && (this._zTime = s)),
                    this._repeat)
                ) {
                    if (((k = this._yoyo), (_ = l + this._rDelay), this._repeat < -1 && s < 0)) return this.totalTime(_ * 100 + s, i, o);
                    if (
                        ((d = $e(u % _)),
                        u === c ? ((m = this._repeat), (d = l)) : ((m = ~~(u / _)), m && m === u / _ && ((d = l), m--), d > l && (d = l)),
                        (x = Qn(this._tTime, _)),
                        !a && this._tTime && x !== m && (x = m),
                        k && m & 1 && ((d = l - d), (T = 1)),
                        m !== x && !this._lock)
                    ) {
                        var P = k && x & 1,
                            E = P === (k && m & 1);
                        if (
                            (m < x && (P = !P),
                            (a = P ? 0 : l),
                            (this._lock = 1),
                            (this.render(a || (T ? 0 : $e(m * _)), i, !l)._lock = 0),
                            (this._tTime = u),
                            !i && this.parent && it(this, 'onRepeat'),
                            this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                            (a && a !== this._time) || v !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                        )
                            return this;
                        if (
                            ((l = this._dur),
                            (c = this._tDur),
                            E && ((this._lock = 2), (a = P ? l : -1e-4), this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()),
                            (this._lock = 0),
                            !this._ts && !v)
                        )
                            return this;
                        cu(this, T);
                    }
                }
                if (
                    (this._hasPause && !this._forcing && this._lock < 2 && ((w = z1(this, $e(a), $e(d))), w && (u -= d - (d = w._start))),
                    (this._tTime = u),
                    (this._time = d),
                    (this._act = !C),
                    this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = s), (a = 0)),
                    !a && d && !i && (it(this, 'onStart'), this._tTime !== u))
                )
                    return this;
                if (d >= a && s >= 0)
                    for (h = this._first; h; ) {
                        if (((y = h._next), (h._act || d >= h._start) && h._ts && w !== h)) {
                            if (h.parent !== this) return this.render(s, i, o);
                            if (
                                (h.render(h._ts > 0 ? (d - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (d - h._start) * h._ts, i, o),
                                d !== this._time || (!this._ts && !v))
                            ) {
                                (w = 0), y && (u += this._zTime = -fe);
                                break;
                            }
                        }
                        h = y;
                    }
                else {
                    h = this._last;
                    for (var H = s < 0 ? s : d; h; ) {
                        if (((y = h._prev), (h._act || H <= h._end) && h._ts && w !== h)) {
                            if (h.parent !== this) return this.render(s, i, o);
                            if (
                                (h.render(h._ts > 0 ? (H - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (H - h._start) * h._ts, i, o),
                                d !== this._time || (!this._ts && !v))
                            ) {
                                (w = 0), y && (u += this._zTime = H ? -fe : fe);
                                break;
                            }
                        }
                        h = y;
                    }
                }
                if (w && !i && (this.pause(), (w.render(d >= a ? 0 : -fe)._zTime = d >= a ? 1 : -1), this._ts))
                    return (this._start = S), js(this), this.render(s, i, o);
                this._onUpdate && !i && it(this, 'onUpdate', !0),
                    ((u === c && this._tTime >= this.totalDuration()) || (!u && a)) &&
                        (S === this._start || Math.abs(C) !== Math.abs(this._ts)) &&
                        (this._lock ||
                            ((s || !l) && ((u === c && this._ts > 0) || (!u && this._ts < 0)) && $t(this, 1),
                            !i &&
                                !(s < 0 && !a) &&
                                (u || a || !c) &&
                                (it(this, u === c && s >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                                this._prom && !(u < c && this.timeScale() > 0) && this._prom())));
            }
            return this;
        }),
        (n.add = function (s, i) {
            var o = this;
            if ((Ht(i) || (i = et(this, i, s)), !(s instanceof Dr))) {
                if (Ie(s))
                    return (
                        s.forEach(function (a) {
                            return o.add(a, i);
                        }),
                        this
                    );
                if (Pe(s)) return this.addLabel(s, i);
                if (ke(s)) s = xe.delayedCall(0, s);
                else return this;
            }
            return this !== s ? wt(this, s, i) : this;
        }),
        (n.getChildren = function (s, i, o, a) {
            s === void 0 && (s = !0), i === void 0 && (i = !0), o === void 0 && (o = !0), a === void 0 && (a = -rt);
            for (var c = [], l = this._first; l; )
                l._start >= a && (l instanceof xe ? i && c.push(l) : (o && c.push(l), s && c.push.apply(c, l.getChildren(!0, i, o)))), (l = l._next);
            return c;
        }),
        (n.getById = function (s) {
            for (var i = this.getChildren(1, 1, 1), o = i.length; o--; ) if (i[o].vars.id === s) return i[o];
        }),
        (n.remove = function (s) {
            return Pe(s) ? this.removeLabel(s) : ke(s) ? this.killTweensOf(s) : (Vs(this, s), s === this._recent && (this._recent = this._last), xn(this));
        }),
        (n.totalTime = function (s, i) {
            return arguments.length
                ? ((this._forcing = 1),
                  !this._dp && this._ts && (this._start = $e(Ke.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
                  t.prototype.totalTime.call(this, s, i),
                  (this._forcing = 0),
                  this)
                : this._tTime;
        }),
        (n.addLabel = function (s, i) {
            return (this.labels[s] = et(this, i)), this;
        }),
        (n.removeLabel = function (s) {
            return delete this.labels[s], this;
        }),
        (n.addPause = function (s, i, o) {
            var a = xe.delayedCall(0, i || Fr, o);
            return (a.data = 'isPause'), (this._hasPause = 1), wt(this, a, et(this, s));
        }),
        (n.removePause = function (s) {
            var i = this._first;
            for (s = et(this, s); i; ) i._start === s && i.data === 'isPause' && $t(i), (i = i._next);
        }),
        (n.killTweensOf = function (s, i, o) {
            for (var a = this.getTweensOf(s, o), c = a.length; c--; ) Wt !== a[c] && a[c].kill(s, i);
            return this;
        }),
        (n.getTweensOf = function (s, i) {
            for (var o = [], a = st(s), c = this._first, l = Ht(i), u; c; )
                c instanceof xe
                    ? I1(c._targets, a) &&
                      (l ? (!Wt || (c._initted && c._ts)) && c.globalTime(0) <= i && c.globalTime(c.totalDuration()) > i : !i || c.isActive()) &&
                      o.push(c)
                    : (u = c.getTweensOf(a, i)).length && o.push.apply(o, u),
                    (c = c._next);
            return o;
        }),
        (n.tweenTo = function (s, i) {
            i = i || {};
            var o = this,
                a = et(o, s),
                c = i,
                l = c.startAt,
                u = c.onStart,
                f = c.onStartParams,
                d = c.immediateRender,
                h,
                y = xe.to(
                    o,
                    at(
                        {
                            ease: i.ease || 'none',
                            lazy: !1,
                            immediateRender: !1,
                            time: a,
                            overwrite: 'auto',
                            duration: i.duration || Math.abs((a - (l && 'time' in l ? l.time : o._time)) / o.timeScale()) || fe,
                            onStart: function () {
                                if ((o.pause(), !h)) {
                                    var _ = i.duration || Math.abs((a - (l && 'time' in l ? l.time : o._time)) / o.timeScale());
                                    y._dur !== _ && Gn(y, _, 0, 1).render(y._time, !0, !0), (h = 1);
                                }
                                u && u.apply(y, f || []);
                            },
                        },
                        i
                    )
                );
            return d ? y.render(0) : y;
        }),
        (n.tweenFromTo = function (s, i, o) {
            return this.tweenTo(i, at({ startAt: { time: et(this, s) } }, o));
        }),
        (n.recent = function () {
            return this._recent;
        }),
        (n.nextLabel = function (s) {
            return s === void 0 && (s = this._time), Va(this, et(this, s));
        }),
        (n.previousLabel = function (s) {
            return s === void 0 && (s = this._time), Va(this, et(this, s), 1);
        }),
        (n.currentLabel = function (s) {
            return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + fe);
        }),
        (n.shiftChildren = function (s, i, o) {
            o === void 0 && (o = 0);
            for (var a = this._first, c = this.labels, l; a; ) a._start >= o && ((a._start += s), (a._end += s)), (a = a._next);
            if (i) for (l in c) c[l] >= o && (c[l] += s);
            return xn(this);
        }),
        (n.invalidate = function () {
            var s = this._first;
            for (this._lock = 0; s; ) s.invalidate(), (s = s._next);
            return t.prototype.invalidate.call(this);
        }),
        (n.clear = function (s) {
            s === void 0 && (s = !0);
            for (var i = this._first, o; i; ) (o = i._next), this.remove(i), (i = o);
            return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), xn(this);
        }),
        (n.totalDuration = function (s) {
            var i = 0,
                o = this,
                a = o._last,
                c = rt,
                l,
                u,
                f;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
            if (o._dirty) {
                for (f = o.parent; a; )
                    (l = a._prev),
                        a._dirty && a.totalDuration(),
                        (u = a._start),
                        u > c && o._sort && a._ts && !o._lock ? ((o._lock = 1), (wt(o, a, u - a._delay, 1)._lock = 0)) : (c = u),
                        u < 0 &&
                            a._ts &&
                            ((i -= u),
                            ((!f && !o._dp) || (f && f.smoothChildTiming)) && ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
                            o.shiftChildren(-u, !1, -1 / 0),
                            (c = 0)),
                        a._end > i && a._ts && (i = a._end),
                        (a = l);
                Gn(o, o === pe && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
            }
            return o._tDur;
        }),
        (e.updateRoot = function (s) {
            if ((pe._ts && (qc(pe, xs(s, pe)), (zc = Ke.frame)), Ke.frame >= Ha)) {
                Ha += Ye.autoSleep || 120;
                var i = pe._first;
                if ((!i || !i._ts) && Ye.autoSleep && Ke._listeners.length < 2) {
                    for (; i && !i._ts; ) i = i._next;
                    i || Ke.sleep();
                }
            }
        }),
        e
    );
})(Dr);
at(Re.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var ap = function (e, n, r, s, i, o, a) {
        var c = new ze(this._pt, e, n, 0, 1, gu, null, i),
            l = 0,
            u = 0,
            f,
            d,
            h,
            y,
            m,
            _,
            v,
            w;
        for (
            c.b = r,
                c.e = s,
                r += '',
                s += '',
                (v = ~s.indexOf('random(')) && (s = Ir(s)),
                o && ((w = [r, s]), o(w, e, n), (r = w[0]), (s = w[1])),
                d = r.match(si) || [];
            (f = si.exec(s));

        )
            (y = f[0]),
                (m = s.substring(l, f.index)),
                h ? (h = (h + 1) % 5) : m.substr(-5) === 'rgba(' && (h = 1),
                y !== d[u++] &&
                    ((_ = parseFloat(d[u - 1]) || 0),
                    (c._pt = {
                        _next: c._pt,
                        p: m || u === 1 ? m : ',',
                        s: _,
                        c: y.charAt(1) === '=' ? zn(_, y) - _ : parseFloat(y) - _,
                        m: h && h < 4 ? Math.round : 0,
                    }),
                    (l = si.lastIndex));
        return (c.c = l < s.length ? s.substring(l, s.length) : ''), (c.fp = a), (Dc.test(s) || v) && (c.e = 0), (this._pt = c), c;
    },
    Eo = function (e, n, r, s, i, o, a, c, l) {
        ke(s) && (s = s(i || 0, e, o));
        var u = e[n],
            f = r !== 'get' ? r : ke(u) ? (l ? e[n.indexOf('set') || !ke(e['get' + n.substr(3)]) ? n : 'get' + n.substr(3)](l) : e[n]()) : u,
            d = ke(u) ? (l ? dp : pu) : Mo,
            h;
        if ((Pe(s) && (~s.indexOf('random(') && (s = Ir(s)), s.charAt(1) === '=' && ((h = zn(f, s) + (Le(f) || 0)), (h || h === 0) && (s = h))), f !== s || Di))
            return !isNaN(f * s) && s !== ''
                ? ((h = new ze(this._pt, e, n, +f || 0, s - (f || 0), typeof u == 'boolean' ? _p : mu, 0, d)),
                  l && (h.fp = l),
                  a && h.modifier(a, this, e),
                  (this._pt = h))
                : (!u && !(n in e) && Co(n, s), ap.call(this, e, n, f, s, d, c || Ye.stringFilter, l));
    },
    lp = function (e, n, r, s, i) {
        if ((ke(e) && (e = xr(e, i, n, r, s)), !Dt(e) || (e.style && e.nodeType) || Ie(e) || Ic(e))) return Pe(e) ? xr(e, i, n, r, s) : e;
        var o = {},
            a;
        for (a in e) o[a] = xr(e[a], i, n, r, s);
        return o;
    },
    du = function (e, n, r, s, i, o) {
        var a, c, l, u;
        if (
            We[e] &&
            (a = new We[e]()).init(i, a.rawVars ? n[e] : lp(n[e], s, i, o, r), r, s, o) !== !1 &&
            ((r._pt = c = new ze(r._pt, i, e, 0, 1, a.render, a, 0, a.priority)), r !== Hn)
        )
            for (l = r._ptLookup[r._targets.indexOf(i)], u = a._props.length; u--; ) l[a._props[u]] = c;
        return a;
    },
    Wt,
    Di,
    Po = function t(e, n) {
        var r = e.vars,
            s = r.ease,
            i = r.startAt,
            o = r.immediateRender,
            a = r.lazy,
            c = r.onUpdate,
            l = r.onUpdateParams,
            u = r.callbackScope,
            f = r.runBackwards,
            d = r.yoyoEase,
            h = r.keyframes,
            y = r.autoRevert,
            m = e._dur,
            _ = e._startAt,
            v = e._targets,
            w = e.parent,
            C = w && w.data === 'nested' ? w.parent._targets : v,
            S = e._overwrite === 'auto' && !vo,
            x = e.timeline,
            k,
            T,
            P,
            E,
            H,
            j,
            O,
            V,
            W,
            ae,
            J,
            Q,
            te;
        if (
            (x && (!h || !s) && (s = 'none'),
            (e._ease = Tn(s, Jn.ease)),
            (e._yEase = d ? lu(Tn(d === !0 ? s : d, Jn.ease)) : 0),
            d && e._yoyo && !e._repeat && ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
            (e._from = !x && !!r.runBackwards),
            !x || (h && !r.stagger))
        ) {
            if (((V = v[0] ? Cn(v[0]).harness : 0), (Q = V && r[V.prop]), (k = Cs(r, xo)), _ && ($t(_.render(-1, !0)), (_._lazy = 0)), i))
                if (
                    ($t(
                        (e._startAt = xe.set(
                            v,
                            at(
                                {
                                    data: 'isStart',
                                    overwrite: !1,
                                    parent: w,
                                    immediateRender: !0,
                                    lazy: Ve(a),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: c,
                                    onUpdateParams: l,
                                    callbackScope: u,
                                    stagger: 0,
                                },
                                i
                            )
                        ))
                    ),
                    n < 0 && !o && !y && e._startAt.render(-1, !0),
                    o)
                ) {
                    if ((n > 0 && !y && (e._startAt = 0), m && n <= 0)) {
                        n && (e._zTime = n);
                        return;
                    }
                } else y === !1 && (e._startAt = 0);
            else if (f && m) {
                if (_) !y && (e._startAt = 0);
                else if (
                    (n && (o = !1),
                    (P = at({ overwrite: !1, data: 'isFromStart', lazy: o && Ve(a), immediateRender: o, stagger: 0, parent: w }, k)),
                    Q && (P[V.prop] = Q),
                    $t((e._startAt = xe.set(v, P))),
                    n < 0 && e._startAt.render(-1, !0),
                    (e._zTime = n),
                    !o)
                )
                    t(e._startAt, fe);
                else if (!n) return;
            }
            for (e._pt = e._ptCache = 0, a = (m && Ve(a)) || (a && !m), T = 0; T < v.length; T++) {
                if (
                    ((H = v[T]),
                    (O = H._gsap || So(v)[T]._gsap),
                    (e._ptLookup[T] = ae = {}),
                    Ri[O.id] && Gt.length && ws(),
                    (J = C === v ? T : C.indexOf(H)),
                    V &&
                        (W = new V()).init(H, Q || k, e, J, C) !== !1 &&
                        ((e._pt = E = new ze(e._pt, H, W.name, 0, 1, W.render, W, 0, W.priority)),
                        W._props.forEach(function (Me) {
                            ae[Me] = E;
                        }),
                        W.priority && (j = 1)),
                    !V || Q)
                )
                    for (P in k)
                        We[P] && (W = du(P, k, e, J, H, C)) ? W.priority && (j = 1) : (ae[P] = E = Eo.call(e, H, P, 'get', k[P], J, C, 0, r.stringFilter));
                e._op && e._op[T] && e.kill(H, e._op[T]),
                    S && e._pt && ((Wt = e), pe.killTweensOf(H, ae, e.globalTime(n)), (te = !e.parent), (Wt = 0)),
                    e._pt && a && (Ri[O.id] = 1);
            }
            j && yu(e), e._onInit && e._onInit(e);
        }
        (e._onUpdate = c), (e._initted = (!e._op || e._pt) && !te), h && n <= 0 && x.render(rt, !0, !0);
    },
    cp = function (e, n, r, s, i, o, a) {
        var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
            l,
            u,
            f;
        if (!c)
            for (c = e._ptCache[n] = [], u = e._ptLookup, f = e._targets.length; f--; ) {
                if (((l = u[f][n]), l && l.d && l.d._pt)) for (l = l.d._pt; l && l.p !== n; ) l = l._next;
                if (!l) return (Di = 1), (e.vars[n] = '+=0'), Po(e, a), (Di = 0), 1;
                c.push(l);
            }
        for (f = c.length; f--; )
            (l = c[f]),
                (l.s = (s || s === 0) && !i ? s : l.s + (s || 0) + o * l.c),
                (l.c = r - l.s),
                l.e && (l.e = ye(r) + Le(l.e)),
                l.b && (l.b = l.s + Le(l.b));
    },
    up = function (e, n) {
        var r = e[0] ? Cn(e[0]).harness : 0,
            s = r && r.aliases,
            i,
            o,
            a,
            c;
        if (!s) return n;
        i = kn({}, n);
        for (o in s) if (o in i) for (c = s[o].split(','), a = c.length; a--; ) i[c[a]] = i[o];
        return i;
    },
    fp = function (e, n, r, s) {
        var i = n.ease || s || 'power1.inOut',
            o,
            a;
        if (Ie(n))
            (a = r[e] || (r[e] = [])),
                n.forEach(function (c, l) {
                    return a.push({ t: (l / (n.length - 1)) * 100, v: c, e: i });
                });
        else for (o in n) (a = r[o] || (r[o] = [])), o === 'ease' || a.push({ t: parseFloat(e), v: n[o], e: i });
    },
    xr = function (e, n, r, s, i) {
        return ke(e) ? e.call(n, r, s, i) : Pe(e) && ~e.indexOf('random(') ? Ir(e) : e;
    },
    hu = To + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
    _u = {};
je(hu + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
    return (_u[t] = 1);
});
var xe = (function (t) {
    Lc(e, t);
    function e(r, s, i, o) {
        var a;
        typeof s == 'number' && ((i.duration = s), (s = i), (i = null)), (a = t.call(this, o ? s : wr(s)) || this);
        var c = a.vars,
            l = c.duration,
            u = c.delay,
            f = c.immediateRender,
            d = c.stagger,
            h = c.overwrite,
            y = c.keyframes,
            m = c.defaults,
            _ = c.scrollTrigger,
            v = c.yoyoEase,
            w = s.parent || pe,
            C = (Ie(r) || Ic(r) ? Ht(r[0]) : 'length' in s) ? [r] : st(r),
            S,
            x,
            k,
            T,
            P,
            E,
            H,
            j;
        if (
            ((a._targets = C.length ? So(C) : bs('GSAP target ' + r + ' not found. https://greensock.com', !Ye.nullTargetWarn) || []),
            (a._ptLookup = []),
            (a._overwrite = h),
            y || d || ns(l) || ns(u))
        ) {
            if (
                ((s = a.vars),
                (S = a.timeline = new Re({ data: 'nested', defaults: m || {} })),
                S.kill(),
                (S.parent = S._dp = Ot(a)),
                (S._start = 0),
                d || ns(l) || ns(u))
            ) {
                if (((T = C.length), (H = d && eu(d)), Dt(d))) for (P in d) ~hu.indexOf(P) && (j || (j = {}), (j[P] = d[P]));
                for (x = 0; x < T; x++)
                    (k = Cs(s, _u)),
                        (k.stagger = 0),
                        v && (k.yoyoEase = v),
                        j && kn(k, j),
                        (E = C[x]),
                        (k.duration = +xr(l, Ot(a), x, E, C)),
                        (k.delay = (+xr(u, Ot(a), x, E, C) || 0) - a._delay),
                        !d && T === 1 && k.delay && ((a._delay = u = k.delay), (a._start += u), (k.delay = 0)),
                        S.to(E, k, H ? H(x, E, C) : 0),
                        (S._ease = G.none);
                S.duration() ? (l = u = 0) : (a.timeline = 0);
            } else if (y) {
                wr(at(S.vars.defaults, { ease: 'none' })), (S._ease = Tn(y.ease || s.ease || 'none'));
                var O = 0,
                    V,
                    W,
                    ae;
                if (Ie(y))
                    y.forEach(function (J) {
                        return S.to(C, J, '>');
                    });
                else {
                    k = {};
                    for (P in y) P === 'ease' || P === 'easeEach' || fp(P, y[P], k, y.easeEach);
                    for (P in k)
                        for (
                            V = k[P].sort(function (J, Q) {
                                return J.t - Q.t;
                            }),
                                O = 0,
                                x = 0;
                            x < V.length;
                            x++
                        )
                            (W = V[x]),
                                (ae = { ease: W.e, duration: ((W.t - (x ? V[x - 1].t : 0)) / 100) * l }),
                                (ae[P] = W.v),
                                S.to(C, ae, O),
                                (O += ae.duration);
                    S.duration() < l && S.to({}, { duration: l - S.duration() });
                }
            }
            l || a.duration((l = S.duration()));
        } else a.timeline = 0;
        return (
            h === !0 && !vo && ((Wt = Ot(a)), pe.killTweensOf(C), (Wt = 0)),
            wt(w, Ot(a), i),
            s.reversed && a.reverse(),
            s.paused && a.paused(!0),
            (f || (!l && !y && a._start === $e(w._time) && Ve(f) && B1(Ot(a)) && w.data !== 'nested')) && ((a._tTime = -fe), a.render(Math.max(0, -u))),
            _ && Xc(Ot(a), _),
            a
        );
    }
    var n = e.prototype;
    return (
        (n.render = function (s, i, o) {
            var a = this._time,
                c = this._tDur,
                l = this._dur,
                u = s > c - fe && s >= 0 ? c : s < fe ? 0 : s,
                f,
                d,
                h,
                y,
                m,
                _,
                v,
                w,
                C;
            if (!l) j1(this, s, i, o);
            else if (u !== this._tTime || !s || o || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != s < 0)) {
                if (((f = u), (w = this.timeline), this._repeat)) {
                    if (((y = l + this._rDelay), this._repeat < -1 && s < 0)) return this.totalTime(y * 100 + s, i, o);
                    if (
                        ((f = $e(u % y)),
                        u === c ? ((h = this._repeat), (f = l)) : ((h = ~~(u / y)), h && h === u / y && ((f = l), h--), f > l && (f = l)),
                        (_ = this._yoyo && h & 1),
                        _ && ((C = this._yEase), (f = l - f)),
                        (m = Qn(this._tTime, y)),
                        f === a && !o && this._initted)
                    )
                        return (this._tTime = u), this;
                    h !== m &&
                        (w && this._yEase && cu(w, _),
                        this.vars.repeatRefresh && !_ && !this._lock && ((this._lock = o = 1), (this.render($e(y * h), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                    if (Jc(this, s < 0 ? s : f, o, i)) return (this._tTime = 0), this;
                    if (a !== this._time) return this;
                    if (l !== this._dur) return this.render(s, i, o);
                }
                if (
                    ((this._tTime = u),
                    (this._time = f),
                    !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = v = (C || this._ease)(f / l)),
                    this._from && (this.ratio = v = 1 - v),
                    f && !a && !i && (it(this, 'onStart'), this._tTime !== u))
                )
                    return this;
                for (d = this._pt; d; ) d.r(v, d.d), (d = d._next);
                (w && w.render(s < 0 ? s : !f && _ ? -fe : w._dur * w._ease(f / this._dur), i, o)) || (this._startAt && (this._zTime = s)),
                    this._onUpdate && !i && (s < 0 && this._startAt && this._startAt.render(s, !0, o), it(this, 'onUpdate')),
                    this._repeat && h !== m && this.vars.onRepeat && !i && this.parent && it(this, 'onRepeat'),
                    (u === this._tDur || !u) &&
                        this._tTime === u &&
                        (s < 0 && this._startAt && !this._onUpdate && this._startAt.render(s, !0, !0),
                        (s || !l) && ((u === this._tDur && this._ts > 0) || (!u && this._ts < 0)) && $t(this, 1),
                        !i &&
                            !(s < 0 && !a) &&
                            (u || a) &&
                            (it(this, u === c ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(u < c && this.timeScale() > 0) && this._prom()));
            }
            return this;
        }),
        (n.targets = function () {
            return this._targets;
        }),
        (n.invalidate = function () {
            return (
                (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                t.prototype.invalidate.call(this)
            );
        }),
        (n.resetTo = function (s, i, o, a) {
            Hr || Ke.wake(), this._ts || this.play();
            var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                l;
            return (
                this._initted || Po(this, c),
                (l = this._ease(c / this._dur)),
                cp(this, s, i, o, a, l, c)
                    ? this.resetTo(s, i, o, a)
                    : (ko(this, 0), this.parent || Kc(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0), this.render(0))
            );
        }),
        (n.kill = function (s, i) {
            if ((i === void 0 && (i = 'all'), !s && (!i || i === 'all'))) return (this._lazy = this._pt = 0), this.parent ? dr(this) : this;
            if (this.timeline) {
                var o = this.timeline.totalDuration();
                return (
                    this.timeline.killTweensOf(s, i, Wt && Wt.vars.overwrite !== !0)._first || dr(this),
                    this.parent && o !== this.timeline.totalDuration() && Gn(this, (this._dur * this.timeline._tDur) / o, 0, 1),
                    this
                );
            }
            var a = this._targets,
                c = s ? st(s) : a,
                l = this._ptLookup,
                u = this._pt,
                f,
                d,
                h,
                y,
                m,
                _,
                v;
            if ((!i || i === 'all') && D1(a, c)) return i === 'all' && (this._pt = 0), dr(this);
            for (
                f = this._op = this._op || [],
                    i !== 'all' &&
                        (Pe(i) &&
                            ((m = {}),
                            je(i, function (w) {
                                return (m[w] = 1);
                            }),
                            (i = m)),
                        (i = up(a, i))),
                    v = a.length;
                v--;

            )
                if (~c.indexOf(a[v])) {
                    (d = l[v]), i === 'all' ? ((f[v] = i), (y = d), (h = {})) : ((h = f[v] = f[v] || {}), (y = i));
                    for (m in y) (_ = d && d[m]), _ && ((!('kill' in _.d) || _.d.kill(m) === !0) && Vs(this, _, '_pt'), delete d[m]), h !== 'all' && (h[m] = 1);
                }
            return this._initted && !this._pt && u && dr(this), this;
        }),
        (e.to = function (s, i) {
            return new e(s, i, arguments[2]);
        }),
        (e.from = function (s, i) {
            return Cr(1, arguments);
        }),
        (e.delayedCall = function (s, i, o, a) {
            return new e(i, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: s,
                onComplete: i,
                onReverseComplete: i,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: a,
            });
        }),
        (e.fromTo = function (s, i, o) {
            return Cr(2, arguments);
        }),
        (e.set = function (s, i) {
            return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(s, i);
        }),
        (e.killTweensOf = function (s, i, o) {
            return pe.killTweensOf(s, i, o);
        }),
        e
    );
})(Dr);
at(xe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
je('staggerTo,staggerFrom,staggerFromTo', function (t) {
    xe[t] = function () {
        var e = new Re(),
            n = Ii.call(arguments, 0);
        return n.splice(t === 'staggerFromTo' ? 5 : 4, 0, 0), e[t].apply(e, n);
    };
});
var Mo = function (e, n, r) {
        return (e[n] = r);
    },
    pu = function (e, n, r) {
        return e[n](r);
    },
    dp = function (e, n, r, s) {
        return e[n](s.fp, r);
    },
    hp = function (e, n, r) {
        return e.setAttribute(n, r);
    },
    Oo = function (e, n) {
        return ke(e[n]) ? pu : bo(e[n]) && e.setAttribute ? hp : Mo;
    },
    mu = function (e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
    },
    _p = function (e, n) {
        return n.set(n.t, n.p, !!(n.s + n.c * e), n);
    },
    gu = function (e, n) {
        var r = n._pt,
            s = '';
        if (!e && n.b) s = n.b;
        else if (e === 1 && n.e) s = n.e;
        else {
            for (; r; ) (s = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + s), (r = r._next);
            s += n.c;
        }
        n.set(n.t, n.p, s, n);
    },
    Ao = function (e, n) {
        for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
    },
    pp = function (e, n, r, s) {
        for (var i = this._pt, o; i; ) (o = i._next), i.p === s && i.modifier(e, n, r), (i = o);
    },
    mp = function (e) {
        for (var n = this._pt, r, s; n; ) (s = n._next), (n.p === e && !n.op) || n.op === e ? Vs(this, n, '_pt') : n.dep || (r = 1), (n = s);
        return !r;
    },
    gp = function (e, n, r, s) {
        s.mSet(e, n, s.m.call(s.tween, r, s.mt), s);
    },
    yu = function (e) {
        for (var n = e._pt, r, s, i, o; n; ) {
            for (r = n._next, s = i; s && s.pr > n.pr; ) s = s._next;
            (n._prev = s ? s._prev : o) ? (n._prev._next = n) : (i = n), (n._next = s) ? (s._prev = n) : (o = n), (n = r);
        }
        e._pt = i;
    },
    ze = (function () {
        function t(n, r, s, i, o, a, c, l, u) {
            (this.t = r),
                (this.s = i),
                (this.c = o),
                (this.p = s),
                (this.r = a || mu),
                (this.d = c || this),
                (this.set = l || Mo),
                (this.pr = u || 0),
                (this._next = n),
                n && (n._prev = this);
        }
        var e = t.prototype;
        return (
            (e.modifier = function (r, s, i) {
                (this.mSet = this.mSet || this.set), (this.set = gp), (this.m = r), (this.mt = i), (this.tween = s);
            }),
            t
        );
    })();
je(
    To +
        'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (t) {
        return (xo[t] = 1);
    }
);
Je.TweenMax = Je.TweenLite = xe;
Je.TimelineLite = Je.TimelineMax = Re;
pe = new Re({ sortChildren: !1, defaults: Jn, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0 });
Ye.stringFilter = au;
var Ts = {
    registerPlugin: function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        n.forEach(function (s) {
            return ep(s);
        });
    },
    timeline: function (e) {
        return new Re(e);
    },
    getTweensOf: function (e, n) {
        return pe.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, s) {
        Pe(e) && (e = st(e)[0]);
        var i = Cn(e || {}).get,
            o = r ? Zc : Wc;
        return (
            r === 'native' && (r = ''),
            e &&
                (n
                    ? o(((We[n] && We[n].get) || i)(e, n, r, s))
                    : function (a, c, l) {
                          return o(((We[a] && We[a].get) || i)(e, a, c, l));
                      })
        );
    },
    quickSetter: function (e, n, r) {
        if (((e = st(e)), e.length > 1)) {
            var s = e.map(function (u) {
                    return ht.quickSetter(u, n, r);
                }),
                i = s.length;
            return function (u) {
                for (var f = i; f--; ) s[f](u);
            };
        }
        e = e[0] || {};
        var o = We[n],
            a = Cn(e),
            c = (a.harness && (a.harness.aliases || {})[n]) || n,
            l = o
                ? function (u) {
                      var f = new o();
                      (Hn._pt = 0), f.init(e, r ? u + r : u, Hn, 0, [e]), f.render(1, f), Hn._pt && Ao(1, Hn);
                  }
                : a.set(e, c);
        return o
            ? l
            : function (u) {
                  return l(e, c, r ? u + r : u, a, 1);
              };
    },
    quickTo: function (e, n, r) {
        var s,
            i = ht.to(e, kn(((s = {}), (s[n] = '+=0.1'), (s.paused = !0), s), r || {})),
            o = function (c, l, u) {
                return i.resetTo(n, c, l, u);
            };
        return (o.tween = i), o;
    },
    isTweening: function (e) {
        return pe.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
        return e && e.ease && (e.ease = Tn(e.ease, Jn.ease)), Da(Jn, e || {});
    },
    config: function (e) {
        return Da(Ye, e || {});
    },
    registerEffect: function (e) {
        var n = e.name,
            r = e.effect,
            s = e.plugins,
            i = e.defaults,
            o = e.extendTimeline;
        (s || '').split(',').forEach(function (a) {
            return a && !We[a] && !Je[a] && bs(n + ' effect requires ' + a + ' plugin.');
        }),
            (ii[n] = function (a, c, l) {
                return r(st(a), at(c || {}, i), l);
            }),
            o &&
                (Re.prototype[n] = function (a, c, l) {
                    return this.add(ii[n](a, Dt(c) ? c : (l = c) && {}, this), l);
                });
    },
    registerEase: function (e, n) {
        G[e] = Tn(n);
    },
    parseEase: function (e, n) {
        return arguments.length ? Tn(e, n) : G;
    },
    getById: function (e) {
        return pe.getById(e);
    },
    exportRoot: function (e, n) {
        e === void 0 && (e = {});
        var r = new Re(e),
            s,
            i;
        for (r.smoothChildTiming = Ve(e.smoothChildTiming), pe.remove(r), r._dp = 0, r._time = r._tTime = pe._time, s = pe._first; s; )
            (i = s._next), (n || !(!s._dur && s instanceof xe && s.vars.onComplete === s._targets[0])) && wt(r, s, s._start - s._delay), (s = i);
        return wt(pe, r, 0), r;
    },
    utils: {
        wrap: J1,
        wrapYoyo: Q1,
        distribute: eu,
        random: nu,
        snap: tu,
        normalize: X1,
        getUnit: Le,
        clamp: q1,
        splitColor: iu,
        toArray: st,
        selector: Z1,
        mapRange: su,
        pipe: K1,
        unitize: Y1,
        interpolate: G1,
        shuffle: Gc,
    },
    install: Vc,
    effects: ii,
    ticker: Ke,
    updateRoot: Re.updateRoot,
    plugins: We,
    globalTimeline: pe,
    core: {
        PropTween: ze,
        globals: jc,
        Tween: xe,
        Timeline: Re,
        Animation: Dr,
        getCache: Cn,
        _removeLinkedListItem: Vs,
        suppressOverwrites: function (e) {
            return (vo = e);
        },
    },
};
je('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
    return (Ts[t] = xe[t]);
});
Ke.add(Re.updateRoot);
Hn = Ts.to({}, { duration: 0 });
var yp = function (e, n) {
        for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; ) r = r._next;
        return r;
    },
    vp = function (e, n) {
        var r = e._targets,
            s,
            i,
            o;
        for (s in n)
            for (i = r.length; i--; ) (o = e._ptLookup[i][s]), o && (o = o.d) && (o._pt && (o = yp(o, s)), o && o.modifier && o.modifier(n[s], e, r[i], s));
    },
    ci = function (e, n) {
        return {
            name: e,
            rawVars: 1,
            init: function (s, i, o) {
                o._onInit = function (a) {
                    var c, l;
                    if (
                        (Pe(i) &&
                            ((c = {}),
                            je(i, function (u) {
                                return (c[u] = 1);
                            }),
                            (i = c)),
                        n)
                    ) {
                        c = {};
                        for (l in i) c[l] = n(i[l]);
                        i = c;
                    }
                    vp(a, i);
                };
            },
        };
    },
    ht =
        Ts.registerPlugin(
            {
                name: 'attr',
                init: function (e, n, r, s, i) {
                    var o, a;
                    for (o in n) (a = this.add(e, 'setAttribute', (e.getAttribute(o) || 0) + '', n[o], s, i, 0, 0, o)), a && (a.op = o), this._props.push(o);
                },
            },
            {
                name: 'endArray',
                init: function (e, n) {
                    for (var r = n.length; r--; ) this.add(e, r, e[r] || 0, n[r]);
                },
            },
            ci('roundProps', Hi),
            ci('modifiers'),
            ci('snap', tu)
        ) || Ts;
xe.version = Re.version = ht.version = '3.10.4';
Bc = 1;
Fc() && er();
var bp = G.Power0,
    wp = G.Power1,
    Cp = G.Power2,
    xp = G.Power3,
    Tp = G.Power4,
    Sp = G.Linear,
    kp = G.Quad,
    Ep = G.Cubic,
    Pp = G.Quart,
    Mp = G.Quint,
    Op = G.Strong,
    Ap = G.Elastic,
    $p = G.Back,
    Lp = G.SteppedEase,
    Rp = G.Bounce,
    Fp = G.Sine,
    Ip = G.Expo,
    Hp = G.Circ;
/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var za,
    Zt,
    Un,
    $o,
    vn,
    Ua,
    Dp = function () {
        return typeof window != 'undefined';
    },
    nn = {},
    _n = 180 / Math.PI,
    qn = Math.PI / 180,
    $n = Math.atan2,
    qa = 1e8,
    vu = /([A-Z])/g,
    Np = /(left|right|width|margin|padding|x)/i,
    Bp = /[\s,\(]\S/,
    Kt = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
    bu = function (e, n) {
        return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
    },
    Vp = function (e, n) {
        return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
    },
    jp = function (e, n) {
        return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n);
    },
    zp = function (e, n) {
        var r = n.s + n.c * e;
        n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
    },
    wu = function (e, n) {
        return n.set(n.t, n.p, e ? n.e : n.b, n);
    },
    Cu = function (e, n) {
        return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
    },
    Up = function (e, n, r) {
        return (e.style[n] = r);
    },
    qp = function (e, n, r) {
        return e.style.setProperty(n, r);
    },
    Wp = function (e, n, r) {
        return (e._gsap[n] = r);
    },
    Zp = function (e, n, r) {
        return (e._gsap.scaleX = e._gsap.scaleY = r);
    },
    Kp = function (e, n, r, s, i) {
        var o = e._gsap;
        (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
    },
    Yp = function (e, n, r, s, i) {
        var o = e._gsap;
        (o[n] = r), o.renderTransform(i, o);
    },
    Ae = 'transform',
    rn = Ae + 'Origin',
    xu,
    Ni = function (e, n) {
        var r = Zt.createElementNS ? Zt.createElementNS((n || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), e) : Zt.createElement(e);
        return r.style ? r : Zt.createElement(e);
    },
    Lt = function t(e, n, r) {
        var s = getComputedStyle(e);
        return s[n] || s.getPropertyValue(n.replace(vu, '-$1').toLowerCase()) || s.getPropertyValue(n) || (!r && t(e, tr(n) || n, 1)) || '';
    },
    Wa = 'O,Moz,ms,Ms,Webkit'.split(','),
    tr = function (e, n, r) {
        var s = n || vn,
            i = s.style,
            o = 5;
        if (e in i && !r) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Wa[o] + e in i); );
        return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? Wa[o] : '') + e;
    },
    Bi = function () {
        Dp() &&
            window.document &&
            ((za = window),
            (Zt = za.document),
            (Un = Zt.documentElement),
            (vn = Ni('div') || { style: {} }),
            Ni('div'),
            (Ae = tr(Ae)),
            (rn = Ae + 'Origin'),
            (vn.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
            (xu = !!tr('perspective')),
            ($o = 1));
    },
    ui = function t(e) {
        var n = Ni('svg', (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'),
            r = this.parentNode,
            s = this.nextSibling,
            i = this.style.cssText,
            o;
        if ((Un.appendChild(n), n.appendChild(this), (this.style.display = 'block'), e))
            try {
                (o = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
            } catch {}
        else this._gsapBBox && (o = this._gsapBBox());
        return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Un.removeChild(n), (this.style.cssText = i), o;
    },
    Za = function (e, n) {
        for (var r = n.length; r--; ) if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
    },
    Tu = function (e) {
        var n;
        try {
            n = e.getBBox();
        } catch {
            n = ui.call(e, !0);
        }
        return (
            (n && (n.width || n.height)) || e.getBBox === ui || (n = ui.call(e, !0)),
            n && !n.width && !n.x && !n.y ? { x: +Za(e, ['x', 'cx', 'x1']) || 0, y: +Za(e, ['y', 'cy', 'y1']) || 0, width: 0, height: 0 } : n
        );
    },
    Su = function (e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Tu(e));
    },
    Nr = function (e, n) {
        if (n) {
            var r = e.style;
            n in nn && n !== rn && (n = Ae),
                r.removeProperty
                    ? ((n.substr(0, 2) === 'ms' || n.substr(0, 6) === 'webkit') && (n = '-' + n), r.removeProperty(n.replace(vu, '-$1').toLowerCase()))
                    : r.removeAttribute(n);
        }
    },
    Yt = function (e, n, r, s, i, o) {
        var a = new ze(e._pt, n, r, 0, 1, o ? Cu : wu);
        return (e._pt = a), (a.b = s), (a.e = i), e._props.push(r), a;
    },
    Ka = { deg: 1, rad: 1, turn: 1 },
    sn = function t(e, n, r, s) {
        var i = parseFloat(r) || 0,
            o = (r + '').trim().substr((i + '').length) || 'px',
            a = vn.style,
            c = Np.test(n),
            l = e.tagName.toLowerCase() === 'svg',
            u = (l ? 'client' : 'offset') + (c ? 'Width' : 'Height'),
            f = 100,
            d = s === 'px',
            h = s === '%',
            y,
            m,
            _,
            v;
        return s === o || !i || Ka[s] || Ka[o]
            ? i
            : (o !== 'px' && !d && (i = t(e, n, r, 'px')),
              (v = e.getCTM && Su(e)),
              (h || o === '%') && (nn[n] || ~n.indexOf('adius'))
                  ? ((y = v ? e.getBBox()[c ? 'width' : 'height'] : e[u]), ye(h ? (i / y) * f : (i / 100) * y))
                  : ((a[c ? 'width' : 'height'] = f + (d ? o : s)),
                    (m = ~n.indexOf('adius') || (s === 'em' && e.appendChild && !l) ? e : e.parentNode),
                    v && (m = (e.ownerSVGElement || {}).parentNode),
                    (!m || m === Zt || !m.appendChild) && (m = Zt.body),
                    (_ = m._gsap),
                    _ && h && _.width && c && _.time === Ke.time
                        ? ye((i / _.width) * f)
                        : ((h || o === '%') && (a.position = Lt(e, 'position')),
                          m === e && (a.position = 'static'),
                          m.appendChild(vn),
                          (y = vn[u]),
                          m.removeChild(vn),
                          (a.position = 'absolute'),
                          c && h && ((_ = Cn(m)), (_.time = Ke.time), (_.width = m[u])),
                          ye(d ? (y * i) / f : y && i ? (f / y) * i : 0))));
    },
    pn = function (e, n, r, s) {
        var i;
        return (
            $o || Bi(),
            n in Kt && n !== 'transform' && ((n = Kt[n]), ~n.indexOf(',') && (n = n.split(',')[0])),
            nn[n] && n !== 'transform'
                ? ((i = Vr(e, s)), (i = n !== 'transformOrigin' ? i[n] : i.svg ? i.origin : ks(Lt(e, rn)) + ' ' + i.zOrigin + 'px'))
                : ((i = e.style[n]),
                  (!i || i === 'auto' || s || ~(i + '').indexOf('calc(')) &&
                      (i = (Ss[n] && Ss[n](e, n, r)) || Lt(e, n) || Uc(e, n) || (n === 'opacity' ? 1 : 0))),
            r && !~(i + '').trim().indexOf(' ') ? sn(e, n, i, r) + r : i
        );
    },
    Xp = function (e, n, r, s) {
        if (!r || r === 'none') {
            var i = tr(n, e, 1),
                o = i && Lt(e, i, 1);
            o && o !== r ? ((n = i), (r = o)) : n === 'borderColor' && (r = Lt(e, 'borderTopColor'));
        }
        var a = new ze(this._pt, e.style, n, 0, 1, gu),
            c = 0,
            l = 0,
            u,
            f,
            d,
            h,
            y,
            m,
            _,
            v,
            w,
            C,
            S,
            x;
        if (
            ((a.b = r),
            (a.e = s),
            (r += ''),
            (s += ''),
            s === 'auto' && ((e.style[n] = s), (s = Lt(e, n) || s), (e.style[n] = r)),
            (u = [r, s]),
            au(u),
            (r = u[0]),
            (s = u[1]),
            (d = r.match(In) || []),
            (x = s.match(In) || []),
            x.length)
        ) {
            for (; (f = In.exec(s)); )
                (_ = f[0]),
                    (w = s.substring(c, f.index)),
                    y ? (y = (y + 1) % 5) : (w.substr(-5) === 'rgba(' || w.substr(-5) === 'hsla(') && (y = 1),
                    _ !== (m = d[l++] || '') &&
                        ((h = parseFloat(m) || 0),
                        (S = m.substr((h + '').length)),
                        _.charAt(1) === '=' && (_ = zn(h, _) + S),
                        (v = parseFloat(_)),
                        (C = _.substr((v + '').length)),
                        (c = In.lastIndex - C.length),
                        C || ((C = C || Ye.units[n] || S), c === s.length && ((s += C), (a.e += C))),
                        S !== C && (h = sn(e, n, m, C) || 0),
                        (a._pt = { _next: a._pt, p: w || l === 1 ? w : ',', s: h, c: v - h, m: (y && y < 4) || n === 'zIndex' ? Math.round : 0 }));
            a.c = c < s.length ? s.substring(c, s.length) : '';
        } else a.r = n === 'display' && s === 'none' ? Cu : wu;
        return Dc.test(s) && (a.e = 0), (this._pt = a), a;
    },
    Ya = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
    Jp = function (e) {
        var n = e.split(' '),
            r = n[0],
            s = n[1] || '50%';
        return (
            (r === 'top' || r === 'bottom' || s === 'left' || s === 'right') && ((e = r), (r = s), (s = e)),
            (n[0] = Ya[r] || r),
            (n[1] = Ya[s] || s),
            n.join(' ')
        );
    },
    Qp = function (e, n) {
        if (n.tween && n.tween._time === n.tween._dur) {
            var r = n.t,
                s = r.style,
                i = n.u,
                o = r._gsap,
                a,
                c,
                l;
            if (i === 'all' || i === !0) (s.cssText = ''), (c = 1);
            else for (i = i.split(','), l = i.length; --l > -1; ) (a = i[l]), nn[a] && ((c = 1), (a = a === 'transformOrigin' ? rn : Ae)), Nr(r, a);
            c && (Nr(r, Ae), o && (o.svg && r.removeAttribute('transform'), Vr(r, 1), (o.uncache = 1)));
        }
    },
    Ss = {
        clearProps: function (e, n, r, s, i) {
            if (i.data !== 'isFromStart') {
                var o = (e._pt = new ze(e._pt, n, r, 0, 0, Qp));
                return (o.u = s), (o.pr = -10), (o.tween = i), e._props.push(r), 1;
            }
        },
    },
    Br = [1, 0, 0, 1, 0, 0],
    ku = {},
    Eu = function (e) {
        return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
    },
    Xa = function (e) {
        var n = Lt(e, Ae);
        return Eu(n) ? Br : n.substr(7).match(Hc).map(ye);
    },
    Lo = function (e, n) {
        var r = e._gsap || Cn(e),
            s = e.style,
            i = Xa(e),
            o,
            a,
            c,
            l;
        return r.svg && e.getAttribute('transform')
            ? ((c = e.transform.baseVal.consolidate().matrix), (i = [c.a, c.b, c.c, c.d, c.e, c.f]), i.join(',') === '1,0,0,1,0,0' ? Br : i)
            : (i === Br &&
                  !e.offsetParent &&
                  e !== Un &&
                  !r.svg &&
                  ((c = s.display),
                  (s.display = 'block'),
                  (o = e.parentNode),
                  (!o || !e.offsetParent) && ((l = 1), (a = e.nextSibling), Un.appendChild(e)),
                  (i = Xa(e)),
                  c ? (s.display = c) : Nr(e, 'display'),
                  l && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Un.removeChild(e))),
              n && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
    },
    Vi = function (e, n, r, s, i, o) {
        var a = e._gsap,
            c = i || Lo(e, !0),
            l = a.xOrigin || 0,
            u = a.yOrigin || 0,
            f = a.xOffset || 0,
            d = a.yOffset || 0,
            h = c[0],
            y = c[1],
            m = c[2],
            _ = c[3],
            v = c[4],
            w = c[5],
            C = n.split(' '),
            S = parseFloat(C[0]) || 0,
            x = parseFloat(C[1]) || 0,
            k,
            T,
            P,
            E;
        r
            ? c !== Br &&
              (T = h * _ - y * m) &&
              ((P = S * (_ / T) + x * (-m / T) + (m * w - _ * v) / T), (E = S * (-y / T) + x * (h / T) - (h * w - y * v) / T), (S = P), (x = E))
            : ((k = Tu(e)), (S = k.x + (~C[0].indexOf('%') ? (S / 100) * k.width : S)), (x = k.y + (~(C[1] || C[0]).indexOf('%') ? (x / 100) * k.height : x))),
            s || (s !== !1 && a.smooth)
                ? ((v = S - l), (w = x - u), (a.xOffset = f + (v * h + w * m) - v), (a.yOffset = d + (v * y + w * _) - w))
                : (a.xOffset = a.yOffset = 0),
            (a.xOrigin = S),
            (a.yOrigin = x),
            (a.smooth = !!s),
            (a.origin = n),
            (a.originIsAbsolute = !!r),
            (e.style[rn] = '0px 0px'),
            o && (Yt(o, a, 'xOrigin', l, S), Yt(o, a, 'yOrigin', u, x), Yt(o, a, 'xOffset', f, a.xOffset), Yt(o, a, 'yOffset', d, a.yOffset)),
            e.setAttribute('data-svg-origin', S + ' ' + x);
    },
    Vr = function (e, n) {
        var r = e._gsap || new fu(e);
        if ('x' in r && !n && !r.uncache) return r;
        var s = e.style,
            i = r.scaleX < 0,
            o = 'px',
            a = 'deg',
            c = Lt(e, rn) || '0',
            l,
            u,
            f,
            d,
            h,
            y,
            m,
            _,
            v,
            w,
            C,
            S,
            x,
            k,
            T,
            P,
            E,
            H,
            j,
            O,
            V,
            W,
            ae,
            J,
            Q,
            te,
            Me,
            kt,
            Ue,
            Et,
            Se,
            _t;
        return (
            (l = u = f = y = m = _ = v = w = C = 0),
            (d = h = 1),
            (r.svg = !!(e.getCTM && Su(e))),
            (k = Lo(e, r.svg)),
            r.svg &&
                ((J = (!r.uncache || c === '0px 0px') && !n && e.getAttribute('data-svg-origin')),
                Vi(e, J || c, !!J || r.originIsAbsolute, r.smooth !== !1, k)),
            (S = r.xOrigin || 0),
            (x = r.yOrigin || 0),
            k !== Br &&
                ((H = k[0]),
                (j = k[1]),
                (O = k[2]),
                (V = k[3]),
                (l = W = k[4]),
                (u = ae = k[5]),
                k.length === 6
                    ? ((d = Math.sqrt(H * H + j * j)),
                      (h = Math.sqrt(V * V + O * O)),
                      (y = H || j ? $n(j, H) * _n : 0),
                      (v = O || V ? $n(O, V) * _n + y : 0),
                      v && (h *= Math.abs(Math.cos(v * qn))),
                      r.svg && ((l -= S - (S * H + x * O)), (u -= x - (S * j + x * V))))
                    : ((_t = k[6]),
                      (Et = k[7]),
                      (Me = k[8]),
                      (kt = k[9]),
                      (Ue = k[10]),
                      (Se = k[11]),
                      (l = k[12]),
                      (u = k[13]),
                      (f = k[14]),
                      (T = $n(_t, Ue)),
                      (m = T * _n),
                      T &&
                          ((P = Math.cos(-T)),
                          (E = Math.sin(-T)),
                          (J = W * P + Me * E),
                          (Q = ae * P + kt * E),
                          (te = _t * P + Ue * E),
                          (Me = W * -E + Me * P),
                          (kt = ae * -E + kt * P),
                          (Ue = _t * -E + Ue * P),
                          (Se = Et * -E + Se * P),
                          (W = J),
                          (ae = Q),
                          (_t = te)),
                      (T = $n(-O, Ue)),
                      (_ = T * _n),
                      T &&
                          ((P = Math.cos(-T)),
                          (E = Math.sin(-T)),
                          (J = H * P - Me * E),
                          (Q = j * P - kt * E),
                          (te = O * P - Ue * E),
                          (Se = V * E + Se * P),
                          (H = J),
                          (j = Q),
                          (O = te)),
                      (T = $n(j, H)),
                      (y = T * _n),
                      T &&
                          ((P = Math.cos(T)),
                          (E = Math.sin(T)),
                          (J = H * P + j * E),
                          (Q = W * P + ae * E),
                          (j = j * P - H * E),
                          (ae = ae * P - W * E),
                          (H = J),
                          (W = Q)),
                      m && Math.abs(m) + Math.abs(y) > 359.9 && ((m = y = 0), (_ = 180 - _)),
                      (d = ye(Math.sqrt(H * H + j * j + O * O))),
                      (h = ye(Math.sqrt(ae * ae + _t * _t))),
                      (T = $n(W, ae)),
                      (v = Math.abs(T) > 2e-4 ? T * _n : 0),
                      (C = Se ? 1 / (Se < 0 ? -Se : Se) : 0)),
                r.svg &&
                    ((J = e.getAttribute('transform')), (r.forceCSS = e.setAttribute('transform', '') || !Eu(Lt(e, Ae))), J && e.setAttribute('transform', J))),
            Math.abs(v) > 90 &&
                Math.abs(v) < 270 &&
                (i ? ((d *= -1), (v += y <= 0 ? 180 : -180), (y += y <= 0 ? 180 : -180)) : ((h *= -1), (v += v <= 0 ? 180 : -180))),
            (n = n || r.uncache),
            (r.x =
                l -
                ((r.xPercent = l && ((!n && r.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
                    ? (e.offsetWidth * r.xPercent) / 100
                    : 0) +
                o),
            (r.y =
                u -
                ((r.yPercent = u && ((!n && r.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
                    ? (e.offsetHeight * r.yPercent) / 100
                    : 0) +
                o),
            (r.z = f + o),
            (r.scaleX = ye(d)),
            (r.scaleY = ye(h)),
            (r.rotation = ye(y) + a),
            (r.rotationX = ye(m) + a),
            (r.rotationY = ye(_) + a),
            (r.skewX = v + a),
            (r.skewY = w + a),
            (r.transformPerspective = C + o),
            (r.zOrigin = parseFloat(c.split(' ')[2]) || 0) && (s[rn] = ks(c)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = Ye.force3D),
            (r.renderTransform = r.svg ? e0 : xu ? Pu : Gp),
            (r.uncache = 0),
            r
        );
    },
    ks = function (e) {
        return (e = e.split(' '))[0] + ' ' + e[1];
    },
    fi = function (e, n, r) {
        var s = Le(n);
        return ye(parseFloat(n) + parseFloat(sn(e, 'x', r + 'px', s))) + s;
    },
    Gp = function (e, n) {
        (n.z = '0px'), (n.rotationY = n.rotationX = '0deg'), (n.force3D = 0), Pu(e, n);
    },
    un = '0deg',
    lr = '0px',
    fn = ') ',
    Pu = function (e, n) {
        var r = n || this,
            s = r.xPercent,
            i = r.yPercent,
            o = r.x,
            a = r.y,
            c = r.z,
            l = r.rotation,
            u = r.rotationY,
            f = r.rotationX,
            d = r.skewX,
            h = r.skewY,
            y = r.scaleX,
            m = r.scaleY,
            _ = r.transformPerspective,
            v = r.force3D,
            w = r.target,
            C = r.zOrigin,
            S = '',
            x = (v === 'auto' && e && e !== 1) || v === !0;
        if (C && (f !== un || u !== un)) {
            var k = parseFloat(u) * qn,
                T = Math.sin(k),
                P = Math.cos(k),
                E;
            (k = parseFloat(f) * qn), (E = Math.cos(k)), (o = fi(w, o, T * E * -C)), (a = fi(w, a, -Math.sin(k) * -C)), (c = fi(w, c, P * E * -C + C));
        }
        _ !== lr && (S += 'perspective(' + _ + fn),
            (s || i) && (S += 'translate(' + s + '%, ' + i + '%) '),
            (x || o !== lr || a !== lr || c !== lr) &&
                (S += c !== lr || x ? 'translate3d(' + o + ', ' + a + ', ' + c + ') ' : 'translate(' + o + ', ' + a + fn),
            l !== un && (S += 'rotate(' + l + fn),
            u !== un && (S += 'rotateY(' + u + fn),
            f !== un && (S += 'rotateX(' + f + fn),
            (d !== un || h !== un) && (S += 'skew(' + d + ', ' + h + fn),
            (y !== 1 || m !== 1) && (S += 'scale(' + y + ', ' + m + fn),
            (w.style[Ae] = S || 'translate(0, 0)');
    },
    e0 = function (e, n) {
        var r = n || this,
            s = r.xPercent,
            i = r.yPercent,
            o = r.x,
            a = r.y,
            c = r.rotation,
            l = r.skewX,
            u = r.skewY,
            f = r.scaleX,
            d = r.scaleY,
            h = r.target,
            y = r.xOrigin,
            m = r.yOrigin,
            _ = r.xOffset,
            v = r.yOffset,
            w = r.forceCSS,
            C = parseFloat(o),
            S = parseFloat(a),
            x,
            k,
            T,
            P,
            E;
        (c = parseFloat(c)),
            (l = parseFloat(l)),
            (u = parseFloat(u)),
            u && ((u = parseFloat(u)), (l += u), (c += u)),
            c || l
                ? ((c *= qn),
                  (l *= qn),
                  (x = Math.cos(c) * f),
                  (k = Math.sin(c) * f),
                  (T = Math.sin(c - l) * -d),
                  (P = Math.cos(c - l) * d),
                  l &&
                      ((u *= qn),
                      (E = Math.tan(l - u)),
                      (E = Math.sqrt(1 + E * E)),
                      (T *= E),
                      (P *= E),
                      u && ((E = Math.tan(u)), (E = Math.sqrt(1 + E * E)), (x *= E), (k *= E))),
                  (x = ye(x)),
                  (k = ye(k)),
                  (T = ye(T)),
                  (P = ye(P)))
                : ((x = f), (P = d), (k = T = 0)),
            ((C && !~(o + '').indexOf('px')) || (S && !~(a + '').indexOf('px'))) && ((C = sn(h, 'x', o, 'px')), (S = sn(h, 'y', a, 'px'))),
            (y || m || _ || v) && ((C = ye(C + y - (y * x + m * T) + _)), (S = ye(S + m - (y * k + m * P) + v))),
            (s || i) && ((E = h.getBBox()), (C = ye(C + (s / 100) * E.width)), (S = ye(S + (i / 100) * E.height))),
            (E = 'matrix(' + x + ',' + k + ',' + T + ',' + P + ',' + C + ',' + S + ')'),
            h.setAttribute('transform', E),
            w && (h.style[Ae] = E);
    },
    t0 = function (e, n, r, s, i) {
        var o = 360,
            a = Pe(i),
            c = parseFloat(i) * (a && ~i.indexOf('rad') ? _n : 1),
            l = c - s,
            u = s + l + 'deg',
            f,
            d;
        return (
            a &&
                ((f = i.split('_')[1]),
                f === 'short' && ((l %= o), l !== l % (o / 2) && (l += l < 0 ? o : -o)),
                f === 'cw' && l < 0 ? (l = ((l + o * qa) % o) - ~~(l / o) * o) : f === 'ccw' && l > 0 && (l = ((l - o * qa) % o) - ~~(l / o) * o)),
            (e._pt = d = new ze(e._pt, n, r, s, l, Vp)),
            (d.e = u),
            (d.u = 'deg'),
            e._props.push(r),
            d
        );
    },
    Ja = function (e, n) {
        for (var r in n) e[r] = n[r];
        return e;
    },
    n0 = function (e, n, r) {
        var s = Ja({}, r._gsap),
            i = 'perspective,force3D,transformOrigin,svgOrigin',
            o = r.style,
            a,
            c,
            l,
            u,
            f,
            d,
            h,
            y;
        s.svg
            ? ((l = r.getAttribute('transform')), r.setAttribute('transform', ''), (o[Ae] = n), (a = Vr(r, 1)), Nr(r, Ae), r.setAttribute('transform', l))
            : ((l = getComputedStyle(r)[Ae]), (o[Ae] = n), (a = Vr(r, 1)), (o[Ae] = l));
        for (c in nn)
            (l = s[c]),
                (u = a[c]),
                l !== u &&
                    i.indexOf(c) < 0 &&
                    ((h = Le(l)),
                    (y = Le(u)),
                    (f = h !== y ? sn(r, c, l, y) : parseFloat(l)),
                    (d = parseFloat(u)),
                    (e._pt = new ze(e._pt, a, c, f, d - f, bu)),
                    (e._pt.u = y || 0),
                    e._props.push(c));
        Ja(a, s);
    };
je('padding,margin,Width,Radius', function (t, e) {
    var n = 'Top',
        r = 'Right',
        s = 'Bottom',
        i = 'Left',
        o = (e < 3 ? [n, r, s, i] : [n + i, n + r, s + r, s + i]).map(function (a) {
            return e < 2 ? t + a : 'border' + a + t;
        });
    Ss[e > 1 ? 'border' + t : t] = function (a, c, l, u, f) {
        var d, h;
        if (arguments.length < 4)
            return (
                (d = o.map(function (y) {
                    return pn(a, y, l);
                })),
                (h = d.join(' ')),
                h.split(d[0]).length === 5 ? d[0] : h
            );
        (d = (u + '').split(' ')),
            (h = {}),
            o.forEach(function (y, m) {
                return (h[y] = d[m] = d[m] || d[((m - 1) / 2) | 0]);
            }),
            a.init(c, h, f);
    };
});
var Ro = {
    name: 'css',
    register: Bi,
    targetTest: function (e) {
        return e.style && e.nodeType;
    },
    init: function (e, n, r, s, i) {
        var o = this._props,
            a = e.style,
            c = r.vars.startAt,
            l,
            u,
            f,
            d,
            h,
            y,
            m,
            _,
            v,
            w,
            C,
            S,
            x,
            k,
            T;
        $o || Bi();
        for (m in n)
            if (m !== 'autoRound' && ((u = n[m]), !(We[m] && du(m, n, r, s, e, i)))) {
                if (
                    ((h = typeof u),
                    (y = Ss[m]),
                    h === 'function' && ((u = u.call(r, s, e, i)), (h = typeof u)),
                    h === 'string' && ~u.indexOf('random(') && (u = Ir(u)),
                    y)
                )
                    y(this, e, m, u, r) && (T = 1);
                else if (m.substr(0, 2) === '--')
                    (l = (getComputedStyle(e).getPropertyValue(m) + '').trim()),
                        (u += ''),
                        (en.lastIndex = 0),
                        en.test(l) || ((_ = Le(l)), (v = Le(u))),
                        v ? _ !== v && (l = sn(e, m, l, v) + v) : _ && (u += _),
                        this.add(a, 'setProperty', l, u, s, i, 0, 0, m),
                        o.push(m);
                else if (h !== 'undefined') {
                    if (
                        (c && m in c
                            ? ((l = typeof c[m] == 'function' ? c[m].call(r, s, e, i) : c[m]),
                              Pe(l) && ~l.indexOf('random(') && (l = Ir(l)),
                              Le(l + '') || (l += Ye.units[m] || Le(pn(e, m)) || ''),
                              (l + '').charAt(1) === '=' && (l = pn(e, m)))
                            : (l = pn(e, m)),
                        (d = parseFloat(l)),
                        (w = h === 'string' && u.charAt(1) === '=' && u.substr(0, 2)),
                        w && (u = u.substr(2)),
                        (f = parseFloat(u)),
                        m in Kt &&
                            (m === 'autoAlpha' &&
                                (d === 1 && pn(e, 'visibility') === 'hidden' && f && (d = 0),
                                Yt(this, a, 'visibility', d ? 'inherit' : 'hidden', f ? 'inherit' : 'hidden', !f)),
                            m !== 'scale' && m !== 'transform' && ((m = Kt[m]), ~m.indexOf(',') && (m = m.split(',')[0]))),
                        (C = m in nn),
                        C)
                    ) {
                        if (
                            (S ||
                                ((x = e._gsap),
                                (x.renderTransform && !n.parseTransform) || Vr(e, n.parseTransform),
                                (k = n.smoothOrigin !== !1 && x.smooth),
                                (S = this._pt = new ze(this._pt, a, Ae, 0, 1, x.renderTransform, x, 0, -1)),
                                (S.dep = 1)),
                            m === 'scale')
                        )
                            (this._pt = new ze(this._pt, x, 'scaleY', x.scaleY, (w ? zn(x.scaleY, w + f) : f) - x.scaleY || 0)),
                                o.push('scaleY', m),
                                (m += 'X');
                        else if (m === 'transformOrigin') {
                            (u = Jp(u)),
                                x.svg
                                    ? Vi(e, u, 0, k, 0, this)
                                    : ((v = parseFloat(u.split(' ')[2]) || 0),
                                      v !== x.zOrigin && Yt(this, x, 'zOrigin', x.zOrigin, v),
                                      Yt(this, a, m, ks(l), ks(u)));
                            continue;
                        } else if (m === 'svgOrigin') {
                            Vi(e, u, 1, k, 0, this);
                            continue;
                        } else if (m in ku) {
                            t0(this, x, m, d, w ? zn(d, w + u) : u);
                            continue;
                        } else if (m === 'smoothOrigin') {
                            Yt(this, x, 'smooth', x.smooth, u);
                            continue;
                        } else if (m === 'force3D') {
                            x[m] = u;
                            continue;
                        } else if (m === 'transform') {
                            n0(this, u, e);
                            continue;
                        }
                    } else m in a || (m = tr(m) || m);
                    if (C || ((f || f === 0) && (d || d === 0) && !Bp.test(u) && m in a))
                        (_ = (l + '').substr((d + '').length)),
                            f || (f = 0),
                            (v = Le(u) || (m in Ye.units ? Ye.units[m] : _)),
                            _ !== v && (d = sn(e, m, l, v)),
                            (this._pt = new ze(
                                this._pt,
                                C ? x : a,
                                m,
                                d,
                                (w ? zn(d, w + f) : f) - d,
                                !C && (v === 'px' || m === 'zIndex') && n.autoRound !== !1 ? zp : bu
                            )),
                            (this._pt.u = v || 0),
                            _ !== v && v !== '%' && ((this._pt.b = l), (this._pt.r = jp));
                    else if (m in a) Xp.call(this, e, m, l, w ? w + u : u);
                    else if (m in e) this.add(e, m, l || e[m], w ? w + u : u, s, i);
                    else {
                        Co(m, u);
                        continue;
                    }
                    o.push(m);
                }
            }
        T && yu(this);
    },
    get: pn,
    aliases: Kt,
    getSetter: function (e, n, r) {
        var s = Kt[n];
        return (
            s && s.indexOf(',') < 0 && (n = s),
            n in nn && n !== rn && (e._gsap.x || pn(e, 'x'))
                ? r && Ua === r
                    ? n === 'scale'
                        ? Zp
                        : Wp
                    : (Ua = r || {}) && (n === 'scale' ? Kp : Yp)
                : e.style && !bo(e.style[n])
                ? Up
                : ~n.indexOf('-')
                ? qp
                : Oo(e, n)
        );
    },
    core: { _removeProperty: Nr, _getMatrix: Lo },
};
ht.utils.checkPrefix = tr;
(function (t, e, n, r) {
    var s = je(t + ',' + e + ',' + n, function (i) {
        nn[i] = 1;
    });
    je(e, function (i) {
        (Ye.units[i] = 'deg'), (ku[i] = 1);
    }),
        (Kt[s[13]] = t + ',' + e),
        je(r, function (i) {
            var o = i.split(':');
            Kt[o[1]] = s[o[0]];
        });
})(
    'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
    'rotation,rotationX,rotationY,skewX,skewY',
    'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
);
je('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (t) {
    Ye.units[t] = 'px';
});
ht.registerPlugin(Ro);
var En = ht.registerPlugin(Ro) || ht,
    r0 = En.core.Tween,
    i4 = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                gsap: En,
                default: En,
                CSSPlugin: Ro,
                TweenMax: r0,
                TweenLite: xe,
                TimelineMax: Re,
                TimelineLite: Re,
                Power0: bp,
                Power1: wp,
                Power2: Cp,
                Power3: xp,
                Power4: Tp,
                Linear: Sp,
                Quad: kp,
                Cubic: Ep,
                Quart: Pp,
                Quint: Mp,
                Strong: Op,
                Elastic: Ap,
                Back: $p,
                SteppedEase: Lp,
                Bounce: Rp,
                Sine: Fp,
                Expo: Ip,
                Circ: Hp,
            },
            Symbol.toStringTag,
            { value: 'Module' }
        )
    );
const s0 = () => {
    const t = Pc(),
        e = {
            duration: 250,
            mode: 'out-in',
            css: !1,
            appear: !0,
            onEnter(n, r) {
                En.fromTo(n, { opacity: 0 }, { duration: 0.5, opacity: 1, onComplete: r });
            },
            onLeave(n, r) {
                En.fromTo(n, { opacity: 1 }, { duration: 0.5, opacity: 0, onComplete: r });
            },
        };
    t.meta.pageTransition = me({}, e);
};
var se = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, s] of e) n[r] = s;
    return n;
};
const i0 = {
        props: {
            appName: { type: String, default: 'Nuxt' },
            version: { type: String, default: '' },
            statusCode: { type: String, default: '404' },
            statusMessage: { type: String, default: 'Not Found' },
            description: { type: String, default: 'Sorry, the page you are looking for could not be found.' },
            backHome: { type: String, default: 'Go back home' },
        },
        setup(t, { expose: e }) {
            e();
            const n = t;
            Tt({
                title: `${n.statusCode} - ${n.statusMessage} | ${n.appName}`,
                script: [],
                style: [
                    {
                        children:
                            '*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}',
                    },
                ],
            });
            const r = { props: n, useHead: Tt };
            return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r;
        },
    },
    o0 = (t) => (so('data-v-b11ad3a6'), (t = t()), io(), t),
    a0 = { class: 'font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden' },
    l0 = o0(() => p('div', { class: 'fixed left-0 right-0 spotlight z-10' }, null, -1)),
    c0 = { class: 'max-w-520px text-center z-20' },
    u0 = ['innerHTML'],
    f0 = ['innerHTML'],
    d0 = { class: 'w-full flex items-center justify-center' };
function h0(t, e, n, r, s, i) {
    const o = go;
    return (
        B(),
        K('div', a0, [
            l0,
            p('div', c0, [
                p('h1', { class: 'text-8xl sm:text-10xl font-medium mb-8', innerHTML: n.statusCode }, null, 8, u0),
                p('p', { class: 'text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight', innerHTML: n.description }, null, 8, f0),
                p('div', d0, [
                    N(
                        o,
                        { to: '/', class: 'gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer' },
                        { default: Oe(() => [ve(be(n.backHome), 1)]), _: 1 }
                    ),
                ]),
            ]),
        ])
    );
}
var Qa = se(i0, [
    ['render', h0],
    ['__scopeId', 'data-v-b11ad3a6'],
]);
const _0 = {
        props: {
            appName: { type: String, default: 'Nuxt' },
            version: { type: String, default: '' },
            statusCode: { type: String, default: '500' },
            statusMessage: { type: String, default: 'Server error' },
            description: { type: String, default: 'This page is temporarily unavailable.' },
        },
        setup(t, { expose: e }) {
            e();
            const n = t;
            Tt({
                title: `${n.statusCode} - ${n.statusMessage} | ${n.appName}`,
                script: [],
                style: [
                    {
                        children:
                            '*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}',
                    },
                ],
            });
            const r = { props: n, useHead: Tt };
            return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r;
        },
    },
    p0 = (t) => (so('data-v-18181656'), (t = t()), io(), t),
    m0 = { class: 'font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden' },
    g0 = p0(() => p('div', { class: 'fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight' }, null, -1)),
    y0 = { class: 'max-w-520px text-center' },
    v0 = ['innerHTML'],
    b0 = ['innerHTML'];
function w0(t, e, n, r, s, i) {
    return (
        B(),
        K('div', m0, [
            g0,
            p('div', y0, [
                p('h1', { class: 'text-8xl sm:text-10xl font-medium mb-8', innerHTML: n.statusCode }, null, 8, v0),
                p('p', { class: 'text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight', innerHTML: n.description }, null, 8, b0),
            ]),
        ])
    );
}
var Ga = se(_0, [
    ['render', w0],
    ['__scopeId', 'data-v-18181656'],
]);
const C0 = {
        props: {
            appName: { type: String, default: 'Nuxt' },
            version: { type: String, default: '' },
            statusCode: { type: String, default: '500' },
            statusMessage: { type: String, default: 'Server error' },
            description: {
                type: String,
                default:
                    'An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.',
            },
            stack: { type: String, default: '' },
        },
        setup(t, { expose: e }) {
            e();
            const n = t;
            Tt({
                title: `${n.statusCode} - ${n.statusMessage} | ${n.appName}`,
                script: [],
                style: [
                    {
                        children:
                            '*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}',
                    },
                ],
            });
            const r = { props: n, useHead: Tt };
            return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r;
        },
    },
    x0 = (t) => (so('data-v-4f8d0ee7'), (t = t()), io(), t),
    T0 = { class: 'font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col' },
    S0 = x0(() => p('div', { class: 'fixed left-0 right-0 spotlight' }, null, -1)),
    k0 = ['innerHTML'],
    E0 = ['innerHTML'],
    P0 = { class: 'bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto' },
    M0 = ['innerHTML'];
function O0(t, e, n, r, s, i) {
    return (
        B(),
        K('div', T0, [
            S0,
            p('h1', { class: 'text-6xl sm:text-8xl font-medium mb-6', innerHTML: n.statusCode }, null, 8, k0),
            p('p', { class: 'text-xl sm:text-2xl font-light mb-8 leading-tight', innerHTML: n.description }, null, 8, E0),
            p('div', P0, [p('pre', { class: 'text-xl font-light leading-tight z-10 p-8', innerHTML: n.stack }, null, 8, M0)]),
        ])
    );
}
var A0 = se(C0, [
    ['render', O0],
    ['__scopeId', 'data-v-4f8d0ee7'],
]);
const $0 = {
    props: { error: Object },
    setup(t, { expose: e }) {
        var d;
        e();
        const n = t,
            r = n.error,
            s = (r.stack || '')
                .split(
                    `
`
                )
                .splice(1)
                .map((h) => ({
                    text: h.replace('webpack:/', '').replace('.vue', '.js').trim(),
                    internal: (h.includes('node_modules') && !h.includes('.cache')) || h.includes('internal') || h.includes('new Promise'),
                }))
                .map((h) => `<span class="stack${h.internal ? ' internal' : ''}">${h.text}</span>`).join(`
`),
            i = String(r.statusCode || 500),
            o = i === '404',
            a = ((d = r.statusMessage) != null ? d : o) ? 'Page Not Found' : 'Internal Server Error',
            c = r.message || r.toString(),
            f = {
                props: n,
                error: r,
                stacktrace: s,
                statusCode: i,
                is404: o,
                statusMessage: a,
                description: c,
                stack: void 0,
                ErrorTemplate: o ? Qa : Ga,
                Error404: Qa,
                Error500: Ga,
                ErrorDev: A0,
            };
        return Object.defineProperty(f, '__isScriptSetup', { enumerable: !1, value: !0 }), f;
    },
};
function L0(t, e, n, r, s, i) {
    return B(), Ne(r.ErrorTemplate, Wu(oc({ statusCode: r.statusCode, statusMessage: r.statusMessage, description: r.description, stack: r.stack })), null, 16);
}
var R0 = se($0, [['render', L0]]);
const F0 = {
    setup(t, { expose: e }) {
        e();
        const n = dt(),
            r = () => n.callHook('app:suspense:resolve'),
            s = n.hooks.callHookWith((a) => a.map((c) => c()), 'vue:setup'),
            i = ys();
        yi((a, c, l) => {
            n.hooks.callHook('vue:error', a, c, l).catch((u) => console.error('[nuxt] Error in `vue:error` hook', u));
        });
        const o = {
            nuxtApp: n,
            onResolve: r,
            results: s,
            error: i,
            onErrorCaptured: yi,
            callWithNuxt: gs,
            throwError: D_,
            useError: ys,
            useNuxtApp: dt,
            ErrorComponent: R0,
        };
        return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o;
    },
};
function I0(t, e, n, r, s, i) {
    const o = Fn('App');
    return (
        B(),
        Ne(
            Xf,
            { onResolve: r.onResolve },
            { default: Oe(() => [r.error ? (B(), Ne(r.ErrorComponent, { key: 0, error: r.error }, null, 8, ['error'])) : (B(), Ne(o, { key: 1 }))]), _: 1 }
        )
    );
}
var el = se(F0, [['render', I0]]);
const H0 = 'modulepreload',
    tl = {},
    D0 = g_(),
    nt = function (e, n) {
        return !n || n.length === 0
            ? e()
            : Promise.all(
                  n.map((r) => {
                      if (((r = `${D0}${r}`), r in tl)) return;
                      tl[r] = !0;
                      const s = r.endsWith('.css'),
                          i = s ? '[rel="stylesheet"]' : '';
                      if (document.querySelector(`link[href="${r}"]${i}`)) return;
                      const o = document.createElement('link');
                      if (((o.rel = s ? 'stylesheet' : H0), s || ((o.as = 'script'), (o.crossOrigin = '')), (o.href = r), document.head.appendChild(o), s))
                          return new Promise((a, c) => {
                              o.addEventListener('load', a), o.addEventListener('error', () => c(new Error(`Unable to preload CSS for ${r}`)));
                          });
                  })
              ).then(() => e());
    },
    N0 = oe({
        props: { title: null, description: null },
        setup(t, { expose: e }) {
            e(), Tt({ htmlAttrs: { lang: 'en' } });
            const n = {};
            return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n;
        },
    });
function B0(t, e, n, r, s, i) {
    const o = Fn('Meta'),
        a = Fn('Title'),
        c = Fn('Link'),
        l = Fn('Head');
    return (
        B(),
        Ne(l, null, {
            default: Oe(() => [
                N(o, { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
                N(a, null, { default: Oe(() => [ve(be(n.title), 1)]), _: 1 }),
                N(o, { name: 'description', content: n.description.trim() }, null, 8, ['content']),
                N(o, { name: 'og:title', content: n.title.trim() }, null, 8, ['content']),
                N(o, { name: 'title', property: 'og:title', content: n.title.trim() }, null, 8, ['content']),
                N(o, { name: 'og:description', content: n.description.trim() }, null, 8, ['content']),
                N(o, { name: 'twitter:title', content: n.title.trim() }, null, 8, ['content']),
                N(o, { name: 'twitter:description', content: n.description.trim() }, null, 8, ['content']),
                N(o, { name: 'twitter:image', content: '/twitter.png' }),
                N(o, { property: 'og:image', content: '/twitter.png' }),
                N(c, { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }),
            ]),
            _: 1,
        })
    );
}
var V0 = se(N0, [['render', B0]]);
const j0 = {},
    z0 = { width: '154', height: '28', viewBox: '0 0 154 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    U0 = p(
        'path',
        {
            d: 'M7.31632 5.00005C7.2917 4.99986 7.26717 5.0007 7.24232 5.00144C7.21584 5.00223 7.18912 5.004 7.1625 5.00581C6.45204 5.05403 5.69188 5.46972 5.05886 6.4808C3.78238 8.51954 3.73369 11.0187 4.78737 12.8119C5.48854 14.0053 6.665 14.9112 8.35871 15.1885C8.51928 13.9997 7.8583 13.6497 7.67199 12.4171C7.45151 10.9593 8.08006 9.42902 9.02062 8.00234C9.41522 7.4038 9.45963 6.86323 9.31539 6.3923C9.17109 5.92123 8.81691 5.51311 8.34849 5.26573C8.03969 5.10267 7.68662 5.00214 7.31623 5L7.31632 5.00005ZM16.5177 6.38213C14.7955 6.38445 13.1801 7.05839 12.1261 8.20833C11.3223 9.08527 9.70124 12.4053 11.6442 12.6058C12.0473 11.7752 12.6328 11.1943 13.3485 10.8506C14.6775 10.2123 16.3253 10.3653 17.9651 10.8462C18.6529 11.048 19.1831 10.9322 19.5911 10.6561C19.9991 10.3799 20.2846 9.92067 20.3838 9.40026C20.582 8.35931 20.1018 7.10531 18.2584 6.61139C17.6775 6.45576 17.0917 6.38124 16.5177 6.38203V6.38213ZM11.2725 7.71041C10.87 7.71041 10.4736 7.7426 10.0878 7.80183C10.0059 8.02956 9.8934 8.25725 9.74664 8.47987C8.86792 9.8127 8.36131 11.1703 8.53004 12.2864C9.05008 15.7256 10.7621 8.44504 11.4061 7.71189C11.3614 7.7111 11.3172 7.7105 11.2724 7.7105L11.2725 7.71041ZM15.4187 11.302C15.3713 11.3018 15.3245 11.3025 15.2778 11.3034C14.697 11.3151 14.1696 11.4193 13.7245 11.633C10.343 13.2569 15.8582 12.5161 16.6338 12.5404C17.2577 12.56 17.8631 12.6842 18.4339 12.899C18.4892 12.9198 18.5434 12.942 18.5979 12.9644C18.4574 12.5494 18.2816 12.1472 18.0724 11.7623C17.9539 11.7411 17.8366 11.7135 17.7211 11.6796C16.9132 11.4427 16.1288 11.3061 15.4186 11.3021L15.4187 11.302ZM3.92073 13.0413C3.77445 13.488 3.66948 13.9472 3.60715 14.4131C3.79374 14.5563 3.96412 14.7194 4.11524 14.8995C5.14332 16.1209 6.30157 16.9915 7.41945 17.1469C7.83626 17.2048 8.26032 17.1747 8.69413 17.0234C7.70677 15.2137 5.27904 15.3635 4.03831 13.2518C3.99766 13.1825 3.95845 13.1123 3.92068 13.0414L3.92073 13.0413ZM16.3231 13.3926C16.2813 13.3933 16.2389 13.395 16.1967 13.397C14.7275 13.4625 13.9824 13.6498 14.2674 14.9489C15.0105 15.0696 15.634 15.3749 16.1329 15.8315C17.2206 16.8269 17.6927 18.4133 17.8576 20.1142C17.9268 20.8278 18.232 21.2758 18.6401 21.5515C19.0484 21.8271 19.5809 21.9206 20.1007 21.8186C21.1404 21.6146 22.1253 20.701 21.8965 18.8062C21.6082 16.4182 20.0756 14.4431 18.1291 13.7105C17.5589 13.4959 16.9515 13.3811 16.3232 13.3925L16.3231 13.3926ZM11.3348 17.7319C12.52 17.7319 13.4704 16.7801 13.4704 15.5949C13.4704 9.74687 5.31595 17.7319 11.3348 17.7319ZM1.99135 14.7181C1.49881 14.7226 1.00721 14.9476 0.636862 15.3264C-0.10384 16.0841 -0.396701 17.3944 0.866264 18.8252C2.45795 20.6284 4.84043 21.3859 6.85914 20.8852C8.14998 20.5651 9.31237 19.7497 10.0646 18.3156C8.94632 17.7896 8.56145 18.183 7.30048 18.0078C5.84012 17.8049 4.55086 16.7659 3.4504 15.4586C2.98876 14.9102 2.48388 14.7137 1.99135 14.7181ZM16.0618 21.5095C16.0618 21.5108 16.0619 21.5123 16.0618 21.5138C16.4191 21.2313 16.7509 20.918 17.0534 20.5774C17.0263 20.4519 17.0064 20.3249 16.9939 20.1971C16.8398 18.6081 16.3791 17.2338 15.5464 16.4719C13.1099 14.2416 16.1055 20.5235 16.0618 21.5095ZM12.8229 18.2023C12.9344 18.9393 12.8356 19.6207 12.5587 20.2319C11.9501 21.575 10.5893 22.5173 9.02364 23.2022C8.36698 23.4896 8.03681 23.9176 7.90149 24.3912C7.76616 24.8649 7.84063 25.4007 8.09893 25.8634C8.61552 26.7884 9.79064 27.4415 11.5207 26.6357C13.7012 25.6202 15.1016 23.5497 15.1938 21.4717C15.3066 18.9281 14.4572 17.2636 12.8229 18.2023ZM7.06815 21.7285C6.99266 21.7472 6.91624 21.7651 6.84019 21.7808C7.30181 22.104 7.79742 22.3756 8.31815 22.5909C8.43387 22.5222 8.55363 22.4606 8.6768 22.4064C10.1392 21.7666 11.3031 20.9027 11.7689 19.8746C13.2511 16.6051 7.52855 21.6144 7.06815 21.7285Z',
            fill: '#B1DD40',
        },
        null,
        -1
    ),
    q0 = p(
        'path',
        {
            d: 'M31.8337 5.4V25H34.2697V16.432H42.3337V14.192H34.2697V7.64H44.0137V5.4H31.8337ZM46.2907 5.4V25H48.5867V5.4H46.2907ZM65.0881 22.9H64.3881C63.7441 22.9 63.4361 22.564 63.4361 21.864V15.704C63.4361 14.052 62.9321 12.792 61.9241 11.896C60.9161 11 59.5161 10.552 57.6961 10.552C55.9601 10.552 54.5601 10.944 53.4961 11.728C52.4321 12.512 51.8161 13.604 51.6481 15.004H53.9441C54.0841 14.276 54.4761 13.716 55.1201 13.268C55.7641 12.82 56.5761 12.596 57.5841 12.596C58.7041 12.596 59.5721 12.876 60.1881 13.38C60.8041 13.912 61.1401 14.64 61.1401 15.564V16.544H56.9401C55.0641 16.544 53.6361 16.936 52.6561 17.692C51.6761 18.476 51.2001 19.568 51.2001 20.996C51.2001 22.284 51.6761 23.32 52.6281 24.048C53.5801 24.804 54.8681 25.168 56.4641 25.168C58.5361 25.168 60.1321 24.384 61.2521 22.788C61.2521 23.516 61.4761 24.076 61.8681 24.44C62.2601 24.832 62.9041 25 63.8281 25H65.0881V22.9ZM61.1401 18.476V19.176C61.1401 20.408 60.7201 21.388 59.9361 22.116C59.1241 22.844 58.0321 23.208 56.6321 23.208C55.6801 23.208 54.9241 23.012 54.3641 22.564C53.8041 22.144 53.5241 21.584 53.5241 20.856C53.5241 19.288 54.5881 18.476 56.7161 18.476H61.1401ZM68.6452 20.296H66.3492C66.3492 21.836 66.9372 23.04 68.0572 23.88C69.1772 24.748 70.6892 25.168 72.5652 25.168C73.6012 25.168 74.5532 25 75.4212 24.636C76.2612 24.3 76.9612 23.796 77.4652 23.124C77.9692 22.48 78.2212 21.724 78.2212 20.856C78.2212 19.876 77.9692 19.092 77.4652 18.504C76.9612 17.944 76.3172 17.524 75.5052 17.244C74.6932 16.992 73.6572 16.796 72.4252 16.628C71.5292 16.516 70.8572 16.432 70.4092 16.32C69.9612 16.236 69.6252 16.068 69.3452 15.788C69.0652 15.536 68.9252 15.172 68.9252 14.668C68.9252 14.024 69.2052 13.492 69.8212 13.1C70.4092 12.708 71.1932 12.484 72.1732 12.484C73.1252 12.484 73.9092 12.736 74.5532 13.212C75.1692 13.716 75.5332 14.332 75.6452 15.06H77.9412C77.8292 13.604 77.2412 12.484 76.1772 11.7C75.1132 10.916 73.7692 10.524 72.0892 10.524C71.0532 10.524 70.1292 10.72 69.3172 11.084C68.4772 11.448 67.8332 11.952 67.3572 12.596C66.8812 13.268 66.6572 13.996 66.6572 14.836C66.6572 15.788 66.8812 16.516 67.3852 17.048C67.8612 17.58 68.5052 17.972 69.2892 18.196C70.0732 18.448 71.0812 18.644 72.3132 18.784C73.1812 18.896 73.8532 19.008 74.3292 19.12C74.8052 19.232 75.1972 19.456 75.5052 19.736C75.7852 20.044 75.9532 20.464 75.9532 21.024C75.9532 21.696 75.6172 22.228 75.0012 22.62C74.3852 23.012 73.5732 23.208 72.5652 23.208C71.4172 23.208 70.4932 22.956 69.7652 22.396C69.0372 21.864 68.6732 21.164 68.6452 20.296ZM92.0258 12.12C90.9618 11.084 89.5618 10.552 87.8258 10.552C86.7058 10.552 85.7538 10.804 84.9698 11.252C84.1858 11.728 83.5698 12.344 83.1218 13.072V5.4H80.8258V25H83.1218V17.86C83.1218 16.264 83.4858 15.004 84.2698 14.052C85.0538 13.128 86.0898 12.652 87.4338 12.652C88.6658 12.652 89.6458 13.044 90.3178 13.828C90.9898 14.612 91.3258 15.732 91.3258 17.188V25H93.6218V17.048C93.6218 14.808 93.0898 13.184 92.0258 12.12ZM97.5005 10.72H94.9245V12.82H97.5005V25H99.7965V12.82H103.828V10.72H99.7965V9.068C99.7965 8.508 99.9085 8.116 100.16 7.864C100.384 7.64 100.804 7.5 101.364 7.5H103.856V5.4H101.224C99.9085 5.4 98.9565 5.708 98.3685 6.324C97.7805 6.94 97.5005 7.864 97.5005 9.124V10.72ZM107.608 24.244C108.672 24.86 109.904 25.168 111.304 25.168C112.676 25.168 113.908 24.86 114.972 24.244C116.036 23.628 116.876 22.788 117.492 21.668C118.08 20.576 118.388 19.316 118.388 17.86C118.388 16.432 118.08 15.172 117.492 14.052C116.876 12.96 116.036 12.092 114.972 11.476C113.908 10.86 112.676 10.552 111.304 10.552C109.904 10.552 108.672 10.86 107.608 11.476C106.544 12.092 105.704 12.96 105.116 14.052C104.5 15.172 104.22 16.432 104.22 17.86C104.22 19.316 104.5 20.576 105.116 21.668C105.704 22.788 106.544 23.628 107.608 24.244ZM113.768 22.452C113.04 22.9 112.228 23.124 111.304 23.124C110.352 23.124 109.54 22.9 108.812 22.452C108.084 22.004 107.552 21.388 107.16 20.576C106.768 19.792 106.572 18.868 106.572 17.86C106.572 16.852 106.768 15.956 107.16 15.144C107.552 14.36 108.084 13.716 108.812 13.268C109.54 12.82 110.352 12.596 111.304 12.596C112.228 12.596 113.04 12.82 113.768 13.268C114.496 13.716 115.056 14.36 115.448 15.144C115.84 15.956 116.036 16.852 116.036 17.86C116.036 18.868 115.84 19.792 115.448 20.576C115.056 21.388 114.496 22.004 113.768 22.452ZM128.273 10.72H127.629C126.453 10.72 125.557 10.916 124.913 11.308C124.241 11.7 123.709 12.232 123.317 12.876L123.009 10.72H121.021V25H123.317V17.72C123.317 16.376 123.597 15.256 124.185 14.332C124.773 13.436 125.753 12.96 127.125 12.96H128.273V10.72ZM150.197 12.064C149.189 11.056 147.901 10.552 146.305 10.552C144.009 10.552 142.357 11.476 141.349 13.268C140.957 12.372 140.341 11.7 139.557 11.252C138.773 10.804 137.849 10.552 136.841 10.552C135.077 10.552 133.677 11.28 132.669 12.68L132.361 10.72H130.373V25H132.669V17.468C132.669 16.04 133.005 14.892 133.677 13.996C134.349 13.1 135.273 12.652 136.449 12.652C137.541 12.652 138.381 13.016 138.997 13.744C139.585 14.472 139.893 15.536 139.893 16.908V25H142.189V17.356C142.189 15.9 142.525 14.752 143.197 13.912C143.869 13.072 144.821 12.652 146.025 12.652C147.089 12.652 147.929 13.016 148.517 13.744C149.105 14.472 149.413 15.536 149.413 16.908V25H151.709V16.768C151.709 14.64 151.205 13.072 150.197 12.064Z',
            fill: '#B1DD40',
        },
        null,
        -1
    ),
    W0 = [U0, q0];
function Z0(t, e) {
    return B(), K('svg', z0, W0);
}
var Mu = se(j0, [['render', Z0]]);
const K0 = oe({
        setup(t, { expose: e }) {
            e();
            const n = [
                    { to: '#why', text: 'Why flashform' },
                    { to: '#integration', text: 'Integration' },
                    { to: '#benefits', text: 'Benefits' },
                    { to: '#roadmap', text: 'Roadmap', isMobHidden: !0 },
                    { to: '#faq', text: 'FAQ' },
                ],
                r = ie(!1),
                s = () => {
                    r.value = !r.value;
                },
                i = () => {
                    r.value = !1;
                };
            let o;
            const a = async (u) => {
                const d = u.currentTarget.getAttribute('href');
                if (!d) return;
                const h = document.querySelector(d);
                if (!h) return;
                const y = document.getElementById('scroll-container').scrollTop,
                    _ = h.getBoundingClientRect().top + y + window.innerHeight * 0.3;
                if (window.innerWidth >= 1024) En.to(window.ss.state, { duration: 1, target: _, overwrite: !0 });
                else {
                    const v = document.querySelector('#scroll-container');
                    En.to(v, { duration: 1, scrollTop: _ });
                }
            };
            St(async () => {
                const { default: u } = await nt(() => import('./navbarPos-3dbf7c0c.mjs'), []);
                (o = new u()), o.init(), document.body.addEventListener('click', i);
            }),
                Bt(() => {
                    o && o.destroy(), document.body.removeEventListener('click', i);
                });
            const { openPopup: c } = yo(),
                l = { navItems: n, isOpen: r, toggleNav: s, closeNav: i, navbarPos: o, anchorClick: a, openPopup: c };
            return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l;
        },
    }),
    Y0 = { class: 'container navbar__container' },
    X0 = { class: 'navbar__content' },
    J0 = { class: 'navbar__ul' },
    Q0 = ['href', 'onClick'],
    G0 = p('span', null, 'Join the beta', -1),
    em = p(
        'svg',
        { width: '16', height: '16', viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        [
            p('path', {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M1.5 1.5C1.36739 1.5 1.24021 1.55268 1.14645 1.64645C1.05268 1.74021 1 1.86739 1 2V6.8C1 7.1283 1.06466 7.45339 1.1903 7.75671C1.31594 8.06002 1.50009 8.33562 1.73223 8.56777C2.20107 9.03661 2.83696 9.3 3.5 9.3H13.293L9.946 12.646C9.85211 12.7399 9.79937 12.8672 9.79937 13C9.79937 13.1328 9.85211 13.2601 9.946 13.354C10.0399 13.4479 10.1672 13.5006 10.3 13.5006C10.4328 13.5006 10.5601 13.4479 10.654 13.354L14.854 9.154C14.9006 9.10755 14.9375 9.05238 14.9627 8.99163C14.9879 8.93089 15.0009 8.86577 15.0009 8.8C15.0009 8.73423 14.9879 8.66911 14.9627 8.60837C14.9375 8.54762 14.9006 8.49245 14.854 8.446L10.854 4.446C10.7601 4.35211 10.6328 4.29937 10.5 4.29937C10.3672 4.29937 10.2399 4.35211 10.146 4.446C10.0521 4.53989 9.99937 4.66722 9.99937 4.8C9.99937 4.93278 10.0521 5.06011 10.146 5.154L13.293 8.3H3.5C3.10218 8.3 2.72064 8.14196 2.43934 7.86066C2.15804 7.57936 2 7.19782 2 6.8V2C2 1.86739 1.94732 1.74021 1.85355 1.64645C1.75979 1.55268 1.63261 1.5 1.5 1.5V1.5Z',
                fill: '#B1DD40',
            }),
        ],
        -1
    ),
    tm = [G0, em],
    nm = ['onClick'],
    rm = ho(
        '<span class="burger__dot burger__dot--1"></span><span class="burger__dot burger__dot--2"><span class="burger__close-icon"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.934143" y="0.830566" width="12" height="1" transform="rotate(45 0.934143 0.830566)" fill="#000000"></rect><rect x="0.580597" y="9.31586" width="12" height="1" transform="rotate(-45 0.580597 9.31586)" fill="#000000"></rect></svg></span></span><span class="burger__dot burger__dot--3"></span>',
        3
    ),
    sm = [rm];
function im(t, e, n, r, s, i) {
    const o = Mu,
        a = go;
    return (
        B(),
        K(
            'header',
            { class: Ct(['navbar', [r.isOpen && 'navbar--fixed']]) },
            [
                p('div', Y0, [
                    p('div', X0, [
                        N(a, { to: '/', class: 'navbar__logo', 'aria-label': 'FlashForm' }, { default: Oe(() => [N(o)]), _: 1 }),
                        p(
                            'nav',
                            { class: Ct(['navbar__nav', { open: r.isOpen }]) },
                            [
                                p('ul', J0, [
                                    (B(),
                                    K(
                                        de,
                                        null,
                                        ft(r.navItems, (c) =>
                                            p(
                                                'li',
                                                {
                                                    key: c.text,
                                                    class: Ct(['navbar__item', [c.isMobHidden && 'navbar__item--mob-hidden']]),
                                                    onClick: r.closeNav,
                                                },
                                                [p('a', { href: c.to, class: 'navbar__link', onClick: ps(r.anchorClick, ['prevent']) }, be(c.text), 9, Q0)],
                                                2
                                            )
                                        ),
                                        64
                                    )),
                                    p('li', { class: 'navbar__item', onClick: r.closeNav }, [
                                        p(
                                            'button',
                                            {
                                                class: 'navbar__link navbar__link--signin',
                                                onClick: e[0] || (e[0] = (...c) => r.openPopup && r.openPopup(...c)),
                                            },
                                            tm
                                        ),
                                    ]),
                                ]),
                            ],
                            2
                        ),
                        p(
                            'button',
                            {
                                class: Ct(['navbar__burger burger', [r.isOpen && 'burger--open']]),
                                'aria-label': 'Navigation button',
                                onClick: ps(r.toggleNav, ['stop']),
                            },
                            sm,
                            10,
                            nm
                        ),
                    ]),
                ]),
            ],
            2
        )
    );
}
var om = se(K0, [['render', im]]);
const am = {},
    lm = { width: '50', height: '51', viewBox: '0 0 50 51', fill: '#B1DD40', xmlns: 'http://www.w3.org/2000/svg' },
    cm = p(
        'path',
        {
            d: 'M49.9958 25V24.9875C49.9958 17.5902 46.7753 10.947 41.6611 6.3786L41.6361 6.35777C41.573 6.28968 41.5024 6.22889 41.4257 6.17654L41.4215 6.17445C36.8794 2.18631 31.0383 -0.00764237 24.9937 0.00413654C18.6776 0.00413654 12.9114 2.34977 8.51596 6.22028L8.54304 6.19737C8.49006 6.23755 8.44122 6.28291 8.39722 6.33277V6.33486C5.75479 8.67464 3.63969 11.5492 2.19203 14.7681C0.744366 17.987 -0.00280578 21.4768 7.91739e-06 25.0062C7.91739e-06 32.4014 3.21641 39.0446 8.32639 43.6151L8.35139 43.6359C8.41756 43.711 8.49159 43.7787 8.57221 43.838L8.57637 43.8401C13.1173 47.8223 18.954 50.013 24.9937 50.002C31.0617 50.0114 36.9234 47.8003 41.4736 43.7859L41.4465 43.8088C44.1348 41.4716 46.2896 38.5843 47.7653 35.3422C49.241 32.1001 50.0031 28.5788 50 25.0166V25.002L49.9958 25ZM40.7008 41.259C39.4625 40.2573 38.1307 39.377 36.724 38.6301L36.5886 38.5634C37.8656 34.8825 38.6343 30.6391 38.7072 26.2249V26.1915H47.5835C47.2842 31.9023 44.8262 37.286 40.707 41.2528L40.7008 41.259ZM26.1895 38.1239C28.8622 38.2676 31.3599 38.8551 33.6639 39.8112L33.5139 39.7571C31.6682 43.965 29.0705 46.8565 26.1895 47.4918V38.1239ZM26.1895 35.7407V26.1915H36.3303C36.2498 30.1459 35.5642 34.0646 34.2971 37.8114L34.3784 37.5385C31.792 36.4755 29.0413 35.868 26.2478 35.7428L26.1916 35.7407H26.1895ZM26.1895 23.8084V14.2592C29.0583 14.1283 31.8827 13.5002 34.5367 12.4031L34.3721 12.4635C35.5283 15.8361 36.2386 19.7233 36.3303 23.7646V23.8084H26.1895ZM26.1895 11.8761V2.51226C29.0705 3.14762 31.6682 6.02655 33.5139 10.247C31.3599 11.1428 28.8622 11.7282 26.2499 11.874L26.1895 11.8761ZM32.1348 3.54342C34.5895 4.36218 36.8852 5.59671 38.9217 7.19312L38.8738 7.15562C37.951 7.88056 36.9157 8.56384 35.8241 9.15754L35.7074 9.21587C34.8254 7.13422 33.6126 5.20885 32.1161 3.51426L32.1348 3.53717V3.54342ZM23.8022 2.51851V11.8761C21.2326 11.745 18.7045 11.1743 16.3278 10.1887L16.4778 10.2429C18.3318 6.03488 20.9253 3.14554 23.8063 2.51018L23.8022 2.51851ZM14.2863 9.20962C13.1571 8.60208 12.0811 7.90034 11.0699 7.11188L11.1199 7.14937C13.0971 5.59982 15.3211 4.39418 17.6985 3.583L17.8568 3.53509C16.3995 5.18377 15.212 7.05253 14.3384 9.07213L14.2863 9.20753V9.20962ZM23.8063 14.2571V23.8063H13.6655C13.7572 19.7212 14.4675 15.8341 15.7049 12.1885L15.6237 12.4614C18.209 13.5227 20.9582 14.1295 23.7501 14.255L23.8063 14.2571ZM23.8063 26.1894V35.7386C20.9375 35.8696 18.1131 36.4976 15.4591 37.5947L15.6237 37.5343C14.4675 34.1638 13.7572 30.2745 13.6655 26.2332V26.1894H23.8063ZM23.8063 38.1218V47.4856C20.9253 46.8502 18.3276 43.9713 16.482 39.7508C18.6359 38.8551 21.1337 38.2718 23.7459 38.1259L23.8063 38.1239V38.1218ZM17.8693 46.4544C15.4153 45.6381 13.1196 44.4064 11.0824 42.8131L11.1324 42.8506C12.0552 42.1256 13.0906 41.4423 14.1822 40.8486L14.2988 40.7903C15.1735 42.8728 16.3863 44.7965 17.8881 46.4836L17.8693 46.4627V46.4544ZM35.7095 40.7882C36.9178 41.4444 37.9531 42.1256 38.9259 42.886L38.8759 42.8485C36.8987 44.398 34.6748 45.6037 32.2973 46.4148L32.139 46.4627C33.5963 44.8148 34.7838 42.9468 35.6574 40.9278L35.7095 40.7924V40.7882ZM47.5835 23.8084H38.7072C38.6433 19.4982 37.8995 15.2252 36.5032 11.147L36.5886 11.4344C38.0602 10.6596 39.4533 9.74433 40.7487 8.70133L40.6987 8.73882C44.8093 12.6906 47.2682 18.0544 47.5794 23.748L47.5814 23.8063L47.5835 23.8084ZM9.29506 8.7409C10.495 9.71582 11.8428 10.6095 13.2718 11.3699L13.4072 11.4365C12.1302 15.1175 11.3616 19.3608 11.2886 23.7751V23.8084H2.41022C2.70956 18.0976 5.16759 12.7139 9.28673 8.74715L9.29298 8.7409H9.29506ZM2.41231 26.1915H11.2886C11.3525 30.5017 12.0963 34.7747 13.4926 38.853L13.4072 38.5655C11.8428 39.3967 10.497 40.2903 9.24715 41.2986L9.29715 41.2611C5.18653 37.3093 2.72762 31.9456 2.41647 26.2519L2.41439 26.1936L2.41231 26.1915Z',
        },
        null,
        -1
    ),
    um = [cm];
function fm(t, e) {
    return B(), K('svg', lm, um);
}
var dm = se(am, [['render', fm]]);
const hm = oe({
        props: { tag: null, href: null, type: null, isWhite: { type: Boolean }, text: null },
        setup(t, { expose: e }) {
            e();
            const n = t,
                r = It(() => {
                    var a;
                    return n.tag === 'nuxt-link' ? go : (a = n.tag) != null ? a : 'button';
                }),
                s = n.tag === 'nuxt-link' ? n.href : void 0,
                i = n.tag === 'a' ? n.href : void 0,
                o = { props: n, tag: r, to: s, href: i };
            return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o;
        },
    }),
    _m = p('span', { class: 'button__content-before' }, '[', -1),
    pm = { class: 'button__content' },
    mm = { class: 'button__items' },
    gm = { class: 'button__text' },
    ym = { class: 'button__hover-text-wrapper' },
    vm = { class: 'button__hover-text' },
    bm = p('span', { class: 'button__content-after' }, ']', -1);
function wm(t, e, n, r, s, i) {
    return (
        B(),
        Ne(
            tc(r.tag),
            {
                to: r.to,
                href: r.href,
                target: r.props.tag === 'a' ? '_blank' : void 0,
                rel: r.props.tag === 'a' ? 'noreferer noopener' : void 0,
                type: r.props.type,
                class: 'button',
            },
            {
                default: Oe(() => [
                    _m,
                    p('span', pm, [
                        p('span', mm, [
                            p('span', gm, be(n.text), 1),
                            p('span', ym, [p('span', vm, be(n.text) + ' ' + be(n.text) + ' ' + be(n.text) + ' ' + be(n.text), 1)]),
                        ]),
                    ]),
                    bm,
                ]),
                _: 1,
            },
            8,
            ['to', 'href', 'target', 'rel', 'type']
        )
    );
}
var Fo = se(hm, [['render', wm]]);
const Cm = {},
    xm = { width: '55', height: '45', viewBox: '0 0 55 45', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    Tm = p(
        'path',
        {
            d: 'M23.5309 15.7025C23.5309 20.0406 20.0211 23.5539 15.6873 23.5539C11.3534 23.5539 7.84363 20.0406 7.84363 15.7025C7.84363 11.3644 11.3534 7.8511 15.6873 7.8511C20.0211 7.8511 23.5309 11.3644 23.5309 15.7025H31.3745C31.3745 7.02631 24.3549 0 15.6873 0C7.0196 0 0 7.02631 0 15.7025C0 24.3787 7.0196 31.4053 15.6873 31.4053C18.5561 31.4053 21.2114 30.6414 23.5309 29.2972V15.7025Z',
            fill: '#111606',
        },
        null,
        -1
    ),
    Sm = p(
        'path',
        {
            d: 'M31.4061 29.2972C31.4061 24.9591 34.9159 21.4458 39.2498 21.4458C43.5836 21.4458 47.0934 24.9591 47.0934 29.2972C47.0934 33.6353 43.5836 37.1486 39.2498 37.1486C34.9159 37.1486 31.4061 33.6353 31.4061 29.2972H23.5625C23.5625 37.9734 30.5821 45 39.2498 45C47.9174 45 54.937 37.9734 54.937 29.2972C54.937 20.621 47.9174 13.5947 39.2498 13.5947C36.3809 13.5947 33.7257 14.3583 31.4061 15.7025V29.2972Z',
            fill: '#111606',
        },
        null,
        -1
    ),
    km = [Tm, Sm];
function Em(t, e) {
    return B(), K('svg', xm, km);
}
var Pm = se(Cm, [['render', Em]]);
const Mm = {},
    Om = { width: '45', height: '45', viewBox: '0 0 45 45', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    Am = p(
        'path',
        {
            d: 'M33.7103 22.5C33.7103 28.7 28.6662 33.75 22.4735 33.75C16.2559 33.75 11.2368 28.725 11.2368 22.5C11.2368 16.275 16.2559 11.25 22.4735 11.25C28.6912 11.25 33.7103 16.275 33.7103 22.5H44.9471C44.9471 10.075 34.8839 0 22.4735 0C10.0631 0 0 10.075 0 22.5C0 34.925 10.0631 45 22.4735 45C26.5687 45 30.4142 43.9 33.7103 42V22.5Z',
            fill: '#111606',
        },
        null,
        -1
    ),
    $m = [Am];
function Lm(t, e) {
    return B(), K('svg', Om, $m);
}
var Rm = se(Mm, [['render', Lm]]);
const Fm = oe({
        props: { tag: { default: 'section' } },
        setup(t, { expose: e }) {
            e();
            const n = {};
            return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n;
        },
    }),
    Im = { class: 'rounded-section__wrapper' };
function Hm(t, e, n, r, s, i) {
    return B(), Ne(tc(n.tag), { class: 'rounded-section', 'data-section-scale': '' }, { default: Oe(() => [p('div', Im, [Ur(t.$slots, 'default')])]), _: 3 });
}
var Dm = se(Fm, [['render', Hm]]);
const Nm = oe({
        setup(t, { expose: e }) {
            e();
            const n = ie(null);
            St(async () => {
                const { Sticky: s } = await nt(() => import('./Sticky-7f9956f0.mjs'), ['Sticky-7f9956f0.mjs', 'matrixTransform-f7ee628e.mjs']);
                new s(n.value.querySelector('[data-section-sticky-scroller]'), n.value.querySelector('[data-section-sticky]'));
            });
            const r = { $el: n };
            return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r;
        },
    }),
    Bm = { ref: '$el', class: 'sticky-wrapper' },
    Vm = { 'data-section-sticky': '' };
function jm(t, e, n, r, s, i) {
    return B(), K('div', Bm, [p('div', Vm, [Ur(t.$slots, 'default')])], 512);
}
var zm = se(Nm, [['render', jm]]);
const Um = oe({
        setup(t, { expose: e }) {
            e();
            const n = ie(null),
                r = ie(null),
                s = ie(null);
            St(async () => {
                const { HorizontalScroll: o } = await nt(
                    () => import('./HorizontalScroll-7dd6ac5c.mjs'),
                    ['HorizontalScroll-7dd6ac5c.mjs', 'matrixTransform-f7ee628e.mjs']
                );
                new o(n.value, r.value, s.value);
            });
            const i = { $el: n, $container: r, $scroller: s };
            return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i;
        },
    }),
    qm = { ref: '$container', class: 'wrapper' },
    Wm = { ref: '$scroller', class: 'scroller' },
    Zm = { ref: '$el', class: 'scroller-el' };
function Km(t, e, n, r, s, i) {
    return B(), K('div', qm, [p('div', Wm, [p('div', Zm, [Ur(t.$slots, 'default')], 512)], 512)], 512);
}
var Ou = se(Um, [['render', Km]]);
const Ym = {},
    Xm = { width: '154', height: '220', viewBox: '0 0 154 220', fill: '#B1DD40', xmlns: 'http://www.w3.org/2000/svg' },
    Jm = p('path', { d: 'M54 0L70.5 0L70.5 109.5C60.9 112.7 55.5 103.5 54 98.5L54 0Z' }, null, -1),
    Qm = p(
        'path',
        {
            d: 'M83.8402 217.004L152.94 139.344C153.62 138.556 154 137.551 154 136.491V112.443C154 110.432 151.5 109.509 150.196 111.03L87.59 181.19L87.59 112.174C87.59 110.978 86.6118 110 85.4162 110H69.1124C67.9168 110 66.9386 110.978 66.9386 112.174L66.9386 181.163L4.33282 111.003C3.00134 109.481 0.528625 110.405 0.528625 112.416V137.279C0.528625 137.796 0.718842 138.312 1.07208 138.692L70.6885 217.004C71.5065 217.945 72.5168 218.699 73.6512 219.216C74.7856 219.733 76.0177 220 77.2643 220C78.5109 220 79.743 219.733 80.8774 219.216C82.0118 218.699 83.0222 217.945 83.8402 217.004Z',
        },
        null,
        -1
    ),
    Gm = [Jm, Qm];
function e2(t, e) {
    return B(), K('svg', Xm, Gm);
}
var t2 = se(Ym, [['render', e2]]);
const n2 = {},
    r2 = { width: '61', height: '46', viewBox: '0 0 61 46', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    s2 = p('path', { d: 'M0.957031 30.5L0.957031 45.5H30.957V30.5H0.957031Z', fill: 'black' }, null, -1),
    i2 = p('path', { d: 'M15.957 15.5L15.957 30.5L45.957 30.5V15.5L15.957 15.5Z', fill: 'black' }, null, -1),
    o2 = p('path', { d: 'M30.957 0.5V15.5L60.957 15.5V0.5L30.957 0.5Z', fill: 'black' }, null, -1),
    a2 = [s2, i2, o2];
function l2(t, e) {
    return B(), K('svg', r2, a2);
}
var c2 = se(n2, [['render', l2]]);
const u2 = {},
    f2 = { width: '45', height: '45', viewBox: '0 0 45 45', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    d2 = ho(
        '<path d="M45 22.5V45H22.5L45 22.5Z" fill="black"></path><path d="M22.5 22.5H45V45L22.5 22.5Z" fill="black"></path><path d="M0 45V22.5H22.5L0 45Z" fill="black"></path><path d="M22.5 45H0V22.5L22.5 45Z" fill="black"></path><path d="M11.25 33.75L22.5 45L33.75 33.75H11.25Z" fill="black"></path><path d="M0 22.5V0H22.5L0 22.5Z" fill="black"></path><path d="M22.5 22.5H0V0L22.5 22.5Z" fill="black"></path><path d="M45 0V22.5H22.5L45 0Z" fill="black"></path><path d="M22.5 0H45V22.5L22.5 0Z" fill="black"></path><path d="M33.75 11.25L22.5 0L11.25 11.25H33.75Z" fill="black"></path>',
        10
    ),
    h2 = [d2];
function _2(t, e) {
    return B(), K('svg', f2, h2);
}
var p2 = se(u2, [['render', _2]]);
const m2 = {},
    g2 = { width: '45', height: '45', viewBox: '0 0 45 45', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    y2 = p(
        'g',
        { 'clip-path': 'url(#clip0_1024_129)' },
        [
            p('path', {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M22.5 11.25C22.5 17.4632 17.4632 22.5 11.25 22.5C11.1665 22.5 11.0831 22.4991 11 22.4973V11H22.4973C22.4991 11.0831 22.5 11.1665 22.5 11.25ZM22.5027 11H22.4973C22.3643 4.90225 17.3797 0 11.25 0C5.0368 0 0 5.0368 0 11.25C0 17.3797 4.90225 22.3643 11 22.4973V22.5027C4.90225 22.6357 0 27.6203 0 33.75C0 39.9632 5.0368 45 11.25 45C17.4632 45 22.5 39.9632 22.5 33.75C22.5 39.9632 27.5368 45 33.75 45C39.9632 45 45 39.9632 45 33.75C45 27.5368 39.9632 22.5 33.75 22.5C39.9632 22.5 45 17.4632 45 11.25C45 5.0368 39.9632 0 33.75 0C27.6203 0 22.6357 4.90225 22.5027 11ZM33.5 22.4973C33.5831 22.4991 33.6665 22.5 33.75 22.5C33.6665 22.5 33.5831 22.5009 33.5 22.5027V22.4973ZM22.5027 33.5C22.5009 33.5831 22.5 33.6665 22.5 33.75C22.5 33.6665 22.4991 33.5831 22.4973 33.5H22.5027ZM22.5027 33.5C22.6339 27.4854 27.4854 22.6339 33.5 22.5027V33.5H22.5027ZM33.5 22.4973C27.4022 22.3643 22.5 17.3797 22.5 11.25C22.5 11.1665 22.5009 11.0831 22.5027 11H33.5V22.4973ZM22.4973 33.5C22.3643 27.4022 17.3797 22.5 11.25 22.5C11.1665 22.5 11.0831 22.5009 11 22.5027V33.5H22.4973Z',
                fill: '#111606',
            }),
        ],
        -1
    ),
    v2 = p('defs', null, [p('clipPath', { id: 'clip0_1024_129' }, [p('rect', { width: '45', height: '45', fill: 'white' })])], -1),
    b2 = [y2, v2];
function w2(t, e) {
    return B(), K('svg', g2, b2);
}
var C2 = se(m2, [['render', w2]]);
const x2 = {},
    T2 = { width: '3370', height: '671', viewBox: '0 0 3370 671', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    S2 = p(
        'path',
        {
            d: 'M0.998047 1C0.998047 1 849.498 764.605 786.498 659.553C723.498 554.5 1725.51 370.052 1660.51 419.052C1595.5 468.052 2515.02 616.409 2491.26 660.981C2467.5 705.553 3369 419.052 3369 419.052',
            stroke: '#B1DD40',
            'stroke-width': '3',
        },
        null,
        -1
    ),
    k2 = [S2];
function E2(t, e) {
    return B(), K('svg', T2, k2);
}
var P2 = se(x2, [['render', E2]]);
class M2 {
    constructor() {
        (this.cbArray = []), this.animation();
    }
    on(e) {
        this.cbArray.push(e);
    }
    off(e) {
        this.cbArray = this.cbArray.filter((n) => n !== e);
    }
    animation() {
        this.cbArray.forEach((e) => e()), typeof window != 'undefined' && window.requestAnimationFrame(this.animation.bind(this));
    }
}
const nl = new M2(),
    Au = { on: (t) => nl.on(t), off: (t) => nl.off(t) };
class O2 {
    constructor() {
        (this.cbArray = []), this.init();
    }
    bounds() {
        ['resizeHandler'].forEach((n) => {
            this[n] = this[n].bind(this);
        });
    }
    init() {
        this.bounds(), typeof window != 'undefined' && window.addEventListener('resize', this.resizeHandler);
    }
    resizeHandler() {
        this.cbArray.forEach((e) => e());
    }
    on(e) {
        e(), this.cbArray.push(e);
    }
    off(e) {
        this.cbArray = this.cbArray.filter((n) => n !== e);
    }
    destroy() {
        typeof window != 'undefined' && window.removeEventListener('resize', this.resizeHandler);
    }
}
const rl = new O2(),
    Es = { on: (t) => rl.on(t), off: (t) => rl.off(t) },
    o4 = (t, e, n) => t * (1 - n) + e * n,
    A2 = (t, e, n) => Math.max(Math.min(t, Math.max(e, n)), Math.min(e, n)),
    $u = (t = 0) =>
        new Promise((e) => {
            setTimeout(() => {
                e();
            }, t);
        }),
    $2 = oe({
        setup(t, { expose: e }) {
            e();
            const n = ie(null),
                r = ie(null),
                s = () => {
                    const a = n.value.querySelector('path');
                    n.value.style.width = a.getBoundingClientRect().width + 'px';
                };
            St(() => {
                Es.on(s);
                const a = n.value.closest('.wrapper'),
                    c = n.value.querySelector('path'),
                    l = c.getTotalLength();
                (c.style.strokeDasharray = l + 'px'), (c.style.strokeDashoffset = l + 'px');
                const u = () => {
                        const d = n.value.getBoundingClientRect();
                        return d.top <= window.innerHeight && d.top >= -d.height;
                    },
                    f = () => {
                        if (!u()) return;
                        const d = a.getBoundingClientRect().height,
                            y = (a.getBoundingClientRect().top / d) * 100,
                            m = l + (y * l) / 95;
                        -y >= 8 ? r.value[0].classList.add('is-visible') : r.value[0].classList.remove('is-visible'),
                            -y >= 30 ? r.value[1].classList.add('is-visible') : r.value[1].classList.remove('is-visible'),
                            -y >= 52 ? r.value[2].classList.add('is-visible') : r.value[2].classList.remove('is-visible');
                        let _ = m - window.innerHeight;
                        (_ = A2(_, 0, l + window.innerHeight)), (c.style.strokeDashoffset = _ + 'px');
                    };
                Au.on(f);
            }),
                Bt(() => {
                    Es.off(s);
                });
            const o = {
                $el: n,
                $roadmapItems: r,
                onResize: s,
                roadmapItems: [
                    { month: 'jan', day: '19', event: 'Beta release' },
                    { month: 'feb', day: '03', event: 'Hopefully, a release' },
                    { month: 'march', day: '23', event: 'Add new messengers' },
                ],
            };
            return Object.defineProperty(o, '__isScriptSetup', { enumerable: !1, value: !0 }), o;
        },
    }),
    L2 = { ref: '$el', class: 'home-10__roadmap roadmap' },
    R2 = p('small', { class: 'roadmap__circle' }, null, -1),
    F2 = { class: 'roadmap__date' },
    I2 = ['innerHTML'];
function H2(t, e, n, r, s, i) {
    const o = P2,
        a = Ou;
    return (
        B(),
        Ne(a, null, {
            default: Oe(() => [
                p(
                    'div',
                    L2,
                    [
                        N(o),
                        R2,
                        (B(),
                        K(
                            de,
                            null,
                            ft(r.roadmapItems, (c) =>
                                p('div', { key: c.event, ref_for: !0, ref: '$roadmapItems', class: 'roadmap__item' }, [
                                    p('span', F2, [ve(be(c.month) + ' ', 1), p('span', null, be(c.day), 1)]),
                                    p('p', { class: 'roadmap__title', innerHTML: `{${c.event}}` }, null, 8, I2),
                                ])
                            ),
                            64
                        )),
                    ],
                    512
                ),
            ]),
            _: 1,
        })
    );
}
var D2 = se($2, [['render', H2]]);
const N2 = {},
    B2 = { width: '34', height: '34', viewBox: '0 0 34 34', fill: '#B1DD40', xmlns: 'http://www.w3.org/2000/svg' },
    V2 = p(
        'path',
        { d: 'M3.42335 20.3644L5.12043 18.6673L15.8036 29.3502V1.19641H18.1964V29.3502L28.8796 18.6673L30.5766 20.3644L17 33.9406L3.42335 20.3644Z' },
        null,
        -1
    ),
    j2 = [V2];
function z2(t, e) {
    return B(), K('svg', B2, j2);
}
var U2 = se(N2, [['render', z2]]);
const q2 = oe({
        props: { idx: null, title: null, text: null },
        setup(t, { expose: e }) {
            e();
            const n = ie(null),
                r = ie(null),
                s = ie(!1),
                i = ie(0),
                o = () => {
                    (i.value = r.value.scrollHeight * 0.01), n.value.style.setProperty('--h', `${i.value}px`);
                },
                a = () => {
                    Es.on(o), (s.value = !s.value);
                };
            Bt(() => {
                Es.off(o);
            });
            const c = { $el: n, $child: r, isOpen: s, height: i, onResize: o, onClick: a };
            return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c;
        },
    }),
    W2 = p('div', { class: 'accordion__overlay' }, null, -1),
    Z2 = { class: 'grid accordion__cols' },
    K2 = { class: 'h3 accordion__num' },
    Y2 = { class: 'h4 accordion__h4' },
    X2 = { class: 'accordion__arrow' },
    J2 = ['innerHTML'],
    Q2 = p('div', { class: 'h-line accordion__line' }, null, -1);
function G2(t, e, n, r, s, i) {
    const o = U2;
    return (
        B(),
        K(
            'div',
            { ref: '$el', class: Ct(['accordion__item', [r.isOpen && 'opened']]), onClick: r.onClick },
            [
                W2,
                p('div', Z2, [p('div', K2, '0' + be(n.idx), 1), p('h3', Y2, be(n.title), 1), p('div', X2, [N(o)])]),
                p('div', { ref: '$child', class: 'accordion__text', innerHTML: n.text }, null, 8, J2),
                Q2,
            ],
            2
        )
    );
}
var eg = se(q2, [['render', G2]]);
const tg = oe({
        props: { items: null },
        setup(t, { expose: e }) {
            e();
            const n = {};
            return Object.defineProperty(n, '__isScriptSetup', { enumerable: !1, value: !0 }), n;
        },
    }),
    ng = { class: 'accordion' },
    rg = { key: 0, class: 'accordion__items' },
    sg = p('div', { class: 'h-line accordion__line' }, null, -1);
function ig(t, e, n, r, s, i) {
    const o = eg;
    return (
        B(),
        K('div', ng, [
            n.items
                ? (B(),
                  K('div', rg, [
                      sg,
                      (B(!0),
                      K(
                          de,
                          null,
                          ft(n.items, (a, c) => (B(), Ne(o, { key: a.title, idx: c + 1, title: a.title, text: a.text }, null, 8, ['idx', 'title', 'text']))),
                          128
                      )),
                  ]))
                : Zn('', !0),
        ])
    );
}
var og = se(tg, [['render', ig]]);
const ag = oe({
        setup(t, { expose: e }) {
            e();
            const n = ie(null);
            St(async () => {
                await $u(2e3);
                let s = !1;
                const { FallingLetters: i } = await nt(
                        () => import('./FallingLetters-ae11a7cb.mjs'),
                        ['FallingLetters-ae11a7cb.mjs', '_commonjsHelpers-fe705abc.mjs']
                    ),
                    o = i(n.value),
                    a = () => {
                        n.value.getBoundingClientRect().top < window.innerHeight / 2 ? (!s && o.play(), (s = !0)) : (s && o.stop(), (s = !1));
                    };
                Au.on(a);
            });
            const r = { $parent: n };
            return Object.defineProperty(r, '__isScriptSetup', { enumerable: !1, value: !0 }), r;
        },
    }),
    lg = { id: 'letter-parent', ref: '$parent' },
    cg = p('div', { class: 'letter-over' }, null, -1),
    ug = [cg];
function fg(t, e, n, r, s, i) {
    return B(), K('div', lg, ug, 512);
}
var dg = se(ag, [['render', fg]]);
const hg = oe({
        props: {
            id: null,
            type: null,
            value: null,
            placeholder: null,
            required: { type: Boolean },
            name: null,
            validation: null,
            validationText: null,
            options: null,
        },
        emits: ['inputValue'],
        setup(t, { expose: e, emit: n }) {
            const r = t,
                { inputValue: s, inputFocus: i, error: o, $input: a, onFocus: c, onBlur: l, onInput: u, reset: f, throwError: d } = O1(n, r);
            e({ throwError: d, reset: f });
            const h = { props: r, emit: n, inputValue: s, inputFocus: i, error: o, $input: a, onFocus: c, onBlur: l, onInput: u, reset: f, throwError: d };
            return Object.defineProperty(h, '__isScriptSetup', { enumerable: !1, value: !0 }), h;
        },
    }),
    _g = { class: 'input-content' },
    pg = ['id', 'name'],
    mg = ['id', 'required', 'name'],
    gg = ['for'],
    yg = { key: 0, title: 'required' },
    vg = { key: 0, class: 'input-error' };
function bg(t, e, n, r, s, i) {
    return (
        B(),
        K('div', _g, [
            p(
                'div',
                { class: Ct(['input-wrapper', [r.inputFocus && 'js-focus', r.error && 'js-error']]) },
                [
                    n.type === 'select'
                        ? aa(
                              (B(),
                              K(
                                  'select',
                                  {
                                      key: 0,
                                      id: n.id,
                                      ref: 'input',
                                      'onUpdate:modelValue': e[0] || (e[0] = (o) => (r.inputValue = o)),
                                      name: n.name,
                                      class: 'input select',
                                      placeholder: 'Select a webinar',
                                      onFocus: e[1] || (e[1] = (...o) => r.onFocus && r.onFocus(...o)),
                                      onBlur: e[2] || (e[2] = (...o) => r.onBlur && r.onBlur(...o)),
                                      onChange: e[3] || (e[3] = (...o) => r.onInput && r.onInput(...o)),
                                  },
                                  [
                                      (B(!0),
                                      K(
                                          de,
                                          null,
                                          ft(n.options, (o) => (B(), K('option', { key: o }, be(o), 1))),
                                          128
                                      )),
                                  ],
                                  40,
                                  pg
                              )),
                              [[yh, r.inputValue]]
                          )
                        : aa(
                              (B(),
                              K(
                                  'input',
                                  {
                                      key: 1,
                                      id: n.id,
                                      ref: '$input',
                                      'onUpdate:modelValue': e[4] || (e[4] = (o) => (r.inputValue = o)),
                                      class: 'input',
                                      required: n.required,
                                      'data-validation': 'required',
                                      name: n.name,
                                      onFocus: e[5] || (e[5] = (...o) => r.onFocus && r.onFocus(...o)),
                                      onBlur: e[6] || (e[6] = (...o) => r.onBlur && r.onBlur(...o)),
                                      onInput: e[7] || (e[7] = (...o) => r.onInput && r.onInput(...o)),
                                  },
                                  null,
                                  40,
                                  mg
                              )),
                              [[gh, r.inputValue]]
                          ),
                    p(
                        'label',
                        { for: n.id, class: 'input-placeholder' },
                        [ve(be(n.placeholder) + ' ', 1), n.required ? (B(), K('abbr', yg, ' * ')) : Zn('', !0)],
                        8,
                        gg
                    ),
                    Ur(t.$slots, 'default'),
                ],
                2
            ),
            r.error ? (B(), K('small', vg, be(n.validationText), 1)) : Zn('', !0),
        ])
    );
}
var Lu = se(hg, [['render', bg]]);
const wg = oe({
        setup(t, { expose: e }) {
            e();
            const n = [
                    { text: 'hello@emotion-agency.com', link: 'mailto:hello@emotion-agency.com' },
                    { text: 'Whatsapp', link: 'https://wa.me/+380970422959' },
                    { text: 'Telegram', link: 'https://t.me/rstetsr' },
                ],
                r = ie([]),
                s = Ft({
                    hasErrors: !0,
                    inputs: [
                        {
                            required: !0,
                            id: 'email',
                            name: 'Email',
                            label: 'Your Email',
                            type: 'email',
                            validation: 'email',
                            validationText: 'incorrect email',
                            error: !0,
                            value: '',
                        },
                    ],
                }),
                { onInputValue: i, onSubmit: o } = $c(s, r),
                c = {
                    contacts: n,
                    $inputs: r,
                    formData: s,
                    onInputValue: i,
                    onSubmit: o,
                    updatedSubmit: async () => {
                        await o();
                    },
                };
            return Object.defineProperty(c, '__isScriptSetup', { enumerable: !1, value: !0 }), c;
        },
    }),
    Cg = { class: 'footer' },
    xg = { class: 'container footer__container' },
    Tg = { class: 'footer__top' },
    Sg = { class: 'footer__bottom' },
    kg = p('div', { class: 'footer__line' }, null, -1),
    Eg = { class: 'grid footer__content' },
    Pg = { class: 'footer__item foter__item--1' },
    Mg = { class: 'footer__item foter__item--2' },
    Og = p('h3', { class: 'footer__h' }, 'Contact us', -1),
    Ag = { class: 'footer__contacts' },
    $g = { class: 'footer__item foter__item--4' },
    Lg = p('h3', { class: 'footer__h' }, 'Join the beta', -1),
    Rg = ['onSubmit'],
    Fg = ho(
        '<div class="footer__info"><div class="grid footer__info-content"><div class="footer__item foter__item--1"><small class="footer__copy">\xA92022 Flashform</small></div><div class="footer__item foter__item--2"><a class="footer__legal" href="https://www.termsandconditionsgenerator.com/live.php?token=KqfzIWBkH418WdHEZEWKRACbvJtGFf0j" target="_blank" rel="noreferer noopener">Terms and conditions</a></div><div class="footer__item foter__item--3"><a class="footer__legal" href="https://www.privacypolicygenerator.info/live.php?token=iEz9YG406khJuP5hPg30r2GlroSf2mmH" target="_blank" rel="noreferer noopener">Privacy Policy</a></div><div class="footer__item foter__item--4"><a href="https://emotion-agency.com/en/" target="_blank" rel="noreferer noopener" class="footer__by">by emotion</a></div></div></div>',
        1
    );
function Ig(t, e, n, r, s, i) {
    const o = dg,
        a = Mu,
        c = Fo,
        l = Lu;
    return (
        B(),
        K('footer', Cg, [
            p('div', xg, [
                p('div', Tg, [N(o)]),
                p('div', Sg, [
                    kg,
                    p('div', Eg, [
                        p('div', Pg, [N(a)]),
                        p('div', Mg, [
                            Og,
                            p('ul', Ag, [
                                (B(),
                                K(
                                    de,
                                    null,
                                    ft(r.contacts, (u) =>
                                        p('li', { key: u.text, class: 'footer__contact footer-contact' }, [
                                            N(c, { tag: 'a', class: 'footer-contact__btn', href: u.link, text: u.text }, null, 8, ['href', 'text']),
                                        ])
                                    ),
                                    64
                                )),
                            ]),
                        ]),
                        p('div', $g, [
                            Lg,
                            p(
                                'form',
                                { class: 'form footer__form', novalidate: '', onSubmit: ps(r.updatedSubmit, ['prevent']) },
                                [
                                    (B(!0),
                                    K(
                                        de,
                                        null,
                                        ft(
                                            r.formData.inputs,
                                            (u) => (
                                                B(),
                                                Ne(
                                                    l,
                                                    {
                                                        id: u.id,
                                                        key: u.id,
                                                        ref_for: !0,
                                                        ref: '$inputs',
                                                        class: 'form__input',
                                                        type: u.type,
                                                        placeholder: u.label,
                                                        required: u.required,
                                                        'validation-text': u.validationText && u.validationText,
                                                        validation: u.validationText && u.validation,
                                                        onInputValue: r.onInputValue,
                                                    },
                                                    null,
                                                    8,
                                                    ['id', 'type', 'placeholder', 'required', 'validation-text', 'validation', 'onInputValue']
                                                )
                                            )
                                        ),
                                        128
                                    )),
                                    N(c, { class: 'form__btn input-btn', text: 'Join' }),
                                ],
                                40,
                                Rg
                            ),
                        ]),
                    ]),
                ]),
                Fg,
            ]),
        ])
    );
}
var Hg = se(wg, [['render', Ig]]);
const Dg = oe({
        props: { isOpen: { type: Boolean } },
        emits: ['close'],
        setup(t, { expose: e, emit: n }) {
            const r = t,
                s = () => {
                    (window.ss.isFixed = !1), n('close');
                };
            gr(
                () => r.isOpen,
                () => {
                    r.isOpen ? (window.ss.isFixed = !0) : (window.ss.isFixed = !1);
                }
            ),
                Bt(() => {
                    window.ss.isFixed = !1;
                }),
                e({ close: s });
            const i = { props: r, emit: n, close: s };
            return Object.defineProperty(i, '__isScriptSetup', { enumerable: !1, value: !0 }), i;
        },
    }),
    Ng = { key: 0, class: 'popup' },
    Bg = { class: 'popup__window' },
    Vg = p(
        'span',
        { class: 'popup__close-icon' },
        [
            p('svg', { width: '28', height: '28', viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, [
                p('path', {
                    d: 'M14 0C6.2 0 0 6.2 0 14C0 21.8 6.2 28 14 28C21.8 28 28 21.8 28 14C28 6.2 21.8 0 14 0ZM19.4 21L14 15.6L8.6 21L7 19.4L12.4 14L7 8.6L8.6 7L14 12.4L19.4 7L21 8.6L15.6 14L21 19.4L19.4 21Z',
                    fill: '#333333',
                    'fill-opacity': '0.9',
                }),
            ]),
        ],
        -1
    ),
    jg = [Vg];
function zg(t, e, n, r, s, i) {
    return (
        B(),
        Ne(
            Bs,
            { name: 'popup' },
            {
                default: Oe(() => [
                    n.isOpen
                        ? (B(),
                          K('div', Ng, [
                              p('div', { class: 'popup__backdrop', onClick: r.close }),
                              p('div', Bg, [p('button', { class: 'popup__btn', onClick: r.close }, jg), Ur(t.$slots, 'default')]),
                          ]))
                        : Zn('', !0),
                ]),
                _: 3,
            }
        )
    );
}
var Ug = se(Dg, [['render', zg]]);
const qg = oe({
        setup(t, { expose: e }) {
            e();
            const { isOpened: n } = yo(),
                r = () => {
                    (n.value = !1), (window.ss.isFixed = !1);
                },
                s = ie([]),
                i = Ft({
                    hasErrors: !0,
                    inputs: [
                        { required: !1, id: 'name', name: 'Name', label: 'Your Name', type: 'text', error: !1, value: '' },
                        {
                            required: !0,
                            id: 'email-2',
                            name: 'Email',
                            label: 'Your Email',
                            type: 'email',
                            validation: 'email',
                            validationText: 'incorrect email',
                            error: !0,
                            value: '',
                        },
                    ],
                }),
                { onInputValue: o, onSubmit: a } = $c(i, s),
                l = {
                    isOpened: n,
                    close: r,
                    $inputs: s,
                    formData: i,
                    onInputValue: o,
                    onSubmit: a,
                    updatedSubmit: async () => {
                        await a(), r();
                    },
                };
            return Object.defineProperty(l, '__isScriptSetup', { enumerable: !1, value: !0 }), l;
        },
    }),
    Wg = { class: 'new-form' },
    Zg = ['onSubmit'],
    Kg = p('legend', { class: 'popup__form-h' }, 'Join the beta', -1);
function Yg(t, e, n, r, s, i) {
    const o = Lu,
        a = Fo,
        c = Ug;
    return (
        B(),
        K('div', Wg, [
            N(
                c,
                { 'is-open': r.isOpened, onClose: r.close },
                {
                    default: Oe(() => [
                        p(
                            'form',
                            { class: 'form popup__form', novalidate: '', onSubmit: ps(r.updatedSubmit, ['prevent']) },
                            [
                                Kg,
                                (B(!0),
                                K(
                                    de,
                                    null,
                                    ft(
                                        r.formData.inputs,
                                        (l) => (
                                            B(),
                                            Ne(
                                                o,
                                                {
                                                    id: l.id,
                                                    key: l.id,
                                                    ref_for: !0,
                                                    ref: '$inputs',
                                                    class: 'form__input popup__form-input',
                                                    type: l.type,
                                                    placeholder: l.label,
                                                    required: l.required,
                                                    'validation-text': l.validationText && l.validationText,
                                                    validation: l.validationText && l.validation,
                                                    onInputValue: r.onInputValue,
                                                },
                                                null,
                                                8,
                                                ['id', 'type', 'placeholder', 'required', 'validation-text', 'validation', 'onInputValue']
                                            )
                                        )
                                    ),
                                    128
                                )),
                                N(a, { class: 'popup__form-btn', text: 'Join' }),
                            ],
                            40,
                            Zg
                        ),
                    ]),
                    _: 1,
                },
                8,
                ['is-open']
            ),
        ])
    );
}
var Xg = se(qg, [['render', Yg]]);
const Jg = {
        setup(t, { slots: e }) {
            return () => e.default();
        },
    },
    sl = (t, e, n) => ({ default: () => (e ? Xn(t, e === !0 ? {} : e, n) : Xn(Jg, {}, n)) });
var il = { default: sd(() => nt(() => import('./default-25dcab27.mjs'), ['default-25dcab27.mjs', 'animations-479a6c89.mjs', 'index-f5458615.mjs'])) };
const Qg = { name: 'layout', mode: 'out-in' };
var Gg = oe({
    props: { name: { type: [String, Boolean, Object], default: null } },
    setup(t, e) {
        const n = Pc();
        return () => {
            var i, o, a;
            const r = (o = (i = we(t.name) ? t.name.value : t.name) != null ? i : n.meta.layout) != null ? o : 'default',
                s = r && r in il;
            return sl(Bs, s && ((a = n.meta.layoutTransition) != null ? a : Qg), sl(il[r], s, e.slots)).default();
        };
    },
});
const e3 = {},
    t3 = { width: '63', height: '60', viewBox: '0 0 63 60', fill: '#B1DD40', xmlns: 'http://www.w3.org/2000/svg' },
    n3 = p(
        'path',
        {
            d: 'M9.76447 51.5571L24.9546 33.8161L1.78711 29.422L5.34494 16.69L27.2738 25.7303L23.8378 1.83561L37.6294 1.354L35.4688 25.4441L56.7276 15.296L61.3299 26.7423L38.3464 33.3485L54.7301 49.7867L44.4088 57.9519L31.918 38.3759L21.03 58.9684L9.76447 51.5571Z',
        },
        null,
        -1
    ),
    r3 = [n3];
function s3(t, e) {
    return B(), K('svg', t3, r3);
}
var i3 = se(e3, [['render', s3]]);
const o3 = oe({
        props: { text: null, duration: null, multiplier: null, direction: null },
        setup(t, { expose: e }) {
            e();
            const n = t,
                r = n.text || '',
                s = n.duration || 80,
                i = n.multiplier || 21,
                o = n.direction || 1,
                a = It(() => {
                    const h = r.split(' ');
                    return h.map((m, _) => (_ === h.length - 1 ? `<span class="h1--i">${m}</span>` : m)).join(' ');
                });
            let c;
            const l = ie(null),
                u = It(() => {
                    let h = Math.max(Math.ceil((i / r.length) * 4), 2);
                    return (h = h % 2 === 0 ? h : h + 1), h;
                }),
                f = async () => {
                    const { Ticker: h } = await nt(() => import('./Ticker-632e431f.mjs'), ['Ticker-632e431f.mjs', 'matrixTransform-f7ee628e.mjs']);
                    (c = new h({ $el: l.value, duration: s, direction: o })), c.init();
                };
            St(async () => {
                f();
            }),
                Bt(() => {
                    c && c.destroy();
                });
            const d = { props: n, text: r, duration: s, multiplier: i, direction: o, replacedText: a, ticker: c, $ticker: l, repeatNumber: u, initTicker: f };
            return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d;
        },
    }),
    a3 = { class: 'ticker' },
    l3 = { ref: '$ticker', class: 'ticker__items' },
    c3 = ve(' \xA0 '),
    u3 = ['innerHTML'];
function f3(t, e, n, r, s, i) {
    const o = i3;
    return (
        B(),
        K('div', a3, [
            p(
                'div',
                l3,
                [
                    (B(!0),
                    K(
                        de,
                        null,
                        ft(
                            r.repeatNumber,
                            (a) => (
                                B(),
                                K('div', { key: a, class: 'ticker__item' }, [
                                    N(o),
                                    c3,
                                    p('div', { class: 'ticker__text', innerHTML: r.replacedText }, null, 8, u3),
                                ])
                            )
                        ),
                        128
                    )),
                ],
                512
            ),
        ])
    );
}
var d3 = se(o3, [['render', f3]]);
const h3 = oe({
        setup(t, { expose: e }) {
            e(), s0();
            const { openPopup: n } = yo(),
                r = ie(null),
                s = ie(null),
                i = ie(null);
            let o;
            const { isSceneInited: a } = Ac();
            gr(a, async () => {
                if (!a.value) return;
                const { default: h } = await nt(
                        () => import('./Butterfly-d98b63f2.mjs'),
                        ['Butterfly-d98b63f2.mjs', 'Figure-2e51f55f.mjs', 'LoadingManager-1387f05b.mjs']
                    ),
                    { default: y } = await nt(
                        () => import('./Revealers-0639dab4.mjs'),
                        ['Revealers-0639dab4.mjs', 'Figure-2e51f55f.mjs', 'LoadingManager-1387f05b.mjs', 'ScrollTrigger-3de04e14.mjs']
                    );
                window.scetch && window.scetch.addFigures([{ $el: r.value, Figure: h }]),
                    window.scetch2 && window.scetch2.addFigures([{ $el: s.value, Figure: y }]);
            }),
                St(async () => {
                    await $u(1e3);
                    const { SectionScale: h } = await nt(
                        () => import('./SectionScale-22418e6d.mjs'),
                        ['SectionScale-22418e6d.mjs', 'ScrollTrigger-3de04e14.mjs']
                    );
                    new h(document.querySelectorAll('[data-section-scale]'));
                    const { CardsScale: y } = await nt(() => import('./CardsScale-9c26d837.mjs'), ['CardsScale-9c26d837.mjs', 'ScrollTrigger-3de04e14.mjs']);
                    new y(document.querySelectorAll('[data-cards-scale]'));
                    const { SplitHeading: m } = await nt(
                        () => import('./SplitHeading-07ca7958.mjs'),
                        ['SplitHeading-07ca7958.mjs', 'index-f5458615.mjs', 'ScrollTrigger-3de04e14.mjs']
                    );
                    new m(i.value);
                    const { default: _ } = await nt(
                        () => import('./ScrollAnimations-e4648682.mjs'),
                        ['ScrollAnimations-e4648682.mjs', 'animations-479a6c89.mjs', 'index-f5458615.mjs']
                    );
                    new _();
                }),
                Bt(() => {});
            const { benefits: c, integrations: l, steps: u, faq: f } = T1(),
                d = {
                    openPopup: n,
                    $gl: r,
                    $revealer: s,
                    $home5H: i,
                    glInst: o,
                    isSceneInited: a,
                    benefits: c,
                    integrations: l,
                    steps: u,
                    faq: f,
                    TheTicker: d3,
                };
            return Object.defineProperty(d, '__isScriptSetup', { enumerable: !1, value: !0 }), d;
        },
    }),
    _3 = { 'data-page': '' },
    p3 = { class: 'home-1-sticky-wrapper' },
    m3 = { class: 'home-1-sticky' },
    g3 = { class: 'section section--nm home-1' },
    y3 = { class: 'container home-1__container' },
    v3 = { class: 'home-1__top' },
    b3 = p(
        'h1',
        { 'data-a-h': '', class: 'h1 home-1__h1' },
        [
            p('span', { class: 'home-1__h1-first' }, [ve('We '), p('small', { class: 'home-1__h1-small' }, "'re")]),
            ve(' just sending '),
            p('span', { class: 'h1--i' }, 'forms'),
        ],
        -1
    ),
    w3 = { class: 'home-1__right' },
    C3 = p('h2', { 'data-a-h': '', class: 'h1 h1--i home-1__h2' }, 'and that\u2019s all', -1),
    x3 = p(
        'p',
        { 'data-a-p': '', class: 'home-1__text redline-text' },
        ' We are not a form builder. We do not seek to solve all problems. We Just send form data to instant messengers and email in the most convenient way ',
        -1
    ),
    T3 = { ref: '$gl', class: 'home-1__gl' },
    S3 = p('div', { id: 'gl', 'data-a-o': '' }, null, -1),
    k3 = { class: 'over-revealer home-2-over-revealer' },
    E3 = p(
        'section',
        { 'data-in-view': '0.4', class: 'section home-2' },
        [
            p('div', { class: 'container home-2__container' }, [
                p('div', { class: 'home-2__left' }, [
                    p('div', { class: 'home-2__visual' }, [p('video', { src: '/1.mp4', autoplay: '', muted: '', loop: '', playsinline: '' })]),
                ]),
                p('div', { class: 'home-2__right' }, [
                    p('h2', { 'data-a-h': '', class: 'h1 home-2__h' }, [ve(' What does it mean '), p('span', { class: 'h1 h1--i' }, ' Flashform? ')]),
                    p(
                        'p',
                        { 'data-a-p': '', class: 'home-2__text redline-text' },
                        ' This is a simply-use service, which allows to you configure the sending of contact forms from your website to selected messengers in a few clicks '
                    ),
                ]),
            ]),
        ],
        -1
    ),
    P3 = { 'data-section-sticky-scroller': '', class: 'container grid home-3__container' },
    M3 = p(
        'div',
        { class: 'home-3__left' },
        [p('h2', { class: 'h1 home-3__h' }, [ve(' Purpose of using '), p('span', { class: 'h1 h1--i' }, 'Flashform')])],
        -1
    ),
    O3 = { class: 'home-3__right' },
    A3 = { class: 'home-3__item home-3-item' },
    $3 = { class: 'home-3-item__top' },
    L3 = p('h3', { class: 'home-3-item__h' }, 'The problem', -1),
    R3 = p(
        'p',
        { class: 'home-3-item__text' },
        ' When you build the website, the one of the most popular issue is a sending data from contact form to channel that convenient for you or your client. ',
        -1
    ),
    F3 = p(
        'p',
        { class: 'home-3-item__text' },
        ' A lot of time is spent on creating the form, integrating it into the website, and making sure that the information from the form reaches the chosen communication channel quickly and consistently ',
        -1
    ),
    I3 = p(
        'p',
        { class: 'home-3-item__text' },
        ' We have been constantly faced with this problem for several years as web developers. Every time we made a new site, we spent a lot of time to ensure that the information from the form was quickly sent to a convenient communication channel, and not just to email ',
        -1
    ),
    H3 = p('div', { class: 'home-3-item__line' }, null, -1),
    D3 = { class: 'home-3__item home-3-item' },
    N3 = { class: 'home-3-item__top' },
    B3 = p('h3', { class: 'home-3-item__h' }, 'Solution', -1),
    V3 = p(
        'p',
        { class: 'home-3-item__text' },
        ' Therefore, we have created a web service that allows you to connect your contact form to the chosen messenger or email in a few clicks, without the need to write dozens of lines of code, in a matter of minutes ',
        -1
    ),
    j3 = p('p', { class: 'home-3-item__text' }, ' Thus, when a user fills out the contact form on the site, you instantly receive this information in: ', -1),
    z3 = { class: 'home-3-item__ul' },
    U3 = p('div', { class: 'home-3-item-li__line' }, null, -1),
    q3 = { class: 'home-3-item-li__content' },
    W3 = { class: 'home-3-item-li__name' },
    Z3 = ['src', 'alt'],
    K3 = { key: 0, class: 'home-3-item-li__line' },
    Y3 = p(
        'section',
        { id: 'why', class: 'section home-4', 'data-in-view': '0.3' },
        [
            p('div', { class: 'container home-4__container' }, [
                p('div', { class: 'home-4__left' }, [
                    p('h2', { 'data-a-h': '', class: 'h1 home-4__h' }, [ve(' Designed to make life '), p('span', { class: 'h1 h1--i' }, ' {easier} ')]),
                    p(
                        'p',
                        { 'data-a-p': '', class: 'home-4__text redline-text' },
                        " It is enough to waste time on monotonous activities. We know that whenever you're programming, the least you want to do is customize contact forms "
                    ),
                ]),
                p('div', { class: 'home-4__right' }, [
                    p('video', { src: '/2.mp4', autoplay: '', muted: '', loop: '', playsinline: '', class: 'home-4__visual' }),
                ]),
            ]),
        ],
        -1
    ),
    X3 = { id: 'integration', class: 'section section--pb section--nm home-5' },
    J3 = { class: 'home-5__h-wrapper' },
    Q3 = { ref: '$home5H', class: 'h1 home-5__h', innerHTML: 'How you can integrate it with your code?' },
    G3 = { 'data-in-view': '', class: 'container home-5__container' },
    e5 = { class: 'home-5__items' },
    t5 = p('div', { 'data-a-l': '', class: 'home-5-li__line' }, null, -1),
    n5 = { class: 'home-5-li__content' },
    r5 = { 'data-a-twrapper': '', class: 'home-5-li__step' },
    s5 = { 'data-a-t': '' },
    i5 = { 'data-a-twrapper': '', class: 'home-5-li__text' },
    o5 = { 'data-a-t': '' },
    a5 = { key: 0, 'data-a-l': '', class: 'home-5-li__line' },
    l5 = { class: 'home-5__sticky-wrapper' },
    c5 = { class: 'home-5__sticky' },
    u5 = p(
        'div',
        { 'data-section-scale': '', class: 'home-5__video-wrapper' },
        [p('video', { src: '/screencast.mp4', autoplay: '', muted: '', loop: '', playsinline: '' })],
        -1
    ),
    f5 = p('div', { id: 'gl-2' }, null, -1),
    d5 = { ref: '$revealer', class: 'home__revealer' },
    h5 = { class: 'over-revealer home-6-over-revealer' },
    _5 = { class: 'section home-6' },
    p5 = { class: 'container home-6__container' },
    m5 = p('h2', { class: 'h1 home-6__h' }, [ve(' Integration of your form with different '), p('span', { class: 'h1 h1--i' }, ' {messengers} ')], -1),
    g5 = p(
        'p',
        { class: 'home-6__text' },
        ' Most often, the data that a potential client leaves in the form are sent to email or to the CRM system. But the fact is that a small business does not always use a CRM system, and also does not always have a manager who monitors customer requests via email in real time ',
        -1
    ),
    y5 = { id: 'benefits', 'data-in-view': '0.5', class: 'section home-7' },
    v5 = { class: 'container home-7__container' },
    b5 = { class: 'home-7__content' },
    w5 = { class: 'home-7__text-wrapper' },
    C5 = p(
        'p',
        { 'data-a-p': '', class: 'home-7__text redline-text' },
        ' Each of these benefits has been tested first-hand by Flashform developers. But what can I say: our product is a symbiosis of practical solutions that were made to facilitate daily work ',
        -1
    ),
    x5 = { class: 'grid home-7__items' },
    T5 = { class: 'home-7-item__text' },
    S5 = { class: 'home-7-item__title' },
    k5 = p(
        'section',
        { class: 'section home-8' },
        [
            p('div', { class: 'container home-8__container' }, [
                p('div', { class: 'home-8__content', 'data-in-view': '0.4' }, [
                    p('div', { class: 'home-8__top' }, [
                        p('h2', { 'data-a-h': '', class: 'h1 home-8__h home-8__h--1' }, [
                            p('span', { class: 'h1--i' }, 'Flashform'),
                            ve(' relieves the headache '),
                        ]),
                    ]),
                    p('div', { class: 'home-8__bottom' }, [
                        p('h2', { 'data-a-h': '', class: 'h1 home-8__h home-8__h--2' }, [
                            ve(' of '),
                            p('span', { class: 'h1--i' }, 'developers'),
                            ve(' and site '),
                            p('span', { class: 'h1--i' }, 'owners'),
                        ]),
                    ]),
                ]),
                p('ul', { 'data-in-view': '', class: 'home-8__items' }, [
                    p('li', { class: 'home-8__item home-8-item' }, [
                        p('div', { 'data-a-l': '', class: 'home-8-item__line' }),
                        p('div', { class: 'grid home-8-item__content' }, [
                            p('h3', { 'data-a-twrapper': '', class: 'home-8-item__h' }, [p('span', { 'data-a-t': '' }, 'For developers')]),
                            p('p', { 'data-a-twrapper': '', class: 'home-8-item__text' }, [
                                p(
                                    'span',
                                    { 'data-a-t': '' },
                                    "You don't need to write a backend for the form handler. With a service-side API, you only need to insert a unique ID into your HTML, and E form will do the rest"
                                ),
                            ]),
                        ]),
                    ]),
                    p('li', { class: 'home-8__item home-8-item' }, [
                        p('div', { 'data-a-l': '', class: 'home-8-item__line' }),
                        p('div', { class: 'grid home-8-item__content' }, [
                            p('h3', { 'data-a-twrapper': '', class: 'home-8-item__h' }, [p('span', { 'data-a-t': '' }, 'For Site owners')]),
                            p('p', { 'data-a-twrapper': '', class: 'home-8-item__text' }, [
                                p(
                                    'span',
                                    { 'data-a-t': '' },
                                    'It will be convenient for you to connect the form of your website to Webflow, for example, and send information to several communication channels at once, without programming skills '
                                ),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ],
        -1
    ),
    E5 = { 'data-section-sticky-scroller': '', class: 'container grid home-3__container' },
    P5 = p('div', { class: 'home-3__left' }, [p('h2', { class: 'h1 home-3__h' }, [ve(' Problems '), p('span', { class: 'h1 h1--i' }, 'that we solve')])], -1),
    M5 = { class: 'home-3__right' },
    O5 = { class: 'home-3__item home-3-item' },
    A5 = { class: 'home-3-item__top' },
    $5 = p('h3', { class: 'home-3-item__h' }, ' Website conversion increases ', -1),
    L5 = p(
        'p',
        { class: 'home-3-item__text' },
        " Data from the form arrives instantly to selected messengers, so you can efficiently process requests from your customers. The speed of order processing affects the potential client's decision to work with you ",
        -1
    ),
    R5 = p('div', { class: 'home-3-item__line' }, null, -1),
    F5 = { class: 'home-3__item home-3-item' },
    I5 = { class: 'home-3-item__top' },
    H5 = p('h3', { class: 'home-3-item__h' }, ' Less time to set up the form ', -1),
    D5 = p(
        'p',
        { class: 'home-3-item__text' },
        " If you are a developer, you don't need to create a form backend every time in a new project. This will save time on routine things, which can be spent on more pleasant things ",
        -1
    ),
    N5 = p('div', { class: 'home-3-item__line' }, null, -1),
    B5 = { class: 'home-3__item home-3-item' },
    V5 = { class: 'home-3-item__top' },
    j5 = p('h3', { class: 'home-3-item__h' }, " You don't need to know how to program ", -1),
    z5 = p(
        'p',
        { class: 'home-3-item__text' },
        ' If you are not a developer, but are building a site yourself on Webflow or another builder, you can easily connect a form and send data to the messenger of your choice. ',
        -1
    ),
    U5 = p('div', { class: 'home-3-item__line' }, null, -1),
    q5 = { id: 'roadmap', class: 'section home-10', 'data-in-view': '0.4' },
    W5 = { class: 'container home-10__container' },
    Z5 = { class: 'home-10__content' },
    K5 = p(
        'div',
        { class: 'home-10__top' },
        [
            p('h2', { 'data-a-h': '', class: 'h1 home-10__h' }, [ve(' Project '), p('span', { class: 'h1--i' }, 'roadmap')]),
            p(
                'p',
                { 'data-a-p': '', class: 'home-10__text' },
                ' Part of the Flashform is already done, but we continue to work on it to give you the best user experience '
            ),
        ],
        -1
    ),
    Y5 = { class: 'home-10__bottom' },
    X5 = p(
        'div',
        { class: 'home-10__bottom-date-wrapper' },
        [
            p('small', { 'data-a-o': '', class: 'home-10__bottom-date-description' }, '{Alpha release}'),
            p('span', { 'data-a-t': '', class: 'home-10__bottom-date' }, [ve('Dec '), p('span', { class: 'home-10__bottom-day', 'data-a-h': '' }, '19')]),
        ],
        -1
    ),
    J5 = { id: 'faq', class: 'section home-11' },
    Q5 = { class: 'container' },
    G5 = p('h2', { class: 'h1 home-11__h' }, [ve('F'), p('span', { class: 'h1--i' }, 'A'), ve('Q')], -1);
function e4(t, e, n, r, s, i) {
    const o = V0,
        a = om,
        c = dm,
        l = Fo,
        u = Pm,
        f = Rm,
        d = Dm,
        h = zm,
        y = Ou,
        m = t2,
        _ = c2,
        v = p2,
        w = C2,
        C = D2,
        S = og,
        x = Hg,
        k = Xg,
        T = Gg;
    return (
        B(),
        Ne(T, null, {
            default: Oe(() => [
                p('div', _3, [
                    N(o, {
                        title: 'Flashfom: the fastest and easiest way to connect with your customer',
                        description:
                            'Flashform is an easy in use data sender from a website\u2019s contact form to different messengers and emails: What\u2019s App, Discord, Telegram and etc.',
                    }),
                    p('main', null, [
                        N(a),
                        p('div', p3, [
                            p('div', m3, [
                                p('section', g3, [
                                    p('div', y3, [
                                        p('div', v3, [
                                            b3,
                                            p('div', w3, [
                                                N(c, { 'data-a-o': '' }),
                                                N(l, { 'data-a-t': '', class: 'home-1__btn', text: 'Try now', onClick: r.openPopup }, null, 8, ['onClick']),
                                            ]),
                                        ]),
                                        C3,
                                        x3,
                                        N(l, { 'data-a-t': '', class: 'home-1__btn home-1__btn--mobile', text: 'Try now', onClick: r.openPopup }, null, 8, [
                                            'onClick',
                                        ]),
                                    ]),
                                    p('div', T3, null, 512),
                                    S3,
                                ]),
                            ]),
                        ]),
                        p('div', k3, [
                            E3,
                            N(h, null, {
                                default: Oe(() => [
                                    N(
                                        d,
                                        { class: 'home-3' },
                                        {
                                            default: Oe(() => [
                                                p('div', P3, [
                                                    M3,
                                                    p('div', O3, [
                                                        p('div', A3, [p('div', $3, [N(u, { class: 'home-3-item__icon' }), L3]), R3, F3, I3, H3]),
                                                        p('div', D3, [
                                                            p('div', N3, [N(f, { class: 'home-3-item__icon' }), B3]),
                                                            V3,
                                                            j3,
                                                            p('ul', z3, [
                                                                (B(!0),
                                                                K(
                                                                    de,
                                                                    null,
                                                                    ft(
                                                                        r.integrations,
                                                                        (P, E) => (
                                                                            B(),
                                                                            K('li', { key: P.name, class: 'home-3-item-li home-3-item__li' }, [
                                                                                U3,
                                                                                p('div', q3, [
                                                                                    p('p', W3, be(P.name), 1),
                                                                                    p(
                                                                                        'img',
                                                                                        { src: P.icon, class: 'home-3-item-li__icon', alt: P.name },
                                                                                        null,
                                                                                        8,
                                                                                        Z3
                                                                                    ),
                                                                                ]),
                                                                                E === r.integrations.length - 1 ? (B(), K('div', K3)) : Zn('', !0),
                                                                            ])
                                                                        )
                                                                    ),
                                                                    128
                                                                )),
                                                            ]),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ]),
                                _: 1,
                            }),
                            Y3,
                            p('section', X3, [
                                N(y, null, { default: Oe(() => [p('div', J3, [p('h2', Q3, null, 512)])]), _: 1 }),
                                p('div', G3, [
                                    p('ul', e5, [
                                        (B(!0),
                                        K(
                                            de,
                                            null,
                                            ft(
                                                r.steps,
                                                (P, E) => (
                                                    B(),
                                                    K('li', { key: P, class: 'home-5-li home-5__li' }, [
                                                        t5,
                                                        p('div', n5, [
                                                            p('span', r5, [p('span', s5, ' Step ' + be(E + 1), 1)]),
                                                            p('p', i5, [p('span', o5, be(P), 1)]),
                                                        ]),
                                                        E === r.steps.length - 1 ? (B(), K('div', a5)) : Zn('', !0),
                                                    ])
                                                )
                                            ),
                                            128
                                        )),
                                    ]),
                                    p('div', l5, [p('div', c5, [u5, f5, p('div', d5, null, 512)])]),
                                ]),
                            ]),
                        ]),
                        p('div', h5, [
                            p('section', _5, [
                                p('div', p5, [
                                    m5,
                                    N(m, { class: 'home-6__arrow' }),
                                    g5,
                                    N(l, { class: 'home-6__btn', text: 'Get a beta', onClick: r.openPopup }, null, 8, ['onClick']),
                                ]),
                            ]),
                            p('section', y5, [
                                N(r.TheTicker, { text: 'A few important benefits' }),
                                p('div', v5, [
                                    p('div', b5, [
                                        p('div', w5, [N(m, { 'data-a-t': '', class: 'home-7__icon' }), C5]),
                                        p('ul', x5, [
                                            (B(!0),
                                            K(
                                                de,
                                                null,
                                                ft(
                                                    r.benefits,
                                                    (P) => (
                                                        B(),
                                                        K('li', { key: P.title, 'data-cards-scale': '', class: 'home-7-item home-7__item' }, [
                                                            p('p', T5, be(P.text), 1),
                                                            p('h3', S5, be(P.title), 1),
                                                        ])
                                                    )
                                                ),
                                                128
                                            )),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            k5,
                            N(h, null, {
                                default: Oe(() => [
                                    N(
                                        d,
                                        { class: 'home-3' },
                                        {
                                            default: Oe(() => [
                                                p('div', E5, [
                                                    P5,
                                                    p('div', M5, [
                                                        p('div', O5, [p('div', A5, [N(_, { class: 'home-3-item__icon' }), $5]), L5, R5]),
                                                        p('div', F5, [p('div', I5, [N(v, { class: 'home-3-item__icon' }), H5]), D5, N5]),
                                                        p('div', B5, [p('div', V5, [N(w, { class: 'home-3-item__icon' }), j5]), z5, U5]),
                                                    ]),
                                                ]),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ]),
                                _: 1,
                            }),
                            p('section', q5, [
                                p('div', W5, [p('div', Z5, [K5, p('div', Y5, [N(m, { 'data-a-t': '', class: 'home-10__bottom-arrow' }), X5])])]),
                                N(C),
                            ]),
                            p('section', J5, [p('div', Q5, [G5, N(S, { items: r.faq }, null, 8, ['items'])])]),
                        ]),
                    ]),
                    N(x),
                    N(k),
                ]),
            ]),
            _: 1,
        })
    );
}
var t4 = se(h3, [['render', e4]]);
globalThis.$fetch || (globalThis.$fetch = __.create({ baseURL: m_() }));
let ol;
const n4 = F_(x1);
(ol = async function () {
    var s;
    const n = Boolean((s = window.__NUXT__) == null ? void 0 : s.serverRendered) ? Th(el) : xh(el);
    n.component('App', t4);
    const r = $_({ vueApp: n });
    r.hooks.hookOnce('app:suspense:resolve', () => {
        r.isHydrating = !1;
    });
    try {
        await R_(r, n4);
    } catch (i) {
        await r.callHook('app:error', i), (r.payload.error = r.payload.error || i);
    }
    try {
        await r.hooks.callHook('app:created', n),
            await r.hooks.callHook('app:beforeMount', n),
            n.mount('#__nuxt'),
            await r.hooks.callHook('app:mounted', n),
            await Ol();
    } catch (i) {
        await r.callHook('app:error', i), (r.payload.error = r.payload.error || i);
    }
}),
    ol().catch((t) => {
        console.error('Error while mounting app:', t);
    });
export {
    ve as A,
    o4 as B,
    i4 as C,
    de as F,
    Bs as T,
    se as _,
    Au as a,
    K as b,
    A2 as c,
    $u as d,
    ft as e,
    p as f,
    En as g,
    oe as h,
    ie as i,
    St as j,
    nt as k,
    Zn as l,
    Ac as m,
    Ct as n,
    B as o,
    Ne as p,
    Ur as q,
    Es as r,
    ps as s,
    be as t,
    Tt as u,
    S1 as v,
    Oe as w,
    N as x,
    s4 as y,
    Fn as z,
};
