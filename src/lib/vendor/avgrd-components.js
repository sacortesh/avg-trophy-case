import { css as R, LitElement as Yn, html as E, nothing as je } from "lit";
const rt = {
  // Primary colors
  primary: "#0078D4",
  primaryHover: "#106EBE",
  primaryActive: "#005A9E",
  // Neutral colors
  background: "#F3F3F3",
  surface: "#FFFFFF",
  border: "#D1D1D1",
  borderFocus: "#0078D4",
  // Text colors
  textPrimary: "#1A1A1A",
  textSecondary: "#6E6E6E",
  textDisabled: "#A6A6A6",
  textOnPrimary: "#FFFFFF",
  // State colors
  success: "#107C10",
  warning: "#FF8C00",
  error: "#D13438",
  info: "#0078D4",
  // Disabled state
  disabled: "#F3F3F3",
  disabledBorder: "#E1E1E1"
}, Xh = {
  none: "0",
  xs: "0.25rem",
  // 4px
  sm: "0.5rem",
  // 8px
  md: "0.75rem",
  // 12px
  lg: "1rem",
  // 16px
  xl: "1.5rem",
  // 24px
  xxl: "2rem"
  // 32px
}, Yh = {
  fontFamily: "'PT Sans', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  fontSize: {
    xs: "0.75rem",
    // 12px
    sm: "0.8125rem",
    // 13px
    md: "0.875rem",
    // 14px
    lg: "1rem",
    // 16px
    xl: "1.25rem"
    // 20px
  },
  fontWeight: {
    regular: "400",
    semibold: "600",
    bold: "700"
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75"
  }
}, Hh = {
  none: "0",
  sm: "2px",
  md: "4px",
  lg: "6px"
}, Gh = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.1)",
  md: "0 2px 4px rgba(0, 0, 0, 0.12)",
  lg: "0 4px 8px rgba(0, 0, 0, 0.14)"
}, Uh = {
  fast: "100ms ease-in-out",
  normal: "200ms ease-in-out",
  slow: "300ms ease-in-out"
}, Hn = R`
  :host {
    /* Typography - these are safe to set as they rarely change with theme */
    --avgrd-font-family: 'PT Sans', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    --avgrd-font-size-xs: 0.75rem;
    --avgrd-font-size-sm: 0.8125rem;
    --avgrd-font-size-md: 0.875rem;
    --avgrd-font-size-lg: 1rem;
    --avgrd-font-size-xl: 1.25rem;

    /* Spacing */
    --avgrd-spacing-none: 0;
    --avgrd-spacing-xs: 0.25rem;
    --avgrd-spacing-sm: 0.5rem;
    --avgrd-spacing-md: 0.75rem;
    --avgrd-spacing-lg: 1rem;
    --avgrd-spacing-xl: 1.5rem;
    --avgrd-spacing-xxl: 2rem;

    /* Border radius */
    --avgrd-radius-none: 0;
    --avgrd-radius-sm: 2px;
    --avgrd-radius-md: 4px;
    --avgrd-radius-lg: 6px;

    /* Shadows */
    --avgrd-shadow-none: none;
    --avgrd-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
    --avgrd-shadow-md: 0 2px 4px rgba(0, 0, 0, 0.12);
    --avgrd-shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.14);

    /* Transitions */
    --avgrd-transition-fast: 100ms ease-in-out;
    --avgrd-transition-normal: 200ms ease-in-out;
    --avgrd-transition-slow: 300ms ease-in-out;
  }
`, Gn = `
:root {
  /* Colors - defined at root so they can be overridden and inherited */
  --avgrd-color-primary: ${rt.primary};
  --avgrd-color-primary-hover: ${rt.primaryHover};
  --avgrd-color-primary-active: ${rt.primaryActive};

  --avgrd-color-background: ${rt.background};
  --avgrd-color-surface: ${rt.surface};
  --avgrd-color-border: ${rt.border};
  --avgrd-color-border-focus: ${rt.borderFocus};

  --avgrd-color-text-primary: ${rt.textPrimary};
  --avgrd-color-text-secondary: ${rt.textSecondary};
  --avgrd-color-text-disabled: ${rt.textDisabled};
  --avgrd-color-text-on-primary: ${rt.textOnPrimary};

  --avgrd-color-success: ${rt.success};
  --avgrd-color-warning: ${rt.warning};
  --avgrd-color-error: ${rt.error};
  --avgrd-color-info: ${rt.info};

  --avgrd-color-disabled: ${rt.disabled};
  --avgrd-color-disabled-border: ${rt.disabledBorder};
}
`;
let zi = !1;
function Nh() {
  if (zi) return;
  const o = document.createElement("style");
  o.id = "avgrd-global-tokens", o.textContent = Gn, document.head.appendChild(o), zi = !0;
}
function qh(o) {
  const t = document.documentElement;
  o.primary && (t.style.setProperty("--avgrd-color-primary", o.primary), t.style.setProperty("--avgrd-color-border-focus", o.primary), t.style.setProperty("--avgrd-color-info", o.primary)), o.primaryHover && t.style.setProperty("--avgrd-color-primary-hover", o.primaryHover), o.primaryActive && t.style.setProperty("--avgrd-color-primary-active", o.primaryActive), o.background && t.style.setProperty("--avgrd-color-background", o.background), o.surface && t.style.setProperty("--avgrd-color-surface", o.surface), o.border && t.style.setProperty("--avgrd-color-border", o.border), o.textPrimary && t.style.setProperty("--avgrd-color-text-primary", o.textPrimary), o.textSecondary && t.style.setProperty("--avgrd-color-text-secondary", o.textSecondary);
}
const Un = R`
  :host {
    box-sizing: border-box;
    font-family: var(--avgrd-font-family);
    font-size: var(--avgrd-font-size-md);
    color: var(--avgrd-color-text-primary);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: 0.6;
  }
`, Ao = R`
  :host(:focus-visible) {
    outline: 2px solid var(--avgrd-color-border-focus);
    outline-offset: 2px;
  }

  .focus-ring:focus-visible {
    outline: 2px solid var(--avgrd-color-border-focus);
    outline-offset: 2px;
  }
`, Nn = R`
  .interactive {
    cursor: pointer;
    user-select: none;
    transition: background-color var(--avgrd-transition-fast),
      border-color var(--avgrd-transition-fast),
      box-shadow var(--avgrd-transition-fast);
  }

  .interactive:disabled,
  .interactive[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`, os = {
  default: {
    name: "Default (Blue)",
    colors: {
      primary: "#0078D4",
      primaryHover: "#106EBE",
      primaryActive: "#005A9E"
    }
  },
  green: {
    name: "Green",
    colors: {
      primary: "#107C10",
      primaryHover: "#0E6B0E",
      primaryActive: "#094509"
    }
  },
  red: {
    name: "Red",
    colors: {
      primary: "#D13438",
      primaryHover: "#A4262C",
      primaryActive: "#8B1A1F"
    }
  },
  purple: {
    name: "Purple",
    colors: {
      primary: "#8764B8",
      primaryHover: "#744DA9",
      primaryActive: "#5C3D84"
    }
  },
  orange: {
    name: "Orange",
    colors: {
      primary: "#FF8C00",
      primaryHover: "#D67A00",
      primaryActive: "#B36600"
    }
  },
  teal: {
    name: "Teal",
    colors: {
      primary: "#008272",
      primaryHover: "#006D5B",
      primaryActive: "#005448"
    }
  },
  dark: {
    name: "Dark Mode",
    colors: {
      primary: "#4CC2FF",
      primaryHover: "#3AA8E5",
      primaryActive: "#2890CC"
    }
  }
};
function jo(o) {
  return `
    --avgrd-color-primary: ${o.colors.primary};
    --avgrd-color-primary-hover: ${o.colors.primaryHover};
    --avgrd-color-primary-active: ${o.colors.primaryActive};
    --avgrd-color-border-focus: ${o.colors.primary};
    --avgrd-color-info: ${o.colors.primary};
    ${o.colors.success ? `--avgrd-color-success: ${o.colors.success};` : ""}
    ${o.colors.warning ? `--avgrd-color-warning: ${o.colors.warning};` : ""}
    ${o.colors.error ? `--avgrd-color-error: ${o.colors.error};` : ""}
  `;
}
const Fo = `
  --avgrd-color-background: #1A1A1A;
  --avgrd-color-surface: #2D2D2D;
  --avgrd-color-border: #404040;
  --avgrd-color-text-primary: #FFFFFF;
  --avgrd-color-text-secondary: #A0A0A0;
  --avgrd-color-text-disabled: #6E6E6E;
  --avgrd-color-disabled: #3D3D3D;
  --avgrd-color-disabled-border: #4D4D4D;
`;
function Kh(o, t, e = !1) {
  const r = os[t] || os.default;
  let s = jo(r);
  e && (s += Fo), o.style.cssText = s;
}
const Jh = R`
  /* Default theme - already applied via tokens */

  /* Green theme */
  .theme-green {
    --avgrd-color-primary: #107C10;
    --avgrd-color-primary-hover: #0E6B0E;
    --avgrd-color-primary-active: #094509;
    --avgrd-color-border-focus: #107C10;
  }

  /* Red theme */
  .theme-red {
    --avgrd-color-primary: #D13438;
    --avgrd-color-primary-hover: #A4262C;
    --avgrd-color-primary-active: #8B1A1F;
    --avgrd-color-border-focus: #D13438;
  }

  /* Purple theme */
  .theme-purple {
    --avgrd-color-primary: #8764B8;
    --avgrd-color-primary-hover: #744DA9;
    --avgrd-color-primary-active: #5C3D84;
    --avgrd-color-border-focus: #8764B8;
  }

  /* Orange theme */
  .theme-orange {
    --avgrd-color-primary: #FF8C00;
    --avgrd-color-primary-hover: #D67A00;
    --avgrd-color-primary-active: #B36600;
    --avgrd-color-border-focus: #FF8C00;
  }

  /* Teal theme */
  .theme-teal {
    --avgrd-color-primary: #008272;
    --avgrd-color-primary-hover: #006D5B;
    --avgrd-color-primary-active: #005448;
    --avgrd-color-border-focus: #008272;
  }

  /* Dark mode modifier */
  .theme-dark {
    --avgrd-color-background: #1A1A1A;
    --avgrd-color-surface: #2D2D2D;
    --avgrd-color-border: #404040;
    --avgrd-color-text-primary: #FFFFFF;
    --avgrd-color-text-secondary: #A0A0A0;
    --avgrd-color-text-disabled: #6E6E6E;
    --avgrd-color-disabled: #3D3D3D;
    --avgrd-color-disabled-border: #4D4D4D;
  }
`, Ri = class Ri extends Yn {
  constructor() {
    super(...arguments), this.disabled = !1, this.name = "";
  }
  /**
   * Dispatches a custom event with the AVGRD prefix.
   * Makes it easy to identify component events.
   */
  emit(t, e, r) {
    const s = new CustomEvent(t, {
      bubbles: (r == null ? void 0 : r.bubbles) ?? !0,
      composed: (r == null ? void 0 : r.composed) ?? !0,
      cancelable: (r == null ? void 0 : r.cancelable) ?? !1,
      detail: e
    });
    return this.dispatchEvent(s), s;
  }
  /**
   * Lifecycle hook called when component is first updated.
   * Override to perform initialization logic.
   */
  firstUpdated(t) {
    super.firstUpdated(t);
  }
  /**
   * Focuses the component if it's focusable.
   * Similar to WinForms Focus() method.
   */
  focus(t) {
    super.focus(t);
  }
  /**
   * Programmatically simulates a click on the component.
   * Similar to WinForms PerformClick() method.
   */
  performClick() {
    this.click();
  }
};
Ri.styles = [Hn, Un];
let P = Ri;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = (o) => (t, e) => {
  e !== void 0 ? e.addInitializer((() => {
    customElements.define(o, t);
  })) : customElements.define(o, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qr = globalThis, mi = Qr.ShadowRoot && (Qr.ShadyCSS === void 0 || Qr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Lo = Symbol(), Wi = /* @__PURE__ */ new WeakMap();
let qn = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== Lo) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (mi && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Wi.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Wi.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Kn = (o) => new qn(typeof o == "string" ? o : o + "", void 0, Lo), Jn = (o, t) => {
  if (mi) o.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
  else for (const e of t) {
    const r = document.createElement("style"), s = Qr.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, o.appendChild(r);
  }
}, $i = mi ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return Kn(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Zn, defineProperty: Qn, getOwnPropertyDescriptor: ta, getOwnPropertyNames: ea, getOwnPropertySymbols: ra, getPrototypeOf: sa } = Object, oe = globalThis, Vi = oe.trustedTypes, ia = Vi ? Vi.emptyScript : "", Vs = oe.reactiveElementPolyfillSupport, cr = (o, t) => o, ns = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? ia : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, vi = (o, t) => !Zn(o, t), Xi = { attribute: !0, type: String, converter: ns, reflect: !1, useDefault: !1, hasChanged: vi };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), oe.litPropertyMetadata ?? (oe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ir = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Xi) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && Qn(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: i } = ta(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: s, set(n) {
      const a = s == null ? void 0 : s.call(this);
      i == null || i.call(this, n), this.requestUpdate(t, a, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Xi;
  }
  static _$Ei() {
    if (this.hasOwnProperty(cr("elementProperties"))) return;
    const t = sa(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(cr("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(cr("properties"))) {
      const e = this.properties, r = [...ea(e), ...ra(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) e.unshift($i(s));
    } else t !== void 0 && e.push($i(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach(((e) => e(this)));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Jn(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach(((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    }));
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach(((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    }));
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var i;
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const n = (((i = r.converter) == null ? void 0 : i.toAttribute) !== void 0 ? r.converter : ns).toAttribute(e, r.type);
      this._$Em = t, n == null ? this.removeAttribute(s) : this.setAttribute(s, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var i, n;
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const a = r.getPropertyOptions(s), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((i = a.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? a.converter : ns;
      this._$Em = s;
      const c = l.fromAttribute(e, a.type);
      this[s] = c ?? ((n = this._$Ej) == null ? void 0 : n.get(s)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    var s;
    if (t !== void 0) {
      const i = this.constructor, n = this[t];
      if (r ?? (r = i.getPropertyOptions(t)), !((r.hasChanged ?? vi)(n, e) || r.useDefault && r.reflect && n === ((s = this._$Ej) == null ? void 0 : s.get(t)) && !this.hasAttribute(i._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: s, wrapped: i }, n) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), i !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, n] of this._$Ep) this[i] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, n] of s) {
        const { wrapped: a } = n, l = this[i];
        a !== !0 || this._$AL.has(i) || l === void 0 || this.C(i, void 0, n, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach(((s) => {
        var i;
        return (i = s.hostUpdate) == null ? void 0 : i.call(s);
      })), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach(((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
    })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach(((e) => this._$ET(e, this[e])))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
ir.elementStyles = [], ir.shadowRootOptions = { mode: "open" }, ir[cr("elementProperties")] = /* @__PURE__ */ new Map(), ir[cr("finalized")] = /* @__PURE__ */ new Map(), Vs == null || Vs({ ReactiveElement: ir }), (oe.reactiveElementVersions ?? (oe.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oa = { attribute: !0, type: String, converter: ns, reflect: !1, hasChanged: vi }, na = (o = oa, t, e) => {
  const { kind: r, metadata: s } = e;
  let i = globalThis.litPropertyMetadata.get(s);
  if (i === void 0 && globalThis.litPropertyMetadata.set(s, i = /* @__PURE__ */ new Map()), r === "setter" && ((o = Object.create(o)).wrapped = !0), i.set(e.name, o), r === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, l, o);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, o, a), a;
    } };
  }
  if (r === "setter") {
    const { name: n } = e;
    return function(a) {
      const l = this[n];
      t.call(this, a), this.requestUpdate(n, l, o);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function w(o) {
  return (t, e) => typeof e == "object" ? na(o, t, e) : ((r, s, i) => {
    const n = s.hasOwnProperty(i);
    return s.constructor.createProperty(i, r), n ? Object.getOwnPropertyDescriptor(s, i) : void 0;
  })(o, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function _s(o) {
  return w({ ...o, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const aa = (o, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(o, t, e), e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Bo(o, t) {
  return (e, r, s) => {
    const i = (n) => {
      var a;
      return ((a = n.renderRoot) == null ? void 0 : a.querySelector(o)) ?? null;
    };
    return aa(e, r, { get() {
      return i(this);
    } });
  };
}
var la = Object.defineProperty, ca = Object.getOwnPropertyDescriptor, bi = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? ca(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && la(t, e, s), s;
};
let pr = class extends P {
  constructor() {
    super(...arguments), this.theme = "default", this.darkMode = !1;
  }
  getThemeStyles() {
    const o = os[this.theme] || os.default;
    let t = jo(o);
    return this.darkMode && (t += Fo, t += "background-color: var(--avgrd-color-background);", t += "color: var(--avgrd-color-text-primary);", t += "padding: 1rem;", t += "border-radius: 4px;"), t;
  }
  render() {
    return E`
      <div class="theme-container" style=${this.getThemeStyles()}>
        <slot></slot>
      </div>
    `;
  }
};
pr.styles = [
  R`
      :host {
        display: block;
      }

      .theme-container {
        display: block;
      }
    `
];
bi([
  w({ type: String, reflect: !0 })
], pr.prototype, "theme", 2);
bi([
  w({ type: Boolean, reflect: !0, attribute: "dark-mode" })
], pr.prototype, "darkMode", 2);
pr = bi([
  H("avgrd-theme-provider")
], pr);
var ha = Object.defineProperty, da = Object.getOwnPropertyDescriptor, ws = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? da(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && ha(t, e, s), s;
};
let Ie = class extends P {
  constructor() {
    super(...arguments), this.variant = "default", this.type = "button", this.disabled = !1;
  }
  firstUpdated(o) {
    super.firstUpdated(o);
  }
  handleClick(o) {
    if (this.disabled) {
      o.preventDefault(), o.stopPropagation();
      return;
    }
    this.emit("avgrd-click");
  }
  render() {
    return E`
      <button
        part="button"
        class="button button--${this.variant} interactive"
        type=${this.type}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
};
Ie.styles = [
  P.styles,
  Ao,
  Nn,
  R`
      :host {
        display: inline-block;
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--avgrd-spacing-sm);
        min-width: 75px;
        min-height: 23px;
        padding: var(--avgrd-spacing-xs) var(--avgrd-spacing-md);
        font-family: inherit;
        font-size: var(--avgrd-font-size-md);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        border: 1px solid var(--avgrd-color-border);
        border-radius: var(--avgrd-radius-sm);
        cursor: pointer;
        transition: all var(--avgrd-transition-fast);
      }

      /* Default variant - standard WinForms button */
      .button--default {
        background-color: var(--avgrd-color-surface);
        color: var(--avgrd-color-text-primary);
        border-color: var(--avgrd-color-border);
      }

      .button--default:hover:not(:disabled) {
        background-color: #e5e5e5;
        border-color: #adadad;
      }

      .button--default:active:not(:disabled) {
        background-color: #ccc;
        border-color: #8c8c8c;
      }

      /* Primary variant - emphasized action */
      .button--primary {
        background-color: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
        border-color: var(--avgrd-color-primary);
      }

      .button--primary:hover:not(:disabled) {
        background-color: var(--avgrd-color-primary-hover);
        border-color: var(--avgrd-color-primary-hover);
      }

      .button--primary:active:not(:disabled) {
        background-color: var(--avgrd-color-primary-active);
        border-color: var(--avgrd-color-primary-active);
      }

      /* Flat variant - minimal styling */
      .button--flat {
        background-color: transparent;
        color: var(--avgrd-color-text-primary);
        border-color: transparent;
      }

      .button--flat:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .button--flat:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.1);
      }

      /* Disabled state */
      .button:disabled {
        background-color: var(--avgrd-color-disabled);
        color: var(--avgrd-color-text-disabled);
        border-color: var(--avgrd-color-disabled-border);
        cursor: not-allowed;
      }

      /* Focus state */
      .button:focus-visible {
        outline: 2px solid var(--avgrd-color-border-focus);
        outline-offset: 2px;
      }
    `
];
ws([
  w({ type: String, reflect: !0 })
], Ie.prototype, "variant", 2);
ws([
  w({ type: String })
], Ie.prototype, "type", 2);
ws([
  w({ type: Boolean, reflect: !0 })
], Ie.prototype, "disabled", 2);
Ie = ws([
  H("avgrd-button")
], Ie);
var ua = Object.defineProperty, ga = Object.getOwnPropertyDescriptor, Et = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? ga(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && ua(t, e, s), s;
};
let ft = class extends P {
  constructor() {
    super(...arguments), this.value = "", this.placeholder = "", this.label = "", this.type = "text", this.disabled = !1, this.readonly = !1, this.multiline = !1, this.rows = 3;
  }
  handleInput(o) {
    const t = o.target;
    this.value = t.value, this.emit("avgrd-input", { value: this.value });
  }
  handleChange(o) {
    const t = o.target;
    this.value = t.value, this.emit("avgrd-change", { value: this.value });
  }
  /**
   * Focuses the input element
   */
  focus(o) {
    var t;
    (t = this.inputElement) == null || t.focus(o);
  }
  /**
   * Selects all text in the input
   */
  select() {
    var o;
    (o = this.inputElement) == null || o.select();
  }
  /**
   * Clears the input value
   */
  clear() {
    this.value = "", this.emit("avgrd-input", { value: this.value });
  }
  render() {
    const o = this.label ? E`<label class="label" part="label">${this.label}</label>` : je, t = this.multiline ? E`
          <textarea
            part="input"
            class="input input--multiline"
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            maxlength=${this.maxlength ?? je}
            rows=${this.rows}
            @input=${this.handleInput}
            @change=${this.handleChange}
          ></textarea>
        ` : E`
          <input
            part="input"
            class="input"
            type=${this.type}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            maxlength=${this.maxlength ?? je}
            @input=${this.handleInput}
            @change=${this.handleChange}
          />
        `;
    return E`
      <div class="textbox-wrapper">
        ${o}
        ${t}
      </div>
    `;
  }
};
ft.styles = [
  P.styles,
  Ao,
  R`
      :host {
        display: inline-block;
        min-width: 120px;
      }

      .textbox-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--avgrd-spacing-xs);
      }

      .label {
        font-size: var(--avgrd-font-size-sm);
        color: var(--avgrd-color-text-primary);
        user-select: none;
      }

      .input {
        box-sizing: border-box;
        width: 100%;
        min-height: 23px;
        padding: var(--avgrd-spacing-xs) var(--avgrd-spacing-sm);
        font-family: inherit;
        font-size: var(--avgrd-font-size-md);
        color: var(--avgrd-color-text-primary);
        background-color: var(--avgrd-color-surface);
        border: 1px solid var(--avgrd-color-border);
        border-radius: var(--avgrd-radius-sm);
        outline: none;
        transition: border-color var(--avgrd-transition-fast),
          box-shadow var(--avgrd-transition-fast);
      }

      .input::placeholder {
        color: var(--avgrd-color-text-secondary);
      }

      .input:hover:not(:disabled) {
        border-color: #adadad;
      }

      .input:focus {
        border-color: var(--avgrd-color-border-focus);
        box-shadow: 0 0 0 1px var(--avgrd-color-border-focus);
      }

      .input:disabled {
        background-color: var(--avgrd-color-disabled);
        border-color: var(--avgrd-color-disabled-border);
        color: var(--avgrd-color-text-disabled);
        cursor: not-allowed;
      }

      .input[readonly] {
        background-color: var(--avgrd-color-background);
      }

      /* Multiline textarea */
      .input--multiline {
        resize: vertical;
        min-height: 60px;
      }
    `
];
Et([
  w({ type: String })
], ft.prototype, "value", 2);
Et([
  w({ type: String })
], ft.prototype, "placeholder", 2);
Et([
  w({ type: String })
], ft.prototype, "label", 2);
Et([
  w({ type: String })
], ft.prototype, "type", 2);
Et([
  w({ type: Boolean, reflect: !0 })
], ft.prototype, "disabled", 2);
Et([
  w({ type: Boolean, reflect: !0 })
], ft.prototype, "readonly", 2);
Et([
  w({ type: Boolean, reflect: !0 })
], ft.prototype, "multiline", 2);
Et([
  w({ type: Number })
], ft.prototype, "maxlength", 2);
Et([
  w({ type: Number })
], ft.prototype, "rows", 2);
Et([
  Bo(".input")
], ft.prototype, "inputElement", 2);
ft = Et([
  H("avgrd-textbox")
], ft);
var pa = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Jt = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? fa(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && pa(t, e, s), s;
};
let Dt = class extends P {
  constructor() {
    super(...arguments), this.text = "", this.size = "md", this.color = "primary", this.bold = !1, this.nowrap = !1, this.align = "left", this.block = !1, this.for = "";
  }
  handleClick() {
    if (this.for) {
      const o = document.getElementById(this.for);
      o && (o.focus(), "click" in o && typeof o.click == "function" && o.click());
    }
  }
  render() {
    const o = [
      "label",
      `label--size-${this.size}`,
      `label--color-${this.color}`,
      this.bold ? "label--bold" : "",
      this.nowrap ? "label--nowrap" : ""
    ].filter(Boolean).join(" ");
    return E`
      <span
        class=${o}
        part="text"
        @click=${this.handleClick}
        style=${this.for ? "cursor: pointer;" : ""}
      >
        ${this.text || E`<slot></slot>`}
      </span>
    `;
  }
};
Dt.styles = [
  P.styles,
  R`
      :host {
        display: inline-block;
      }

      .label {
        display: inline-block;
        font-family: var(--avgrd-font-family);
        line-height: 1.4;
        margin: 0;
        padding: 0;
        user-select: none;
      }

      /* Sizes */
      .label--size-xs {
        font-size: var(--avgrd-font-size-xs);
      }

      .label--size-sm {
        font-size: var(--avgrd-font-size-sm);
      }

      .label--size-md {
        font-size: var(--avgrd-font-size-md);
      }

      .label--size-lg {
        font-size: var(--avgrd-font-size-lg);
      }

      .label--size-xl {
        font-size: var(--avgrd-font-size-xl);
      }

      /* Colors */
      .label--color-primary {
        color: var(--avgrd-color-text-primary);
      }

      .label--color-secondary {
        color: var(--avgrd-color-text-secondary);
      }

      .label--color-disabled {
        color: var(--avgrd-color-text-disabled);
      }

      .label--color-accent {
        color: var(--avgrd-color-primary);
      }

      .label--color-success {
        color: var(--avgrd-color-success);
      }

      .label--color-warning {
        color: var(--avgrd-color-warning);
      }

      .label--color-error {
        color: var(--avgrd-color-error);
      }

      /* Font weight */
      .label--bold {
        font-weight: 600;
      }

      /* Text wrapping / truncation */
      .label--nowrap {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }

      :host([nowrap]) {
        max-width: 100%;
        overflow: hidden;
      }

      /* Alignment */
      :host([align='center']) {
        text-align: center;
      }

      :host([align='right']) {
        text-align: right;
      }

      /* Block display for full width */
      :host([block]) {
        display: block;
      }
    `
];
Jt([
  w({ type: String })
], Dt.prototype, "text", 2);
Jt([
  w({ type: String, reflect: !0 })
], Dt.prototype, "size", 2);
Jt([
  w({ type: String, reflect: !0 })
], Dt.prototype, "color", 2);
Jt([
  w({ type: Boolean, reflect: !0 })
], Dt.prototype, "bold", 2);
Jt([
  w({ type: Boolean, reflect: !0 })
], Dt.prototype, "nowrap", 2);
Jt([
  w({ type: String, reflect: !0 })
], Dt.prototype, "align", 2);
Jt([
  w({ type: Boolean, reflect: !0 })
], Dt.prototype, "block", 2);
Jt([
  w({ type: String })
], Dt.prototype, "for", 2);
Dt = Jt([
  H("avgrd-label")
], Dt);
var ma = Object.defineProperty, va = Object.getOwnPropertyDescriptor, _r = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? va(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && ma(t, e, s), s;
};
let we = class extends P {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "";
  }
  handleClick() {
    this.disabled || (this.indeterminate = !1, this.checked = !this.checked, this.emit("avgrd-change", { checked: this.checked, value: this.value }));
  }
  handleKeydown(o) {
    (o.key === " " || o.key === "Enter") && (o.preventDefault(), this.handleClick());
  }
  render() {
    const o = [
      "checkbox",
      this.checked ? "checkbox--checked" : "",
      this.indeterminate ? "checkbox--indeterminate" : "",
      this.disabled ? "checkbox--disabled" : ""
    ].filter(Boolean).join(" ");
    return E`
      <label class=${o} part="checkbox" @click=${this.handleClick}>
        <input
          type="checkbox"
          class="checkbox__input"
          .checked=${this.checked}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.disabled}
          @keydown=${this.handleKeydown}
        />
        <span class="checkbox__box" part="box">
          <span class="checkbox__check"></span>
          <span class="checkbox__indeterminate"></span>
        </span>
        <span class="checkbox__label" part="label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
we.styles = [
  P.styles,
  R`
      :host {
        display: inline-block;
      }

      .checkbox {
        display: inline-flex;
        align-items: center;
        gap: var(--avgrd-spacing-sm);
        cursor: pointer;
        user-select: none;
        font-family: var(--avgrd-font-family);
        font-size: var(--avgrd-font-size-md);
        color: var(--avgrd-color-text-primary);
      }

      .checkbox--disabled {
        cursor: not-allowed;
        color: var(--avgrd-color-text-disabled);
      }

      .checkbox__box {
        position: relative;
        width: 16px;
        height: 16px;
        border: 1px solid var(--avgrd-color-border);
        border-radius: var(--avgrd-radius-sm);
        background-color: var(--avgrd-color-surface);
        transition: all var(--avgrd-transition-fast);
        flex-shrink: 0;
      }

      .checkbox:hover:not(.checkbox--disabled) .checkbox__box {
        border-color: var(--avgrd-color-primary);
      }

      .checkbox--checked .checkbox__box,
      .checkbox--indeterminate .checkbox__box {
        background-color: var(--avgrd-color-primary);
        border-color: var(--avgrd-color-primary);
      }

      .checkbox--disabled .checkbox__box {
        background-color: var(--avgrd-color-disabled);
        border-color: var(--avgrd-color-disabled-border);
      }

      .checkbox--checked.checkbox--disabled .checkbox__box,
      .checkbox--indeterminate.checkbox--disabled .checkbox__box {
        background-color: var(--avgrd-color-text-disabled);
        border-color: var(--avgrd-color-text-disabled);
      }

      /* Checkmark */
      .checkbox__check {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        opacity: 0;
      }

      .checkbox--checked .checkbox__check {
        opacity: 1;
      }

      .checkbox__check::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 3px;
        height: 6px;
        border: solid var(--avgrd-color-text-on-primary);
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -60%) rotate(45deg);
      }

      /* Indeterminate mark */
      .checkbox__indeterminate {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 2px;
        background-color: var(--avgrd-color-text-on-primary);
        opacity: 0;
      }

      .checkbox--indeterminate .checkbox__indeterminate {
        opacity: 1;
      }

      /* Hidden native input for accessibility */
      .checkbox__input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      /* Focus ring */
      .checkbox__input:focus-visible + .checkbox__box {
        outline: 2px solid var(--avgrd-color-border-focus);
        outline-offset: 2px;
      }

      .checkbox__label {
        line-height: 1.4;
      }
    `
];
_r([
  w({ type: Boolean, reflect: !0 })
], we.prototype, "checked", 2);
_r([
  w({ type: Boolean, reflect: !0 })
], we.prototype, "indeterminate", 2);
_r([
  w({ type: Boolean, reflect: !0 })
], we.prototype, "disabled", 2);
_r([
  w({ type: String })
], we.prototype, "value", 2);
we = _r([
  H("avgrd-checkbox")
], we);
var ba = Object.defineProperty, ya = Object.getOwnPropertyDescriptor, wr = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? ya(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && ba(t, e, s), s;
};
let Ce = class extends P {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.value = "", this.name = "";
  }
  handleClick() {
    if (!(this.disabled || this.checked)) {
      if (this.name) {
        const o = this.closest("avgrd-radio-group");
        (o ? o.querySelectorAll(`avgrd-radio[name="${this.name}"]`) : document.querySelectorAll(`avgrd-radio[name="${this.name}"]`)).forEach((e) => {
          e !== this && (e.checked = !1);
        });
      }
      this.checked = !0, this.emit("avgrd-change", { checked: this.checked, value: this.value });
    }
  }
  handleKeydown(o) {
    (o.key === " " || o.key === "Enter") && (o.preventDefault(), this.handleClick());
  }
  render() {
    const o = [
      "radio",
      this.checked ? "radio--checked" : "",
      this.disabled ? "radio--disabled" : ""
    ].filter(Boolean).join(" ");
    return E`
      <label class=${o} part="radio" @click=${this.handleClick}>
        <input
          type="radio"
          class="radio__input"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          name=${this.name}
          value=${this.value}
          @keydown=${this.handleKeydown}
        />
        <span class="radio__circle" part="circle">
          <span class="radio__dot"></span>
        </span>
        <span class="radio__label" part="label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
Ce.styles = [
  P.styles,
  R`
      :host {
        display: inline-block;
      }

      .radio {
        display: inline-flex;
        align-items: center;
        gap: var(--avgrd-spacing-sm);
        cursor: pointer;
        user-select: none;
        font-family: var(--avgrd-font-family);
        font-size: var(--avgrd-font-size-md);
        color: var(--avgrd-color-text-primary);
      }

      .radio--disabled {
        cursor: not-allowed;
        color: var(--avgrd-color-text-disabled);
      }

      .radio__circle {
        position: relative;
        width: 16px;
        height: 16px;
        border: 1px solid var(--avgrd-color-border);
        border-radius: 50%;
        background-color: var(--avgrd-color-surface);
        transition: all var(--avgrd-transition-fast);
        flex-shrink: 0;
      }

      .radio:hover:not(.radio--disabled) .radio__circle {
        border-color: var(--avgrd-color-primary);
      }

      .radio--checked .radio__circle {
        border-color: var(--avgrd-color-primary);
      }

      .radio--disabled .radio__circle {
        background-color: var(--avgrd-color-disabled);
        border-color: var(--avgrd-color-disabled-border);
      }

      /* Inner dot */
      .radio__dot {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--avgrd-color-primary);
        transition: transform var(--avgrd-transition-fast);
      }

      .radio--checked .radio__dot {
        transform: translate(-50%, -50%) scale(1);
      }

      .radio--disabled .radio__dot {
        background-color: var(--avgrd-color-text-disabled);
      }

      /* Hidden native input for accessibility */
      .radio__input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      /* Focus ring */
      .radio__input:focus-visible + .radio__circle {
        outline: 2px solid var(--avgrd-color-border-focus);
        outline-offset: 2px;
      }

      .radio__label {
        line-height: 1.4;
      }
    `
];
wr([
  w({ type: Boolean, reflect: !0 })
], Ce.prototype, "checked", 2);
wr([
  w({ type: Boolean, reflect: !0 })
], Ce.prototype, "disabled", 2);
wr([
  w({ type: String })
], Ce.prototype, "value", 2);
wr([
  w({ type: String })
], Ce.prototype, "name", 2);
Ce = wr([
  H("avgrd-radio")
], Ce);
var xa = Object.defineProperty, _a = Object.getOwnPropertyDescriptor, Cs = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? _a(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && xa(t, e, s), s;
};
let Re = class extends P {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.direction = "vertical";
  }
  connectedCallback() {
    super.connectedCallback(), this.updateChildNames();
  }
  updated() {
    this.updateChildNames();
  }
  updateChildNames() {
    if (!this.name) return;
    this.querySelectorAll("avgrd-radio").forEach((t) => {
      t.setAttribute("name", this.name);
    });
  }
  /**
   * Get the currently selected value
   */
  getValue() {
    const o = this.querySelector("avgrd-radio[checked]");
    return (o == null ? void 0 : o.getAttribute("value")) || null;
  }
  /**
   * Set the selected value
   */
  setValue(o) {
    this.querySelectorAll("avgrd-radio").forEach((e) => {
      const r = e;
      r.checked = e.getAttribute("value") === o;
    });
  }
  render() {
    const o = [
      "radio-group",
      this.direction === "horizontal" ? "radio-group--horizontal" : ""
    ].filter(Boolean).join(" ");
    return E`
      <div class=${o} role="radiogroup" aria-label=${this.label || this.name}>
        ${this.label ? E`<div class="radio-group__label">${this.label}</div>` : ""}
        <div class="radio-group__options">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
Re.styles = [
  P.styles,
  R`
      :host {
        display: block;
      }

      .radio-group {
        display: flex;
        flex-direction: column;
        gap: var(--avgrd-spacing-sm);
      }

      .radio-group--horizontal {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--avgrd-spacing-md);
      }

      .radio-group__label {
        font-size: var(--avgrd-font-size-sm);
        font-weight: 600;
        color: var(--avgrd-color-text-primary);
        margin-bottom: var(--avgrd-spacing-xs);
      }

      .radio-group__options {
        display: flex;
        flex-direction: inherit;
        gap: inherit;
      }
    `
];
Cs([
  w({ type: String })
], Re.prototype, "name", 2);
Cs([
  w({ type: String })
], Re.prototype, "label", 2);
Cs([
  w({ type: String, reflect: !0 })
], Re.prototype, "direction", 2);
Re = Cs([
  H("avgrd-radio-group")
], Re);
var wa = Object.defineProperty, Ca = Object.getOwnPropertyDescriptor, He = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Ca(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && wa(t, e, s), s;
};
let ae = class extends P {
  constructor() {
    super(...arguments), this.border = "none", this.padding = "none", this.background = "transparent", this.dock = "none", this.layout = "default";
  }
  render() {
    const o = [
      "panel",
      `panel--border-${this.border}`,
      `panel--padding-${this.padding}`,
      `panel--bg-${this.background}`,
      this.layout !== "default" ? `panel--layout-${this.layout}` : ""
    ].filter(Boolean).join(" ");
    return E`
      <div class=${o} part="container">
        <slot></slot>
      </div>
    `;
  }
};
ae.styles = [
  P.styles,
  R`
      :host {
        display: block;
        box-sizing: border-box;
      }

      .panel {
        display: block;
        box-sizing: border-box;
        background-color: var(--avgrd-panel-bg, transparent);
        height: 100%;
      }

      /* Border styles */
      .panel--border-none {
        border: none;
      }

      .panel--border-single {
        border: 1px solid var(--avgrd-color-border);
      }

      .panel--border-raised {
        border: 1px solid;
        border-color: #fff #808080 #808080 #fff;
      }

      .panel--border-sunken {
        border: 1px solid;
        border-color: #808080 #fff #fff #808080;
      }

      .panel--border-etched {
        border: 2px groove var(--avgrd-color-border);
      }

      /* Padding sizes */
      .panel--padding-none {
        padding: 0;
      }

      .panel--padding-xs {
        padding: var(--avgrd-spacing-xs);
      }

      .panel--padding-sm {
        padding: var(--avgrd-spacing-sm);
      }

      .panel--padding-md {
        padding: var(--avgrd-spacing-md);
      }

      .panel--padding-lg {
        padding: var(--avgrd-spacing-lg);
      }

      .panel--padding-xl {
        padding: var(--avgrd-spacing-xl);
      }

      /* Background variants */
      .panel--bg-transparent {
        background-color: transparent;
      }

      .panel--bg-surface {
        background-color: var(--avgrd-color-surface);
      }

      .panel--bg-background {
        background-color: var(--avgrd-color-background);
      }

      /* Dock styles */
      :host([dock='fill']) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host([dock='top']) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }

      :host([dock='bottom']) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }

      :host([dock='left']) {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
      }

      :host([dock='right']) {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
      }

      /* Layout helpers */
      .panel--layout-flow {
        display: flex;
        flex-wrap: wrap;
        gap: var(--avgrd-spacing-sm);
      }

      .panel--layout-stack-v {
        display: flex;
        flex-direction: column;
        gap: var(--avgrd-spacing-sm);
      }

      .panel--layout-stack-h {
        display: flex;
        flex-direction: row;
        gap: var(--avgrd-spacing-sm);
      }
    `
];
He([
  w({ type: String, reflect: !0 })
], ae.prototype, "border", 2);
He([
  w({ type: String, reflect: !0 })
], ae.prototype, "padding", 2);
He([
  w({ type: String, reflect: !0 })
], ae.prototype, "background", 2);
He([
  w({ type: String, reflect: !0 })
], ae.prototype, "dock", 2);
He([
  w({ type: String, reflect: !0 })
], ae.prototype, "layout", 2);
ae = He([
  H("avgrd-panel")
], ae);
var Sa = Object.defineProperty, Ta = Object.getOwnPropertyDescriptor, Ge = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Ta(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Sa(t, e, s), s;
};
let le = class extends P {
  constructor() {
    super(...arguments), this.label = "", this.border = "single", this.padding = "md", this.layout = "default", this.disabled = !1;
  }
  render() {
    const o = [
      "groupbox",
      this.border === "etched" ? "groupbox--etched" : ""
    ].filter(Boolean).join(" "), t = [
      "content",
      `content--padding-${this.padding}`,
      this.layout !== "default" ? `content--layout-${this.layout}` : ""
    ].filter(Boolean).join(" ");
    return E`
      <fieldset class=${o} part="fieldset" ?disabled=${this.disabled}>
        <legend class="legend" part="legend">${this.label}</legend>
        <div class=${t} part="content">
          <slot></slot>
        </div>
      </fieldset>
    `;
  }
};
le.styles = [
  P.styles,
  R`
      :host {
        display: block;
      }

      .groupbox {
        border: 1px solid var(--avgrd-color-border);
        border-radius: var(--avgrd-radius-sm);
        margin: 0;
        padding: 0;
        min-width: 0;
      }

      .groupbox--etched {
        border: 2px groove var(--avgrd-color-border);
      }

      .legend {
        padding: 0 var(--avgrd-spacing-sm);
        font-size: var(--avgrd-font-size-md);
        font-weight: 400;
        color: var(--avgrd-color-text-primary);
        margin-left: var(--avgrd-spacing-sm);
      }

      .content {
        padding: var(--avgrd-spacing-md);
      }

      /* Padding variants */
      .content--padding-none {
        padding: 0;
      }

      .content--padding-xs {
        padding: var(--avgrd-spacing-xs);
      }

      .content--padding-sm {
        padding: var(--avgrd-spacing-sm);
      }

      .content--padding-md {
        padding: var(--avgrd-spacing-md);
      }

      .content--padding-lg {
        padding: var(--avgrd-spacing-lg);
      }

      .content--padding-xl {
        padding: var(--avgrd-spacing-xl);
      }

      /* Layout helpers */
      .content--layout-flow {
        display: flex;
        flex-wrap: wrap;
        gap: var(--avgrd-spacing-sm);
      }

      .content--layout-stack-v {
        display: flex;
        flex-direction: column;
        gap: var(--avgrd-spacing-sm);
      }

      .content--layout-stack-h {
        display: flex;
        flex-direction: row;
        gap: var(--avgrd-spacing-sm);
      }

      /* Disabled state */
      :host([disabled]) .legend {
        color: var(--avgrd-color-text-disabled);
      }

      :host([disabled]) .groupbox {
        border-color: var(--avgrd-color-disabled-border);
      }
    `
];
Ge([
  w({ type: String })
], le.prototype, "label", 2);
Ge([
  w({ type: String, reflect: !0 })
], le.prototype, "border", 2);
Ge([
  w({ type: String, reflect: !0 })
], le.prototype, "padding", 2);
Ge([
  w({ type: String, reflect: !0 })
], le.prototype, "layout", 2);
Ge([
  w({ type: Boolean, reflect: !0 })
], le.prototype, "disabled", 2);
le = Ge([
  H("avgrd-groupbox")
], le);
var ka = Object.defineProperty, Oa = Object.getOwnPropertyDescriptor, Io = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Oa(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && ka(t, e, s), s;
};
let as = class extends P {
  constructor() {
    super(...arguments), this.title = "";
  }
  render() {
    return E`
      <nav class="navbar" part="container">
        ${this.title ? E`
          <span class="navbar__title">${this.title}</span>
          <span class="navbar__divider"></span>
        ` : ""}
        <div class="navbar__nav" part="nav">
          <slot></slot>
        </div>
        <div class="navbar__status" part="status">
          <slot name="status"></slot>
        </div>
        <div class="navbar__profile" part="profile">
          <slot name="profile"></slot>
        </div>
      </nav>
    `;
  }
};
as.styles = [
  P.styles,
  R`
      :host {
        display: block;
      }

      .navbar {
        display: flex;
        align-items: center;
        height: 40px;
        background-color: var(--avgrd-color-surface);
        border-bottom: 1px solid var(--avgrd-color-border);
        padding: 0 var(--avgrd-spacing-sm);
        gap: var(--avgrd-spacing-xs);
      }

      .navbar__title {
        font-size: var(--avgrd-font-size-md);
        font-weight: 600;
        color: var(--avgrd-color-text-primary);
        padding: 0 var(--avgrd-spacing-sm);
        white-space: nowrap;
      }

      .navbar__divider {
        width: 1px;
        height: 20px;
        background-color: var(--avgrd-color-border);
        margin: 0 var(--avgrd-spacing-xs);
      }

      .navbar__nav {
        display: flex;
        align-items: center;
        gap: var(--avgrd-spacing-xs);
        flex: 1;
      }

      .navbar__spacer {
        flex: 1;
      }

      .navbar__status {
        display: flex;
        align-items: center;
        gap: var(--avgrd-spacing-sm);
        padding: 0 var(--avgrd-spacing-sm);
        font-size: var(--avgrd-font-size-sm);
        color: var(--avgrd-color-text-secondary);
      }

      .navbar__profile {
        display: flex;
        align-items: center;
        border-left: 1px solid var(--avgrd-color-border);
        padding-left: var(--avgrd-spacing-sm);
        margin-left: var(--avgrd-spacing-xs);
      }
    `
];
Io([
  w({ type: String })
], as.prototype, "title", 2);
as = Io([
  H("avgrd-navbar")
], as);
var Da = Object.defineProperty, Pa = Object.getOwnPropertyDescriptor, Ss = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Pa(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Da(t, e, s), s;
};
let ze = class extends P {
  constructor() {
    super(...arguments), this.active = !1, this.disabled = !1, this.href = "";
  }
  handleClick() {
    this.disabled || this.emit("avgrd-select", { item: this });
  }
  render() {
    const o = [
      "nav-item",
      this.active ? "nav-item--active" : ""
    ].filter(Boolean).join(" ");
    return E`
      <button
        class=${o}
        part="button"
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
};
ze.styles = [
  P.styles,
  R`
      :host {
        display: inline-block;
      }

      .nav-item {
        display: inline-flex;
        align-items: center;
        gap: var(--avgrd-spacing-xs);
        height: 28px;
        padding: 0 var(--avgrd-spacing-md);
        font-family: inherit;
        font-size: var(--avgrd-font-size-sm);
        color: var(--avgrd-color-text-primary);
        background-color: transparent;
        border: none;
        border-radius: var(--avgrd-radius-sm);
        cursor: pointer;
        transition: background-color var(--avgrd-transition-fast);
        white-space: nowrap;
      }

      .nav-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .nav-item:active {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .nav-item--active {
        background-color: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
      }

      .nav-item--active:hover {
        background-color: var(--avgrd-color-primary-hover);
      }

      .nav-item--active:active {
        background-color: var(--avgrd-color-primary-active);
      }

      .nav-item:focus-visible {
        outline: 2px solid var(--avgrd-color-border-focus);
        outline-offset: 2px;
      }

      .nav-item:disabled {
        color: var(--avgrd-color-text-disabled);
        cursor: not-allowed;
      }

      .nav-item:disabled:hover {
        background-color: transparent;
      }
    `
];
Ss([
  w({ type: Boolean, reflect: !0 })
], ze.prototype, "active", 2);
Ss([
  w({ type: Boolean, reflect: !0 })
], ze.prototype, "disabled", 2);
Ss([
  w({ type: String })
], ze.prototype, "href", 2);
ze = Ss([
  H("avgrd-navbar-item")
], ze);
var Ea = Object.defineProperty, Ma = Object.getOwnPropertyDescriptor, Ts = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Ma(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Ea(t, e, s), s;
};
let We = class extends P {
  constructor() {
    super(...arguments), this.name = "", this.avatar = "", this.caret = !1;
  }
  getInitials() {
    if (!this.name) return "?";
    const o = this.name.trim().split(/\s+/);
    return o.length === 1 ? o[0].charAt(0).toUpperCase() : (o[0].charAt(0) + o[o.length - 1].charAt(0)).toUpperCase();
  }
  handleClick() {
    this.emit("avgrd-profile-click");
  }
  render() {
    const o = this.avatar ? E`<img src=${this.avatar} alt=${this.name} />` : this.getInitials();
    return E`
      <div class="profile" part="container" @click=${this.handleClick}>
        <div class="profile__avatar" part="avatar">
          ${o}
        </div>
        ${this.name ? E`
          <span class="profile__name" part="name">${this.name}</span>
        ` : je}
        ${this.caret ? E`
          <span class="profile__caret">▼</span>
        ` : je}
      </div>
    `;
  }
};
We.styles = [
  P.styles,
  R`
      :host {
        display: inline-block;
      }

      .profile {
        display: inline-flex;
        align-items: center;
        gap: var(--avgrd-spacing-sm);
        padding: var(--avgrd-spacing-xs) var(--avgrd-spacing-sm);
        border-radius: var(--avgrd-radius-sm);
        cursor: pointer;
        transition: background-color var(--avgrd-transition-fast);
      }

      .profile:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .profile:active {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .profile__avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--avgrd-font-size-xs);
        font-weight: 600;
        overflow: hidden;
      }

      .profile__avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .profile__name {
        font-size: var(--avgrd-font-size-sm);
        color: var(--avgrd-color-text-primary);
        white-space: nowrap;
      }

      .profile__caret {
        font-size: 10px;
        color: var(--avgrd-color-text-secondary);
      }
    `
];
Ts([
  w({ type: String })
], We.prototype, "name", 2);
Ts([
  w({ type: String })
], We.prototype, "avatar", 2);
Ts([
  w({ type: Boolean })
], We.prototype, "caret", 2);
We = Ts([
  H("avgrd-navbar-profile")
], We);
var Aa = Object.defineProperty, ja = Object.getOwnPropertyDescriptor, ks = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? ja(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Aa(t, e, s), s;
};
let $e = class extends P {
  constructor() {
    super(...arguments), this.open = !1, this.posX = 0, this.posY = 0, this.menuContainer = null, this.anchorElement = null, this.boundHandleOutsideClick = this.handleOutsideClick.bind(this), this.boundHandleKeydown = this.handleKeydown.bind(this), this.boundHandleScroll = this.handleScroll.bind(this);
  }
  /**
   * Open menu at cursor position (for right-click context menus)
   */
  openAtCursor(o) {
    o.preventDefault(), o.stopPropagation(), this.openAtPosition({ x: o.clientX, y: o.clientY });
  }
  /**
   * Open menu at specific coordinates
   */
  openAtPosition(o) {
    this.anchorElement = null, this.showMenuAtPosition(o.x, o.y);
  }
  /**
   * Open menu anchored to an element
   * @param element - Element to anchor to
   * @param align - Alignment relative to element ('start' | 'end')
   */
  openAtElement(o, t = "start") {
    this.anchorElement = o;
    const e = o.getBoundingClientRect(), r = t === "start" ? e.left : e.right, s = e.bottom + 2;
    this.showMenuAtPosition(r, s);
  }
  /**
   * Close the menu
   */
  close() {
    this.open && (this.open = !1, this.removeMenuFromBody(), this.removeEventListeners(), this.emit("avgrd-menu-close"));
  }
  showMenuAtPosition(o, t) {
    this.removeMenuFromBody(), this.menuContainer = document.createElement("div"), this.menuContainer.className = "avgrd-context-menu-container";
    const e = getComputedStyle(this);
    Object.assign(this.menuContainer.style, {
      position: "fixed",
      zIndex: "10000",
      top: "0",
      left: "0",
      // Copy CSS custom properties for theming
      "--avgrd-color-surface": e.getPropertyValue("--avgrd-color-surface") || "#FFFFFF",
      "--avgrd-color-border": e.getPropertyValue("--avgrd-color-border") || "#D1D1D1",
      "--avgrd-color-primary": e.getPropertyValue("--avgrd-color-primary") || "#0078D4",
      "--avgrd-color-text-primary": e.getPropertyValue("--avgrd-color-text-primary") || "#1A1A1A",
      "--avgrd-color-text-secondary": e.getPropertyValue("--avgrd-color-text-secondary") || "#6E6E6E",
      "--avgrd-color-text-disabled": e.getPropertyValue("--avgrd-color-text-disabled") || "#A6A6A6",
      "--avgrd-color-text-on-primary": e.getPropertyValue("--avgrd-color-text-on-primary") || "#FFFFFF",
      "--avgrd-color-error": e.getPropertyValue("--avgrd-color-error") || "#D13438",
      "--avgrd-spacing-xs": e.getPropertyValue("--avgrd-spacing-xs") || "0.25rem",
      "--avgrd-spacing-sm": e.getPropertyValue("--avgrd-spacing-sm") || "0.5rem",
      "--avgrd-spacing-md": e.getPropertyValue("--avgrd-spacing-md") || "0.75rem",
      "--avgrd-spacing-lg": e.getPropertyValue("--avgrd-spacing-lg") || "1rem",
      "--avgrd-radius-sm": e.getPropertyValue("--avgrd-radius-sm") || "2px",
      "--avgrd-shadow-md": e.getPropertyValue("--avgrd-shadow-md") || "0 2px 4px rgba(0,0,0,0.12)",
      "--avgrd-transition-fast": e.getPropertyValue("--avgrd-transition-fast") || "100ms ease-in-out",
      "--avgrd-font-family": e.getPropertyValue("--avgrd-font-family") || "'PT Sans', sans-serif",
      "--avgrd-font-size-sm": e.getPropertyValue("--avgrd-font-size-sm") || "0.8125rem",
      "--avgrd-font-size-xs": e.getPropertyValue("--avgrd-font-size-xs") || "0.75rem"
    });
    const r = document.createElement("div");
    r.className = "avgrd-context-menu", Object.assign(r.style, {
      position: "absolute",
      minWidth: "160px",
      maxWidth: "280px",
      backgroundColor: "var(--avgrd-color-surface)",
      border: "1px solid var(--avgrd-color-border)",
      borderRadius: "var(--avgrd-radius-sm)",
      boxShadow: "var(--avgrd-shadow-md)",
      padding: "var(--avgrd-spacing-xs) 0",
      fontFamily: "var(--avgrd-font-family)",
      outline: "none"
    }), r.setAttribute("role", "menu"), this.querySelectorAll("avgrd-menu-item, avgrd-menu-divider").forEach((i) => {
      const n = i.cloneNode(!0);
      r.appendChild(n);
    }), this.menuContainer.appendChild(r), document.body.appendChild(this.menuContainer), r.style.left = "-9999px", r.style.top = "-9999px", requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!this.menuContainer) return;
        const i = r.getBoundingClientRect(), n = i.width, a = i.height, l = window.innerWidth, c = window.innerHeight;
        let h = o, d = t;
        const u = h + n > l - 8, g = d + a > c - 8;
        u && (h = o - n), g && (d = t - a), h = Math.max(8, h), d = Math.max(8, d), h + n > l - 8 && (h = l - n - 8), d + a > c - 8 && (d = c - a - 8), r.style.left = `${h}px`, r.style.top = `${d}px`;
        const p = r.querySelector("avgrd-menu-item:not([disabled])");
        p == null || p.focus();
      });
    }), this.open = !0, this.addEventListeners(), this.emit("avgrd-menu-open");
  }
  removeMenuFromBody() {
    this.menuContainer && this.menuContainer.parentNode && this.menuContainer.parentNode.removeChild(this.menuContainer), this.menuContainer = null;
  }
  addEventListeners() {
    setTimeout(() => {
      document.addEventListener("click", this.boundHandleOutsideClick, !0), document.addEventListener("contextmenu", this.boundHandleOutsideClick, !0);
    }, 10), document.addEventListener("keydown", this.boundHandleKeydown), window.addEventListener("scroll", this.boundHandleScroll, !0), window.addEventListener("resize", this.boundHandleScroll);
  }
  removeEventListeners() {
    document.removeEventListener("click", this.boundHandleOutsideClick, !0), document.removeEventListener("contextmenu", this.boundHandleOutsideClick, !0), document.removeEventListener("keydown", this.boundHandleKeydown), window.removeEventListener("scroll", this.boundHandleScroll, !0), window.removeEventListener("resize", this.boundHandleScroll);
  }
  handleOutsideClick(o) {
    if (!this.menuContainer) return;
    const t = o.target;
    this.menuContainer.contains(t) || this.close();
  }
  handleKeydown(o) {
    if (this.menuContainer)
      switch (o.key) {
        case "Escape":
          this.close();
          break;
        case "ArrowDown":
          o.preventDefault(), this.focusNextItem(1);
          break;
        case "ArrowUp":
          o.preventDefault(), this.focusNextItem(-1);
          break;
      }
  }
  handleScroll() {
    this.close();
  }
  focusNextItem(o) {
    var s;
    if (!this.menuContainer) return;
    const t = Array.from(
      this.menuContainer.querySelectorAll("avgrd-menu-item:not([disabled])")
    );
    if (t.length === 0) return;
    let r = t.findIndex(
      (i) => i === document.activeElement || i.contains(document.activeElement)
    ) + o;
    r < 0 && (r = t.length - 1), r >= t.length && (r = 0), (s = t[r]) == null || s.focus();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeMenuFromBody(), this.removeEventListeners();
  }
  render() {
    return E`<slot style="display: none;"></slot>`;
  }
};
$e.styles = [
  P.styles,
  R`
      :host {
        display: none;
      }
    `
];
ks([
  w({ type: Boolean, reflect: !0 })
], $e.prototype, "open", 2);
ks([
  _s()
], $e.prototype, "posX", 2);
ks([
  _s()
], $e.prototype, "posY", 2);
$e = ks([
  H("avgrd-context-menu")
], $e);
var Fa = Object.defineProperty, La = Object.getOwnPropertyDescriptor, Os = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? La(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Fa(t, e, s), s;
};
let Ve = class extends P {
  constructor() {
    super(...arguments), this.shortcut = "", this.disabled = !1, this.danger = !1;
  }
  handleClick() {
    if (this.disabled) return;
    this.emit("avgrd-select", { item: this });
    const o = this.closest("avgrd-context-menu");
    o == null || o.close();
  }
  handleKeydown(o) {
    (o.key === "Enter" || o.key === " ") && (o.preventDefault(), this.handleClick());
  }
  render() {
    return E`
      <button
        class="menu-item"
        part="item"
        role="menuitem"
        ?disabled=${this.disabled}
        tabindex=${this.disabled ? -1 : 0}
        @click=${this.handleClick}
        @keydown=${this.handleKeydown}
      >
        <span class="menu-item__icon">
          <slot name="icon"></slot>
        </span>
        <span class="menu-item__label">
          <slot></slot>
        </span>
        ${this.shortcut ? E`
          <span class="menu-item__shortcut">${this.shortcut}</span>
        ` : je}
      </button>
    `;
  }
};
Ve.styles = [
  P.styles,
  R`
      :host {
        display: block;
      }

      .menu-item {
        display: flex;
        align-items: center;
        gap: var(--avgrd-spacing-sm);
        width: 100%;
        padding: var(--avgrd-spacing-xs) var(--avgrd-spacing-md);
        font-family: inherit;
        font-size: var(--avgrd-font-size-sm);
        color: var(--avgrd-color-text-primary);
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        outline: none;
        transition: background-color var(--avgrd-transition-fast);
      }

      .menu-item:hover:not(:disabled) {
        background-color: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
      }

      .menu-item:focus-visible {
        background-color: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
      }

      .menu-item:disabled {
        color: var(--avgrd-color-text-disabled);
        cursor: not-allowed;
      }

      .menu-item__icon {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .menu-item__label {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .menu-item__shortcut {
        font-size: var(--avgrd-font-size-xs);
        color: var(--avgrd-color-text-secondary);
        margin-left: var(--avgrd-spacing-lg);
      }

      .menu-item:hover .menu-item__shortcut,
      .menu-item:focus-visible .menu-item__shortcut {
        color: inherit;
        opacity: 0.8;
      }

      /* Danger variant */
      :host([danger]) .menu-item {
        color: var(--avgrd-color-error);
      }

      :host([danger]) .menu-item:hover:not(:disabled),
      :host([danger]) .menu-item:focus-visible {
        background-color: var(--avgrd-color-error);
        color: var(--avgrd-color-text-on-primary);
      }
    `
];
Os([
  w({ type: String })
], Ve.prototype, "shortcut", 2);
Os([
  w({ type: Boolean, reflect: !0 })
], Ve.prototype, "disabled", 2);
Os([
  w({ type: Boolean, reflect: !0 })
], Ve.prototype, "danger", 2);
Ve = Os([
  H("avgrd-menu-item")
], Ve);
var Ba = Object.getOwnPropertyDescriptor, Ia = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Ba(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = n(s) || s);
  return s;
};
let ri = class extends P {
  render() {
    return E``;
  }
};
ri.styles = [
  R`
      :host {
        display: block;
        height: 1px;
        margin: var(--avgrd-spacing-xs, 4px) 0;
        background-color: var(--avgrd-color-border, #d1d1d1);
      }
    `
];
ri = Ia([
  H("avgrd-menu-divider")
], ri);
function f(o, t, e) {
  return (t = (function(r) {
    var s = (function(i, n) {
      if (typeof i != "object" || !i) return i;
      var a = i[Symbol.toPrimitive];
      if (a !== void 0) {
        var l = a.call(i, n);
        if (typeof l != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(i);
    })(r, "string");
    return typeof s == "symbol" ? s : s + "";
  })(t)) in o ? Object.defineProperty(o, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : o[t] = e, o;
}
function Yi(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    t && (r = r.filter((function(s) {
      return Object.getOwnPropertyDescriptor(o, s).enumerable;
    }))), e.push.apply(e, r);
  }
  return e;
}
function m(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yi(Object(e), !0).forEach((function(r) {
      f(o, r, e[r]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : Yi(Object(e)).forEach((function(r) {
      Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(e, r));
    }));
  }
  return o;
}
function X(o, t) {
  if (o == null) return {};
  var e, r, s = (function(n, a) {
    if (n == null) return {};
    var l = {};
    for (var c in n) if ({}.hasOwnProperty.call(n, c)) {
      if (a.indexOf(c) >= 0) continue;
      l[c] = n[c];
    }
    return l;
  })(o, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    for (r = 0; r < i.length; r++) e = i[r], t.indexOf(e) >= 0 || {}.propertyIsEnumerable.call(o, e) && (s[e] = o[e]);
  }
  return s;
}
function Rt(o, t) {
  return t || (t = o.slice(0)), Object.freeze(Object.defineProperties(o, { raw: { value: Object.freeze(t) } }));
}
class Hi {
  constructor() {
    f(this, "browserShadowBlurConstant", 1), f(this, "DPI", 96), f(this, "devicePixelRatio", typeof window < "u" ? window.devicePixelRatio : 1), f(this, "perfLimitSizeTotal", 2097152), f(this, "maxCacheSideLimit", 4096), f(this, "minCacheSideLimit", 256), f(this, "disableStyleCopyPaste", !1), f(this, "enableGLFiltering", !0), f(this, "textureSize", 4096), f(this, "forceGLPutImageData", !1), f(this, "cachesBoundsOfCurve", !1), f(this, "fontPaths", {}), f(this, "NUM_FRACTION_DIGITS", 4);
  }
}
const j = new class extends Hi {
  constructor(o) {
    super(), this.configure(o);
  }
  configure() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Object.assign(this, o);
  }
  addFonts() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fontPaths = m(m({}, this.fontPaths), o);
  }
  removeFonts() {
    (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).forEach(((o) => {
      delete this.fontPaths[o];
    }));
  }
  clearFonts() {
    this.fontPaths = {};
  }
  restoreDefaults(o) {
    const t = new Hi(), e = (o == null ? void 0 : o.reduce(((r, s) => (r[s] = t[s], r)), {})) || t;
    this.configure(e);
  }
}(), ce = function(o) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
  return console[o]("fabric", ...e);
};
class Ft extends Error {
  constructor(t, e) {
    super("fabric: ".concat(t), e);
  }
}
class Ra extends Ft {
  constructor(t) {
    super("".concat(t, " 'options.signal' is in 'aborted' state"));
  }
}
class za {
}
class Wa extends za {
  testPrecision(t, e) {
    const r = "precision ".concat(e, ` float;
void main(){}`), s = t.createShader(t.FRAGMENT_SHADER);
    return !!s && (t.shaderSource(s, r), t.compileShader(s), !!t.getShaderParameter(s, t.COMPILE_STATUS));
  }
  queryWebGL(t) {
    const e = t.getContext("webgl");
    e && (this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.GLPrecision = ["highp", "mediump", "lowp"].find(((r) => this.testPrecision(e, r))), e.getExtension("WEBGL_lose_context").loseContext(), ce("log", "WebGL: max texture size ".concat(this.maxTextureSize)));
  }
  isSupported(t) {
    return !!this.maxTextureSize && this.maxTextureSize >= t;
  }
}
const $a = {};
let Gi;
const Lt = () => Gi || (Gi = { document, window, isTouchSupported: "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0, WebGLProbe: new Wa(), dispose() {
}, copyPasteData: $a }), Ue = () => Lt().document, Ds = () => Lt().window, Ro = () => {
  var o;
  return Math.max((o = j.devicePixelRatio) !== null && o !== void 0 ? o : Ds().devicePixelRatio, 1);
}, hr = new class {
  constructor() {
    f(this, "boundsOfCurveCache", {}), this.charWidthsCache = /* @__PURE__ */ new Map();
  }
  getFontCache(o) {
    let { fontFamily: t, fontStyle: e, fontWeight: r } = o;
    t = t.toLowerCase();
    const s = this.charWidthsCache;
    s.has(t) || s.set(t, /* @__PURE__ */ new Map());
    const i = s.get(t), n = "".concat(e.toLowerCase(), "_").concat((r + "").toLowerCase());
    return i.has(n) || i.set(n, /* @__PURE__ */ new Map()), i.get(n);
  }
  clearFontCache(o) {
    o ? this.charWidthsCache.delete((o || "").toLowerCase()) : this.charWidthsCache = /* @__PURE__ */ new Map();
  }
  limitDimsByArea(o) {
    const { perfLimitSizeTotal: t } = j, e = Math.sqrt(t * o);
    return [Math.floor(e), Math.floor(t / e)];
  }
}(), si = "6.9.1";
function ts() {
}
const Cr = Math.PI / 2, ls = 2 * Math.PI, yi = Math.PI / 180, at = Object.freeze([1, 0, 0, 1, 0, 0]), xi = 16, se = 0.4477152502, M = "center", B = "left", ct = "top", ii = "bottom", G = "right", ht = "none", _i = /\r?\n/, zo = "moving", Ps = "scaling", Wo = "rotating", wi = "rotate", $o = "skewing", fr = "resizing", Va = "modifyPoly", Xa = "modifyPath", cs = "changed", Es = "scale", ut = "scaleX", bt = "scaleY", Ne = "skewX", qe = "skewY", K = "fill", dt = "stroke", hs = "modified", Oe = "json", Xs = "svg", k = new class {
  constructor() {
    this[Oe] = /* @__PURE__ */ new Map(), this[Xs] = /* @__PURE__ */ new Map();
  }
  has(o) {
    return this[Oe].has(o);
  }
  getClass(o) {
    const t = this[Oe].get(o);
    if (!t) throw new Ft("No class registered for ".concat(o));
    return t;
  }
  setClass(o, t) {
    t ? this[Oe].set(t, o) : (this[Oe].set(o.type, o), this[Oe].set(o.type.toLowerCase(), o));
  }
  getSVGClass(o) {
    return this[Xs].get(o);
  }
  setSVGClass(o, t) {
    this[Xs].set(t ?? o.type.toLowerCase(), o);
  }
}(), ds = new class extends Array {
  remove(o) {
    const t = this.indexOf(o);
    t > -1 && this.splice(t, 1);
  }
  cancelAll() {
    const o = this.splice(0);
    return o.forEach(((t) => t.abort())), o;
  }
  cancelByCanvas(o) {
    if (!o) return [];
    const t = this.filter(((e) => {
      var r;
      return e.target === o || typeof e.target == "object" && ((r = e.target) === null || r === void 0 ? void 0 : r.canvas) === o;
    }));
    return t.forEach(((e) => e.abort())), t;
  }
  cancelByTarget(o) {
    if (!o) return [];
    const t = this.filter(((e) => e.target === o));
    return t.forEach(((e) => e.abort())), t;
  }
}();
class Ya {
  constructor() {
    f(this, "__eventListeners", {});
  }
  on(t, e) {
    if (this.__eventListeners || (this.__eventListeners = {}), typeof t == "object") return Object.entries(t).forEach(((r) => {
      let [s, i] = r;
      this.on(s, i);
    })), () => this.off(t);
    if (e) {
      const r = t;
      return this.__eventListeners[r] || (this.__eventListeners[r] = []), this.__eventListeners[r].push(e), () => this.off(r, e);
    }
    return () => !1;
  }
  once(t, e) {
    if (typeof t == "object") {
      const r = [];
      return Object.entries(t).forEach(((s) => {
        let [i, n] = s;
        r.push(this.once(i, n));
      })), () => r.forEach(((s) => s()));
    }
    if (e) {
      const r = this.on(t, (function() {
        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
        e.call(this, ...i), r();
      }));
      return r;
    }
    return () => !1;
  }
  _removeEventListener(t, e) {
    if (this.__eventListeners[t]) if (e) {
      const r = this.__eventListeners[t], s = r.indexOf(e);
      s > -1 && r.splice(s, 1);
    } else this.__eventListeners[t] = [];
  }
  off(t, e) {
    if (this.__eventListeners) if (t === void 0) for (const r in this.__eventListeners) this._removeEventListener(r);
    else typeof t == "object" ? Object.entries(t).forEach(((r) => {
      let [s, i] = r;
      this._removeEventListener(s, i);
    })) : this._removeEventListener(t, e);
  }
  fire(t, e) {
    var r;
    if (!this.__eventListeners) return;
    const s = (r = this.__eventListeners[t]) === null || r === void 0 ? void 0 : r.concat();
    if (s) for (let i = 0; i < s.length; i++) s[i].call(this, e || {});
  }
}
const Pe = (o, t) => {
  const e = o.indexOf(t);
  return e !== -1 && o.splice(e, 1), o;
}, Ut = (o) => {
  if (o === 0) return 1;
  switch (Math.abs(o) / Cr) {
    case 1:
    case 3:
      return 0;
    case 2:
      return -1;
  }
  return Math.cos(o);
}, Nt = (o) => {
  if (o === 0) return 0;
  const t = o / Cr, e = Math.sign(o);
  switch (t) {
    case 1:
      return e;
    case 2:
      return 0;
    case 3:
      return -e;
  }
  return Math.sin(o);
};
class b {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    typeof t == "object" ? (this.x = t.x, this.y = t.y) : (this.x = t, this.y = e);
  }
  add(t) {
    return new b(this.x + t.x, this.y + t.y);
  }
  addEquals(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  scalarAdd(t) {
    return new b(this.x + t, this.y + t);
  }
  scalarAddEquals(t) {
    return this.x += t, this.y += t, this;
  }
  subtract(t) {
    return new b(this.x - t.x, this.y - t.y);
  }
  subtractEquals(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  scalarSubtract(t) {
    return new b(this.x - t, this.y - t);
  }
  scalarSubtractEquals(t) {
    return this.x -= t, this.y -= t, this;
  }
  multiply(t) {
    return new b(this.x * t.x, this.y * t.y);
  }
  scalarMultiply(t) {
    return new b(this.x * t, this.y * t);
  }
  scalarMultiplyEquals(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return new b(this.x / t.x, this.y / t.y);
  }
  scalarDivide(t) {
    return new b(this.x / t, this.y / t);
  }
  scalarDivideEquals(t) {
    return this.x /= t, this.y /= t, this;
  }
  eq(t) {
    return this.x === t.x && this.y === t.y;
  }
  lt(t) {
    return this.x < t.x && this.y < t.y;
  }
  lte(t) {
    return this.x <= t.x && this.y <= t.y;
  }
  gt(t) {
    return this.x > t.x && this.y > t.y;
  }
  gte(t) {
    return this.x >= t.x && this.y >= t.y;
  }
  lerp(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.5;
    return e = Math.max(Math.min(1, e), 0), new b(this.x + (t.x - this.x) * e, this.y + (t.y - this.y) * e);
  }
  distanceFrom(t) {
    const e = this.x - t.x, r = this.y - t.y;
    return Math.sqrt(e * e + r * r);
  }
  midPointFrom(t) {
    return this.lerp(t);
  }
  min(t) {
    return new b(Math.min(this.x, t.x), Math.min(this.y, t.y));
  }
  max(t) {
    return new b(Math.max(this.x, t.x), Math.max(this.y, t.y));
  }
  toString() {
    return "".concat(this.x, ",").concat(this.y);
  }
  setXY(t, e) {
    return this.x = t, this.y = e, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setFromPoint(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  swap(t) {
    const e = this.x, r = this.y;
    this.x = t.x, this.y = t.y, t.x = e, t.y = r;
  }
  clone() {
    return new b(this.x, this.y);
  }
  rotate(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ci;
    const r = Nt(t), s = Ut(t), i = this.subtract(e);
    return new b(i.x * s - i.y * r, i.x * r + i.y * s).add(e);
  }
  transform(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    return new b(t[0] * this.x + t[2] * this.y + (e ? 0 : t[4]), t[1] * this.x + t[3] * this.y + (e ? 0 : t[5]));
  }
}
const Ci = new b(0, 0), es = (o) => !!o && Array.isArray(o._objects);
function Vo(o) {
  class t extends o {
    constructor() {
      super(...arguments), f(this, "_objects", []);
    }
    _onObjectAdded(r) {
    }
    _onObjectRemoved(r) {
    }
    _onStackOrderChanged(r) {
    }
    add() {
      for (var r = arguments.length, s = new Array(r), i = 0; i < r; i++) s[i] = arguments[i];
      const n = this._objects.push(...s);
      return s.forEach(((a) => this._onObjectAdded(a))), n;
    }
    insertAt(r) {
      for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) i[n - 1] = arguments[n];
      return this._objects.splice(r, 0, ...i), i.forEach(((a) => this._onObjectAdded(a))), this._objects.length;
    }
    remove() {
      const r = this._objects, s = [];
      for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
      return n.forEach(((l) => {
        const c = r.indexOf(l);
        c !== -1 && (r.splice(c, 1), s.push(l), this._onObjectRemoved(l));
      })), s;
    }
    forEachObject(r) {
      this.getObjects().forEach(((s, i, n) => r(s, i, n)));
    }
    getObjects() {
      for (var r = arguments.length, s = new Array(r), i = 0; i < r; i++) s[i] = arguments[i];
      return s.length === 0 ? [...this._objects] : this._objects.filter(((n) => n.isType(...s)));
    }
    item(r) {
      return this._objects[r];
    }
    isEmpty() {
      return this._objects.length === 0;
    }
    size() {
      return this._objects.length;
    }
    contains(r, s) {
      return !!this._objects.includes(r) || !!s && this._objects.some(((i) => i instanceof t && i.contains(r, !0)));
    }
    complexity() {
      return this._objects.reduce(((r, s) => r += s.complexity ? s.complexity() : 0), 0);
    }
    sendObjectToBack(r) {
      return !(!r || r === this._objects[0]) && (Pe(this._objects, r), this._objects.unshift(r), this._onStackOrderChanged(r), !0);
    }
    bringObjectToFront(r) {
      return !(!r || r === this._objects[this._objects.length - 1]) && (Pe(this._objects, r), this._objects.push(r), this._onStackOrderChanged(r), !0);
    }
    sendObjectBackwards(r, s) {
      if (!r) return !1;
      const i = this._objects.indexOf(r);
      if (i !== 0) {
        const n = this.findNewLowerIndex(r, i, s);
        return Pe(this._objects, r), this._objects.splice(n, 0, r), this._onStackOrderChanged(r), !0;
      }
      return !1;
    }
    bringObjectForward(r, s) {
      if (!r) return !1;
      const i = this._objects.indexOf(r);
      if (i !== this._objects.length - 1) {
        const n = this.findNewUpperIndex(r, i, s);
        return Pe(this._objects, r), this._objects.splice(n, 0, r), this._onStackOrderChanged(r), !0;
      }
      return !1;
    }
    moveObjectTo(r, s) {
      return r !== this._objects[s] && (Pe(this._objects, r), this._objects.splice(s, 0, r), this._onStackOrderChanged(r), !0);
    }
    findNewLowerIndex(r, s, i) {
      let n;
      if (i) {
        n = s;
        for (let a = s - 1; a >= 0; --a) if (r.isOverlapping(this._objects[a])) {
          n = a;
          break;
        }
      } else n = s - 1;
      return n;
    }
    findNewUpperIndex(r, s, i) {
      let n;
      if (i) {
        n = s;
        for (let a = s + 1; a < this._objects.length; ++a) if (r.isOverlapping(this._objects[a])) {
          n = a;
          break;
        }
      } else n = s + 1;
      return n;
    }
    collectObjects(r) {
      let { left: s, top: i, width: n, height: a } = r, { includeIntersecting: l = !0 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const c = [], h = new b(s, i), d = h.add(new b(n, a));
      for (let u = this._objects.length - 1; u >= 0; u--) {
        const g = this._objects[u];
        g.selectable && g.visible && (l && g.intersectsWithRect(h, d) || g.isContainedWithinRect(h, d) || l && g.containsPoint(h) || l && g.containsPoint(d)) && c.push(g);
      }
      return c;
    }
  }
  return t;
}
class Xo extends Ya {
  _setOptions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    for (const e in t) this.set(e, t[e]);
  }
  _setObject(t) {
    for (const e in t) this._set(e, t[e]);
  }
  set(t, e) {
    return typeof t == "object" ? this._setObject(t) : this._set(t, e), this;
  }
  _set(t, e) {
    this[t] = e;
  }
  toggle(t) {
    const e = this.get(t);
    return typeof e == "boolean" && this.set(t, !e), this;
  }
  get(t) {
    return this[t];
  }
}
function rs(o) {
  return Ds().requestAnimationFrame(o);
}
function Ha(o) {
  return Ds().cancelAnimationFrame(o);
}
let Ga = 0;
const he = () => Ga++, qt = () => {
  const o = Ue().createElement("canvas");
  if (!o || o.getContext === void 0) throw new Ft("Failed to create `canvas` element");
  return o;
}, Ua = () => Ue().createElement("img"), yt = (o) => {
  const t = qt();
  return t.width = o.width, t.height = o.height, t;
}, Yo = (o, t, e) => o.toDataURL("image/".concat(t), e), Ho = (o, t, e) => new Promise(((r, s) => {
  o.toBlob(r, "image/".concat(t), e);
})), U = (o) => o * yi, Kt = (o) => o / yi, Na = (o) => o.every(((t, e) => t === at[e])), lt = (o, t, e) => new b(o).transform(t, e), Tt = (o) => {
  const t = 1 / (o[0] * o[3] - o[1] * o[2]), e = [t * o[3], -t * o[1], -t * o[2], t * o[0], 0, 0], { x: r, y: s } = new b(o[4], o[5]).transform(e, !0);
  return e[4] = -r, e[5] = -s, e;
}, st = (o, t, e) => [o[0] * t[0] + o[2] * t[1], o[1] * t[0] + o[3] * t[1], o[0] * t[2] + o[2] * t[3], o[1] * t[2] + o[3] * t[3], e ? 0 : o[0] * t[4] + o[2] * t[5] + o[4], e ? 0 : o[1] * t[4] + o[3] * t[5] + o[5]], Si = (o, t) => o.reduceRight(((e, r) => r && e ? st(r, e, t) : r || e), void 0) || at.concat(), Go = (o) => {
  let [t, e] = o;
  return Math.atan2(e, t);
}, us = (o) => {
  const t = Go(o), e = Math.pow(o[0], 2) + Math.pow(o[1], 2), r = Math.sqrt(e), s = (o[0] * o[3] - o[2] * o[1]) / r, i = Math.atan2(o[0] * o[2] + o[1] * o[3], e);
  return { angle: Kt(t), scaleX: r, scaleY: s, skewX: Kt(i), skewY: 0, translateX: o[4] || 0, translateY: o[5] || 0 };
}, Sr = function(o) {
  return [1, 0, 0, 1, o, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0];
};
function Ke() {
  let { angle: o = 0 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { x: t = 0, y: e = 0 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const r = U(o), s = Ut(r), i = Nt(r);
  return [s, i, -i, s, t ? t - (s * t - i * e) : 0, e ? e - (i * t + s * e) : 0];
}
const Ti = function(o) {
  return [o, 0, 0, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, 0, 0];
}, Uo = (o) => Math.tan(U(o)), No = (o) => [1, 0, Uo(o), 1, 0, 0], qo = (o) => [1, Uo(o), 0, 1, 0, 0], Ms = (o) => {
  let { scaleX: t = 1, scaleY: e = 1, flipX: r = !1, flipY: s = !1, skewX: i = 0, skewY: n = 0 } = o, a = Ti(r ? -t : t, s ? -e : e);
  return i && (a = st(a, No(i), !0)), n && (a = st(a, qo(n), !0)), a;
}, qa = (o) => {
  const { translateX: t = 0, translateY: e = 0, angle: r = 0 } = o;
  let s = Sr(t, e);
  r && (s = st(s, Ke({ angle: r })));
  const i = Ms(o);
  return Na(i) || (s = st(s, i)), s;
}, ss = function(o) {
  let { signal: t, crossOrigin: e = null } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new Promise((function(r, s) {
    if (t && t.aborted) return s(new Ra("loadImage"));
    const i = Ua();
    let n;
    t && (n = function(l) {
      i.src = "", s(l);
    }, t.addEventListener("abort", n, { once: !0 }));
    const a = function() {
      i.onload = i.onerror = null, n && (t == null || t.removeEventListener("abort", n)), r(i);
    };
    o ? (i.onload = a, i.onerror = function() {
      n && (t == null || t.removeEventListener("abort", n)), s(new Ft("Error loading ".concat(i.src)));
    }, e && (i.crossOrigin = e), i.src = o) : a();
  }));
}, mr = function(o) {
  let { signal: t, reviver: e = ts } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new Promise(((r, s) => {
    const i = [];
    t && t.addEventListener("abort", s, { once: !0 }), Promise.all(o.map(((n) => k.getClass(n.type).fromObject(n, { signal: t }).then(((a) => (e(n, a), i.push(a), a)))))).then(r).catch(((n) => {
      i.forEach(((a) => {
        a.dispose && a.dispose();
      })), s(n);
    })).finally((() => {
      t && t.removeEventListener("abort", s);
    }));
  }));
}, As = function(o) {
  let { signal: t } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return new Promise(((e, r) => {
    const s = [];
    t && t.addEventListener("abort", r, { once: !0 });
    const i = Object.values(o).map(((a) => a && a.type && k.has(a.type) ? mr([a], { signal: t }).then(((l) => {
      let [c] = l;
      return s.push(c), c;
    })) : a)), n = Object.keys(o);
    Promise.all(i).then(((a) => a.reduce(((l, c, h) => (l[n[h]] = c, l)), {}))).then(e).catch(((a) => {
      s.forEach(((l) => {
        l.dispose && l.dispose();
      })), r(a);
    })).finally((() => {
      t && t.removeEventListener("abort", r);
    }));
  }));
}, Je = function(o) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []).reduce(((t, e) => (e in o && (t[e] = o[e]), t)), {});
}, ki = (o, t) => Object.keys(o).reduce(((e, r) => (t(o[r], r, o) && (e[r] = o[r]), e)), {}), V = (o, t) => parseFloat(Number(o).toFixed(t)), vr = (o) => "matrix(" + o.map(((t) => V(t, j.NUM_FRACTION_DIGITS))).join(" ") + ")", vt = (o) => !!o && o.toLive !== void 0, Ui = (o) => !!o && typeof o.toObject == "function", Ni = (o) => !!o && o.offsetX !== void 0 && "source" in o, ve = (o) => !!o && "multiSelectionStacking" in o;
function Ko(o) {
  const t = o && St(o);
  let e = 0, r = 0;
  if (!o || !t) return { left: e, top: r };
  let s = o;
  const i = t.documentElement, n = t.body || { scrollLeft: 0, scrollTop: 0 };
  for (; s && (s.parentNode || s.host) && (s = s.parentNode || s.host, s === t ? (e = n.scrollLeft || i.scrollLeft || 0, r = n.scrollTop || i.scrollTop || 0) : (e += s.scrollLeft || 0, r += s.scrollTop || 0), s.nodeType !== 1 || s.style.position !== "fixed"); ) ;
  return { left: e, top: r };
}
const St = (o) => o.ownerDocument || null, Jo = (o) => {
  var t;
  return ((t = o.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView) || null;
}, Zo = function(o, t, e) {
  let { width: r, height: s } = e, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  o.width = r, o.height = s, i > 1 && (o.setAttribute("width", (r * i).toString()), o.setAttribute("height", (s * i).toString()), t.scale(i, i));
}, oi = (o, t) => {
  let { width: e, height: r } = t;
  e && (o.style.width = typeof e == "number" ? "".concat(e, "px") : e), r && (o.style.height = typeof r == "number" ? "".concat(r, "px") : r);
};
function qi(o) {
  return o.onselectstart !== void 0 && (o.onselectstart = () => !1), o.style.userSelect = ht, o;
}
class Qo {
  constructor(t) {
    f(this, "_originalCanvasStyle", void 0), f(this, "lower", void 0);
    const e = this.createLowerCanvas(t);
    this.lower = { el: e, ctx: e.getContext("2d") };
  }
  createLowerCanvas(t) {
    const e = (r = t) && r.getContext !== void 0 ? t : t && Ue().getElementById(t) || qt();
    var r;
    if (e.hasAttribute("data-fabric")) throw new Ft("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
    return this._originalCanvasStyle = e.style.cssText, e.setAttribute("data-fabric", "main"), e.classList.add("lower-canvas"), e;
  }
  cleanupDOM(t) {
    let { width: e, height: r } = t;
    const { el: s } = this.lower;
    s.classList.remove("lower-canvas"), s.removeAttribute("data-fabric"), s.setAttribute("width", "".concat(e)), s.setAttribute("height", "".concat(r)), s.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0;
  }
  setDimensions(t, e) {
    const { el: r, ctx: s } = this.lower;
    Zo(r, s, t, e);
  }
  setCSSDimensions(t) {
    oi(this.lower.el, t);
  }
  calcOffset() {
    return (function(t) {
      var e;
      const r = t && St(t), s = { left: 0, top: 0 };
      if (!r) return s;
      const i = ((e = Jo(t)) === null || e === void 0 ? void 0 : e.getComputedStyle(t, null)) || {};
      s.left += parseInt(i.borderLeftWidth, 10) || 0, s.top += parseInt(i.borderTopWidth, 10) || 0, s.left += parseInt(i.paddingLeft, 10) || 0, s.top += parseInt(i.paddingTop, 10) || 0;
      let n = { left: 0, top: 0 };
      const a = r.documentElement;
      t.getBoundingClientRect !== void 0 && (n = t.getBoundingClientRect());
      const l = Ko(t);
      return { left: n.left + l.left - (a.clientLeft || 0) + s.left, top: n.top + l.top - (a.clientTop || 0) + s.top };
    })(this.lower.el);
  }
  dispose() {
    Lt().dispose(this.lower.el), delete this.lower;
  }
}
const Ka = { backgroundVpt: !0, backgroundColor: "", overlayVpt: !0, overlayColor: "", includeDefaultValues: !0, svgViewportTransformation: !0, renderOnAddRemove: !0, skipOffscreen: !0, enableRetinaScaling: !0, imageSmoothingEnabled: !0, controlsAboveOverlay: !1, allowTouchScrolling: !1, viewportTransform: [...at] }, Ja = ["objects"];
class Tr extends Vo(Xo) {
  get lowerCanvasEl() {
    var t;
    return (t = this.elements.lower) === null || t === void 0 ? void 0 : t.el;
  }
  get contextContainer() {
    var t;
    return (t = this.elements.lower) === null || t === void 0 ? void 0 : t.ctx;
  }
  static getDefaults() {
    return Tr.ownDefaults;
  }
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Object.assign(this, this.constructor.getDefaults()), this.set(e), this.initElements(t), this._setDimensionsImpl({ width: this.width || this.elements.lower.el.width || 0, height: this.height || this.elements.lower.el.height || 0 }), this.skipControlsDrawing = !1, this.viewportTransform = [...this.viewportTransform], this.calcViewportBoundaries();
  }
  initElements(t) {
    this.elements = new Qo(t);
  }
  add() {
    const t = super.add(...arguments);
    return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t;
  }
  insertAt(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) r[s - 1] = arguments[s];
    const i = super.insertAt(t, ...r);
    return r.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), i;
  }
  remove() {
    const t = super.remove(...arguments);
    return t.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t;
  }
  _onObjectAdded(t) {
    t.canvas && t.canvas !== this && (ce("warn", `Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`), t.canvas.remove(t)), t._set("canvas", this), t.setCoords(), this.fire("object:added", { target: t }), t.fire("added", { target: this });
  }
  _onObjectRemoved(t) {
    t._set("canvas", void 0), this.fire("object:removed", { target: t }), t.fire("removed", { target: this });
  }
  _onStackOrderChanged() {
    this.renderOnAddRemove && this.requestRenderAll();
  }
  getRetinaScaling() {
    return this.enableRetinaScaling ? Ro() : 1;
  }
  calcOffset() {
    return this._offset = this.elements.calcOffset();
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setWidth(t, e) {
    return this.setDimensions({ width: t }, e);
  }
  setHeight(t, e) {
    return this.setDimensions({ height: t }, e);
  }
  _setDimensionsImpl(t) {
    let { cssOnly: e = !1, backstoreOnly: r = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!e) {
      const s = m({ width: this.width, height: this.height }, t);
      this.elements.setDimensions(s, this.getRetinaScaling()), this.hasLostContext = !0, this.width = s.width, this.height = s.height;
    }
    r || this.elements.setCSSDimensions(t), this.calcOffset();
  }
  setDimensions(t, e) {
    this._setDimensionsImpl(t, e), e && e.cssOnly || this.requestRenderAll();
  }
  getZoom() {
    return this.viewportTransform[0];
  }
  setViewportTransform(t) {
    this.viewportTransform = t, this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll();
  }
  zoomToPoint(t, e) {
    const r = t, s = [...this.viewportTransform], i = lt(t, Tt(s));
    s[0] = e, s[3] = e;
    const n = lt(i, s);
    s[4] += r.x - n.x, s[5] += r.y - n.y, this.setViewportTransform(s);
  }
  setZoom(t) {
    this.zoomToPoint(new b(0, 0), t);
  }
  absolutePan(t) {
    const e = [...this.viewportTransform];
    return e[4] = -t.x, e[5] = -t.y, this.setViewportTransform(e);
  }
  relativePan(t) {
    return this.absolutePan(new b(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]));
  }
  getElement() {
    return this.elements.lower.el;
  }
  clearContext(t) {
    t.clearRect(0, 0, this.width, this.height);
  }
  getContext() {
    return this.elements.lower.ctx;
  }
  clear() {
    this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll();
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects);
  }
  renderAndReset() {
    this.nextRenderHandle = 0, this.renderAll();
  }
  requestRenderAll() {
    this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = rs((() => this.renderAndReset())));
  }
  calcViewportBoundaries() {
    const t = this.width, e = this.height, r = Tt(this.viewportTransform), s = lt({ x: 0, y: 0 }, r), i = lt({ x: t, y: e }, r), n = s.min(i), a = s.max(i);
    return this.vptCoords = { tl: n, tr: new b(a.x, n.y), bl: new b(n.x, a.y), br: a };
  }
  cancelRequestedRender() {
    this.nextRenderHandle && (Ha(this.nextRenderHandle), this.nextRenderHandle = 0);
  }
  drawControls(t) {
  }
  renderCanvas(t, e) {
    if (this.destroyed) return;
    const r = this.viewportTransform, s = this.clipPath;
    this.calcViewportBoundaries(), this.clearContext(t), t.imageSmoothingEnabled = this.imageSmoothingEnabled, t.patternQuality = "best", this.fire("before:render", { ctx: t }), this._renderBackground(t), t.save(), t.transform(r[0], r[1], r[2], r[3], r[4], r[5]), this._renderObjects(t, e), t.restore(), this.controlsAboveOverlay || this.skipControlsDrawing || this.drawControls(t), s && (s._set("canvas", this), s.shouldCache(), s._transformDone = !0, s.renderCache({ forClipping: !0 }), this.drawClipPathOnCanvas(t, s)), this._renderOverlay(t), this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t), this.fire("after:render", { ctx: t }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0);
  }
  drawClipPathOnCanvas(t, e) {
    const r = this.viewportTransform;
    t.save(), t.transform(...r), t.globalCompositeOperation = "destination-in", e.transform(t), t.scale(1 / e.zoomX, 1 / e.zoomY), t.drawImage(e._cacheCanvas, -e.cacheTranslationX, -e.cacheTranslationY), t.restore();
  }
  _renderObjects(t, e) {
    for (let r = 0, s = e.length; r < s; ++r) e[r] && e[r].render(t);
  }
  _renderBackgroundOrOverlay(t, e) {
    const r = this["".concat(e, "Color")], s = this["".concat(e, "Image")], i = this.viewportTransform, n = this["".concat(e, "Vpt")];
    if (!r && !s) return;
    const a = vt(r);
    if (r) {
      if (t.save(), t.beginPath(), t.moveTo(0, 0), t.lineTo(this.width, 0), t.lineTo(this.width, this.height), t.lineTo(0, this.height), t.closePath(), t.fillStyle = a ? r.toLive(t) : r, n && t.transform(...i), a) {
        t.transform(1, 0, 0, 1, r.offsetX || 0, r.offsetY || 0);
        const l = r.gradientTransform || r.patternTransform;
        l && t.transform(...l);
      }
      t.fill(), t.restore();
    }
    if (s) {
      t.save();
      const { skipOffscreen: l } = this;
      this.skipOffscreen = n, n && t.transform(...i), s.render(t), this.skipOffscreen = l, t.restore();
    }
  }
  _renderBackground(t) {
    this._renderBackgroundOrOverlay(t, "background");
  }
  _renderOverlay(t) {
    this._renderBackgroundOrOverlay(t, "overlay");
  }
  getCenter() {
    return { top: this.height / 2, left: this.width / 2 };
  }
  getCenterPoint() {
    return new b(this.width / 2, this.height / 2);
  }
  centerObjectH(t) {
    return this._centerObject(t, new b(this.getCenterPoint().x, t.getCenterPoint().y));
  }
  centerObjectV(t) {
    return this._centerObject(t, new b(t.getCenterPoint().x, this.getCenterPoint().y));
  }
  centerObject(t) {
    return this._centerObject(t, this.getCenterPoint());
  }
  viewportCenterObject(t) {
    return this._centerObject(t, this.getVpCenter());
  }
  viewportCenterObjectH(t) {
    return this._centerObject(t, new b(this.getVpCenter().x, t.getCenterPoint().y));
  }
  viewportCenterObjectV(t) {
    return this._centerObject(t, new b(t.getCenterPoint().x, this.getVpCenter().y));
  }
  getVpCenter() {
    return lt(this.getCenterPoint(), Tt(this.viewportTransform));
  }
  _centerObject(t, e) {
    t.setXY(e, M, M), t.setCoords(), this.renderOnAddRemove && this.requestRenderAll();
  }
  toDatalessJSON(t) {
    return this.toDatalessObject(t);
  }
  toObject(t) {
    return this._toObjectMethod("toObject", t);
  }
  toJSON() {
    return this.toObject();
  }
  toDatalessObject(t) {
    return this._toObjectMethod("toDatalessObject", t);
  }
  _toObjectMethod(t, e) {
    const r = this.clipPath, s = r && !r.excludeFromExport ? this._toObject(r, t, e) : null;
    return m(m(m({ version: si }, Je(this, e)), {}, { objects: this._objects.filter(((i) => !i.excludeFromExport)).map(((i) => this._toObject(i, t, e))) }, this.__serializeBgOverlay(t, e)), s ? { clipPath: s } : null);
  }
  _toObject(t, e, r) {
    let s;
    this.includeDefaultValues || (s = t.includeDefaultValues, t.includeDefaultValues = !1);
    const i = t[e](r);
    return this.includeDefaultValues || (t.includeDefaultValues = !!s), i;
  }
  __serializeBgOverlay(t, e) {
    const r = {}, s = this.backgroundImage, i = this.overlayImage, n = this.backgroundColor, a = this.overlayColor;
    return vt(n) ? n.excludeFromExport || (r.background = n.toObject(e)) : n && (r.background = n), vt(a) ? a.excludeFromExport || (r.overlay = a.toObject(e)) : a && (r.overlay = a), s && !s.excludeFromExport && (r.backgroundImage = this._toObject(s, t, e)), i && !i.excludeFromExport && (r.overlayImage = this._toObject(i, t, e)), r;
  }
  toSVG() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
    t.reviver = e;
    const r = [];
    return this._setSVGPreamble(r, t), this._setSVGHeader(r, t), this.clipPath && r.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId, `)" >
`)), this._setSVGBgOverlayColor(r, "background"), this._setSVGBgOverlayImage(r, "backgroundImage", e), this._setSVGObjects(r, e), this.clipPath && r.push(`</g>
`), this._setSVGBgOverlayColor(r, "overlay"), this._setSVGBgOverlayImage(r, "overlayImage", e), r.push("</svg>"), r.join("");
  }
  _setSVGPreamble(t, e) {
    e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", `" standalone="no" ?>
`, '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', `"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`);
  }
  _setSVGHeader(t, e) {
    const r = e.width || "".concat(this.width), s = e.height || "".concat(this.height), i = j.NUM_FRACTION_DIGITS, n = e.viewBox;
    let a;
    if (n) a = 'viewBox="'.concat(n.x, " ").concat(n.y, " ").concat(n.width, " ").concat(n.height, '" ');
    else if (this.svgViewportTransformation) {
      const l = this.viewportTransform;
      a = 'viewBox="'.concat(V(-l[4] / l[0], i), " ").concat(V(-l[5] / l[3], i), " ").concat(V(this.width / l[0], i), " ").concat(V(this.height / l[3], i), '" ');
    } else a = 'viewBox="0 0 '.concat(this.width, " ").concat(this.height, '" ');
    t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', r, '" ', 'height="', s, '" ', a, `xml:space="preserve">
`, "<desc>Created with Fabric.js ", si, `</desc>
`, `<defs>
`, this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e), `</defs>
`);
  }
  createSVGClipPathMarkup(t) {
    const e = this.clipPath;
    return e ? (e.clipPathId = "CLIPPATH_".concat(he()), '<clipPath id="'.concat(e.clipPathId, `" >
`).concat(e.toClipPathSVG(t.reviver), `</clipPath>
`)) : "";
  }
  createSVGRefElementsMarkup() {
    return ["background", "overlay"].map(((t) => {
      const e = this["".concat(t, "Color")];
      if (vt(e)) {
        const r = this["".concat(t, "Vpt")], s = this.viewportTransform, i = { isType: () => !1, width: this.width / (r ? s[0] : 1), height: this.height / (r ? s[3] : 1) };
        return e.toSVG(i, { additionalTransform: r ? vr(s) : "" });
      }
    })).join("");
  }
  createSVGFontFacesMarkup() {
    const t = [], e = {}, r = j.fontPaths;
    this._objects.forEach((function i(n) {
      t.push(n), es(n) && n._objects.forEach(i);
    })), t.forEach(((i) => {
      if (!(n = i) || typeof n._renderText != "function") return;
      var n;
      const { styles: a, fontFamily: l } = i;
      !e[l] && r[l] && (e[l] = !0, a && Object.values(a).forEach(((c) => {
        Object.values(c).forEach(((h) => {
          let { fontFamily: d = "" } = h;
          !e[d] && r[d] && (e[d] = !0);
        }));
      })));
    }));
    const s = Object.keys(e).map(((i) => `		@font-face {
			font-family: '`.concat(i, `';
			src: url('`).concat(r[i], `');
		}
`))).join("");
    return s ? `	<style type="text/css"><![CDATA[
`.concat(s, `]]></style>
`) : "";
  }
  _setSVGObjects(t, e) {
    this.forEachObject(((r) => {
      r.excludeFromExport || this._setSVGObject(t, r, e);
    }));
  }
  _setSVGObject(t, e, r) {
    t.push(e.toSVG(r));
  }
  _setSVGBgOverlayImage(t, e, r) {
    const s = this[e];
    s && !s.excludeFromExport && s.toSVG && t.push(s.toSVG(r));
  }
  _setSVGBgOverlayColor(t, e) {
    const r = this["".concat(e, "Color")];
    if (r) if (vt(r)) {
      const s = r.repeat || "", i = this.width, n = this.height, a = this["".concat(e, "Vpt")] ? vr(Tt(this.viewportTransform)) : "";
      t.push('<rect transform="'.concat(a, " translate(").concat(i / 2, ",").concat(n / 2, ')" x="').concat(r.offsetX - i / 2, '" y="').concat(r.offsetY - n / 2, '" width="').concat(s !== "repeat-y" && s !== "no-repeat" || !Ni(r) ? i : r.source.width, '" height="').concat(s !== "repeat-x" && s !== "no-repeat" || !Ni(r) ? n : r.source.height, '" fill="url(#SVGID_').concat(r.id, `)"></rect>
`));
    } else t.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', r, '"', `></rect>
`);
  }
  loadFromJSON(t, e) {
    let { signal: r } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t) return Promise.reject(new Ft("`json` is undefined"));
    const s = typeof t == "string" ? JSON.parse(t) : t, { objects: i = [] } = s, n = X(s, Ja), { backgroundImage: a, background: l, overlayImage: c, overlay: h, clipPath: d } = n, u = this.renderOnAddRemove;
    return this.renderOnAddRemove = !1, Promise.all([mr(i, { reviver: e, signal: r }), As({ backgroundImage: a, backgroundColor: l, overlayImage: c, overlayColor: h, clipPath: d }, { signal: r })]).then(((g) => {
      let [p, v] = g;
      return this.clear(), this.add(...p), this.set(n), this.set(v), this.renderOnAddRemove = u, this;
    }));
  }
  clone(t) {
    const e = this.toObject(t);
    return this.cloneWithoutData().loadFromJSON(e);
  }
  cloneWithoutData() {
    const t = yt(this);
    return new this.constructor(t);
  }
  toDataURL() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { format: e = "png", quality: r = 1, multiplier: s = 1, enableRetinaScaling: i = !1 } = t, n = s * (i ? this.getRetinaScaling() : 1);
    return Yo(this.toCanvasElement(n, t), e, r);
  }
  toBlob() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { format: e = "png", quality: r = 1, multiplier: s = 1, enableRetinaScaling: i = !1 } = t, n = s * (i ? this.getRetinaScaling() : 1);
    return Ho(this.toCanvasElement(n, t), e, r);
  }
  toCanvasElement() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, { width: e, height: r, left: s, top: i, filter: n } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (e || this.width) * t, l = (r || this.height) * t, c = this.getZoom(), h = this.width, d = this.height, u = this.skipControlsDrawing, g = c * t, p = this.viewportTransform, v = [g, 0, 0, g, (p[4] - (s || 0)) * t, (p[5] - (i || 0)) * t], y = this.enableRetinaScaling, x = yt({ width: a, height: l }), _ = n ? this._objects.filter(((S) => n(S))) : this._objects;
    return this.enableRetinaScaling = !1, this.viewportTransform = v, this.width = a, this.height = l, this.skipControlsDrawing = !0, this.calcViewportBoundaries(), this.renderCanvas(x.getContext("2d"), _), this.viewportTransform = p, this.width = h, this.height = d, this.calcViewportBoundaries(), this.enableRetinaScaling = y, this.skipControlsDrawing = u, x;
  }
  dispose() {
    return !this.disposed && this.elements.cleanupDOM({ width: this.width, height: this.height }), ds.cancelByCanvas(this), this.disposed = !0, new Promise(((t, e) => {
      const r = () => {
        this.destroy(), t(!0);
      };
      r.kill = e, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? t(!1) : this.nextRenderHandle ? this.__cleanupTask = r : r();
    }));
  }
  destroy() {
    this.destroyed = !0, this.cancelRequestedRender(), this.forEachObject(((t) => t.dispose())), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose();
  }
  toString() {
    return "#<Canvas (".concat(this.complexity(), "): { objects: ").concat(this._objects.length, " }>");
  }
}
f(Tr, "ownDefaults", Ka);
const Za = ["touchstart", "touchmove", "touchend"], Qa = (o) => {
  const t = Ko(o.target), e = (function(r) {
    const s = r.changedTouches;
    return s && s[0] ? s[0] : r;
  })(o);
  return new b(e.clientX + t.left, e.clientY + t.top);
}, ni = (o) => Za.includes(o.type) || o.pointerType === "touch", Ki = (o) => {
  o.preventDefault(), o.stopPropagation();
}, Ht = (o) => {
  let t = 0, e = 0, r = 0, s = 0;
  for (let i = 0, n = o.length; i < n; i++) {
    const { x: a, y: l } = o[i];
    (a > r || !i) && (r = a), (a < t || !i) && (t = a), (l > s || !i) && (s = l), (l < e || !i) && (e = l);
  }
  return { left: t, top: e, width: r - t, height: s - e };
}, tl = ["translateX", "translateY", "scaleX", "scaleY"], el = (o, t) => gs(o, st(t, o.calcOwnMatrix())), gs = (o, t) => {
  const e = us(t), { translateX: r, translateY: s, scaleX: i, scaleY: n } = e, a = X(e, tl), l = new b(r, s);
  o.flipX = !1, o.flipY = !1, Object.assign(o, a), o.set({ scaleX: i, scaleY: n }), o.setPositionByOrigin(l, M, M);
}, rl = (o) => {
  o.scaleX = 1, o.scaleY = 1, o.skewX = 0, o.skewY = 0, o.flipX = !1, o.flipY = !1, o.rotate(0);
}, tn = (o) => ({ scaleX: o.scaleX, scaleY: o.scaleY, skewX: o.skewX, skewY: o.skewY, angle: o.angle, left: o.left, flipX: o.flipX, flipY: o.flipY, top: o.top }), Oi = (o, t, e) => {
  const r = o / 2, s = t / 2, i = [new b(-r, -s), new b(r, -s), new b(-r, s), new b(r, s)].map(((a) => a.transform(e))), n = Ht(i);
  return new b(n.width, n.height);
}, js = function() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : at;
  return st(Tt(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : at), o);
}, Fe = function(o) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : at, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : at;
  return o.transform(js(t, e));
}, sl = function(o) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : at, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : at;
  return o.transform(js(t, e), !0);
}, il = (o, t, e) => {
  const r = js(t, e);
  return gs(o, st(r, o.calcOwnMatrix())), r;
}, en = (o, t) => {
  var e;
  const { transform: { target: r } } = t;
  (e = r.canvas) === null || e === void 0 || e.fire("object:".concat(o), m(m({}, t), {}, { target: r })), r.fire(o, t);
}, ol = { left: -0.5, top: -0.5, center: 0, bottom: 0.5, right: 0.5 }, N = (o) => typeof o == "string" ? ol[o] : o - 0.5, ps = "not-allowed";
function rn(o) {
  return N(o.originX) === N(M) && N(o.originY) === N(M);
}
function Ji(o) {
  return 0.5 - N(o);
}
const Ot = (o, t) => o[t], sn = (o, t, e, r) => ({ e: o, transform: t, pointer: new b(e, r) });
function on(o, t) {
  const e = o.getTotalAngle() + Kt(Math.atan2(t.y, t.x)) + 360;
  return Math.round(e % 360 / 45);
}
function Di(o, t, e, r, s) {
  var i;
  let { target: n, corner: a } = o;
  const l = n.controls[a], c = ((i = n.canvas) === null || i === void 0 ? void 0 : i.getZoom()) || 1, h = n.padding / c, d = (function(u, g, p, v) {
    const y = u.getRelativeCenterPoint(), x = p !== void 0 && v !== void 0 ? u.translateToGivenOrigin(y, M, M, p, v) : new b(u.left, u.top);
    return (u.angle ? g.rotate(-U(u.angle), y) : g).subtract(x);
  })(n, new b(r, s), t, e);
  return d.x >= h && (d.x -= h), d.x <= -h && (d.x += h), d.y >= h && (d.y -= h), d.y <= h && (d.y += h), d.x -= l.offsetX, d.y -= l.offsetY, d;
}
const nl = (o, t, e, r) => {
  const { target: s, offsetX: i, offsetY: n } = t, a = e - i, l = r - n, c = !Ot(s, "lockMovementX") && s.left !== a, h = !Ot(s, "lockMovementY") && s.top !== l;
  return c && s.set(B, a), h && s.set(ct, l), (c || h) && en(zo, sn(o, t, e, r)), c || h;
}, fs = (o) => o.replace(/\s+/g, " "), Zi = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#789", lightslategrey: "#789", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#639", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32" }, Ys = (o, t, e) => (e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? o + 6 * (t - o) * e : e < 0.5 ? t : e < 2 / 3 ? o + (t - o) * (2 / 3 - e) * 6 : o), Qi = (o, t, e, r) => {
  o /= 255, t /= 255, e /= 255;
  const s = Math.max(o, t, e), i = Math.min(o, t, e);
  let n, a;
  const l = (s + i) / 2;
  if (s === i) n = a = 0;
  else {
    const c = s - i;
    switch (a = l > 0.5 ? c / (2 - s - i) : c / (s + i), s) {
      case o:
        n = (t - e) / c + (t < e ? 6 : 0);
        break;
      case t:
        n = (e - o) / c + 2;
        break;
      case e:
        n = (o - t) / c + 4;
    }
    n /= 6;
  }
  return [Math.round(360 * n), Math.round(100 * a), Math.round(100 * l), r];
}, to = function() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "1";
  return parseFloat(o) / (o.endsWith("%") ? 100 : 1);
}, Pr = (o) => Math.min(Math.round(o), 255).toString(16).toUpperCase().padStart(2, "0"), eo = (o) => {
  let [t, e, r, s = 1] = o;
  const i = Math.round(0.3 * t + 0.59 * e + 0.11 * r);
  return [i, i, i, s];
};
class I {
  constructor(t) {
    if (f(this, "isUnrecognised", !1), t) if (t instanceof I) this.setSource([...t._source]);
    else if (Array.isArray(t)) {
      const [e, r, s, i = 1] = t;
      this.setSource([e, r, s, i]);
    } else this.setSource(this._tryParsingColor(t));
    else this.setSource([0, 0, 0, 1]);
  }
  _tryParsingColor(t) {
    return (t = t.toLowerCase()) in Zi && (t = Zi[t]), t === "transparent" ? [255, 255, 255, 0] : I.sourceFromHex(t) || I.sourceFromRgb(t) || I.sourceFromHsl(t) || (this.isUnrecognised = !0) && [0, 0, 0, 1];
  }
  getSource() {
    return this._source;
  }
  setSource(t) {
    this._source = t;
  }
  toRgb() {
    const [t, e, r] = this.getSource();
    return "rgb(".concat(t, ",").concat(e, ",").concat(r, ")");
  }
  toRgba() {
    return "rgba(".concat(this.getSource().join(","), ")");
  }
  toHsl() {
    const [t, e, r] = Qi(...this.getSource());
    return "hsl(".concat(t, ",").concat(e, "%,").concat(r, "%)");
  }
  toHsla() {
    const [t, e, r, s] = Qi(...this.getSource());
    return "hsla(".concat(t, ",").concat(e, "%,").concat(r, "%,").concat(s, ")");
  }
  toHex() {
    return this.toHexa().slice(0, 6);
  }
  toHexa() {
    const [t, e, r, s] = this.getSource();
    return "".concat(Pr(t)).concat(Pr(e)).concat(Pr(r)).concat(Pr(Math.round(255 * s)));
  }
  getAlpha() {
    return this.getSource()[3];
  }
  setAlpha(t) {
    return this._source[3] = t, this;
  }
  toGrayscale() {
    return this.setSource(eo(this.getSource())), this;
  }
  toBlackWhite(t) {
    const [e, , , r] = eo(this.getSource()), s = e < (t || 127) ? 0 : 255;
    return this.setSource([s, s, s, r]), this;
  }
  overlayWith(t) {
    t instanceof I || (t = new I(t));
    const e = this.getSource(), r = t.getSource(), [s, i, n] = e.map(((a, l) => Math.round(0.5 * a + 0.5 * r[l])));
    return this.setSource([s, i, n, e[3]]), this;
  }
  static fromRgb(t) {
    return I.fromRgba(t);
  }
  static fromRgba(t) {
    return new I(I.sourceFromRgb(t));
  }
  static sourceFromRgb(t) {
    const e = fs(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);
    if (e) {
      const [r, s, i] = e.slice(1, 4).map(((n) => {
        const a = parseFloat(n);
        return n.endsWith("%") ? Math.round(2.55 * a) : a;
      }));
      return [r, s, i, to(e[4])];
    }
  }
  static fromHsl(t) {
    return I.fromHsla(t);
  }
  static fromHsla(t) {
    return new I(I.sourceFromHsl(t));
  }
  static sourceFromHsl(t) {
    const e = fs(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);
    if (!e) return;
    const r = (I.parseAngletoDegrees(e[1]) % 360 + 360) % 360 / 360, s = parseFloat(e[2]) / 100, i = parseFloat(e[3]) / 100;
    let n, a, l;
    if (s === 0) n = a = l = i;
    else {
      const c = i <= 0.5 ? i * (s + 1) : i + s - i * s, h = 2 * i - c;
      n = Ys(h, c, r + 1 / 3), a = Ys(h, c, r), l = Ys(h, c, r - 1 / 3);
    }
    return [Math.round(255 * n), Math.round(255 * a), Math.round(255 * l), to(e[4])];
  }
  static fromHex(t) {
    return new I(I.sourceFromHex(t));
  }
  static sourceFromHex(t) {
    if (t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
      const e = t.slice(t.indexOf("#") + 1);
      let r;
      r = e.length <= 4 ? e.split("").map(((l) => l + l)) : e.match(/.{2}/g);
      const [s, i, n, a = 255] = r.map(((l) => parseInt(l, 16)));
      return [s, i, n, a / 255];
    }
  }
  static parseAngletoDegrees(t) {
    const e = t.toLowerCase(), r = parseFloat(e);
    return e.includes("rad") ? Kt(r) : e.includes("turn") ? 360 * r : r;
  }
}
const Le = function(o) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xi;
  const e = /\D{0,2}$/.exec(o), r = parseFloat(o), s = j.DPI;
  switch (e == null ? void 0 : e[0]) {
    case "mm":
      return r * s / 25.4;
    case "cm":
      return r * s / 2.54;
    case "in":
      return r * s;
    case "pt":
      return r * s / 72;
    case "pc":
      return r * s / 72 * 12;
    case "em":
      return r * t;
    default:
      return r;
  }
}, al = (o) => {
  const [t, e] = o.trim().split(" "), [r, s] = (i = t) && i !== ht ? [i.slice(1, 4), i.slice(5, 8)] : i === ht ? [i, i] : ["Mid", "Mid"];
  var i;
  return { meetOrSlice: e || "meet", alignX: r, alignY: s };
}, br = function(o, t) {
  let e, r, s = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  if (t) if (t.toLive) e = "url(#SVGID_".concat(t.id, ")");
  else {
    const i = new I(t), n = i.getAlpha();
    e = i.toRgb(), n !== 1 && (r = n.toString());
  }
  else e = "none";
  return s ? "".concat(o, ": ").concat(e, "; ").concat(r ? "".concat(o, "-opacity: ").concat(r, "; ") : "") : "".concat(o, '="').concat(e, '" ').concat(r ? "".concat(o, '-opacity="').concat(r, '" ') : "");
};
class nn {
  getSvgStyles(t) {
    const e = this.fillRule ? this.fillRule : "nonzero", r = this.strokeWidth ? this.strokeWidth : "0", s = this.strokeDashArray ? this.strokeDashArray.join(" ") : ht, i = this.strokeDashOffset ? this.strokeDashOffset : "0", n = this.strokeLineCap ? this.strokeLineCap : "butt", a = this.strokeLineJoin ? this.strokeLineJoin : "miter", l = this.strokeMiterLimit ? this.strokeMiterLimit : "4", c = this.opacity !== void 0 ? this.opacity : "1", h = this.visible ? "" : " visibility: hidden;", d = t ? "" : this.getSvgFilter(), u = br(K, this.fill);
    return [br(dt, this.stroke), "stroke-width: ", r, "; ", "stroke-dasharray: ", s, "; ", "stroke-linecap: ", n, "; ", "stroke-dashoffset: ", i, "; ", "stroke-linejoin: ", a, "; ", "stroke-miterlimit: ", l, "; ", u, "fill-rule: ", e, "; ", "opacity: ", c, ";", d, h].join("");
  }
  getSvgFilter() {
    return this.shadow ? "filter: url(#SVGID_".concat(this.shadow.id, ");") : "";
  }
  getSvgCommons() {
    return [this.id ? 'id="'.concat(this.id, '" ') : "", this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : ""].join("");
  }
  getSvgTransform(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t ? this.calcTransformMatrix() : this.calcOwnMatrix(), s = 'transform="'.concat(vr(r));
    return "".concat(s).concat(e, '" ');
  }
  _toSVG(t) {
    return [""];
  }
  toSVG(t) {
    return this._createBaseSVGMarkup(this._toSVG(t), { reviver: t });
  }
  toClipPathSVG(t) {
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(t), { reviver: t });
  }
  _createBaseClipPathSVGMarkup(t) {
    let { reviver: e, additionalTransform: r = "" } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = [this.getSvgTransform(!0, r), this.getSvgCommons()].join(""), i = t.indexOf("COMMON_PARTS");
    return t[i] = s, e ? e(t.join("")) : t.join("");
  }
  _createBaseSVGMarkup(t) {
    let { noStyle: e, reviver: r, withShadow: s, additionalTransform: i } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = e ? "" : 'style="'.concat(this.getSvgStyles(), '" '), a = s ? 'style="'.concat(this.getSvgFilter(), '" ') : "", l = this.clipPath, c = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", h = l && l.absolutePositioned, d = this.stroke, u = this.fill, g = this.shadow, p = [], v = t.indexOf("COMMON_PARTS");
    let y;
    l && (l.clipPathId = "CLIPPATH_".concat(he()), y = '<clipPath id="'.concat(l.clipPathId, `" >
`).concat(l.toClipPathSVG(r), `</clipPath>
`)), h && p.push("<g ", a, this.getSvgCommons(), ` >
`), p.push("<g ", this.getSvgTransform(!1), h ? "" : a + this.getSvgCommons(), ` >
`);
    const x = [n, c, e ? "" : this.addPaintOrder(), " ", i ? 'transform="'.concat(i, '" ') : ""].join("");
    return t[v] = x, vt(u) && p.push(u.toSVG(this)), vt(d) && p.push(d.toSVG(this)), g && p.push(g.toSVG(this)), l && p.push(y), p.push(t.join("")), p.push(`</g>
`), h && p.push(`</g>
`), r ? r(p.join("")) : p.join("");
  }
  addPaintOrder() {
    return this.paintFirst !== K ? ' paint-order="'.concat(this.paintFirst, '" ') : "";
  }
}
function Fs(o) {
  return new RegExp("^(" + o.join("|") + ")\\b", "i");
}
const Se = "textDecorationThickness", an = ["fontSize", "fontWeight", "fontFamily", "fontStyle"], ln = ["underline", "overline", "linethrough"], cn = [...an, "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"], hn = [...cn, ...ln, "textBackgroundColor", "direction", Se], ll = [...an, ...ln, dt, "strokeWidth", K, "deltaY", "textBackgroundColor", Se], cl = { _reNewline: _i, _reSpacesAndTabs: /[ \t\r]/g, _reSpaceAndTab: /[ \t\r]/, _reWords: /\S+/g, fontSize: 40, fontWeight: "normal", fontFamily: "Times New Roman", underline: !1, overline: !1, linethrough: !1, textAlign: B, fontStyle: "normal", lineHeight: 1.16, textBackgroundColor: "", stroke: null, shadow: null, path: void 0, pathStartOffset: 0, pathSide: B, pathAlign: "baseline", charSpacing: 0, deltaY: 0, direction: "ltr", CACHE_FONT_SIZE: 400, MIN_TEXT_WIDTH: 2, superscript: { size: 0.6, baseline: -0.35 }, subscript: { size: 0.6, baseline: 0.11 }, _fontSizeFraction: 0.222, offsets: { underline: 0.1, linethrough: -0.28167, overline: -0.81333 }, _fontSizeMult: 1.13, [Se]: 66.667 }, jt = "justify", ms = "justify-left", dr = "justify-right", ur = "justify-center";
var ro, so, io;
const kt = String.raw(ro || (ro = Rt(["[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?"], ["[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?"]))), Hs = String.raw(so || (so = Rt(["(?:s*,?s+|s*,s*)"], ["(?:\\s*,?\\s+|\\s*,\\s*)"]))), hl = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + kt + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + kt + "))?\\s+(.*)"), dl = { cx: B, x: B, r: "radius", cy: ct, y: ct, display: "visible", visibility: "visible", transform: "transformMatrix", "fill-opacity": "fillOpacity", "fill-rule": "fillRule", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "letter-spacing": "charSpacing", "paint-order": "paintFirst", "stroke-dasharray": "strokeDashArray", "stroke-dashoffset": "strokeDashOffset", "stroke-linecap": "strokeLineCap", "stroke-linejoin": "strokeLineJoin", "stroke-miterlimit": "strokeMiterLimit", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "text-decoration": "textDecoration", "text-anchor": "textAnchor", opacity: "opacity", "clip-path": "clipPath", "clip-rule": "clipRule", "vector-effect": "strokeUniform", "image-rendering": "imageSmoothing", "text-decoration-thickness": Se }, Gs = "font-size", Us = "clip-path";
Fs(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]);
Fs(["symbol", "image", "marker", "pattern", "view", "svg"]);
const oo = Fs(["symbol", "g", "a", "svg", "clipPath", "defs"]);
new RegExp(String.raw(io || (io = Rt(["^s*(", ")", "(", ")", "(", ")", "(", ")s*$"], ["^\\s*(", ")", "(", ")", "(", ")", "(", ")\\s*$"])), kt, Hs, kt, Hs, kt, Hs, kt));
const ul = new b(1, 0), dn = new b(), un = (o, t) => o.rotate(t), ai = (o, t) => new b(t).subtract(o), li = (o) => o.distanceFrom(dn), ci = (o, t) => Math.atan2(gr(o, t), pl(o, t)), gl = (o) => ci(ul, o), Pi = (o) => o.eq(dn) ? o : o.scalarDivide(li(o)), gn = function(o) {
  let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  return Pi(new b(-o.y, o.x).scalarMultiply(t ? 1 : -1));
}, gr = (o, t) => o.x * t.y - o.y * t.x, pl = (o, t) => o.x * t.x + o.y * t.y, no = (o, t, e) => {
  if (o.eq(t) || o.eq(e)) return !0;
  const r = gr(t, e), s = gr(t, o), i = gr(e, o);
  return r >= 0 ? s >= 0 && i <= 0 : !(s <= 0 && i >= 0);
}, ao = "(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?", lo = new RegExp("(?:\\s|^)" + ao + ao + "(" + kt + "?(?:px)?)?(?:\\s?|$)(?:$|\\s)");
class Gt {
  constructor(t) {
    const e = typeof t == "string" ? Gt.parseShadow(t) : t;
    Object.assign(this, Gt.ownDefaults, e), this.id = he();
  }
  static parseShadow(t) {
    const e = t.trim(), [, r = 0, s = 0, i = 0] = (lo.exec(e) || []).map(((n) => parseFloat(n) || 0));
    return { color: (e.replace(lo, "") || "rgb(0,0,0)").trim(), offsetX: r, offsetY: s, blur: i };
  }
  toString() {
    return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
  }
  toSVG(t) {
    const e = un(new b(this.offsetX, this.offsetY), U(-t.angle)), r = new I(this.color);
    let s = 40, i = 40;
    return t.width && t.height && (s = 100 * V((Math.abs(e.x) + this.blur) / t.width, j.NUM_FRACTION_DIGITS) + 20, i = 100 * V((Math.abs(e.y) + this.blur) / t.height, j.NUM_FRACTION_DIGITS) + 20), t.flipX && (e.x *= -1), t.flipY && (e.y *= -1), '<filter id="SVGID_'.concat(this.id, '" y="-').concat(i, '%" height="').concat(100 + 2 * i, '%" x="-').concat(s, '%" width="').concat(100 + 2 * s, `%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`).concat(V(this.blur ? this.blur / 2 : 0, j.NUM_FRACTION_DIGITS), `"></feGaussianBlur>
	<feOffset dx="`).concat(V(e.x, j.NUM_FRACTION_DIGITS), '" dy="').concat(V(e.y, j.NUM_FRACTION_DIGITS), `" result="oBlur" ></feOffset>
	<feFlood flood-color="`).concat(r.toRgb(), '" flood-opacity="').concat(r.getAlpha(), `"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`);
  }
  toObject() {
    const t = { color: this.color, blur: this.blur, offsetX: this.offsetX, offsetY: this.offsetY, affectStroke: this.affectStroke, nonScaling: this.nonScaling, type: this.constructor.type }, e = Gt.ownDefaults;
    return this.includeDefaultValues ? t : ki(t, ((r, s) => r !== e[s]));
  }
  static async fromObject(t) {
    return new this(t);
  }
}
f(Gt, "ownDefaults", { color: "rgb(0,0,0)", blur: 0, offsetX: 0, offsetY: 0, affectStroke: !1, includeDefaultValues: !0, nonScaling: !1 }), f(Gt, "type", "shadow"), k.setClass(Gt, "shadow");
const Xe = (o, t, e) => Math.max(o, Math.min(t, e)), fl = [ct, B, ut, bt, "flipX", "flipY", "originX", "originY", "angle", "opacity", "globalCompositeOperation", "shadow", "visible", Ne, qe], Zt = [K, dt, "strokeWidth", "strokeDashArray", "width", "height", "paintFirst", "strokeUniform", "strokeLineCap", "strokeDashOffset", "strokeLineJoin", "strokeMiterLimit", "backgroundColor", "clipPath"], ml = { top: 0, left: 0, width: 0, height: 0, angle: 0, flipX: !1, flipY: !1, scaleX: 1, scaleY: 1, minScaleLimit: 0, skewX: 0, skewY: 0, originX: B, originY: ct, strokeWidth: 1, strokeUniform: !1, padding: 0, opacity: 1, paintFirst: K, fill: "rgb(0,0,0)", fillRule: "nonzero", stroke: null, strokeDashArray: null, strokeDashOffset: 0, strokeLineCap: "butt", strokeLineJoin: "miter", strokeMiterLimit: 4, globalCompositeOperation: "source-over", backgroundColor: "", shadow: null, visible: !0, includeDefaultValues: !0, excludeFromExport: !1, objectCaching: !0, clipPath: void 0, inverted: !1, absolutePositioned: !1, centeredRotation: !0, centeredScaling: !1, dirty: !0 }, vl = (o, t, e, r) => -e * Math.cos(o / r * Cr) + e + t, bl = () => !1;
class Ei {
  constructor(t) {
    let { startValue: e, byValue: r, duration: s = 500, delay: i = 0, easing: n = vl, onStart: a = ts, onChange: l = ts, onComplete: c = ts, abort: h = bl, target: d } = t;
    f(this, "_state", "pending"), f(this, "durationProgress", 0), f(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = s, this.delay = i, this.easing = n, this._onStart = a, this._onChange = l, this._onComplete = c, this._abort = h, this.target = d, this.startValue = e, this.byValue = r, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value);
  }
  get state() {
    return this._state;
  }
  isDone() {
    return this._state === "aborted" || this._state === "completed";
  }
  start() {
    const t = (e) => {
      this._state === "pending" && (this.startTime = e || +/* @__PURE__ */ new Date(), this._state = "running", this._onStart(), this.tick(this.startTime));
    };
    this.register(), this.delay > 0 ? setTimeout((() => rs(t)), this.delay) : rs(t);
  }
  tick(t) {
    const e = (t || +/* @__PURE__ */ new Date()) - this.startTime, r = Math.min(e, this.duration);
    this.durationProgress = r / this.duration;
    const { value: s, valueProgress: i } = this.calculate(r);
    this.value = Object.freeze(s), this.valueProgress = i, this._state !== "aborted" && (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : e >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), rs(this.tick)));
  }
  register() {
    ds.push(this);
  }
  unregister() {
    ds.remove(this);
  }
  abort() {
    this._state = "aborted", this.unregister();
  }
}
const yl = ["startValue", "endValue"];
class xl extends Ei {
  constructor(t) {
    let { startValue: e = 0, endValue: r = 100 } = t;
    super(m(m({}, X(t, yl)), {}, { startValue: e, byValue: r - e }));
  }
  calculate(t) {
    const e = this.easing(t, this.startValue, this.byValue, this.duration);
    return { value: e, valueProgress: Math.abs((e - this.startValue) / this.byValue) };
  }
}
const _l = ["startValue", "endValue"];
class wl extends Ei {
  constructor(t) {
    let { startValue: e = [0], endValue: r = [100] } = t;
    super(m(m({}, X(t, _l)), {}, { startValue: e, byValue: r.map(((s, i) => s - e[i])) }));
  }
  calculate(t) {
    const e = this.startValue.map(((r, s) => this.easing(t, r, this.byValue[s], this.duration, s)));
    return { value: e, valueProgress: Math.abs((e[0] - this.startValue[0]) / this.byValue[0]) };
  }
}
const Cl = ["startValue", "endValue", "easing", "onChange", "onComplete", "abort"], Sl = (o, t, e, r) => t + e * (1 - Math.cos(o / r * Cr)), Ns = (o) => o && ((t, e, r) => o(new I(t).toRgba(), e, r));
class Tl extends Ei {
  constructor(t) {
    let { startValue: e, endValue: r, easing: s = Sl, onChange: i, onComplete: n, abort: a } = t, l = X(t, Cl);
    const c = new I(e).getSource(), h = new I(r).getSource();
    super(m(m({}, l), {}, { startValue: c, byValue: h.map(((d, u) => d - c[u])), easing: s, onChange: Ns(i), onComplete: Ns(n), abort: Ns(a) }));
  }
  calculate(t) {
    const [e, r, s, i] = this.startValue.map(((a, l) => this.easing(t, a, this.byValue[l], this.duration, l))), n = [...[e, r, s].map(Math.round), Xe(0, i, 1)];
    return { value: n, valueProgress: n.map(((a, l) => this.byValue[l] !== 0 ? Math.abs((a - this.startValue[l]) / this.byValue[l]) : 0)).find(((a) => a !== 0)) || 0 };
  }
}
function pn(o) {
  const t = ((e) => Array.isArray(e.startValue) || Array.isArray(e.endValue))(o) ? new wl(o) : new xl(o);
  return t.start(), t;
}
function kl(o) {
  const t = new Tl(o);
  return t.start(), t;
}
class Y {
  constructor(t) {
    this.status = t, this.points = [];
  }
  includes(t) {
    return this.points.some(((e) => e.eq(t)));
  }
  append() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    return this.points = this.points.concat(e.filter(((s) => !this.includes(s)))), this;
  }
  static isPointContained(t, e, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (e.eq(r)) return t.eq(e);
    if (e.x === r.x) return t.x === e.x && (s || t.y >= Math.min(e.y, r.y) && t.y <= Math.max(e.y, r.y));
    if (e.y === r.y) return t.y === e.y && (s || t.x >= Math.min(e.x, r.x) && t.x <= Math.max(e.x, r.x));
    {
      const i = ai(e, r), n = ai(e, t).divide(i);
      return s ? Math.abs(n.x) === Math.abs(n.y) : n.x === n.y && n.x >= 0 && n.x <= 1;
    }
  }
  static isPointInPolygon(t, e) {
    const r = new b(t).setX(Math.min(t.x - 1, ...e.map(((i) => i.x))));
    let s = 0;
    for (let i = 0; i < e.length; i++) {
      const n = this.intersectSegmentSegment(e[i], e[(i + 1) % e.length], t, r);
      if (n.includes(t)) return !0;
      s += +(n.status === "Intersection");
    }
    return s % 2 == 1;
  }
  static intersectLineLine(t, e, r, s) {
    let i = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], n = !(arguments.length > 5 && arguments[5] !== void 0) || arguments[5];
    const a = e.x - t.x, l = e.y - t.y, c = s.x - r.x, h = s.y - r.y, d = t.x - r.x, u = t.y - r.y, g = c * u - h * d, p = a * u - l * d, v = h * a - c * l;
    if (v !== 0) {
      const y = g / v, x = p / v;
      return (i || 0 <= y && y <= 1) && (n || 0 <= x && x <= 1) ? new Y("Intersection").append(new b(t.x + y * a, t.y + y * l)) : new Y();
    }
    if (g === 0 || p === 0) {
      const y = i || n || Y.isPointContained(t, r, s) || Y.isPointContained(e, r, s) || Y.isPointContained(r, t, e) || Y.isPointContained(s, t, e);
      return new Y(y ? "Coincident" : void 0);
    }
    return new Y("Parallel");
  }
  static intersectSegmentLine(t, e, r, s) {
    return Y.intersectLineLine(t, e, r, s, !1, !0);
  }
  static intersectSegmentSegment(t, e, r, s) {
    return Y.intersectLineLine(t, e, r, s, !1, !1);
  }
  static intersectLinePolygon(t, e, r) {
    let s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
    const i = new Y(), n = r.length;
    for (let a, l, c, h = 0; h < n; h++) {
      if (a = r[h], l = r[(h + 1) % n], c = Y.intersectLineLine(t, e, a, l, s, !1), c.status === "Coincident") return c;
      i.append(...c.points);
    }
    return i.points.length > 0 && (i.status = "Intersection"), i;
  }
  static intersectSegmentPolygon(t, e, r) {
    return Y.intersectLinePolygon(t, e, r, !1);
  }
  static intersectPolygonPolygon(t, e) {
    const r = new Y(), s = t.length, i = [];
    for (let n = 0; n < s; n++) {
      const a = t[n], l = t[(n + 1) % s], c = Y.intersectSegmentPolygon(a, l, e);
      c.status === "Coincident" ? (i.push(c), r.append(a, l)) : r.append(...c.points);
    }
    return i.length > 0 && i.length === t.length ? new Y("Coincident") : (r.points.length > 0 && (r.status = "Intersection"), r);
  }
  static intersectPolygonRectangle(t, e, r) {
    const s = e.min(r), i = e.max(r), n = new b(i.x, s.y), a = new b(s.x, i.y);
    return Y.intersectPolygonPolygon(t, [s, n, i, a]);
  }
}
class Ol extends Xo {
  getX() {
    return this.getXY().x;
  }
  setX(t) {
    this.setXY(this.getXY().setX(t));
  }
  getY() {
    return this.getXY().y;
  }
  setY(t) {
    this.setXY(this.getXY().setY(t));
  }
  getRelativeX() {
    return this.left;
  }
  setRelativeX(t) {
    this.left = t;
  }
  getRelativeY() {
    return this.top;
  }
  setRelativeY(t) {
    this.top = t;
  }
  getXY() {
    const t = this.getRelativeXY();
    return this.group ? lt(t, this.group.calcTransformMatrix()) : t;
  }
  setXY(t, e, r) {
    this.group && (t = lt(t, Tt(this.group.calcTransformMatrix()))), this.setRelativeXY(t, e, r);
  }
  getRelativeXY() {
    return new b(this.left, this.top);
  }
  setRelativeXY(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.originX, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.originY;
    this.setPositionByOrigin(t, e, r);
  }
  isStrokeAccountedForInDimensions() {
    return !1;
  }
  getCoords() {
    const { tl: t, tr: e, br: r, bl: s } = this.aCoords || (this.aCoords = this.calcACoords()), i = [t, e, r, s];
    if (this.group) {
      const n = this.group.calcTransformMatrix();
      return i.map(((a) => lt(a, n)));
    }
    return i;
  }
  intersectsWithRect(t, e) {
    return Y.intersectPolygonRectangle(this.getCoords(), t, e).status === "Intersection";
  }
  intersectsWithObject(t) {
    const e = Y.intersectPolygonPolygon(this.getCoords(), t.getCoords());
    return e.status === "Intersection" || e.status === "Coincident" || t.isContainedWithinObject(this) || this.isContainedWithinObject(t);
  }
  isContainedWithinObject(t) {
    return this.getCoords().every(((e) => t.containsPoint(e)));
  }
  isContainedWithinRect(t, e) {
    const { left: r, top: s, width: i, height: n } = this.getBoundingRect();
    return r >= t.x && r + i <= e.x && s >= t.y && s + n <= e.y;
  }
  isOverlapping(t) {
    return this.intersectsWithObject(t) || this.isContainedWithinObject(t) || t.isContainedWithinObject(this);
  }
  containsPoint(t) {
    return Y.isPointInPolygon(t, this.getCoords());
  }
  isOnScreen() {
    if (!this.canvas) return !1;
    const { tl: t, br: e } = this.canvas.vptCoords;
    return !!this.getCoords().some(((r) => r.x <= e.x && r.x >= t.x && r.y <= e.y && r.y >= t.y)) || !!this.intersectsWithRect(t, e) || this.containsPoint(t.midPointFrom(e));
  }
  isPartiallyOnScreen() {
    if (!this.canvas) return !1;
    const { tl: t, br: e } = this.canvas.vptCoords;
    return this.intersectsWithRect(t, e) ? !0 : this.getCoords().every(((r) => (r.x >= e.x || r.x <= t.x) && (r.y >= e.y || r.y <= t.y))) && this.containsPoint(t.midPointFrom(e));
  }
  getBoundingRect() {
    return Ht(this.getCoords());
  }
  getScaledWidth() {
    return this._getTransformedDimensions().x;
  }
  getScaledHeight() {
    return this._getTransformedDimensions().y;
  }
  scale(t) {
    this._set(ut, t), this._set(bt, t), this.setCoords();
  }
  scaleToWidth(t) {
    const e = this.getBoundingRect().width / this.getScaledWidth();
    return this.scale(t / this.width / e);
  }
  scaleToHeight(t) {
    const e = this.getBoundingRect().height / this.getScaledHeight();
    return this.scale(t / this.height / e);
  }
  getCanvasRetinaScaling() {
    var t;
    return ((t = this.canvas) === null || t === void 0 ? void 0 : t.getRetinaScaling()) || 1;
  }
  getTotalAngle() {
    return this.group ? Kt(Go(this.calcTransformMatrix())) : this.angle;
  }
  getViewportTransform() {
    var t;
    return ((t = this.canvas) === null || t === void 0 ? void 0 : t.viewportTransform) || at.concat();
  }
  calcACoords() {
    const t = Ke({ angle: this.angle }), { x: e, y: r } = this.getRelativeCenterPoint(), s = Sr(e, r), i = st(s, t), n = this._getTransformedDimensions(), a = n.x / 2, l = n.y / 2;
    return { tl: lt({ x: -a, y: -l }, i), tr: lt({ x: a, y: -l }, i), bl: lt({ x: -a, y: l }, i), br: lt({ x: a, y: l }, i) };
  }
  setCoords() {
    this.aCoords = this.calcACoords();
  }
  transformMatrixKey() {
    let t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e = [];
    return !t && this.group && (e = this.group.transformMatrixKey(t)), e.push(this.top, this.left, this.width, this.height, this.scaleX, this.scaleY, this.angle, this.strokeWidth, this.skewX, this.skewY, +this.flipX, +this.flipY, N(this.originX), N(this.originY)), e;
  }
  calcTransformMatrix() {
    let t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e = this.calcOwnMatrix();
    if (t || !this.group) return e;
    const r = this.transformMatrixKey(t), s = this.matrixCache;
    return s && s.key.every(((i, n) => i === r[n])) ? s.value : (this.group && (e = st(this.group.calcTransformMatrix(!1), e)), this.matrixCache = { key: r, value: e }, e);
  }
  calcOwnMatrix() {
    const t = this.transformMatrixKey(!0), e = this.ownMatrixCache;
    if (e && e.key === t) return e.value;
    const r = this.getRelativeCenterPoint(), s = { angle: this.angle, translateX: r.x, translateY: r.y, scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, flipX: this.flipX, flipY: this.flipY }, i = qa(s);
    return this.ownMatrixCache = { key: t, value: i }, i;
  }
  _getNonTransformedDimensions() {
    return new b(this.width, this.height).scalarAdd(this.strokeWidth);
  }
  _calculateCurrentDimensions(t) {
    return this._getTransformedDimensions(t).transform(this.getViewportTransform(), !0).scalarAdd(2 * this.padding);
  }
  _getTransformedDimensions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const e = m({ scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, width: this.width, height: this.height, strokeWidth: this.strokeWidth }, t), r = e.strokeWidth;
    let s = r, i = 0;
    this.strokeUniform && (s = 0, i = r);
    const n = e.width + s, a = e.height + s;
    let l;
    return l = e.skewX === 0 && e.skewY === 0 ? new b(n * e.scaleX, a * e.scaleY) : Oi(n, a, Ms(e)), l.scalarAdd(i);
  }
  translateToGivenOrigin(t, e, r, s, i) {
    let n = t.x, a = t.y;
    const l = N(s) - N(e), c = N(i) - N(r);
    if (l || c) {
      const h = this._getTransformedDimensions();
      n += l * h.x, a += c * h.y;
    }
    return new b(n, a);
  }
  translateToCenterPoint(t, e, r) {
    if (e === M && r === M) return t;
    const s = this.translateToGivenOrigin(t, e, r, M, M);
    return this.angle ? s.rotate(U(this.angle), t) : s;
  }
  translateToOriginPoint(t, e, r) {
    const s = this.translateToGivenOrigin(t, M, M, e, r);
    return this.angle ? s.rotate(U(this.angle), t) : s;
  }
  getCenterPoint() {
    const t = this.getRelativeCenterPoint();
    return this.group ? lt(t, this.group.calcTransformMatrix()) : t;
  }
  getRelativeCenterPoint() {
    return this.translateToCenterPoint(new b(this.left, this.top), this.originX, this.originY);
  }
  getPointByOrigin(t, e) {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), t, e);
  }
  setPositionByOrigin(t, e, r) {
    const s = this.translateToCenterPoint(t, e, r), i = this.translateToOriginPoint(s, this.originX, this.originY);
    this.set({ left: i.x, top: i.y });
  }
  _getLeftTopCoords() {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), B, ct);
  }
}
const Dl = ["type"], Pl = ["extraParam"];
let Wt = class is extends Ol {
  static getDefaults() {
    return is.ownDefaults;
  }
  get type() {
    const t = this.constructor.type;
    return t === "FabricObject" ? "object" : t.toLowerCase();
  }
  set type(t) {
    ce("warn", "Setting type has no effect", t);
  }
  constructor(t) {
    super(), f(this, "_cacheContext", null), Object.assign(this, is.ownDefaults), this.setOptions(t);
  }
  _createCacheCanvas() {
    this._cacheCanvas = qt(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
  }
  _limitCacheSize(t) {
    const e = t.width, r = t.height, s = j.maxCacheSideLimit, i = j.minCacheSideLimit;
    if (e <= s && r <= s && e * r <= j.perfLimitSizeTotal) return e < i && (t.width = i), r < i && (t.height = i), t;
    const n = e / r, [a, l] = hr.limitDimsByArea(n), c = Xe(i, a, s), h = Xe(i, l, s);
    return e > c && (t.zoomX /= e / c, t.width = c, t.capped = !0), r > h && (t.zoomY /= r / h, t.height = h, t.capped = !0), t;
  }
  _getCacheCanvasDimensions() {
    const t = this.getTotalObjectScaling(), e = this._getTransformedDimensions({ skewX: 0, skewY: 0 }), r = e.x * t.x / this.scaleX, s = e.y * t.y / this.scaleY;
    return { width: Math.ceil(r + 2), height: Math.ceil(s + 2), zoomX: t.x, zoomY: t.y, x: r, y: s };
  }
  _updateCacheCanvas() {
    const t = this._cacheCanvas, e = this._cacheContext, { width: r, height: s, zoomX: i, zoomY: n, x: a, y: l } = this._limitCacheSize(this._getCacheCanvasDimensions()), c = r !== t.width || s !== t.height, h = this.zoomX !== i || this.zoomY !== n;
    if (!t || !e) return !1;
    if (c || h) {
      r !== t.width || s !== t.height ? (t.width = r, t.height = s) : (e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t.width, t.height));
      const d = a / 2, u = l / 2;
      return this.cacheTranslationX = Math.round(t.width / 2 - d) + d, this.cacheTranslationY = Math.round(t.height / 2 - u) + u, e.translate(this.cacheTranslationX, this.cacheTranslationY), e.scale(i, n), this.zoomX = i, this.zoomY = n, !0;
    }
    return !1;
  }
  setOptions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this._setOptions(t);
  }
  transform(t) {
    const e = this.group && !this.group._transformDone || this.group && this.canvas && t === this.canvas.contextTop, r = this.calcTransformMatrix(!e);
    t.transform(r[0], r[1], r[2], r[3], r[4], r[5]);
  }
  getObjectScaling() {
    if (!this.group) return new b(Math.abs(this.scaleX), Math.abs(this.scaleY));
    const t = us(this.calcTransformMatrix());
    return new b(Math.abs(t.scaleX), Math.abs(t.scaleY));
  }
  getTotalObjectScaling() {
    const t = this.getObjectScaling();
    if (this.canvas) {
      const e = this.canvas.getZoom(), r = this.getCanvasRetinaScaling();
      return t.scalarMultiply(e * r);
    }
    return t;
  }
  getObjectOpacity() {
    let t = this.opacity;
    return this.group && (t *= this.group.getObjectOpacity()), t;
  }
  _constrainScale(t) {
    return Math.abs(t) < this.minScaleLimit ? t < 0 ? -this.minScaleLimit : this.minScaleLimit : t === 0 ? 1e-4 : t;
  }
  _set(t, e) {
    t !== ut && t !== bt || (e = this._constrainScale(e)), t === ut && e < 0 ? (this.flipX = !this.flipX, e *= -1) : t === "scaleY" && e < 0 ? (this.flipY = !this.flipY, e *= -1) : t !== "shadow" || !e || e instanceof Gt || (e = new Gt(e));
    const r = this[t] !== e;
    return this[t] = e, r && this.constructor.cacheProperties.includes(t) && (this.dirty = !0), this.parent && (this.dirty || r && this.constructor.stateProperties.includes(t)) && this.parent._set("dirty", !0), this;
  }
  isNotVisible() {
    return this.opacity === 0 || !this.width && !this.height && this.strokeWidth === 0 || !this.visible;
  }
  render(t) {
    this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t.save(), this._setupCompositeOperation(t), this.drawSelectionBackground(t), this.transform(t), this._setOpacity(t), this._setShadow(t), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t)) : (this._removeCacheCanvas(), this.drawObject(t, !1, {}), this.dirty = !1), t.restore());
  }
  drawSelectionBackground(t) {
  }
  renderCache(t) {
    if (t = t || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext) {
      const { zoomX: e, zoomY: r, cacheTranslationX: s, cacheTranslationY: i } = this, { width: n, height: a } = this._cacheCanvas;
      this.drawObject(this._cacheContext, t.forClipping, { zoomX: e, zoomY: r, cacheTranslationX: s, cacheTranslationY: i, width: n, height: a, parentClipPaths: [] }), this.dirty = !1;
    }
  }
  _removeCacheCanvas() {
    this._cacheCanvas = void 0, this._cacheContext = null;
  }
  hasStroke() {
    return this.stroke && this.stroke !== "transparent" && this.strokeWidth !== 0;
  }
  hasFill() {
    return this.fill && this.fill !== "transparent";
  }
  needsItsOwnCache() {
    return !!(this.paintFirst === dt && this.hasFill() && this.hasStroke() && this.shadow) || !!this.clipPath;
  }
  shouldCache() {
    return this.ownCaching = this.objectCaching && (!this.parent || !this.parent.isOnACache()) || this.needsItsOwnCache(), this.ownCaching;
  }
  willDrawShadow() {
    return !!this.shadow && (this.shadow.offsetX !== 0 || this.shadow.offsetY !== 0);
  }
  drawClipPathOnCache(t, e, r) {
    t.save(), e.inverted ? t.globalCompositeOperation = "destination-out" : t.globalCompositeOperation = "destination-in", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(r, 0, 0), t.restore();
  }
  drawObject(t, e, r) {
    const s = this.fill, i = this.stroke;
    e ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t)) : this._renderBackground(t), this._render(t), this._drawClipPath(t, this.clipPath, r), this.fill = s, this.stroke = i;
  }
  createClipPathLayer(t, e) {
    const r = yt(e), s = r.getContext("2d");
    if (s.translate(e.cacheTranslationX, e.cacheTranslationY), s.scale(e.zoomX, e.zoomY), t._cacheCanvas = r, e.parentClipPaths.forEach(((i) => {
      i.transform(s);
    })), e.parentClipPaths.push(t), t.absolutePositioned) {
      const i = Tt(this.calcTransformMatrix());
      s.transform(i[0], i[1], i[2], i[3], i[4], i[5]);
    }
    return t.transform(s), t.drawObject(s, !0, e), r;
  }
  _drawClipPath(t, e, r) {
    if (!e) return;
    e._transformDone = !0;
    const s = this.createClipPathLayer(e, r);
    this.drawClipPathOnCache(t, e, s);
  }
  drawCacheOnCanvas(t) {
    t.scale(1 / this.zoomX, 1 / this.zoomY), t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
  }
  isCacheDirty() {
    let t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    if (this.isNotVisible()) return !1;
    const e = this._cacheCanvas, r = this._cacheContext;
    return !(!e || !r || t || !this._updateCacheCanvas()) || !!(this.dirty || this.clipPath && this.clipPath.absolutePositioned) && (e && r && !t && (r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, e.width, e.height), r.restore()), !0);
  }
  _renderBackground(t) {
    if (!this.backgroundColor) return;
    const e = this._getNonTransformedDimensions();
    t.fillStyle = this.backgroundColor, t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t);
  }
  _setOpacity(t) {
    this.group && !this.group._transformDone ? t.globalAlpha = this.getObjectOpacity() : t.globalAlpha *= this.opacity;
  }
  _setStrokeStyles(t, e) {
    const r = e.stroke;
    r && (t.lineWidth = e.strokeWidth, t.lineCap = e.strokeLineCap, t.lineDashOffset = e.strokeDashOffset, t.lineJoin = e.strokeLineJoin, t.miterLimit = e.strokeMiterLimit, vt(r) ? r.gradientUnits === "percentage" || r.gradientTransform || r.patternTransform ? this._applyPatternForTransformedGradient(t, r) : (t.strokeStyle = r.toLive(t), this._applyPatternGradientTransform(t, r)) : t.strokeStyle = e.stroke);
  }
  _setFillStyles(t, e) {
    let { fill: r } = e;
    r && (vt(r) ? (t.fillStyle = r.toLive(t), this._applyPatternGradientTransform(t, r)) : t.fillStyle = r);
  }
  _setClippingProperties(t) {
    t.globalAlpha = 1, t.strokeStyle = "transparent", t.fillStyle = "#000000";
  }
  _setLineDash(t, e) {
    e && e.length !== 0 && t.setLineDash(e);
  }
  _setShadow(t) {
    if (!this.shadow) return;
    const e = this.shadow, r = this.canvas, s = this.getCanvasRetinaScaling(), [i, , , n] = (r == null ? void 0 : r.viewportTransform) || at, a = i * s, l = n * s, c = e.nonScaling ? new b(1, 1) : this.getObjectScaling();
    t.shadowColor = e.color, t.shadowBlur = e.blur * j.browserShadowBlurConstant * (a + l) * (c.x + c.y) / 4, t.shadowOffsetX = e.offsetX * a * c.x, t.shadowOffsetY = e.offsetY * l * c.y;
  }
  _removeShadow(t) {
    this.shadow && (t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0);
  }
  _applyPatternGradientTransform(t, e) {
    if (!vt(e)) return { offsetX: 0, offsetY: 0 };
    const r = e.gradientTransform || e.patternTransform, s = -this.width / 2 + e.offsetX || 0, i = -this.height / 2 + e.offsetY || 0;
    return e.gradientUnits === "percentage" ? t.transform(this.width, 0, 0, this.height, s, i) : t.transform(1, 0, 0, 1, s, i), r && t.transform(r[0], r[1], r[2], r[3], r[4], r[5]), { offsetX: s, offsetY: i };
  }
  _renderPaintInOrder(t) {
    this.paintFirst === dt ? (this._renderStroke(t), this._renderFill(t)) : (this._renderFill(t), this._renderStroke(t));
  }
  _render(t) {
  }
  _renderFill(t) {
    this.fill && (t.save(), this._setFillStyles(t, this), this.fillRule === "evenodd" ? t.fill("evenodd") : t.fill(), t.restore());
  }
  _renderStroke(t) {
    if (this.stroke && this.strokeWidth !== 0) {
      if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this.strokeUniform) {
        const e = this.getObjectScaling();
        t.scale(1 / e.x, 1 / e.y);
      }
      this._setLineDash(t, this.strokeDashArray), this._setStrokeStyles(t, this), t.stroke(), t.restore();
    }
  }
  _applyPatternForTransformedGradient(t, e) {
    var r;
    const s = this._limitCacheSize(this._getCacheCanvasDimensions()), i = this.getCanvasRetinaScaling(), n = s.x / this.scaleX / i, a = s.y / this.scaleY / i, l = yt({ width: Math.ceil(n), height: Math.ceil(a) }), c = l.getContext("2d");
    c && (c.beginPath(), c.moveTo(0, 0), c.lineTo(n, 0), c.lineTo(n, a), c.lineTo(0, a), c.closePath(), c.translate(n / 2, a / 2), c.scale(s.zoomX / this.scaleX / i, s.zoomY / this.scaleY / i), this._applyPatternGradientTransform(c, e), c.fillStyle = e.toLive(t), c.fill(), t.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t.scale(i * this.scaleX / s.zoomX, i * this.scaleY / s.zoomY), t.strokeStyle = (r = c.createPattern(l, "no-repeat")) !== null && r !== void 0 ? r : "");
  }
  _findCenterFromElement() {
    return new b(this.left + this.width / 2, this.top + this.height / 2);
  }
  clone(t) {
    const e = this.toObject(t);
    return this.constructor.fromObject(e);
  }
  cloneAsImage(t) {
    const e = this.toCanvasElement(t);
    return new (k.getClass("image"))(e);
  }
  toCanvasElement() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const e = tn(this), r = this.group, s = this.shadow, i = Math.abs, n = t.enableRetinaScaling ? Ro() : 1, a = (t.multiplier || 1) * n, l = t.canvasProvider || ((_) => new Tr(_, { enableRetinaScaling: !1, renderOnAddRemove: !1, skipOffscreen: !1 }));
    delete this.group, t.withoutTransform && rl(this), t.withoutShadow && (this.shadow = null), t.viewportTransform && il(this, this.getViewportTransform()), this.setCoords();
    const c = qt(), h = this.getBoundingRect(), d = this.shadow, u = new b();
    if (d) {
      const _ = d.blur, S = d.nonScaling ? new b(1, 1) : this.getObjectScaling();
      u.x = 2 * Math.round(i(d.offsetX) + _) * i(S.x), u.y = 2 * Math.round(i(d.offsetY) + _) * i(S.y);
    }
    const g = h.width + u.x, p = h.height + u.y;
    c.width = Math.ceil(g), c.height = Math.ceil(p);
    const v = l(c);
    t.format === "jpeg" && (v.backgroundColor = "#fff"), this.setPositionByOrigin(new b(v.width / 2, v.height / 2), M, M);
    const y = this.canvas;
    v._objects = [this], this.set("canvas", v), this.setCoords();
    const x = v.toCanvasElement(a || 1, t);
    return this.set("canvas", y), this.shadow = s, r && (this.group = r), this.set(e), this.setCoords(), v._objects = [], v.destroy(), x;
  }
  toDataURL() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Yo(this.toCanvasElement(t), t.format || "png", t.quality || 1);
  }
  toBlob() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ho(this.toCanvasElement(t), t.format || "png", t.quality || 1);
  }
  isType() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    return e.includes(this.constructor.type) || e.includes(this.type);
  }
  complexity() {
    return 1;
  }
  toJSON() {
    return this.toObject();
  }
  rotate(t) {
    const { centeredRotation: e, originX: r, originY: s } = this;
    if (e) {
      const { x: i, y: n } = this.getRelativeCenterPoint();
      this.originX = M, this.originY = M, this.left = i, this.top = n;
    }
    if (this.set("angle", t), e) {
      const { x: i, y: n } = this.translateToOriginPoint(this.getRelativeCenterPoint(), r, s);
      this.left = i, this.top = n, this.originX = r, this.originY = s;
    }
  }
  setOnGroup() {
  }
  _setupCompositeOperation(t) {
    this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation);
  }
  dispose() {
    ds.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && Lt().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null;
  }
  animate(t, e) {
    return Object.entries(t).reduce(((r, s) => {
      let [i, n] = s;
      return r[i] = this._animate(i, n, e), r;
    }), {});
  }
  _animate(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = t.split("."), i = this.constructor.colorProperties.includes(s[s.length - 1]), { abort: n, startValue: a, onChange: l, onComplete: c } = r, h = m(m({}, r), {}, { target: this, startValue: a ?? s.reduce(((d, u) => d[u]), this), endValue: e, abort: n == null ? void 0 : n.bind(this), onChange: (d, u, g) => {
      s.reduce(((p, v, y) => (y === s.length - 1 && (p[v] = d), p[v])), this), l && l(d, u, g);
    }, onComplete: (d, u, g) => {
      this.setCoords(), c && c(d, u, g);
    } });
    return i ? kl(h) : pn(h);
  }
  isDescendantOf(t) {
    const { parent: e, group: r } = this;
    return e === t || r === t || !!e && e.isDescendantOf(t) || !!r && r !== e && r.isDescendantOf(t);
  }
  getAncestors() {
    const t = [];
    let e = this;
    do
      e = e.parent, e && t.push(e);
    while (e);
    return t;
  }
  findCommonAncestors(t) {
    if (this === t) return { fork: [], otherFork: [], common: [this, ...this.getAncestors()] };
    const e = this.getAncestors(), r = t.getAncestors();
    if (e.length === 0 && r.length > 0 && this === r[r.length - 1]) return { fork: [], otherFork: [t, ...r.slice(0, r.length - 1)], common: [this] };
    for (let s, i = 0; i < e.length; i++) {
      if (s = e[i], s === t) return { fork: [this, ...e.slice(0, i)], otherFork: [], common: e.slice(i) };
      for (let n = 0; n < r.length; n++) {
        if (this === r[n]) return { fork: [], otherFork: [t, ...r.slice(0, n)], common: [this, ...e] };
        if (s === r[n]) return { fork: [this, ...e.slice(0, i)], otherFork: [t, ...r.slice(0, n)], common: e.slice(i) };
      }
    }
    return { fork: [this, ...e], otherFork: [t, ...r], common: [] };
  }
  hasCommonAncestors(t) {
    const e = this.findCommonAncestors(t);
    return e && !!e.common.length;
  }
  isInFrontOf(t) {
    if (this === t) return;
    const e = this.findCommonAncestors(t);
    if (e.fork.includes(t)) return !0;
    if (e.otherFork.includes(this)) return !1;
    const r = e.common[0] || this.canvas;
    if (!r) return;
    const s = e.fork.pop(), i = e.otherFork.pop(), n = r._objects.indexOf(s), a = r._objects.indexOf(i);
    return n > -1 && n > a;
  }
  toObject() {
    const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).concat(is.customProperties, this.constructor.customProperties || []);
    let e;
    const r = j.NUM_FRACTION_DIGITS, { clipPath: s, fill: i, stroke: n, shadow: a, strokeDashArray: l, left: c, top: h, originX: d, originY: u, width: g, height: p, strokeWidth: v, strokeLineCap: y, strokeDashOffset: x, strokeLineJoin: _, strokeUniform: S, strokeMiterLimit: C, scaleX: T, scaleY: D, angle: A, flipX: O, flipY: L, opacity: q, visible: Z, backgroundColor: W, fillRule: z, paintFirst: F, globalCompositeOperation: tt, skewX: Q, skewY: et } = this;
    s && !s.excludeFromExport && (e = s.toObject(t.concat("inverted", "absolutePositioned")));
    const $ = (zt) => V(zt, r), Mt = m(m({}, Je(this, t)), {}, { type: this.constructor.type, version: si, originX: d, originY: u, left: $(c), top: $(h), width: $(g), height: $(p), fill: Ui(i) ? i.toObject() : i, stroke: Ui(n) ? n.toObject() : n, strokeWidth: $(v), strokeDashArray: l && l.concat(), strokeLineCap: y, strokeDashOffset: x, strokeLineJoin: _, strokeUniform: S, strokeMiterLimit: $(C), scaleX: $(T), scaleY: $(D), angle: $(A), flipX: O, flipY: L, opacity: $(q), shadow: a && a.toObject(), visible: Z, backgroundColor: W, fillRule: z, paintFirst: F, globalCompositeOperation: tt, skewX: $(Q), skewY: $(et) }, e ? { clipPath: e } : null);
    return this.includeDefaultValues ? Mt : this._removeDefaultValues(Mt);
  }
  toDatalessObject(t) {
    return this.toObject(t);
  }
  _removeDefaultValues(t) {
    const e = this.constructor.getDefaults(), r = Object.keys(e).length > 0 ? e : Object.getPrototypeOf(this);
    return ki(t, ((s, i) => {
      if (i === B || i === ct || i === "type") return !0;
      const n = r[i];
      return s !== n && !(Array.isArray(s) && Array.isArray(n) && s.length === 0 && n.length === 0);
    }));
  }
  toString() {
    return "#<".concat(this.constructor.type, ">");
  }
  static _fromObject(t) {
    let e = X(t, Dl), r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { extraParam: s } = r, i = X(r, Pl);
    return As(e, i).then(((n) => s ? (delete n[s], new this(e[s], n)) : new this(n)));
  }
  static fromObject(t, e) {
    return this._fromObject(t, e);
  }
};
f(Wt, "stateProperties", fl), f(Wt, "cacheProperties", Zt), f(Wt, "ownDefaults", ml), f(Wt, "type", "FabricObject"), f(Wt, "colorProperties", [K, dt, "backgroundColor"]), f(Wt, "customProperties", []), k.setClass(Wt), k.setClass(Wt, "object");
const Ze = (o, t, e) => (r, s, i, n) => {
  const a = t(r, s, i, n);
  return a && en(o, m(m({}, sn(r, s, i, n)), e)), a;
};
function Qe(o) {
  return (t, e, r, s) => {
    const { target: i, originX: n, originY: a } = e, l = i.getRelativeCenterPoint(), c = i.translateToOriginPoint(l, n, a), h = o(t, e, r, s);
    return i.setPositionByOrigin(c, e.originX, e.originY), h;
  };
}
const co = Ze(fr, Qe(((o, t, e, r) => {
  const s = Di(t, t.originX, t.originY, e, r);
  if (N(t.originX) === N(M) || N(t.originX) === N(G) && s.x < 0 || N(t.originX) === N(B) && s.x > 0) {
    const { target: i } = t, n = i.strokeWidth / (i.strokeUniform ? i.scaleX : 1), a = rn(t) ? 2 : 1, l = i.width, c = Math.abs(s.x * a / i.scaleX) - n;
    return i.set("width", Math.max(c, 1)), l !== i.width;
  }
  return !1;
})));
function El(o, t, e, r, s) {
  r = r || {};
  const i = this.sizeX || r.cornerSize || s.cornerSize, n = this.sizeY || r.cornerSize || s.cornerSize, a = r.transparentCorners !== void 0 ? r.transparentCorners : s.transparentCorners, l = a ? dt : K, c = !a && (r.cornerStrokeColor || s.cornerStrokeColor);
  let h, d = t, u = e;
  o.save(), o.fillStyle = r.cornerColor || s.cornerColor || "", o.strokeStyle = r.cornerStrokeColor || s.cornerStrokeColor || "", i > n ? (h = i, o.scale(1, n / i), u = e * i / n) : n > i ? (h = n, o.scale(i / n, 1), d = t * n / i) : h = i, o.beginPath(), o.arc(d, u, h / 2, 0, ls, !1), o[l](), c && o.stroke(), o.restore();
}
function Ml(o, t, e, r, s) {
  r = r || {};
  const i = this.sizeX || r.cornerSize || s.cornerSize, n = this.sizeY || r.cornerSize || s.cornerSize, a = r.transparentCorners !== void 0 ? r.transparentCorners : s.transparentCorners, l = a ? dt : K, c = !a && (r.cornerStrokeColor || s.cornerStrokeColor), h = i / 2, d = n / 2;
  o.save(), o.fillStyle = r.cornerColor || s.cornerColor || "", o.strokeStyle = r.cornerStrokeColor || s.cornerStrokeColor || "", o.translate(t, e);
  const u = s.getTotalAngle();
  o.rotate(U(u)), o["".concat(l, "Rect")](-h, -d, i, n), c && o.strokeRect(-h, -d, i, n), o.restore();
}
class _t {
  constructor(t) {
    f(this, "visible", !0), f(this, "actionName", Es), f(this, "angle", 0), f(this, "x", 0), f(this, "y", 0), f(this, "offsetX", 0), f(this, "offsetY", 0), f(this, "sizeX", 0), f(this, "sizeY", 0), f(this, "touchSizeX", 0), f(this, "touchSizeY", 0), f(this, "cursorStyle", "crosshair"), f(this, "withConnection", !1), Object.assign(this, t);
  }
  shouldActivate(t, e, r, s) {
    var i;
    let { tl: n, tr: a, br: l, bl: c } = s;
    return ((i = e.canvas) === null || i === void 0 ? void 0 : i.getActiveObject()) === e && e.isControlVisible(t) && Y.isPointInPolygon(r, [n, a, l, c]);
  }
  getActionHandler(t, e, r) {
    return this.actionHandler;
  }
  getMouseDownHandler(t, e, r) {
    return this.mouseDownHandler;
  }
  getMouseUpHandler(t, e, r) {
    return this.mouseUpHandler;
  }
  cursorStyleHandler(t, e, r) {
    return e.cursorStyle;
  }
  getActionName(t, e, r) {
    return e.actionName;
  }
  getVisibility(t, e) {
    var r, s;
    return (r = (s = t._controlsVisibility) === null || s === void 0 ? void 0 : s[e]) !== null && r !== void 0 ? r : this.visible;
  }
  setVisibility(t, e, r) {
    this.visible = t;
  }
  positionHandler(t, e, r, s) {
    return new b(this.x * t.x + this.offsetX, this.y * t.y + this.offsetY).transform(e);
  }
  calcCornerCoords(t, e, r, s, i, n) {
    const a = Si([Sr(r, s), Ke({ angle: t }), Ti((i ? this.touchSizeX : this.sizeX) || e, (i ? this.touchSizeY : this.sizeY) || e)]);
    return { tl: new b(-0.5, -0.5).transform(a), tr: new b(0.5, -0.5).transform(a), br: new b(0.5, 0.5).transform(a), bl: new b(-0.5, 0.5).transform(a) };
  }
  render(t, e, r, s, i) {
    ((s = s || {}).cornerStyle || i.cornerStyle) === "circle" ? El.call(this, t, e, r, s, i) : Ml.call(this, t, e, r, s, i);
  }
}
const Al = (o, t, e) => e.lockRotation ? ps : t.cursorStyle, jl = Ze(Wo, Qe(((o, t, e, r) => {
  let { target: s, ex: i, ey: n, theta: a, originX: l, originY: c } = t;
  const h = s.translateToOriginPoint(s.getRelativeCenterPoint(), l, c);
  if (Ot(s, "lockRotation")) return !1;
  const d = Math.atan2(n - h.y, i - h.x), u = Math.atan2(r - h.y, e - h.x);
  let g = Kt(u - d + a);
  if (s.snapAngle && s.snapAngle > 0) {
    const v = s.snapAngle, y = s.snapThreshold || v, x = Math.ceil(g / v) * v, _ = Math.floor(g / v) * v;
    Math.abs(g - _) < y ? g = _ : Math.abs(g - x) < y && (g = x);
  }
  g < 0 && (g = 360 + g), g %= 360;
  const p = s.angle !== g;
  return s.angle = g, p;
})));
function fn(o, t) {
  const e = t.canvas, r = o[e.uniScaleKey];
  return e.uniformScaling && !r || !e.uniformScaling && r;
}
function mn(o, t, e) {
  const r = Ot(o, "lockScalingX"), s = Ot(o, "lockScalingY");
  if (r && s || !t && (r || s) && e || r && t === "x" || s && t === "y") return !0;
  const { width: i, height: n, strokeWidth: a } = o;
  return i === 0 && a === 0 && t !== "y" || n === 0 && a === 0 && t !== "x";
}
const Fl = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"], ar = (o, t, e) => {
  const r = fn(o, e);
  if (mn(e, t.x !== 0 && t.y === 0 ? "x" : t.x === 0 && t.y !== 0 ? "y" : "", r)) return ps;
  const s = on(e, t);
  return "".concat(Fl[s], "-resize");
};
function Mi(o, t, e, r) {
  let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
  const i = t.target, n = s.by, a = fn(o, i);
  let l, c, h, d, u, g;
  if (mn(i, n, a)) return !1;
  if (t.gestureScale) c = t.scaleX * t.gestureScale, h = t.scaleY * t.gestureScale;
  else {
    if (l = Di(t, t.originX, t.originY, e, r), u = n !== "y" ? Math.sign(l.x || t.signX || 1) : 1, g = n !== "x" ? Math.sign(l.y || t.signY || 1) : 1, t.signX || (t.signX = u), t.signY || (t.signY = g), Ot(i, "lockScalingFlip") && (t.signX !== u || t.signY !== g)) return !1;
    if (d = i._getTransformedDimensions(), a && !n) {
      const y = Math.abs(l.x) + Math.abs(l.y), { original: x } = t, _ = y / (Math.abs(d.x * x.scaleX / i.scaleX) + Math.abs(d.y * x.scaleY / i.scaleY));
      c = x.scaleX * _, h = x.scaleY * _;
    } else c = Math.abs(l.x * i.scaleX / d.x), h = Math.abs(l.y * i.scaleY / d.y);
    rn(t) && (c *= 2, h *= 2), t.signX !== u && n !== "y" && (t.originX = Ji(t.originX), c *= -1, t.signX = u), t.signY !== g && n !== "x" && (t.originY = Ji(t.originY), h *= -1, t.signY = g);
  }
  const p = i.scaleX, v = i.scaleY;
  return n ? (n === "x" && i.set(ut, c), n === "y" && i.set(bt, h)) : (!Ot(i, "lockScalingX") && i.set(ut, c), !Ot(i, "lockScalingY") && i.set(bt, h)), p !== i.scaleX || v !== i.scaleY;
}
const Er = Ze(Ps, Qe(((o, t, e, r) => Mi(o, t, e, r)))), Ll = Ze(Ps, Qe(((o, t, e, r) => Mi(o, t, e, r, { by: "x" })))), Bl = Ze(Ps, Qe(((o, t, e, r) => Mi(o, t, e, r, { by: "y" })))), Il = ["target", "ex", "ey", "skewingSide"], qs = { x: { counterAxis: "y", scale: ut, skew: Ne, lockSkewing: "lockSkewingX", origin: "originX", flip: "flipX" }, y: { counterAxis: "x", scale: bt, skew: qe, lockSkewing: "lockSkewingY", origin: "originY", flip: "flipY" } }, Rl = ["ns", "nesw", "ew", "nwse"], zl = (o, t, e) => {
  if (t.x !== 0 && Ot(e, "lockSkewingY") || t.y !== 0 && Ot(e, "lockSkewingX")) return ps;
  const r = on(e, t) % 4;
  return "".concat(Rl[r], "-resize");
};
function vn(o, t, e, r, s) {
  const { target: i } = e, { counterAxis: n, origin: a, lockSkewing: l, skew: c, flip: h } = qs[o];
  if (Ot(i, l)) return !1;
  const { origin: d, flip: u } = qs[n], g = N(e[d]) * (i[u] ? -1 : 1), p = -Math.sign(g) * (i[h] ? -1 : 1), v = 0.5 * -((i[c] === 0 && Di(e, M, M, r, s)[o] > 0 || i[c] > 0 ? 1 : -1) * p) + 0.5;
  return Ze($o, Qe(((x, _, S, C) => (function(T, D, A) {
    let { target: O, ex: L, ey: q, skewingSide: Z } = D, W = X(D, Il);
    const { skew: z } = qs[T], F = A.subtract(new b(L, q)).divide(new b(O.scaleX, O.scaleY))[T], tt = O[z], Q = W[z], et = Math.tan(U(Q)), $ = T === "y" ? O._getTransformedDimensions({ scaleX: 1, scaleY: 1, skewX: 0 }).x : O._getTransformedDimensions({ scaleX: 1, scaleY: 1 }).y, Mt = 2 * F * Z / Math.max($, 1) + et, zt = Kt(Math.atan(Mt));
    O.set(z, zt);
    const Or = tt !== O[z];
    if (Or && T === "y") {
      const { skewX: Ws, scaleX: rr } = O, ee = O._getTransformedDimensions({ skewY: tt }), Dr = O._getTransformedDimensions(), me = Ws !== 0 ? ee.x / Dr.x : 1;
      me !== 1 && O.set(ut, me * rr);
    }
    return Or;
  })(o, _, new b(S, C)))))(t, m(m({}, e), {}, { [a]: v, skewingSide: p }), r, s);
}
const Wl = (o, t, e, r) => vn("x", o, t, e, r), $l = (o, t, e, r) => vn("y", o, t, e, r);
function Ls(o, t) {
  return o[t.canvas.altActionKey];
}
const Mr = (o, t, e) => {
  const r = Ls(o, e);
  return t.x === 0 ? r ? Ne : bt : t.y === 0 ? r ? qe : ut : "";
}, Ee = (o, t, e) => Ls(o, e) ? zl(0, t, e) : ar(o, t, e), ho = (o, t, e, r) => Ls(o, t.target) ? $l(o, t, e, r) : Ll(o, t, e, r), uo = (o, t, e, r) => Ls(o, t.target) ? Wl(o, t, e, r) : Bl(o, t, e, r), bn = () => ({ ml: new _t({ x: -0.5, y: 0, cursorStyleHandler: Ee, actionHandler: ho, getActionName: Mr }), mr: new _t({ x: 0.5, y: 0, cursorStyleHandler: Ee, actionHandler: ho, getActionName: Mr }), mb: new _t({ x: 0, y: 0.5, cursorStyleHandler: Ee, actionHandler: uo, getActionName: Mr }), mt: new _t({ x: 0, y: -0.5, cursorStyleHandler: Ee, actionHandler: uo, getActionName: Mr }), tl: new _t({ x: -0.5, y: -0.5, cursorStyleHandler: ar, actionHandler: Er }), tr: new _t({ x: 0.5, y: -0.5, cursorStyleHandler: ar, actionHandler: Er }), bl: new _t({ x: -0.5, y: 0.5, cursorStyleHandler: ar, actionHandler: Er }), br: new _t({ x: 0.5, y: 0.5, cursorStyleHandler: ar, actionHandler: Er }), mtr: new _t({ x: 0, y: -0.5, actionHandler: jl, cursorStyleHandler: Al, offsetY: -40, withConnection: !0, actionName: wi }) }), Vl = () => ({ mr: new _t({ x: 0.5, y: 0, actionHandler: co, cursorStyleHandler: Ee, actionName: fr }), ml: new _t({ x: -0.5, y: 0, actionHandler: co, cursorStyleHandler: Ee, actionName: fr }) }), Xl = () => m(m({}, bn()), Vl());
class yr extends Wt {
  static getDefaults() {
    return m(m({}, super.getDefaults()), yr.ownDefaults);
  }
  constructor(t) {
    super(), Object.assign(this, this.constructor.createControls(), yr.ownDefaults), this.setOptions(t);
  }
  static createControls() {
    return { controls: bn() };
  }
  _updateCacheCanvas() {
    const t = this.canvas;
    if (this.noScaleCache && t && t._currentTransform) {
      const e = t._currentTransform, r = e.target, s = e.action;
      if (this === r && s && s.startsWith(Es)) return !1;
    }
    return super._updateCacheCanvas();
  }
  getActiveControl() {
    const t = this.__corner;
    return t ? { key: t, control: this.controls[t], coord: this.oCoords[t] } : void 0;
  }
  findControl(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (!this.hasControls || !this.canvas) return;
    this.__corner = void 0;
    const r = Object.entries(this.oCoords);
    for (let s = r.length - 1; s >= 0; s--) {
      const [i, n] = r[s], a = this.controls[i];
      if (a.shouldActivate(i, this, t, e ? n.touchCorner : n.corner)) return this.__corner = i, { key: i, control: a, coord: this.oCoords[i] };
    }
  }
  calcOCoords() {
    const t = this.getViewportTransform(), e = this.getCenterPoint(), r = Sr(e.x, e.y), s = Ke({ angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0) }), i = st(r, s), n = st(t, i), a = st(n, [1 / t[0], 0, 0, 1 / t[3], 0, 0]), l = this.group ? us(this.calcTransformMatrix()) : void 0;
    l && (l.scaleX = Math.abs(l.scaleX), l.scaleY = Math.abs(l.scaleY));
    const c = this._calculateCurrentDimensions(l), h = {};
    return this.forEachControl(((d, u) => {
      const g = d.positionHandler(c, a, this, d);
      h[u] = Object.assign(g, this._calcCornerCoords(d, g));
    })), h;
  }
  _calcCornerCoords(t, e) {
    const r = this.getTotalAngle();
    return { corner: t.calcCornerCoords(r, this.cornerSize, e.x, e.y, !1, this), touchCorner: t.calcCornerCoords(r, this.touchCornerSize, e.x, e.y, !0, this) };
  }
  setCoords() {
    super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords());
  }
  forEachControl(t) {
    for (const e in this.controls) t(this.controls[e], e, this);
  }
  drawSelectionBackground(t) {
    if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
    t.save();
    const e = this.getRelativeCenterPoint(), r = this._calculateCurrentDimensions(), s = this.getViewportTransform();
    t.translate(e.x, e.y), t.scale(1 / s[0], 1 / s[3]), t.rotate(U(this.angle)), t.fillStyle = this.selectionBackgroundColor, t.fillRect(-r.x / 2, -r.y / 2, r.x, r.y), t.restore();
  }
  strokeBorders(t, e) {
    t.strokeRect(-e.x / 2, -e.y / 2, e.x, e.y);
  }
  _drawBorders(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = m({ hasControls: this.hasControls, borderColor: this.borderColor, borderDashArray: this.borderDashArray }, r);
    t.save(), t.strokeStyle = s.borderColor, this._setLineDash(t, s.borderDashArray), this.strokeBorders(t, e), s.hasControls && this.drawControlsConnectingLines(t, e), t.restore();
  }
  _renderControls(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { hasBorders: r, hasControls: s } = this, i = m({ hasBorders: r, hasControls: s }, e), n = this.getViewportTransform(), a = i.hasBorders, l = i.hasControls, c = st(n, this.calcTransformMatrix()), h = us(c);
    t.save(), t.translate(h.translateX, h.translateY), t.lineWidth = this.borderScaleFactor, this.group === this.parent && (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (h.angle -= 180), t.rotate(U(this.group ? h.angle : this.angle)), a && this.drawBorders(t, h, e), l && this.drawControls(t, e), t.restore();
  }
  drawBorders(t, e, r) {
    let s;
    if (r && r.forActiveSelection || this.group) {
      const i = Oi(this.width, this.height, Ms(e)), n = this.isStrokeAccountedForInDimensions() ? Ci : (this.strokeUniform ? new b().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new b(e.scaleX, e.scaleY)).scalarMultiply(this.strokeWidth);
      s = i.add(n).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding);
    } else s = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
    this._drawBorders(t, s, r);
  }
  drawControlsConnectingLines(t, e) {
    let r = !1;
    t.beginPath(), this.forEachControl(((s, i) => {
      s.withConnection && s.getVisibility(this, i) && (r = !0, t.moveTo(s.x * e.x, s.y * e.y), t.lineTo(s.x * e.x + s.offsetX, s.y * e.y + s.offsetY));
    })), r && t.stroke();
  }
  drawControls(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    t.save();
    const r = this.getCanvasRetinaScaling(), { cornerStrokeColor: s, cornerDashArray: i, cornerColor: n } = this, a = m({ cornerStrokeColor: s, cornerDashArray: i, cornerColor: n }, e);
    t.setTransform(r, 0, 0, r, 0, 0), t.strokeStyle = t.fillStyle = a.cornerColor, this.transparentCorners || (t.strokeStyle = a.cornerStrokeColor), this._setLineDash(t, a.cornerDashArray), this.forEachControl(((l, c) => {
      if (l.getVisibility(this, c)) {
        const h = this.oCoords[c];
        l.render(t, h.x, h.y, a, this);
      }
    })), t.restore();
  }
  isControlVisible(t) {
    return this.controls[t] && this.controls[t].getVisibility(this, t);
  }
  setControlVisible(t, e) {
    this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t] = e;
  }
  setControlsVisibility() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Object.entries(t).forEach(((e) => {
      let [r, s] = e;
      return this.setControlVisible(r, s);
    }));
  }
  clearContextTop(t) {
    if (!this.canvas) return;
    const e = this.canvas.contextTop;
    if (!e) return;
    const r = this.canvas.viewportTransform;
    e.save(), e.transform(r[0], r[1], r[2], r[3], r[4], r[5]), this.transform(e);
    const s = this.width + 4, i = this.height + 4;
    return e.clearRect(-s / 2, -i / 2, s, i), t || e.restore(), e;
  }
  onDeselect(t) {
    return !1;
  }
  onSelect(t) {
    return !1;
  }
  shouldStartDragging(t) {
    return !1;
  }
  onDragStart(t) {
    return !1;
  }
  canDrop(t) {
    return !1;
  }
  renderDragSourceEffect(t) {
  }
  renderDropTargetEffect(t) {
  }
}
function yn(o, t) {
  return t.forEach(((e) => {
    Object.getOwnPropertyNames(e.prototype).forEach(((r) => {
      r !== "constructor" && Object.defineProperty(o.prototype, r, Object.getOwnPropertyDescriptor(e.prototype, r) || /* @__PURE__ */ Object.create(null));
    }));
  })), o;
}
f(yr, "ownDefaults", { noScaleCache: !0, lockMovementX: !1, lockMovementY: !1, lockRotation: !1, lockScalingX: !1, lockScalingY: !1, lockSkewingX: !1, lockSkewingY: !1, lockScalingFlip: !1, cornerSize: 13, touchCornerSize: 24, transparentCorners: !0, cornerColor: "rgb(178,204,255)", cornerStrokeColor: "", cornerStyle: "rect", cornerDashArray: null, hasControls: !0, borderColor: "rgb(178,204,255)", borderDashArray: null, borderOpacityWhenMoving: 0.4, borderScaleFactor: 1, hasBorders: !0, selectionBackgroundColor: "", selectable: !0, evented: !0, perPixelTargetFind: !1, activeOn: "down", hoverCursor: null, moveCursor: null });
class ot extends yr {
}
yn(ot, [nn]), k.setClass(ot), k.setClass(ot, "object");
const Yl = (o, t, e, r) => {
  const s = 2 * (r = Math.round(r)) + 1, { data: i } = o.getImageData(t - r, e - r, s, s);
  for (let n = 3; n < i.length; n += 4)
    if (i[n] > 0) return !1;
  return !0;
};
class xn {
  constructor(t) {
    this.options = t, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new b(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new b(1 / this.options.scaleX, 1 / this.options.scaleY) : new b(1, 1);
  }
  createSideVector(t, e) {
    const r = ai(t, e);
    return this.options.strokeUniform ? r.multiply(this.scale) : r;
  }
  projectOrthogonally(t, e, r) {
    return this.applySkew(t.add(this.calcOrthogonalProjection(t, e, r)));
  }
  isSkewed() {
    return this.options.skewX !== 0 || this.options.skewY !== 0;
  }
  applySkew(t) {
    const e = new b(t);
    return e.y += e.x * Math.tan(U(this.options.skewY)), e.x += e.y * Math.tan(U(this.options.skewX)), e;
  }
  scaleUnitVector(t, e) {
    return t.multiply(this.strokeUniformScalar).scalarMultiply(e);
  }
}
const Hl = new b();
class Be extends xn {
  static getOrthogonalRotationFactor(t, e) {
    const r = e ? ci(t, e) : gl(t);
    return Math.abs(r) < Cr ? -1 : 1;
  }
  constructor(t, e, r, s) {
    super(s), f(this, "AB", void 0), f(this, "AC", void 0), f(this, "alpha", void 0), f(this, "bisector", void 0), this.A = new b(t), this.B = new b(e), this.C = new b(r), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = ci(this.AB, this.AC), this.bisector = Pi(un(this.AB.eq(Hl) ? this.AC : this.AB, this.alpha / 2));
  }
  calcOrthogonalProjection(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.strokeProjectionMagnitude;
    const s = this.createSideVector(t, e), i = gn(s), n = Be.getOrthogonalRotationFactor(i, this.bisector);
    return this.scaleUnitVector(i, r * n);
  }
  projectBevel() {
    const t = [];
    return (this.alpha % ls == 0 ? [this.B] : [this.B, this.C]).forEach(((e) => {
      t.push(this.projectOrthogonally(this.A, e)), t.push(this.projectOrthogonally(this.A, e, -this.strokeProjectionMagnitude));
    })), t;
  }
  projectMiter() {
    const t = [], e = Math.abs(this.alpha), r = 1 / Math.sin(e / 2), s = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * r), i = this.options.strokeUniform ? li(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
    return li(s) / this.strokeProjectionMagnitude <= i && t.push(this.applySkew(this.A.add(s))), t.push(...this.projectBevel()), t;
  }
  projectRoundNoSkew(t, e) {
    const r = [], s = new b(Be.getOrthogonalRotationFactor(this.bisector), Be.getOrthogonalRotationFactor(new b(this.bisector.y, this.bisector.x)));
    return [new b(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s), new b(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(s)].forEach(((i) => {
      no(i, t, e) && r.push(this.A.add(i));
    })), r;
  }
  projectRoundWithSkew(t, e) {
    const r = [], { skewX: s, skewY: i, scaleX: n, scaleY: a, strokeUniform: l } = this.options, c = new b(Math.tan(U(s)), Math.tan(U(i))), h = this.strokeProjectionMagnitude, d = l ? h / a / Math.sqrt(1 / a ** 2 + 1 / n ** 2 * c.y ** 2) : h / Math.sqrt(1 + c.y ** 2), u = new b(Math.sqrt(Math.max(h ** 2 - d ** 2, 0)), d), g = l ? h / Math.sqrt(1 + c.x ** 2 * (1 / a) ** 2 / (1 / n + 1 / n * c.x * c.y) ** 2) : h / Math.sqrt(1 + c.x ** 2 / (1 + c.x * c.y) ** 2), p = new b(g, Math.sqrt(Math.max(h ** 2 - g ** 2, 0)));
    return [p, p.scalarMultiply(-1), u, u.scalarMultiply(-1)].map(((v) => this.applySkew(l ? v.multiply(this.strokeUniformScalar) : v))).forEach(((v) => {
      no(v, t, e) && r.push(this.applySkew(this.A).add(v));
    })), r;
  }
  projectRound() {
    const t = [];
    t.push(...this.projectBevel());
    const e = this.alpha % ls == 0, r = this.applySkew(this.A), s = t[e ? 0 : 2].subtract(r), i = t[e ? 1 : 0].subtract(r), n = e ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)), a = gr(s, n) > 0, l = a ? s : i, c = a ? i : s;
    return this.isSkewed() ? t.push(...this.projectRoundWithSkew(l, c)) : t.push(...this.projectRoundNoSkew(l, c)), t;
  }
  projectPoints() {
    switch (this.options.strokeLineJoin) {
      case "miter":
        return this.projectMiter();
      case "round":
        return this.projectRound();
      default:
        return this.projectBevel();
    }
  }
  project() {
    return this.projectPoints().map(((t) => ({ originPoint: this.A, projectedPoint: t, angle: this.alpha, bisector: this.bisector })));
  }
}
class go extends xn {
  constructor(t, e, r) {
    super(r), this.A = new b(t), this.T = new b(e);
  }
  calcOrthogonalProjection(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.strokeProjectionMagnitude;
    const s = this.createSideVector(t, e);
    return this.scaleUnitVector(gn(s), r);
  }
  projectButt() {
    return [this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude), this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)];
  }
  projectRound() {
    const t = [];
    if (!this.isSkewed() && this.A.eq(this.T)) {
      const e = new b(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t.push(this.applySkew(this.A.add(e)), this.applySkew(this.A.subtract(e)));
    } else t.push(...new Be(this.A, this.T, this.T, this.options).projectRound());
    return t;
  }
  projectSquare() {
    const t = [];
    if (this.A.eq(this.T)) {
      const e = new b(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t.push(this.A.add(e), this.A.subtract(e));
    } else {
      const e = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude), r = this.scaleUnitVector(Pi(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude), s = this.A.add(r);
      t.push(s.add(e), s.subtract(e));
    }
    return t.map(((e) => this.applySkew(e)));
  }
  projectPoints() {
    switch (this.options.strokeLineCap) {
      case "round":
        return this.projectRound();
      case "square":
        return this.projectSquare();
      default:
        return this.projectButt();
    }
  }
  project() {
    return this.projectPoints().map(((t) => ({ originPoint: this.A, projectedPoint: t })));
  }
}
const Gl = function(o, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const r = [];
  if (o.length === 0) return r;
  const s = o.reduce(((i, n) => (i[i.length - 1].eq(n) || i.push(new b(n)), i)), [new b(o[0])]);
  if (s.length === 1) e = !0;
  else if (!e) {
    const i = s[0], n = ((a, l) => {
      for (let c = a.length - 1; c >= 0; c--) if (l(a[c], c, a)) return c;
      return -1;
    })(s, ((a) => !a.eq(i)));
    s.splice(n + 1);
  }
  return s.forEach(((i, n, a) => {
    let l, c;
    n === 0 ? (c = a[1], l = e ? i : a[a.length - 1]) : n === a.length - 1 ? (l = a[n - 1], c = e ? i : a[0]) : (l = a[n - 1], c = a[n + 1]), e && a.length === 1 ? r.push(...new go(i, i, t).project()) : !e || n !== 0 && n !== a.length - 1 ? r.push(...new Be(i, l, c, t).project()) : r.push(...new go(i, n === 0 ? c : l, t).project());
  })), r;
}, Ai = (o) => {
  const t = {};
  return Object.keys(o).forEach(((e) => {
    t[e] = {}, Object.keys(o[e]).forEach(((r) => {
      t[e][r] = m({}, o[e][r]);
    }));
  })), t;
}, Ul = (o) => o.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
let or;
const ji = (o) => {
  if (or || or || (or = "Intl" in Ds() && "Segmenter" in Intl && new Intl.Segmenter(void 0, { granularity: "grapheme" })), or) {
    const t = or.segment(o);
    return Array.from(t).map(((e) => {
      let { segment: r } = e;
      return r;
    }));
  }
  return Nl(o);
}, Nl = (o) => {
  const t = [];
  for (let e, r = 0; r < o.length; r++) (e = ql(o, r)) !== !1 && t.push(e);
  return t;
}, ql = (o, t) => {
  const e = o.charCodeAt(t);
  if (isNaN(e)) return "";
  if (e < 55296 || e > 57343) return o.charAt(t);
  if (55296 <= e && e <= 56319) {
    if (o.length <= t + 1) throw "High surrogate without following low surrogate";
    const s = o.charCodeAt(t + 1);
    if (56320 > s || s > 57343) throw "High surrogate without following low surrogate";
    return o.charAt(t) + o.charAt(t + 1);
  }
  if (t === 0) throw "Low surrogate without preceding high surrogate";
  const r = o.charCodeAt(t - 1);
  if (55296 > r || r > 56319) throw "Low surrogate without preceding high surrogate";
  return !1;
}, Fi = function(o, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  return o.fill !== t.fill || o.stroke !== t.stroke || o.strokeWidth !== t.strokeWidth || o.fontSize !== t.fontSize || o.fontFamily !== t.fontFamily || o.fontWeight !== t.fontWeight || o.fontStyle !== t.fontStyle || o.textDecorationThickness !== t.textDecorationThickness || o.textBackgroundColor !== t.textBackgroundColor || o.deltaY !== t.deltaY || e && (o.overline !== t.overline || o.underline !== t.underline || o.linethrough !== t.linethrough);
}, Kl = (o, t) => {
  const e = t.split(`
`), r = [];
  let s = -1, i = {};
  o = Ai(o);
  for (let n = 0; n < e.length; n++) {
    const a = ji(e[n]);
    if (o[n]) for (let l = 0; l < a.length; l++) {
      s++;
      const c = o[n][l];
      c && Object.keys(c).length > 0 && (Fi(i, c, !0) ? r.push({ start: s, end: s + 1, style: c }) : r[r.length - 1].end++), i = c || {};
    }
    else s += a.length, i = {};
  }
  return r;
}, Jl = (o, t) => {
  if (!Array.isArray(o)) return Ai(o);
  const e = t.split(_i), r = {};
  let s = -1, i = 0;
  for (let n = 0; n < e.length; n++) {
    const a = ji(e[n]);
    for (let l = 0; l < a.length; l++) s++, o[i] && o[i].start <= s && s < o[i].end && (r[n] = r[n] || {}, r[n][l] = m({}, o[i].style), s === o[i].end - 1 && i++);
  }
  return r;
}, ge = ["display", "transform", K, "fill-opacity", "fill-rule", "opacity", dt, "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"];
function po(o, t) {
  const e = o.nodeName, r = o.getAttribute("class"), s = o.getAttribute("id"), i = "(?![a-zA-Z\\-]+)";
  let n;
  if (n = new RegExp("^" + e, "i"), t = t.replace(n, ""), s && t.length && (n = new RegExp("#" + s + i, "i"), t = t.replace(n, "")), r && t.length) {
    const a = r.split(" ");
    for (let l = a.length; l--; ) n = new RegExp("\\." + a[l] + i, "i"), t = t.replace(n, "");
  }
  return t.length === 0;
}
function Zl(o, t) {
  let e = !0;
  const r = po(o, t.pop());
  return r && t.length && (e = (function(s, i) {
    let n, a = !0;
    for (; s.parentElement && s.parentElement.nodeType === 1 && i.length; ) a && (n = i.pop()), a = po(s = s.parentElement, n);
    return i.length === 0;
  })(o, t)), r && e && t.length === 0;
}
const Ql = (o) => {
  var t;
  return (t = dl[o]) !== null && t !== void 0 ? t : o;
}, tc = new RegExp("(".concat(kt, ")"), "gi"), ec = (o) => fs(o.replace(tc, " $1 ").replace(/,/gi, " "));
var fo, mo, vo, bo, yo, xo, _o;
const nt = "(".concat(kt, ")"), rc = String.raw(fo || (fo = Rt(["(skewX)(", ")"], ["(skewX)\\(", "\\)"])), nt), sc = String.raw(mo || (mo = Rt(["(skewY)(", ")"], ["(skewY)\\(", "\\)"])), nt), ic = String.raw(vo || (vo = Rt(["(rotate)(", "(?: ", " ", ")?)"], ["(rotate)\\(", "(?: ", " ", ")?\\)"])), nt, nt, nt), oc = String.raw(bo || (bo = Rt(["(scale)(", "(?: ", ")?)"], ["(scale)\\(", "(?: ", ")?\\)"])), nt, nt), nc = String.raw(yo || (yo = Rt(["(translate)(", "(?: ", ")?)"], ["(translate)\\(", "(?: ", ")?\\)"])), nt, nt), ac = String.raw(xo || (xo = Rt(["(matrix)(", " ", " ", " ", " ", " ", ")"], ["(matrix)\\(", " ", " ", " ", " ", " ", "\\)"])), nt, nt, nt, nt, nt, nt), Li = "(?:".concat(ac, "|").concat(nc, "|").concat(ic, "|").concat(oc, "|").concat(rc, "|").concat(sc, ")"), lc = "(?:".concat(Li, "*)"), cc = String.raw(_o || (_o = Rt(["^s*(?:", "?)s*$"], ["^\\s*(?:", "?)\\s*$"])), lc), hc = new RegExp(cc), dc = new RegExp(Li), uc = new RegExp(Li, "g");
function hi(o) {
  const t = [];
  if (!(o = ec(o).replace(/\s*([()])\s*/gi, "$1")) || o && !hc.test(o)) return [...at];
  for (const e of o.matchAll(uc)) {
    const r = dc.exec(e[0]);
    if (!r) continue;
    let s = at;
    const i = r.filter(((p) => !!p)), [, n, ...a] = i, [l, c, h, d, u, g] = a.map(((p) => parseFloat(p)));
    switch (n) {
      case "translate":
        s = Sr(l, c);
        break;
      case wi:
        s = Ke({ angle: l }, { x: c, y: h });
        break;
      case Es:
        s = Ti(l, c);
        break;
      case Ne:
        s = No(l);
        break;
      case qe:
        s = qo(l);
        break;
      case "matrix":
        s = [l, c, h, d, u, g];
    }
    t.push(s);
  }
  return Si(t);
}
function gc(o, t, e, r) {
  const s = Array.isArray(t);
  let i, n = t;
  if (o !== K && o !== dt || t !== ht) {
    if (o === "strokeUniform") return t === "non-scaling-stroke";
    if (o === "strokeDashArray") n = t === ht ? null : t.replace(/,/g, " ").split(/\s+/).map(parseFloat);
    else if (o === "transformMatrix") n = e && e.transformMatrix ? st(e.transformMatrix, hi(t)) : hi(t);
    else if (o === "visible") n = t !== ht && t !== "hidden", e && e.visible === !1 && (n = !1);
    else if (o === "opacity") n = parseFloat(t), e && e.opacity !== void 0 && (n *= e.opacity);
    else if (o === "textAnchor") n = t === "start" ? B : t === "end" ? G : M;
    else if (o === "charSpacing" || o === Se) i = Le(t, r) / r * 1e3;
    else if (o === "paintFirst") {
      const a = t.indexOf(K), l = t.indexOf(dt);
      n = K, (a > -1 && l > -1 && l < a || a === -1 && l > -1) && (n = dt);
    } else {
      if (o === "href" || o === "xlink:href" || o === "font" || o === "id") return t;
      if (o === "imageSmoothing") return t === "optimizeQuality";
      i = s ? t.map(Le) : Le(t, r);
    }
  } else n = "";
  return !s && isNaN(i) ? n : i;
}
function pc(o, t) {
  const e = o.match(hl);
  if (!e) return;
  const r = e[1], s = e[3], i = e[4], n = e[5], a = e[6];
  r && (t.fontStyle = r), s && (t.fontWeight = isNaN(parseFloat(s)) ? s : parseFloat(s)), i && (t.fontSize = Le(i)), a && (t.fontFamily = a), n && (t.lineHeight = n === "normal" ? 1 : n);
}
function fc(o, t) {
  o.replace(/;\s*$/, "").split(";").forEach(((e) => {
    if (!e) return;
    const [r, s] = e.split(":");
    t[r.trim().toLowerCase()] = s.trim();
  }));
}
function mc(o) {
  const t = {}, e = o.getAttribute("style");
  return e && (typeof e == "string" ? fc(e, t) : (function(r, s) {
    Object.entries(r).forEach(((i) => {
      let [n, a] = i;
      a !== void 0 && (s[n.toLowerCase()] = a);
    }));
  })(e, t)), t;
}
const vc = { stroke: "strokeOpacity", fill: "fillOpacity" };
function Qt(o, t, e) {
  if (!o) return {};
  let r, s = {}, i = xi;
  o.parentNode && oo.test(o.parentNode.nodeName) && (s = Qt(o.parentElement, t, e), s.fontSize && (r = i = Le(s.fontSize)));
  const n = m(m(m({}, t.reduce(((c, h) => {
    const d = o.getAttribute(h);
    return d && (c[h] = d), c;
  }), {})), (function(c) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = {};
    for (const u in h) Zl(c, u.split(" ")) && (d = m(m({}, d), h[u]));
    return d;
  })(o, e)), mc(o));
  n[Us] && o.setAttribute(Us, n[Us]), n[Gs] && (r = Le(n[Gs], i), n[Gs] = "".concat(r));
  const a = {};
  for (const c in n) {
    const h = Ql(c), d = gc(h, n[c], s, r);
    a[h] = d;
  }
  a && a.font && pc(a.font, a);
  const l = m(m({}, s), a);
  return oo.test(o.nodeName) ? l : (function(c) {
    const h = ot.getDefaults();
    return Object.entries(vc).forEach(((d) => {
      let [u, g] = d;
      if (c[g] === void 0 || c[u] === "") return;
      if (c[u] === void 0) {
        if (!h[u]) return;
        c[u] = h[u];
      }
      if (c[u].indexOf("url(") === 0) return;
      const p = new I(c[u]);
      c[u] = p.setAlpha(V(p.getAlpha() * c[g], 2)).toRgba();
    })), c;
  })(l);
}
const bc = ["left", "top", "width", "height", "visible"], _n = ["rx", "ry"];
class Ct extends ot {
  static getDefaults() {
    return m(m({}, super.getDefaults()), Ct.ownDefaults);
  }
  constructor(t) {
    super(), Object.assign(this, Ct.ownDefaults), this.setOptions(t), this._initRxRy();
  }
  _initRxRy() {
    const { rx: t, ry: e } = this;
    t && !e ? this.ry = t : e && !t && (this.rx = e);
  }
  _render(t) {
    const { width: e, height: r } = this, s = -e / 2, i = -r / 2, n = this.rx ? Math.min(this.rx, e / 2) : 0, a = this.ry ? Math.min(this.ry, r / 2) : 0, l = n !== 0 || a !== 0;
    t.beginPath(), t.moveTo(s + n, i), t.lineTo(s + e - n, i), l && t.bezierCurveTo(s + e - se * n, i, s + e, i + se * a, s + e, i + a), t.lineTo(s + e, i + r - a), l && t.bezierCurveTo(s + e, i + r - se * a, s + e - se * n, i + r, s + e - n, i + r), t.lineTo(s + n, i + r), l && t.bezierCurveTo(s + se * n, i + r, s, i + r - se * a, s, i + r - a), t.lineTo(s, i + a), l && t.bezierCurveTo(s, i + se * a, s + se * n, i, s + n, i), t.closePath(), this._renderPaintInOrder(t);
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return super.toObject([..._n, ...t]);
  }
  _toSVG() {
    const { width: t, height: e, rx: r, ry: s } = this;
    return ["<rect ", "COMMON_PARTS", 'x="'.concat(-t / 2, '" y="').concat(-e / 2, '" rx="').concat(r, '" ry="').concat(s, '" width="').concat(t, '" height="').concat(e, `" />
`)];
  }
  static async fromElement(t, e, r) {
    const s = Qt(t, this.ATTRIBUTE_NAMES, r), { left: i = 0, top: n = 0, width: a = 0, height: l = 0, visible: c = !0 } = s, h = X(s, bc);
    return new this(m(m(m({}, e), h), {}, { left: i, top: n, width: a, height: l, visible: !!(c && a && l) }));
  }
}
f(Ct, "type", "Rect"), f(Ct, "cacheProperties", [...Zt, ..._n]), f(Ct, "ownDefaults", { rx: 0, ry: 0 }), f(Ct, "ATTRIBUTE_NAMES", [...ge, "x", "y", "rx", "ry", "width", "height"]), k.setClass(Ct), k.setSVGClass(Ct);
const Xt = "initialization", vs = "added", Bi = "removed", bs = "imperative", wn = (o, t) => {
  const { strokeUniform: e, strokeWidth: r, width: s, height: i, group: n } = t, a = n && n !== o ? js(n.calcTransformMatrix(), o.calcTransformMatrix()) : null, l = a ? t.getRelativeCenterPoint().transform(a) : t.getRelativeCenterPoint(), c = !t.isStrokeAccountedForInDimensions(), h = e && c ? sl(new b(r, r), void 0, o.calcTransformMatrix()) : Ci, d = !e && c ? r : 0, u = Oi(s + d, i + d, Si([a, t.calcOwnMatrix()], !0)).add(h).scalarDivide(2);
  return [l.subtract(u), l.add(u)];
};
class Bs {
  calcLayoutResult(t, e) {
    if (this.shouldPerformLayout(t)) return this.calcBoundingBox(e, t);
  }
  shouldPerformLayout(t) {
    let { type: e, prevStrategy: r, strategy: s } = t;
    return e === Xt || e === bs || !!r && s !== r;
  }
  shouldLayoutClipPath(t) {
    let { type: e, target: { clipPath: r } } = t;
    return e !== Xt && r && !r.absolutePositioned;
  }
  getInitialSize(t, e) {
    return e.size;
  }
  calcBoundingBox(t, e) {
    const { type: r, target: s } = e;
    if (r === bs && e.overrides) return e.overrides;
    if (t.length === 0) return;
    const { left: i, top: n, width: a, height: l } = Ht(t.map(((d) => wn(s, d))).reduce(((d, u) => d.concat(u)), [])), c = new b(a, l), h = new b(i, n).add(c.scalarDivide(2));
    if (r === Xt) {
      const d = this.getInitialSize(e, { size: c, center: h });
      return { center: h, relativeCorrection: new b(0, 0), size: d };
    }
    return { center: h.transform(s.calcOwnMatrix()), size: c };
  }
}
f(Bs, "type", "strategy");
class di extends Bs {
  shouldPerformLayout(t) {
    return !0;
  }
}
f(di, "type", "fit-content"), k.setClass(di);
const yc = ["strategy"], xc = ["target", "strategy", "bubbles", "prevStrategy"], Cn = "layoutManager";
class xr {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new di();
    f(this, "strategy", void 0), this.strategy = t, this._subscriptions = /* @__PURE__ */ new Map();
  }
  performLayout(t) {
    const e = m(m({ bubbles: !0, strategy: this.strategy }, t), {}, { prevStrategy: this._prevLayoutStrategy, stopPropagation() {
      this.bubbles = !1;
    } });
    this.onBeforeLayout(e);
    const r = this.getLayoutResult(e);
    r && this.commitLayout(e, r), this.onAfterLayout(e, r), this._prevLayoutStrategy = e.strategy;
  }
  attachHandlers(t, e) {
    const { target: r } = e;
    return [hs, zo, fr, Wo, Ps, $o, cs, Va, Xa].map(((s) => t.on(s, ((i) => this.performLayout(s === hs ? { type: "object_modified", trigger: s, e: i, target: r } : { type: "object_modifying", trigger: s, e: i, target: r })))));
  }
  subscribe(t, e) {
    this.unsubscribe(t, e);
    const r = this.attachHandlers(t, e);
    this._subscriptions.set(t, r);
  }
  unsubscribe(t, e) {
    (this._subscriptions.get(t) || []).forEach(((r) => r())), this._subscriptions.delete(t);
  }
  unsubscribeTargets(t) {
    t.targets.forEach(((e) => this.unsubscribe(e, t)));
  }
  subscribeTargets(t) {
    t.targets.forEach(((e) => this.subscribe(e, t)));
  }
  onBeforeLayout(t) {
    const { target: e, type: r } = t, { canvas: s } = e;
    if (r === Xt || r === vs ? this.subscribeTargets(t) : r === Bi && this.unsubscribeTargets(t), e.fire("layout:before", { context: t }), s && s.fire("object:layout:before", { target: e, context: t }), r === bs && t.deep) {
      const i = X(t, yc);
      e.forEachObject(((n) => n.layoutManager && n.layoutManager.performLayout(m(m({}, i), {}, { bubbles: !1, target: n }))));
    }
  }
  getLayoutResult(t) {
    const { target: e, strategy: r, type: s } = t, i = r.calcLayoutResult(t, e.getObjects());
    if (!i) return;
    const n = s === Xt ? new b() : e.getRelativeCenterPoint(), { center: a, correction: l = new b(), relativeCorrection: c = new b() } = i, h = n.subtract(a).add(l).transform(s === Xt ? at : Tt(e.calcOwnMatrix()), !0).add(c);
    return { result: i, prevCenter: n, nextCenter: a, offset: h };
  }
  commitLayout(t, e) {
    const { target: r } = t, { result: { size: s }, nextCenter: i } = e;
    var n, a;
    r.set({ width: s.x, height: s.y }), this.layoutObjects(t, e), t.type === Xt ? r.set({ left: (n = t.x) !== null && n !== void 0 ? n : i.x + s.x * N(r.originX), top: (a = t.y) !== null && a !== void 0 ? a : i.y + s.y * N(r.originY) }) : (r.setPositionByOrigin(i, M, M), r.setCoords(), r.set("dirty", !0));
  }
  layoutObjects(t, e) {
    const { target: r } = t;
    r.forEachObject(((s) => {
      s.group === r && this.layoutObject(t, e, s);
    })), t.strategy.shouldLayoutClipPath(t) && this.layoutObject(t, e, r.clipPath);
  }
  layoutObject(t, e, r) {
    let { offset: s } = e;
    r.set({ left: r.left + s.x, top: r.top + s.y });
  }
  onAfterLayout(t, e) {
    const { target: r, strategy: s, bubbles: i, prevStrategy: n } = t, a = X(t, xc), { canvas: l } = r;
    r.fire("layout:after", { context: t, result: e }), l && l.fire("object:layout:after", { context: t, result: e, target: r });
    const c = r.parent;
    i && c != null && c.layoutManager && ((a.path || (a.path = [])).push(r), c.layoutManager.performLayout(m(m({}, a), {}, { target: c }))), r.set("dirty", !0);
  }
  dispose() {
    const { _subscriptions: t } = this;
    t.forEach(((e) => e.forEach(((r) => r())))), t.clear();
  }
  toObject() {
    return { type: Cn, strategy: this.strategy.constructor.type };
  }
  toJSON() {
    return this.toObject();
  }
}
k.setClass(xr, Cn);
const _c = ["type", "objects", "layoutManager"];
class wc extends xr {
  performLayout() {
  }
}
class ne extends Vo(ot) {
  static getDefaults() {
    return m(m({}, super.getDefaults()), ne.ownDefaults);
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), f(this, "_activeObjects", []), f(this, "__objectSelectionTracker", void 0), f(this, "__objectSelectionDisposer", void 0), Object.assign(this, ne.ownDefaults), this.setOptions(e), this.groupInit(t, e);
  }
  groupInit(t, e) {
    var r;
    this._objects = [...t], this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, !0), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, !1), this.forEachObject(((s) => {
      this.enterGroup(s, !1);
    })), this.layoutManager = (r = e.layoutManager) !== null && r !== void 0 ? r : new xr(), this.layoutManager.performLayout({ type: Xt, target: this, targets: [...t], x: e.left, y: e.top });
  }
  canEnterGroup(t) {
    return t === this || this.isDescendantOf(t) ? (ce("error", "Group: circular object trees are not supported, this call has no effect"), !1) : this._objects.indexOf(t) === -1 || (ce("error", "Group: duplicate objects are not supported inside group, this call has no effect"), !1);
  }
  _filterObjectsBeforeEnteringGroup(t) {
    return t.filter(((e, r, s) => this.canEnterGroup(e) && s.indexOf(e) === r));
  }
  add() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    const s = this._filterObjectsBeforeEnteringGroup(e), i = super.add(...s);
    return this._onAfterObjectsChange(vs, s), i;
  }
  insertAt(t) {
    for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++) r[s - 1] = arguments[s];
    const i = this._filterObjectsBeforeEnteringGroup(r), n = super.insertAt(t, ...i);
    return this._onAfterObjectsChange(vs, i), n;
  }
  remove() {
    const t = super.remove(...arguments);
    return this._onAfterObjectsChange(Bi, t), t;
  }
  _onObjectAdded(t) {
    this.enterGroup(t, !0), this.fire("object:added", { target: t }), t.fire("added", { target: this });
  }
  _onObjectRemoved(t, e) {
    this.exitGroup(t, e), this.fire("object:removed", { target: t }), t.fire("removed", { target: this });
  }
  _onAfterObjectsChange(t, e) {
    this.layoutManager.performLayout({ type: t, targets: e, target: this });
  }
  _onStackOrderChanged() {
    this._set("dirty", !0);
  }
  _set(t, e) {
    const r = this[t];
    return super._set(t, e), t === "canvas" && r !== e && (this._objects || []).forEach(((s) => {
      s._set(t, e);
    })), this;
  }
  _shouldSetNestedCoords() {
    return this.subTargetCheck;
  }
  removeAll() {
    return this._activeObjects = [], this.remove(...this._objects);
  }
  __objectSelectionMonitor(t, e) {
    let { target: r } = e;
    const s = this._activeObjects;
    if (t) s.push(r), this._set("dirty", !0);
    else if (s.length > 0) {
      const i = s.indexOf(r);
      i > -1 && (s.splice(i, 1), this._set("dirty", !0));
    }
  }
  _watchObject(t, e) {
    t && this._watchObject(!1, e), t ? (e.on("selected", this.__objectSelectionTracker), e.on("deselected", this.__objectSelectionDisposer)) : (e.off("selected", this.__objectSelectionTracker), e.off("deselected", this.__objectSelectionDisposer));
  }
  enterGroup(t, e) {
    t.group && t.group.remove(t), t._set("parent", this), this._enterGroup(t, e);
  }
  _enterGroup(t, e) {
    e && gs(t, st(Tt(this.calcTransformMatrix()), t.calcTransformMatrix())), this._shouldSetNestedCoords() && t.setCoords(), t._set("group", this), t._set("canvas", this.canvas), this._watchObject(!0, t);
    const r = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
    r && (r === t || t.isDescendantOf(r)) && this._activeObjects.push(t);
  }
  exitGroup(t, e) {
    this._exitGroup(t, e), t._set("parent", void 0), t._set("canvas", void 0);
  }
  _exitGroup(t, e) {
    t._set("group", void 0), e || (gs(t, st(this.calcTransformMatrix(), t.calcTransformMatrix())), t.setCoords()), this._watchObject(!1, t);
    const r = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t) : -1;
    r > -1 && this._activeObjects.splice(r, 1);
  }
  shouldCache() {
    const t = ot.prototype.shouldCache.call(this);
    if (t) {
      for (let e = 0; e < this._objects.length; e++) if (this._objects[e].willDrawShadow()) return this.ownCaching = !1, !1;
    }
    return t;
  }
  willDrawShadow() {
    if (super.willDrawShadow()) return !0;
    for (let t = 0; t < this._objects.length; t++) if (this._objects[t].willDrawShadow()) return !0;
    return !1;
  }
  isOnACache() {
    return this.ownCaching || !!this.parent && this.parent.isOnACache();
  }
  drawObject(t, e, r) {
    this._renderBackground(t);
    for (let i = 0; i < this._objects.length; i++) {
      var s;
      const n = this._objects[i];
      (s = this.canvas) !== null && s !== void 0 && s.preserveObjectStacking && n.group !== this ? (t.save(), t.transform(...Tt(this.calcTransformMatrix())), n.render(t), t.restore()) : n.group === this && n.render(t);
    }
    this._drawClipPath(t, this.clipPath, r);
  }
  setCoords() {
    super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject(((t) => t.setCoords()));
  }
  triggerLayout() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.layoutManager.performLayout(m({ target: this, type: bs }, t));
  }
  render(t) {
    this._transformDone = !0, super.render(t), this._transformDone = !1;
  }
  __serializeObjects(t, e) {
    const r = this.includeDefaultValues;
    return this._objects.filter((function(s) {
      return !s.excludeFromExport;
    })).map((function(s) {
      const i = s.includeDefaultValues;
      s.includeDefaultValues = r;
      const n = s[t || "toObject"](e);
      return s.includeDefaultValues = i, n;
    }));
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const e = this.layoutManager.toObject();
    return m(m(m({}, super.toObject(["subTargetCheck", "interactive", ...t])), e.strategy !== "fit-content" || this.includeDefaultValues ? { layoutManager: e } : {}), {}, { objects: this.__serializeObjects("toObject", t) });
  }
  toString() {
    return "#<Group: (".concat(this.complexity(), ")>");
  }
  dispose() {
    this.layoutManager.unsubscribeTargets({ targets: this.getObjects(), target: this }), this._activeObjects = [], this.forEachObject(((t) => {
      this._watchObject(!1, t), t.dispose();
    })), super.dispose();
  }
  _createSVGBgRect(t) {
    if (!this.backgroundColor) return "";
    const e = Ct.prototype._toSVG.call(this), r = e.indexOf("COMMON_PARTS");
    e[r] = 'for="group" ';
    const s = e.join("");
    return t ? t(s) : s;
  }
  _toSVG(t) {
    const e = ["<g ", "COMMON_PARTS", ` >
`], r = this._createSVGBgRect(t);
    r && e.push("		", r);
    for (let s = 0; s < this._objects.length; s++) e.push("		", this._objects[s].toSVG(t));
    return e.push(`</g>
`), e;
  }
  getSvgStyles() {
    const t = this.opacity !== void 0 && this.opacity !== 1 ? "opacity: ".concat(this.opacity, ";") : "", e = this.visible ? "" : " visibility: hidden;";
    return [t, this.getSvgFilter(), e].join("");
  }
  toClipPathSVG(t) {
    const e = [], r = this._createSVGBgRect(t);
    r && e.push("	", r);
    for (let s = 0; s < this._objects.length; s++) e.push("	", this._objects[s].toClipPathSVG(t));
    return this._createBaseClipPathSVGMarkup(e, { reviver: t });
  }
  static fromObject(t, e) {
    let { type: r, objects: s = [], layoutManager: i } = t, n = X(t, _c);
    return Promise.all([mr(s, e), As(n, e)]).then(((a) => {
      let [l, c] = a;
      const h = new this(l, m(m(m({}, n), c), {}, { layoutManager: new wc() }));
      if (i) {
        const d = k.getClass(i.type), u = k.getClass(i.strategy);
        h.layoutManager = new d(new u());
      } else h.layoutManager = new xr();
      return h.layoutManager.subscribeTargets({ type: Xt, target: h, targets: h.getObjects() }), h.setCoords(), h;
    }));
  }
}
f(ne, "type", "Group"), f(ne, "ownDefaults", { strokeWidth: 0, subTargetCheck: !1, interactive: !1 }), k.setClass(ne);
const Cc = (o, t) => Math.min(t.width / o.width, t.height / o.height), Sc = (o, t) => Math.max(t.width / o.width, t.height / o.height), ui = "\\s*,?\\s*", nr = "".concat(ui, "(").concat(kt, ")"), Tc = "".concat(nr).concat(nr).concat(nr).concat(ui, "([01])").concat(ui, "([01])").concat(nr).concat(nr), kc = { m: "l", M: "L" }, Oc = (o, t, e, r, s, i, n, a, l, c, h) => {
  const d = Ut(o), u = Nt(o), g = Ut(t), p = Nt(t), v = e * s * g - r * i * p + n, y = r * s * g + e * i * p + a;
  return ["C", c + l * (-e * s * u - r * i * d), h + l * (-r * s * u + e * i * d), v + l * (e * s * p + r * i * g), y + l * (r * s * p - e * i * g), v, y];
}, wo = (o, t, e, r) => {
  const s = Math.atan2(t, o), i = Math.atan2(r, e);
  return i >= s ? i - s : 2 * Math.PI - (s - i);
};
function Co(o, t, e, r, s, i, n, a) {
  let l;
  if (j.cachesBoundsOfCurve && (l = [...arguments].join(), hr.boundsOfCurveCache[l])) return hr.boundsOfCurveCache[l];
  const c = Math.sqrt, h = Math.abs, d = [], u = [[0, 0], [0, 0]];
  let g = 6 * o - 12 * e + 6 * s, p = -3 * o + 9 * e - 9 * s + 3 * n, v = 3 * e - 3 * o;
  for (let C = 0; C < 2; ++C) {
    if (C > 0 && (g = 6 * t - 12 * r + 6 * i, p = -3 * t + 9 * r - 9 * i + 3 * a, v = 3 * r - 3 * t), h(p) < 1e-12) {
      if (h(g) < 1e-12) continue;
      const L = -v / g;
      0 < L && L < 1 && d.push(L);
      continue;
    }
    const T = g * g - 4 * v * p;
    if (T < 0) continue;
    const D = c(T), A = (-g + D) / (2 * p);
    0 < A && A < 1 && d.push(A);
    const O = (-g - D) / (2 * p);
    0 < O && O < 1 && d.push(O);
  }
  let y = d.length;
  const x = y, _ = Sn(o, t, e, r, s, i, n, a);
  for (; y--; ) {
    const { x: C, y: T } = _(d[y]);
    u[0][y] = C, u[1][y] = T;
  }
  u[0][x] = o, u[1][x] = t, u[0][x + 1] = n, u[1][x + 1] = a;
  const S = [new b(Math.min(...u[0]), Math.min(...u[1])), new b(Math.max(...u[0]), Math.max(...u[1]))];
  return j.cachesBoundsOfCurve && (hr.boundsOfCurveCache[l] = S), S;
}
const Dc = (o, t, e) => {
  let [r, s, i, n, a, l, c, h] = e;
  const d = ((u, g, p, v, y, x, _) => {
    if (p === 0 || v === 0) return [];
    let S = 0, C = 0, T = 0;
    const D = Math.PI, A = _ * yi, O = Nt(A), L = Ut(A), q = 0.5 * (-L * u - O * g), Z = 0.5 * (-L * g + O * u), W = p ** 2, z = v ** 2, F = Z ** 2, tt = q ** 2, Q = W * z - W * F - z * tt;
    let et = Math.abs(p), $ = Math.abs(v);
    if (Q < 0) {
      const re = Math.sqrt(1 - Q / (W * z));
      et *= re, $ *= re;
    } else T = (y === x ? -1 : 1) * Math.sqrt(Q / (W * F + z * tt));
    const Mt = T * et * Z / $, zt = -T * $ * q / et, Or = L * Mt - O * zt + 0.5 * u, Ws = O * Mt + L * zt + 0.5 * g;
    let rr = wo(1, 0, (q - Mt) / et, (Z - zt) / $), ee = wo((q - Mt) / et, (Z - zt) / $, (-q - Mt) / et, (-Z - zt) / $);
    x === 0 && ee > 0 ? ee -= 2 * D : x === 1 && ee < 0 && (ee += 2 * D);
    const Dr = Math.ceil(Math.abs(ee / D * 2)), me = [], sr = ee / Dr, Xn = 8 / 3 * Math.sin(sr / 4) * Math.sin(sr / 4) / Math.sin(sr / 2);
    let $s = rr + sr;
    for (let re = 0; re < Dr; re++) me[re] = Oc(rr, $s, L, O, et, $, Or, Ws, Xn, S, C), S = me[re][5], C = me[re][6], rr = $s, $s += sr;
    return me;
  })(c - o, h - t, s, i, a, l, n);
  for (let u = 0, g = d.length; u < g; u++) d[u][1] += o, d[u][2] += t, d[u][3] += o, d[u][4] += t, d[u][5] += o, d[u][6] += t;
  return d;
}, Pc = (o) => {
  let t = 0, e = 0, r = 0, s = 0;
  const i = [];
  let n, a = 0, l = 0;
  for (const c of o) {
    const h = [...c];
    let d;
    switch (h[0]) {
      case "l":
        h[1] += t, h[2] += e;
      case "L":
        t = h[1], e = h[2], d = ["L", t, e];
        break;
      case "h":
        h[1] += t;
      case "H":
        t = h[1], d = ["L", t, e];
        break;
      case "v":
        h[1] += e;
      case "V":
        e = h[1], d = ["L", t, e];
        break;
      case "m":
        h[1] += t, h[2] += e;
      case "M":
        t = h[1], e = h[2], r = h[1], s = h[2], d = ["M", t, e];
        break;
      case "c":
        h[1] += t, h[2] += e, h[3] += t, h[4] += e, h[5] += t, h[6] += e;
      case "C":
        a = h[3], l = h[4], t = h[5], e = h[6], d = ["C", h[1], h[2], a, l, t, e];
        break;
      case "s":
        h[1] += t, h[2] += e, h[3] += t, h[4] += e;
      case "S":
        n === "C" ? (a = 2 * t - a, l = 2 * e - l) : (a = t, l = e), t = h[3], e = h[4], d = ["C", a, l, h[1], h[2], t, e], a = d[3], l = d[4];
        break;
      case "q":
        h[1] += t, h[2] += e, h[3] += t, h[4] += e;
      case "Q":
        a = h[1], l = h[2], t = h[3], e = h[4], d = ["Q", a, l, t, e];
        break;
      case "t":
        h[1] += t, h[2] += e;
      case "T":
        n === "Q" ? (a = 2 * t - a, l = 2 * e - l) : (a = t, l = e), t = h[1], e = h[2], d = ["Q", a, l, t, e];
        break;
      case "a":
        h[6] += t, h[7] += e;
      case "A":
        Dc(t, e, h).forEach(((u) => i.push(u))), t = h[6], e = h[7];
        break;
      case "z":
      case "Z":
        t = r, e = s, d = ["Z"];
    }
    d ? (i.push(d), n = d[0]) : n = "";
  }
  return i;
}, ys = (o, t, e, r) => Math.sqrt((e - o) ** 2 + (r - t) ** 2), Sn = (o, t, e, r, s, i, n, a) => (l) => {
  const c = l ** 3, h = ((g) => 3 * g ** 2 * (1 - g))(l), d = ((g) => 3 * g * (1 - g) ** 2)(l), u = ((g) => (1 - g) ** 3)(l);
  return new b(n * c + s * h + e * d + o * u, a * c + i * h + r * d + t * u);
}, Tn = (o) => o ** 2, kn = (o) => 2 * o * (1 - o), On = (o) => (1 - o) ** 2, Ec = (o, t, e, r, s, i, n, a) => (l) => {
  const c = Tn(l), h = kn(l), d = On(l), u = 3 * (d * (e - o) + h * (s - e) + c * (n - s)), g = 3 * (d * (r - t) + h * (i - r) + c * (a - i));
  return Math.atan2(g, u);
}, Mc = (o, t, e, r, s, i) => (n) => {
  const a = Tn(n), l = kn(n), c = On(n);
  return new b(s * a + e * l + o * c, i * a + r * l + t * c);
}, Ac = (o, t, e, r, s, i) => (n) => {
  const a = 1 - n, l = 2 * (a * (e - o) + n * (s - e)), c = 2 * (a * (r - t) + n * (i - r));
  return Math.atan2(c, l);
}, So = (o, t, e) => {
  let r = new b(t, e), s = 0;
  for (let i = 1; i <= 100; i += 1) {
    const n = o(i / 100);
    s += ys(r.x, r.y, n.x, n.y), r = n;
  }
  return s;
}, jc = (o, t) => {
  let e, r = 0, s = 0, i = { x: o.x, y: o.y }, n = m({}, i), a = 0.01, l = 0;
  const c = o.iterator, h = o.angleFinder;
  for (; s < t && a > 1e-4; ) n = c(r), l = r, e = ys(i.x, i.y, n.x, n.y), e + s > t ? (r -= a, a /= 2) : (i = n, r += a, s += e);
  return m(m({}, n), {}, { angle: h(l) });
}, Dn = (o) => {
  let t, e, r = 0, s = 0, i = 0, n = 0, a = 0;
  const l = [];
  for (const c of o) {
    const h = { x: s, y: i, command: c[0], length: 0 };
    switch (c[0]) {
      case "M":
        e = h, e.x = n = s = c[1], e.y = a = i = c[2];
        break;
      case "L":
        e = h, e.length = ys(s, i, c[1], c[2]), s = c[1], i = c[2];
        break;
      case "C":
        t = Sn(s, i, c[1], c[2], c[3], c[4], c[5], c[6]), e = h, e.iterator = t, e.angleFinder = Ec(s, i, c[1], c[2], c[3], c[4], c[5], c[6]), e.length = So(t, s, i), s = c[5], i = c[6];
        break;
      case "Q":
        t = Mc(s, i, c[1], c[2], c[3], c[4]), e = h, e.iterator = t, e.angleFinder = Ac(s, i, c[1], c[2], c[3], c[4]), e.length = So(t, s, i), s = c[3], i = c[4];
        break;
      case "Z":
        e = h, e.destX = n, e.destY = a, e.length = ys(s, i, n, a), s = n, i = a;
    }
    r += e.length, l.push(e);
  }
  return l.push({ length: r, x: s, y: i }), l;
}, Fc = function(o, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dn(o), r = 0;
  for (; t - e[r].length > 0 && r < e.length - 2; ) t -= e[r].length, r++;
  const s = e[r], i = t / s.length, n = o[r];
  switch (s.command) {
    case "M":
      return { x: s.x, y: s.y, angle: 0 };
    case "Z":
      return m(m({}, new b(s.x, s.y).lerp(new b(s.destX, s.destY), i)), {}, { angle: Math.atan2(s.destY - s.y, s.destX - s.x) });
    case "L":
      return m(m({}, new b(s.x, s.y).lerp(new b(n[1], n[2]), i)), {}, { angle: Math.atan2(n[2] - s.y, n[1] - s.x) });
    case "C":
    case "Q":
      return jc(s, t);
  }
}, Lc = new RegExp("[mzlhvcsqta][^mzlhvcsqta]*", "gi"), To = new RegExp(Tc, "g"), Bc = new RegExp(kt, "gi"), Ic = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 }, Rc = (o) => {
  var t;
  const e = [], r = (t = o.match(Lc)) !== null && t !== void 0 ? t : [];
  for (const s of r) {
    const i = s[0];
    if (i === "z" || i === "Z") {
      e.push([i]);
      continue;
    }
    const n = Ic[i.toLowerCase()];
    let a = [];
    if (i === "a" || i === "A") {
      To.lastIndex = 0;
      for (let l = null; l = To.exec(s); ) a.push(...l.slice(1));
    } else a = s.match(Bc) || [];
    for (let l = 0; l < a.length; l += n) {
      const c = new Array(n), h = kc[i];
      c[0] = l > 0 && h ? h : i;
      for (let d = 0; d < n; d++) c[d + 1] = parseFloat(a[l + d]);
      e.push(c);
    }
  }
  return e;
}, zc = (o, t) => o.map(((e) => e.map(((r, s) => s === 0 || t === void 0 ? r : V(r, t))).join(" "))).join(" ");
function gi(o, t) {
  const e = o.style;
  e && t && (typeof t == "string" ? e.cssText += ";" + t : Object.entries(t).forEach(((r) => {
    let [s, i] = r;
    return e.setProperty(s, i);
  })));
}
class Wc extends Qo {
  constructor(t) {
    let { allowTouchScrolling: e = !1, containerClass: r = "" } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(t), f(this, "upper", void 0), f(this, "container", void 0);
    const { el: s } = this.lower, i = this.createUpperCanvas();
    this.upper = { el: i, ctx: i.getContext("2d") }, this.applyCanvasStyle(s, { allowTouchScrolling: e }), this.applyCanvasStyle(i, { allowTouchScrolling: e, styles: { position: "absolute", left: "0", top: "0" } });
    const n = this.createContainerElement();
    n.classList.add(r), s.parentNode && s.parentNode.replaceChild(n, s), n.append(s, i), this.container = n;
  }
  createUpperCanvas() {
    const { el: t } = this.lower, e = qt();
    return e.className = t.className, e.classList.remove("lower-canvas"), e.classList.add("upper-canvas"), e.setAttribute("data-fabric", "top"), e.style.cssText = t.style.cssText, e.setAttribute("draggable", "true"), e;
  }
  createContainerElement() {
    const t = Ue().createElement("div");
    return t.setAttribute("data-fabric", "wrapper"), gi(t, { position: "relative" }), qi(t), t;
  }
  applyCanvasStyle(t, e) {
    const { styles: r, allowTouchScrolling: s } = e;
    gi(t, m(m({}, r), {}, { "touch-action": s ? "manipulation" : ht })), qi(t);
  }
  setDimensions(t, e) {
    super.setDimensions(t, e);
    const { el: r, ctx: s } = this.upper;
    Zo(r, s, t, e);
  }
  setCSSDimensions(t) {
    super.setCSSDimensions(t), oi(this.upper.el, t), oi(this.container, t);
  }
  cleanupDOM(t) {
    const e = this.container, { el: r } = this.lower, { el: s } = this.upper;
    super.cleanupDOM(t), e.removeChild(s), e.removeChild(r), e.parentNode && e.parentNode.replaceChild(r, e);
  }
  dispose() {
    super.dispose(), Lt().dispose(this.upper.el), delete this.upper, delete this.container;
  }
}
class Is extends Tr {
  constructor() {
    super(...arguments), f(this, "targets", []), f(this, "_hoveredTargets", []), f(this, "_currentTransform", null), f(this, "_groupSelector", null), f(this, "contextTopDirty", !1);
  }
  static getDefaults() {
    return m(m({}, super.getDefaults()), Is.ownDefaults);
  }
  get upperCanvasEl() {
    var t;
    return (t = this.elements.upper) === null || t === void 0 ? void 0 : t.el;
  }
  get contextTop() {
    var t;
    return (t = this.elements.upper) === null || t === void 0 ? void 0 : t.ctx;
  }
  get wrapperEl() {
    return this.elements.container;
  }
  initElements(t) {
    this.elements = new Wc(t, { allowTouchScrolling: this.allowTouchScrolling, containerClass: this.containerClass }), this._createCacheCanvas();
  }
  _onObjectAdded(t) {
    this._objectsToRender = void 0, super._onObjectAdded(t);
  }
  _onObjectRemoved(t) {
    this._objectsToRender = void 0, t === this._activeObject && (this.fire("before:selection:cleared", { deselected: [t] }), this._discardActiveObject(), this.fire("selection:cleared", { deselected: [t] }), t.fire("deselected", { target: t })), t === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(t);
  }
  _onStackOrderChanged() {
    this._objectsToRender = void 0, super._onStackOrderChanged();
  }
  _chooseObjectsToRender() {
    const t = this._activeObject;
    return !this.preserveObjectStacking && t ? this._objects.filter(((e) => !e.group && e !== t)).concat(t) : this._objects;
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1), !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender));
  }
  renderTopLayer(t) {
    t.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(t), this.contextTopDirty = !0), t.restore();
  }
  renderTop() {
    const t = this.contextTop;
    this.clearContext(t), this.renderTopLayer(t), this.fire("after:render", { ctx: t });
  }
  setTargetFindTolerance(t) {
    t = Math.round(t), this.targetFindTolerance = t;
    const e = this.getRetinaScaling(), r = Math.ceil((2 * t + 1) * e);
    this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = r, this.pixelFindContext.scale(e, e);
  }
  isTargetTransparent(t, e, r) {
    const s = this.targetFindTolerance, i = this.pixelFindContext;
    this.clearContext(i), i.save(), i.translate(-e + s, -r + s), i.transform(...this.viewportTransform);
    const n = t.selectionBackgroundColor;
    t.selectionBackgroundColor = "", t.render(i), t.selectionBackgroundColor = n, i.restore();
    const a = Math.round(s * this.getRetinaScaling());
    return Yl(i, a, a, a);
  }
  _isSelectionKeyPressed(t) {
    const e = this.selectionKey;
    return !!e && (Array.isArray(e) ? !!e.find(((r) => !!r && t[r] === !0)) : t[e]);
  }
  _shouldClearSelection(t, e) {
    const r = this.getActiveObjects(), s = this._activeObject;
    return !!(!e || e && s && r.length > 1 && r.indexOf(e) === -1 && s !== e && !this._isSelectionKeyPressed(t) || e && !e.evented || e && !e.selectable && s && s !== e);
  }
  _shouldCenterTransform(t, e, r) {
    if (!t) return;
    let s;
    return e === Es || e === ut || e === bt || e === fr ? s = this.centeredScaling || t.centeredScaling : e === wi && (s = this.centeredRotation || t.centeredRotation), s ? !r : r;
  }
  _getOriginFromCorner(t, e) {
    const r = { x: t.originX, y: t.originY };
    return e && (["ml", "tl", "bl"].includes(e) ? r.x = G : ["mr", "tr", "br"].includes(e) && (r.x = B), ["tl", "mt", "tr"].includes(e) ? r.y = ii : ["bl", "mb", "br"].includes(e) && (r.y = ct)), r;
  }
  _setupCurrentTransform(t, e, r) {
    var s;
    const i = e.group ? Fe(this.getScenePoint(t), void 0, e.group.calcTransformMatrix()) : this.getScenePoint(t), { key: n = "", control: a } = e.getActiveControl() || {}, l = r && a ? (s = a.getActionHandler(t, e, a)) === null || s === void 0 ? void 0 : s.bind(a) : nl, c = ((g, p, v, y) => {
      if (!p || !g) return "drag";
      const x = y.controls[p];
      return x.getActionName(v, x, y);
    })(r, n, t, e), h = t[this.centeredKey], d = this._shouldCenterTransform(e, c, h) ? { x: M, y: M } : this._getOriginFromCorner(e, n), u = { target: e, action: c, actionHandler: l, actionPerformed: !1, corner: n, scaleX: e.scaleX, scaleY: e.scaleY, skewX: e.skewX, skewY: e.skewY, offsetX: i.x - e.left, offsetY: i.y - e.top, originX: d.x, originY: d.y, ex: i.x, ey: i.y, lastX: i.x, lastY: i.y, theta: U(e.angle), width: e.width, height: e.height, shiftKey: t.shiftKey, altKey: h, original: m(m({}, tn(e)), {}, { originX: d.x, originY: d.y }) };
    this._currentTransform = u, this.fire("before:transform", { e: t, transform: u });
  }
  setCursor(t) {
    this.upperCanvasEl.style.cursor = t;
  }
  _drawSelection(t) {
    const { x: e, y: r, deltaX: s, deltaY: i } = this._groupSelector, n = new b(e, r).transform(this.viewportTransform), a = new b(e + s, r + i).transform(this.viewportTransform), l = this.selectionLineWidth / 2;
    let c = Math.min(n.x, a.x), h = Math.min(n.y, a.y), d = Math.max(n.x, a.x), u = Math.max(n.y, a.y);
    this.selectionColor && (t.fillStyle = this.selectionColor, t.fillRect(c, h, d - c, u - h)), this.selectionLineWidth && this.selectionBorderColor && (t.lineWidth = this.selectionLineWidth, t.strokeStyle = this.selectionBorderColor, c += l, h += l, d -= l, u -= l, ot.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(c, h, d - c, u - h));
  }
  findTarget(t) {
    if (this.skipTargetFind) return;
    const e = this.getViewportPoint(t), r = this._activeObject, s = this.getActiveObjects();
    if (this.targets = [], r && s.length >= 1) {
      if (r.findControl(e, ni(t)) || s.length > 1 && this.searchPossibleTargets([r], e)) return r;
      if (r === this.searchPossibleTargets([r], e)) {
        if (this.preserveObjectStacking) {
          const i = this.targets;
          this.targets = [];
          const n = this.searchPossibleTargets(this._objects, e);
          return t[this.altSelectionKey] && n && n !== r ? (this.targets = i, r) : n;
        }
        return r;
      }
    }
    return this.searchPossibleTargets(this._objects, e);
  }
  _pointIsInObjectSelectionArea(t, e) {
    let r = t.getCoords();
    const s = this.getZoom(), i = t.padding / s;
    if (i) {
      const [n, a, l, c] = r, h = Math.atan2(a.y - n.y, a.x - n.x), d = Ut(h) * i, u = Nt(h) * i, g = d + u, p = d - u;
      r = [new b(n.x - p, n.y - g), new b(a.x + g, a.y - p), new b(l.x + p, l.y + g), new b(c.x - g, c.y + p)];
    }
    return Y.isPointInPolygon(e, r);
  }
  _checkTarget(t, e) {
    return !!(t && t.visible && t.evented && this._pointIsInObjectSelectionArea(t, Fe(e, void 0, this.viewportTransform)) && (!this.perPixelTargetFind && !t.perPixelTargetFind || t.isEditing || !this.isTargetTransparent(t, e.x, e.y)));
  }
  _searchPossibleTargets(t, e) {
    let r = t.length;
    for (; r--; ) {
      const s = t[r];
      if (this._checkTarget(s, e)) {
        if (es(s) && s.subTargetCheck) {
          const i = this._searchPossibleTargets(s._objects, e);
          i && this.targets.push(i);
        }
        return s;
      }
    }
  }
  searchPossibleTargets(t, e) {
    const r = this._searchPossibleTargets(t, e);
    if (r && es(r) && r.interactive && this.targets[0]) {
      const s = this.targets;
      for (let i = s.length - 1; i > 0; i--) {
        const n = s[i];
        if (!es(n) || !n.interactive) return n;
      }
      return s[0];
    }
    return r;
  }
  getViewportPoint(t) {
    return this._pointer ? this._pointer : this.getPointer(t, !0);
  }
  getScenePoint(t) {
    return this._absolutePointer ? this._absolutePointer : this.getPointer(t);
  }
  getPointer(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    const r = this.upperCanvasEl, s = r.getBoundingClientRect();
    let i = Qa(t), n = s.width || 0, a = s.height || 0;
    n && a || (ct in s && ii in s && (a = Math.abs(s.top - s.bottom)), G in s && B in s && (n = Math.abs(s.right - s.left))), this.calcOffset(), i.x = i.x - this._offset.left, i.y = i.y - this._offset.top, e || (i = Fe(i, void 0, this.viewportTransform));
    const l = this.getRetinaScaling();
    l !== 1 && (i.x /= l, i.y /= l);
    const c = n === 0 || a === 0 ? new b(1, 1) : new b(r.width / n, r.height / a);
    return i.multiply(c);
  }
  _setDimensionsImpl(t, e) {
    this._resetTransformEventData(), super._setDimensionsImpl(t, e), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop);
  }
  _createCacheCanvas() {
    this.pixelFindCanvasEl = qt(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", { willReadFrequently: !0 }), this.setTargetFindTolerance(this.targetFindTolerance);
  }
  getTopContext() {
    return this.elements.upper.ctx;
  }
  getSelectionContext() {
    return this.elements.upper.ctx;
  }
  getSelectionElement() {
    return this.elements.upper.el;
  }
  getActiveObject() {
    return this._activeObject;
  }
  getActiveObjects() {
    const t = this._activeObject;
    return ve(t) ? t.getObjects() : t ? [t] : [];
  }
  _fireSelectionEvents(t, e) {
    let r = !1, s = !1;
    const i = this.getActiveObjects(), n = [], a = [];
    t.forEach(((l) => {
      i.includes(l) || (r = !0, l.fire("deselected", { e, target: l }), a.push(l));
    })), i.forEach(((l) => {
      t.includes(l) || (r = !0, l.fire("selected", { e, target: l }), n.push(l));
    })), t.length > 0 && i.length > 0 ? (s = !0, r && this.fire("selection:updated", { e, selected: n, deselected: a })) : i.length > 0 ? (s = !0, this.fire("selection:created", { e, selected: n })) : t.length > 0 && (s = !0, this.fire("selection:cleared", { e, deselected: a })), s && (this._objectsToRender = void 0);
  }
  setActiveObject(t, e) {
    const r = this.getActiveObjects(), s = this._setActiveObject(t, e);
    return this._fireSelectionEvents(r, e), s;
  }
  _setActiveObject(t, e) {
    const r = this._activeObject;
    return r !== t && !(!this._discardActiveObject(e, t) && this._activeObject) && !t.onSelect({ e }) && (this._activeObject = t, ve(t) && r !== t && t.set("canvas", this), t.setCoords(), !0);
  }
  _discardActiveObject(t, e) {
    const r = this._activeObject;
    return !!r && !r.onDeselect({ e: t, object: e }) && (this._currentTransform && this._currentTransform.target === r && this.endCurrentTransform(t), ve(r) && r === this._hoveredTarget && (this._hoveredTarget = void 0), this._activeObject = void 0, !0);
  }
  discardActiveObject(t) {
    const e = this.getActiveObjects(), r = this.getActiveObject();
    e.length && this.fire("before:selection:cleared", { e: t, deselected: [r] });
    const s = this._discardActiveObject(t);
    return this._fireSelectionEvents(e, t), s;
  }
  endCurrentTransform(t) {
    const e = this._currentTransform;
    this._finalizeCurrentTransform(t), e && e.target && (e.target.isMoving = !1), this._currentTransform = null;
  }
  _finalizeCurrentTransform(t) {
    const e = this._currentTransform, r = e.target, s = { e: t, target: r, transform: e, action: e.action };
    r._scaling && (r._scaling = !1), r.setCoords(), e.actionPerformed && (this.fire("object:modified", s), r.fire(hs, s));
  }
  setViewportTransform(t) {
    super.setViewportTransform(t);
    const e = this._activeObject;
    e && e.setCoords();
  }
  destroy() {
    const t = this._activeObject;
    ve(t) && (t.removeAll(), t.dispose()), delete this._activeObject, super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0;
  }
  clear() {
    this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear();
  }
  drawControls(t) {
    const e = this._activeObject;
    e && e._renderControls(t);
  }
  _toObject(t, e, r) {
    const s = this._realizeGroupTransformOnObject(t), i = super._toObject(t, e, r);
    return t.set(s), i;
  }
  _realizeGroupTransformOnObject(t) {
    const { group: e } = t;
    if (e && ve(e) && this._activeObject === e) {
      const r = Je(t, ["angle", "flipX", "flipY", B, ut, bt, Ne, qe, ct]);
      return el(t, e.calcOwnMatrix()), r;
    }
    return {};
  }
  _setSVGObject(t, e, r) {
    const s = this._realizeGroupTransformOnObject(e);
    super._setSVGObject(t, e, r), e.set(s);
  }
}
f(Is, "ownDefaults", { uniformScaling: !0, uniScaleKey: "shiftKey", centeredScaling: !1, centeredRotation: !1, centeredKey: "altKey", altActionKey: "shiftKey", selection: !0, selectionKey: "shiftKey", selectionColor: "rgba(100, 100, 255, 0.3)", selectionDashArray: [], selectionBorderColor: "rgba(255, 255, 255, 0.3)", selectionLineWidth: 1, selectionFullyContained: !1, hoverCursor: "move", moveCursor: "move", defaultCursor: "default", freeDrawingCursor: "crosshair", notAllowedCursor: "not-allowed", perPixelTargetFind: !1, targetFindTolerance: 0, skipTargetFind: !1, stopContextMenu: !1, fireRightClick: !1, fireMiddleClick: !1, enablePointerEvents: !1, containerClass: "canvas-container", preserveObjectStacking: !1 });
class $c {
  constructor(t) {
    f(this, "targets", []), f(this, "__disposer", void 0);
    const e = () => {
      const { hiddenTextarea: s } = t.getActiveObject() || {};
      s && s.focus();
    }, r = t.upperCanvasEl;
    r.addEventListener("click", e), this.__disposer = () => r.removeEventListener("click", e);
  }
  exitTextEditing() {
    this.target = void 0, this.targets.forEach(((t) => {
      t.isEditing && t.exitEditing();
    }));
  }
  add(t) {
    this.targets.push(t);
  }
  remove(t) {
    this.unregister(t), Pe(this.targets, t);
  }
  register(t) {
    this.target = t;
  }
  unregister(t) {
    t === this.target && (this.target = void 0);
  }
  onMouseMove(t) {
    var e;
    !((e = this.target) === null || e === void 0) && e.isEditing && this.target.updateSelectionOnMouseMove(t);
  }
  clear() {
    this.targets = [], this.target = void 0;
  }
  dispose() {
    this.clear(), this.__disposer(), delete this.__disposer;
  }
}
const Vc = ["target", "oldTarget", "fireCanvas", "e"], gt = { passive: !1 }, De = (o, t) => {
  const e = o.getViewportPoint(t), r = o.getScenePoint(t);
  return { viewportPoint: e, scenePoint: r, pointer: e, absolutePointer: r };
}, ie = function(o) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
  return o.addEventListener(...e);
}, mt = function(o) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
  return o.removeEventListener(...e);
}, Xc = { mouse: { in: "over", out: "out", targetIn: "mouseover", targetOut: "mouseout", canvasIn: "mouse:over", canvasOut: "mouse:out" }, drag: { in: "enter", out: "leave", targetIn: "dragenter", targetOut: "dragleave", canvasIn: "drag:enter", canvasOut: "drag:leave" } };
class pi extends Is {
  constructor(t) {
    super(t, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}), f(this, "_isClick", void 0), f(this, "textEditingManager", new $c(this)), ["_onMouseDown", "_onTouchStart", "_onMouseMove", "_onMouseUp", "_onTouchEnd", "_onResize", "_onMouseWheel", "_onMouseOut", "_onMouseEnter", "_onContextMenu", "_onClick", "_onDragStart", "_onDragEnd", "_onDragProgress", "_onDragOver", "_onDragEnter", "_onDragLeave", "_onDrop"].forEach(((e) => {
      this[e] = this[e].bind(this);
    })), this.addOrRemove(ie, "add");
  }
  _getEventPrefix() {
    return this.enablePointerEvents ? "pointer" : "mouse";
  }
  addOrRemove(t, e) {
    const r = this.upperCanvasEl, s = this._getEventPrefix();
    t(Jo(r), "resize", this._onResize), t(r, s + "down", this._onMouseDown), t(r, "".concat(s, "move"), this._onMouseMove, gt), t(r, "".concat(s, "out"), this._onMouseOut), t(r, "".concat(s, "enter"), this._onMouseEnter), t(r, "wheel", this._onMouseWheel, { passive: !1 }), t(r, "contextmenu", this._onContextMenu), t(r, "click", this._onClick), t(r, "dblclick", this._onClick), t(r, "dragstart", this._onDragStart), t(r, "dragend", this._onDragEnd), t(r, "dragover", this._onDragOver), t(r, "dragenter", this._onDragEnter), t(r, "dragleave", this._onDragLeave), t(r, "drop", this._onDrop), this.enablePointerEvents || t(r, "touchstart", this._onTouchStart, gt);
  }
  removeListeners() {
    this.addOrRemove(mt, "remove");
    const t = this._getEventPrefix(), e = St(this.upperCanvasEl);
    mt(e, "".concat(t, "up"), this._onMouseUp), mt(e, "touchend", this._onTouchEnd, gt), mt(e, "".concat(t, "move"), this._onMouseMove, gt), mt(e, "touchmove", this._onMouseMove, gt), clearTimeout(this._willAddMouseDown);
  }
  _onMouseWheel(t) {
    this.__onMouseWheel(t);
  }
  _onMouseOut(t) {
    const e = this._hoveredTarget, r = m({ e: t }, De(this, t));
    this.fire("mouse:out", m(m({}, r), {}, { target: e })), this._hoveredTarget = void 0, e && e.fire("mouseout", m({}, r)), this._hoveredTargets.forEach(((s) => {
      this.fire("mouse:out", m(m({}, r), {}, { target: s })), s && s.fire("mouseout", m({}, r));
    })), this._hoveredTargets = [];
  }
  _onMouseEnter(t) {
    this._currentTransform || this.findTarget(t) || (this.fire("mouse:over", m({ e: t }, De(this, t))), this._hoveredTarget = void 0, this._hoveredTargets = []);
  }
  _onDragStart(t) {
    this._isClick = !1;
    const e = this.getActiveObject();
    if (e && e.onDragStart(t)) {
      this._dragSource = e;
      const r = { e: t, target: e };
      return this.fire("dragstart", r), e.fire("dragstart", r), void ie(this.upperCanvasEl, "drag", this._onDragProgress);
    }
    Ki(t);
  }
  _renderDragEffects(t, e, r) {
    let s = !1;
    const i = this._dropTarget;
    i && i !== e && i !== r && (i.clearContextTop(), s = !0), e == null || e.clearContextTop(), r !== e && (r == null || r.clearContextTop());
    const n = this.contextTop;
    n.save(), n.transform(...this.viewportTransform), e && (n.save(), e.transform(n), e.renderDragSourceEffect(t), n.restore(), s = !0), r && (n.save(), r.transform(n), r.renderDropTargetEffect(t), n.restore(), s = !0), n.restore(), s && (this.contextTopDirty = !0);
  }
  _onDragEnd(t) {
    const e = !!t.dataTransfer && t.dataTransfer.dropEffect !== ht, r = e ? this._activeObject : void 0, s = { e: t, target: this._dragSource, subTargets: this.targets, dragSource: this._dragSource, didDrop: e, dropTarget: r };
    mt(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", s), this._dragSource && this._dragSource.fire("dragend", s), delete this._dragSource, this._onMouseUp(t);
  }
  _onDragProgress(t) {
    const e = { e: t, target: this._dragSource, dragSource: this._dragSource, dropTarget: this._draggedoverTarget };
    this.fire("drag", e), this._dragSource && this._dragSource.fire("drag", e);
  }
  findDragTargets(t) {
    return this.targets = [], { target: this._searchPossibleTargets(this._objects, this.getViewportPoint(t)), targets: [...this.targets] };
  }
  _onDragOver(t) {
    const e = "dragover", { target: r, targets: s } = this.findDragTargets(t), i = this._dragSource, n = { e: t, target: r, subTargets: s, dragSource: i, canDrop: !1, dropTarget: void 0 };
    let a;
    this.fire(e, n), this._fireEnterLeaveEvents(r, n), r && (r.canDrop(t) && (a = r), r.fire(e, n));
    for (let l = 0; l < s.length; l++) {
      const c = s[l];
      c.canDrop(t) && (a = c), c.fire(e, n);
    }
    this._renderDragEffects(t, i, a), this._dropTarget = a;
  }
  _onDragEnter(t) {
    const { target: e, targets: r } = this.findDragTargets(t), s = { e: t, target: e, subTargets: r, dragSource: this._dragSource };
    this.fire("dragenter", s), this._fireEnterLeaveEvents(e, s);
  }
  _onDragLeave(t) {
    const e = { e: t, target: this._draggedoverTarget, subTargets: this.targets, dragSource: this._dragSource };
    this.fire("dragleave", e), this._fireEnterLeaveEvents(void 0, e), this._renderDragEffects(t, this._dragSource), this._dropTarget = void 0, this.targets = [], this._hoveredTargets = [];
  }
  _onDrop(t) {
    const { target: e, targets: r } = this.findDragTargets(t), s = this._basicEventHandler("drop:before", m({ e: t, target: e, subTargets: r, dragSource: this._dragSource }, De(this, t)));
    s.didDrop = !1, s.dropTarget = void 0, this._basicEventHandler("drop", s), this.fire("drop:after", s);
  }
  _onContextMenu(t) {
    const e = this.findTarget(t), r = this.targets || [], s = this._basicEventHandler("contextmenu:before", { e: t, target: e, subTargets: r });
    return this.stopContextMenu && Ki(t), this._basicEventHandler("contextmenu", s), !1;
  }
  _onClick(t) {
    const e = t.detail;
    e > 3 || e < 2 || (this._cacheTransformEventData(t), e == 2 && t.type === "dblclick" && this._handleEvent(t, "dblclick"), e == 3 && this._handleEvent(t, "tripleclick"), this._resetTransformEventData());
  }
  getPointerId(t) {
    const e = t.changedTouches;
    return e ? e[0] && e[0].identifier : this.enablePointerEvents ? t.pointerId : -1;
  }
  _isMainEvent(t) {
    return t.isPrimary === !0 || t.isPrimary !== !1 && (t.type === "touchend" && t.touches.length === 0 || !t.changedTouches || t.changedTouches[0].identifier === this.mainTouchId);
  }
  _onTouchStart(t) {
    let e = !this.allowTouchScrolling;
    const r = this._activeObject;
    this.mainTouchId === void 0 && (this.mainTouchId = this.getPointerId(t)), this.__onMouseDown(t), (this.isDrawingMode || r && this._target === r) && (e = !0), e && t.preventDefault(), this._resetTransformEventData();
    const s = this.upperCanvasEl, i = this._getEventPrefix(), n = St(s);
    ie(n, "touchend", this._onTouchEnd, gt), e && ie(n, "touchmove", this._onMouseMove, gt), mt(s, "".concat(i, "down"), this._onMouseDown);
  }
  _onMouseDown(t) {
    this.__onMouseDown(t), this._resetTransformEventData();
    const e = this.upperCanvasEl, r = this._getEventPrefix();
    mt(e, "".concat(r, "move"), this._onMouseMove, gt);
    const s = St(e);
    ie(s, "".concat(r, "up"), this._onMouseUp), ie(s, "".concat(r, "move"), this._onMouseMove, gt);
  }
  _onTouchEnd(t) {
    if (t.touches.length > 0) return;
    this.__onMouseUp(t), this._resetTransformEventData(), delete this.mainTouchId;
    const e = this._getEventPrefix(), r = St(this.upperCanvasEl);
    mt(r, "touchend", this._onTouchEnd, gt), mt(r, "touchmove", this._onMouseMove, gt), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout((() => {
      ie(this.upperCanvasEl, "".concat(e, "down"), this._onMouseDown), this._willAddMouseDown = 0;
    }), 400);
  }
  _onMouseUp(t) {
    this.__onMouseUp(t), this._resetTransformEventData();
    const e = this.upperCanvasEl, r = this._getEventPrefix();
    if (this._isMainEvent(t)) {
      const s = St(this.upperCanvasEl);
      mt(s, "".concat(r, "up"), this._onMouseUp), mt(s, "".concat(r, "move"), this._onMouseMove, gt), ie(e, "".concat(r, "move"), this._onMouseMove, gt);
    }
  }
  _onMouseMove(t) {
    const e = this.getActiveObject();
    !this.allowTouchScrolling && (!e || !e.shouldStartDragging(t)) && t.preventDefault && t.preventDefault(), this.__onMouseMove(t);
  }
  _onResize() {
    this.calcOffset(), this._resetTransformEventData();
  }
  _shouldRender(t) {
    const e = this.getActiveObject();
    return !!e != !!t || e && t && e !== t;
  }
  __onMouseUp(t) {
    var e;
    this._cacheTransformEventData(t), this._handleEvent(t, "up:before");
    const r = this._currentTransform, s = this._isClick, i = this._target, { button: n } = t;
    if (n) return (this.fireMiddleClick && n === 1 || this.fireRightClick && n === 2) && this._handleEvent(t, "up"), void this._resetTransformEventData();
    if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t);
    if (!this._isMainEvent(t)) return;
    let a, l, c = !1;
    if (r && (this._finalizeCurrentTransform(t), c = r.actionPerformed), !s) {
      const h = i === this._activeObject;
      this.handleSelection(t), c || (c = this._shouldRender(i) || !h && i === this._activeObject);
    }
    if (i) {
      const h = i.findControl(this.getViewportPoint(t), ni(t)), { key: d, control: u } = h || {};
      if (l = d, i.selectable && i !== this._activeObject && i.activeOn === "up") this.setActiveObject(i, t), c = !0;
      else if (u) {
        const g = u.getMouseUpHandler(t, i, u);
        g && (a = this.getScenePoint(t), g.call(u, t, r, a.x, a.y));
      }
      i.isMoving = !1;
    }
    if (r && (r.target !== i || r.corner !== l)) {
      const h = r.target && r.target.controls[r.corner], d = h && h.getMouseUpHandler(t, r.target, h);
      a = a || this.getScenePoint(t), d && d.call(h, t, r, a.x, a.y);
    }
    this._setCursorFromEvent(t, i), this._handleEvent(t, "up"), this._groupSelector = null, this._currentTransform = null, i && (i.__corner = void 0), c ? this.requestRenderAll() : s || (e = this._activeObject) !== null && e !== void 0 && e.isEditing || this.renderTop();
  }
  _basicEventHandler(t, e) {
    const { target: r, subTargets: s = [] } = e;
    this.fire(t, e), r && r.fire(t, e);
    for (let i = 0; i < s.length; i++) s[i] !== r && s[i].fire(t, e);
    return e;
  }
  _handleEvent(t, e, r) {
    const s = this._target, i = this.targets || [], n = m(m(m({ e: t, target: s, subTargets: i }, De(this, t)), {}, { transform: this._currentTransform }, e === "up:before" || e === "up" ? { isClick: this._isClick, currentTarget: this.findTarget(t), currentSubTargets: this.targets } : {}), e === "down:before" || e === "down" ? r : {});
    this.fire("mouse:".concat(e), n), s && s.fire("mouse".concat(e), n);
    for (let a = 0; a < i.length; a++) i[a] !== s && i[a].fire("mouse".concat(e), n);
  }
  _onMouseDownInDrawingMode(t) {
    this._isCurrentlyDrawing = !0, this.getActiveObject() && (this.discardActiveObject(t), this.requestRenderAll());
    const e = this.getScenePoint(t);
    this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e, { e: t, pointer: e }), this._handleEvent(t, "down", { alreadySelected: !1 });
  }
  _onMouseMoveInDrawingMode(t) {
    if (this._isCurrentlyDrawing) {
      const e = this.getScenePoint(t);
      this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e, { e: t, pointer: e });
    }
    this.setCursor(this.freeDrawingCursor), this._handleEvent(t, "move");
  }
  _onMouseUpInDrawingMode(t) {
    const e = this.getScenePoint(t);
    this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({ e: t, pointer: e }) : this._isCurrentlyDrawing = !1, this._handleEvent(t, "up");
  }
  __onMouseDown(t) {
    this._isClick = !0, this._cacheTransformEventData(t), this._handleEvent(t, "down:before");
    let e = this._target, r = !!e && e === this._activeObject;
    const { button: s } = t;
    if (s) return (this.fireMiddleClick && s === 1 || this.fireRightClick && s === 2) && this._handleEvent(t, "down", { alreadySelected: r }), void this._resetTransformEventData();
    if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t);
    if (!this._isMainEvent(t) || this._currentTransform) return;
    let i = this._shouldRender(e), n = !1;
    if (this.handleMultiSelection(t, e) ? (e = this._activeObject, n = !0, i = !0) : this._shouldClearSelection(t, e) && this.discardActiveObject(t), this.selection && (!e || !e.selectable && !e.isEditing && e !== this._activeObject)) {
      const a = this.getScenePoint(t);
      this._groupSelector = { x: a.x, y: a.y, deltaY: 0, deltaX: 0 };
    }
    if (r = !!e && e === this._activeObject, e) {
      e.selectable && e.activeOn === "down" && this.setActiveObject(e, t);
      const a = e.findControl(this.getViewportPoint(t), ni(t));
      if (e === this._activeObject && (a || !n)) {
        this._setupCurrentTransform(t, e, r);
        const l = a ? a.control : void 0, c = this.getScenePoint(t), h = l && l.getMouseDownHandler(t, e, l);
        h && h.call(l, t, this._currentTransform, c.x, c.y);
      }
    }
    i && (this._objectsToRender = void 0), this._handleEvent(t, "down", { alreadySelected: r }), i && this.requestRenderAll();
  }
  _resetTransformEventData() {
    this._target = this._pointer = this._absolutePointer = void 0;
  }
  _cacheTransformEventData(t) {
    this._resetTransformEventData(), this._pointer = this.getViewportPoint(t), this._absolutePointer = Fe(this._pointer, void 0, this.viewportTransform), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t);
  }
  __onMouseMove(t) {
    if (this._isClick = !1, this._cacheTransformEventData(t), this._handleEvent(t, "move:before"), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t);
    if (!this._isMainEvent(t)) return;
    const e = this._groupSelector;
    if (e) {
      const r = this.getScenePoint(t);
      e.deltaX = r.x - e.x, e.deltaY = r.y - e.y, this.renderTop();
    } else if (this._currentTransform) this._transformObject(t);
    else {
      const r = this.findTarget(t);
      this._setCursorFromEvent(t, r), this._fireOverOutEvents(t, r);
    }
    this.textEditingManager.onMouseMove(t), this._handleEvent(t, "move"), this._resetTransformEventData();
  }
  _fireOverOutEvents(t, e) {
    const r = this._hoveredTarget, s = this._hoveredTargets, i = this.targets, n = Math.max(s.length, i.length);
    this.fireSyntheticInOutEvents("mouse", { e: t, target: e, oldTarget: r, fireCanvas: !0 });
    for (let a = 0; a < n; a++) i[a] === e || s[a] && s[a] === r || this.fireSyntheticInOutEvents("mouse", { e: t, target: i[a], oldTarget: s[a] });
    this._hoveredTarget = e, this._hoveredTargets = this.targets.concat();
  }
  _fireEnterLeaveEvents(t, e) {
    const r = this._draggedoverTarget, s = this._hoveredTargets, i = this.targets, n = Math.max(s.length, i.length);
    this.fireSyntheticInOutEvents("drag", m(m({}, e), {}, { target: t, oldTarget: r, fireCanvas: !0 }));
    for (let a = 0; a < n; a++) this.fireSyntheticInOutEvents("drag", m(m({}, e), {}, { target: i[a], oldTarget: s[a] }));
    this._draggedoverTarget = t;
  }
  fireSyntheticInOutEvents(t, e) {
    let { target: r, oldTarget: s, fireCanvas: i, e: n } = e, a = X(e, Vc);
    const { targetIn: l, targetOut: c, canvasIn: h, canvasOut: d } = Xc[t], u = s !== r;
    if (s && u) {
      const g = m(m({}, a), {}, { e: n, target: s, nextTarget: r }, De(this, n));
      i && this.fire(d, g), s.fire(c, g);
    }
    if (r && u) {
      const g = m(m({}, a), {}, { e: n, target: r, previousTarget: s }, De(this, n));
      i && this.fire(h, g), r.fire(l, g);
    }
  }
  __onMouseWheel(t) {
    this._cacheTransformEventData(t), this._handleEvent(t, "wheel"), this._resetTransformEventData();
  }
  _transformObject(t) {
    const e = this.getScenePoint(t), r = this._currentTransform, s = r.target, i = s.group ? Fe(e, void 0, s.group.calcTransformMatrix()) : e;
    r.shiftKey = t.shiftKey, r.altKey = !!this.centeredKey && t[this.centeredKey], this._performTransformAction(t, r, i), r.actionPerformed && this.requestRenderAll();
  }
  _performTransformAction(t, e, r) {
    const { action: s, actionHandler: i, target: n } = e, a = !!i && i(t, e, r.x, r.y);
    a && n.setCoords(), s === "drag" && a && (e.target.isMoving = !0, this.setCursor(e.target.moveCursor || this.moveCursor)), e.actionPerformed = e.actionPerformed || a;
  }
  _setCursorFromEvent(t, e) {
    if (!e) return void this.setCursor(this.defaultCursor);
    let r = e.hoverCursor || this.hoverCursor;
    const s = ve(this._activeObject) ? this._activeObject : null, i = (!s || e.group !== s) && e.findControl(this.getViewportPoint(t));
    if (i) {
      const n = i.control;
      this.setCursor(n.cursorStyleHandler(t, n, e));
    } else e.subTargetCheck && this.targets.concat().reverse().map(((n) => {
      r = n.hoverCursor || r;
    })), this.setCursor(r);
  }
  handleMultiSelection(t, e) {
    const r = this._activeObject, s = ve(r);
    if (r && this._isSelectionKeyPressed(t) && this.selection && e && e.selectable && (r !== e || s) && (s || !e.isDescendantOf(r) && !r.isDescendantOf(e)) && !e.onSelect({ e: t }) && !r.getActiveControl()) {
      if (s) {
        const i = r.getObjects();
        if (e === r) {
          const n = this.getViewportPoint(t);
          if (!(e = this.searchPossibleTargets(i, n) || this.searchPossibleTargets(this._objects, n)) || !e.selectable) return !1;
        }
        e.group === r ? (r.remove(e), this._hoveredTarget = e, this._hoveredTargets = [...this.targets], r.size() === 1 && this._setActiveObject(r.item(0), t)) : (r.multiSelectAdd(e), this._hoveredTarget = r, this._hoveredTargets = [...this.targets]), this._fireSelectionEvents(i, t);
      } else {
        r.isEditing && r.exitEditing();
        const i = new (k.getClass("ActiveSelection"))([], { canvas: this });
        i.multiSelectAdd(r, e), this._hoveredTarget = i, this._setActiveObject(i, t), this._fireSelectionEvents([r], t);
      }
      return !0;
    }
    return !1;
  }
  handleSelection(t) {
    if (!this.selection || !this._groupSelector) return !1;
    const { x: e, y: r, deltaX: s, deltaY: i } = this._groupSelector, n = new b(e, r), a = n.add(new b(s, i)), l = n.min(a), c = n.max(a).subtract(l), h = this.collectObjects({ left: l.x, top: l.y, width: c.x, height: c.y }, { includeIntersecting: !this.selectionFullyContained }), d = n.eq(a) ? h[0] ? [h[0]] : [] : h.length > 1 ? h.filter(((u) => !u.onSelect({ e: t }))).reverse() : h;
    if (d.length === 1) this.setActiveObject(d[0], t);
    else if (d.length > 1) {
      const u = k.getClass("ActiveSelection");
      this.setActiveObject(new u(d, { canvas: this }), t);
    }
    return this._groupSelector = null, !0;
  }
  toCanvasElement() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1, e = arguments.length > 1 ? arguments[1] : void 0;
    const { upper: r } = this.elements;
    r.ctx = void 0;
    const s = super.toCanvasElement(t, e);
    return r.ctx = r.el.getContext("2d"), s;
  }
  clear() {
    this.textEditingManager.clear(), super.clear();
  }
  destroy() {
    this.removeListeners(), this.textEditingManager.dispose(), super.destroy();
  }
}
const Pn = { x1: 0, y1: 0, x2: 0, y2: 0 }, Yc = m(m({}, Pn), {}, { r1: 0, r2: 0 }), Me = (o, t) => isNaN(o) && typeof t == "number" ? t : o;
function En(o) {
  return o && /%$/.test(o) && Number.isFinite(parseFloat(o));
}
function Mn(o, t) {
  const e = typeof o == "number" ? o : typeof o == "string" ? parseFloat(o) / (En(o) ? 100 : 1) : NaN;
  return Xe(0, Me(e, t), 1);
}
const Hc = /\s*;\s*/, Gc = /\s*:\s*/;
function Uc(o, t) {
  let e, r;
  const s = o.getAttribute("style");
  if (s) {
    const n = s.split(Hc);
    n[n.length - 1] === "" && n.pop();
    for (let a = n.length; a--; ) {
      const [l, c] = n[a].split(Gc).map(((h) => h.trim()));
      l === "stop-color" ? e = c : l === "stop-opacity" && (r = c);
    }
  }
  const i = new I(e || o.getAttribute("stop-color") || "rgb(0,0,0)");
  return { offset: Mn(o.getAttribute("offset"), 0), color: i.toRgb(), opacity: Me(parseFloat(r || o.getAttribute("stop-opacity") || ""), 1) * i.getAlpha() * t };
}
function Nc(o, t) {
  const e = [], r = o.getElementsByTagName("stop"), s = Mn(t, 1);
  for (let i = r.length; i--; ) e.push(Uc(r[i], s));
  return e;
}
function An(o) {
  return o.nodeName === "linearGradient" || o.nodeName === "LINEARGRADIENT" ? "linear" : "radial";
}
function jn(o) {
  return o.getAttribute("gradientUnits") === "userSpaceOnUse" ? "pixels" : "percentage";
}
function xt(o, t) {
  return o.getAttribute(t);
}
function qc(o, t) {
  return (function(e, r) {
    let s, { width: i, height: n, gradientUnits: a } = r;
    return Object.entries(e).reduce(((l, c) => {
      let [h, d] = c;
      if (d === "Infinity") s = 1;
      else if (d === "-Infinity") s = 0;
      else {
        const u = typeof d == "string";
        s = u ? parseFloat(d) : d, u && En(d) && (s *= 0.01, a === "pixels" && (h !== "x1" && h !== "x2" && h !== "r2" || (s *= i), h !== "y1" && h !== "y2" || (s *= n)));
      }
      return l[h] = s, l;
    }), {});
  })(An(o) === "linear" ? (function(e) {
    return { x1: xt(e, "x1") || 0, y1: xt(e, "y1") || 0, x2: xt(e, "x2") || "100%", y2: xt(e, "y2") || 0 };
  })(o) : (function(e) {
    return { x1: xt(e, "fx") || xt(e, "cx") || "50%", y1: xt(e, "fy") || xt(e, "cy") || "50%", r1: 0, x2: xt(e, "cx") || "50%", y2: xt(e, "cy") || "50%", r2: xt(e, "r") || "50%" };
  })(o), m(m({}, t), {}, { gradientUnits: jn(o) }));
}
class Ar {
  constructor(t) {
    const { type: e = "linear", gradientUnits: r = "pixels", coords: s = {}, colorStops: i = [], offsetX: n = 0, offsetY: a = 0, gradientTransform: l, id: c } = t || {};
    Object.assign(this, { type: e, gradientUnits: r, coords: m(m({}, e === "radial" ? Yc : Pn), s), colorStops: i, offsetX: n, offsetY: a, gradientTransform: l, id: c ? "".concat(c, "_").concat(he()) : he() });
  }
  addColorStop(t) {
    for (const e in t) {
      const r = new I(t[e]);
      this.colorStops.push({ offset: parseFloat(e), color: r.toRgb(), opacity: r.getAlpha() });
    }
    return this;
  }
  toObject(t) {
    return m(m({}, Je(this, t)), {}, { type: this.type, coords: m({}, this.coords), colorStops: this.colorStops.map(((e) => m({}, e))), offsetX: this.offsetX, offsetY: this.offsetY, gradientUnits: this.gradientUnits, gradientTransform: this.gradientTransform ? [...this.gradientTransform] : void 0 });
  }
  toSVG(t) {
    let { additionalTransform: e } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = [], s = this.gradientTransform ? this.gradientTransform.concat() : at.concat(), i = this.gradientUnits === "pixels" ? "userSpaceOnUse" : "objectBoundingBox", n = this.colorStops.map(((d) => m({}, d))).sort(((d, u) => d.offset - u.offset));
    let a = -this.offsetX, l = -this.offsetY;
    var c;
    i === "objectBoundingBox" ? (a /= t.width, l /= t.height) : (a += t.width / 2, l += t.height / 2), (c = t) && typeof c._renderPathCommands == "function" && this.gradientUnits !== "percentage" && (a -= t.pathOffset.x, l -= t.pathOffset.y), s[4] -= a, s[5] -= l;
    const h = ['id="SVGID_'.concat(this.id, '"'), 'gradientUnits="'.concat(i, '"'), 'gradientTransform="'.concat(e ? e + " " : "").concat(vr(s), '"'), ""].join(" ");
    if (this.type === "linear") {
      const { x1: d, y1: u, x2: g, y2: p } = this.coords;
      r.push("<linearGradient ", h, ' x1="', d, '" y1="', u, '" x2="', g, '" y2="', p, `">
`);
    } else if (this.type === "radial") {
      const { x1: d, y1: u, x2: g, y2: p, r1: v, r2: y } = this.coords, x = v > y;
      r.push("<radialGradient ", h, ' cx="', x ? d : g, '" cy="', x ? u : p, '" r="', x ? v : y, '" fx="', x ? g : d, '" fy="', x ? p : u, `">
`), x && (n.reverse(), n.forEach(((S) => {
        S.offset = 1 - S.offset;
      })));
      const _ = Math.min(v, y);
      if (_ > 0) {
        const S = _ / Math.max(v, y);
        n.forEach(((C) => {
          C.offset += S * (1 - C.offset);
        }));
      }
    }
    return n.forEach(((d) => {
      let { color: u, offset: g, opacity: p } = d;
      r.push("<stop ", 'offset="', 100 * g + "%", '" style="stop-color:', u, p !== void 0 ? ";stop-opacity: " + p : ";", `"/>
`);
    })), r.push(this.type === "linear" ? "</linearGradient>" : "</radialGradient>", `
`), r.join("");
  }
  toLive(t) {
    const { x1: e, y1: r, x2: s, y2: i, r1: n, r2: a } = this.coords, l = this.type === "linear" ? t.createLinearGradient(e, r, s, i) : t.createRadialGradient(e, r, n, s, i, a);
    return this.colorStops.forEach(((c) => {
      let { color: h, opacity: d, offset: u } = c;
      l.addColorStop(u, d !== void 0 ? new I(h).setAlpha(d).toRgba() : h);
    })), l;
  }
  static async fromObject(t) {
    const { colorStops: e, gradientTransform: r } = t;
    return new this(m(m({}, t), {}, { colorStops: e ? e.map(((s) => m({}, s))) : void 0, gradientTransform: r ? [...r] : void 0 }));
  }
  static fromElement(t, e, r) {
    const s = jn(t), i = e._findCenterFromElement();
    return new this(m({ id: t.getAttribute("id") || void 0, type: An(t), coords: qc(t, { width: r.viewBoxWidth || r.width, height: r.viewBoxHeight || r.height }), colorStops: Nc(t, r.opacity), gradientUnits: s, gradientTransform: hi(t.getAttribute("gradientTransform") || "") }, s === "pixels" ? { offsetX: e.width / 2 - i.x, offsetY: e.height / 2 - i.y } : { offsetX: 0, offsetY: 0 }));
  }
}
f(Ar, "type", "Gradient"), k.setClass(Ar, "gradient"), k.setClass(Ar, "linear"), k.setClass(Ar, "radial");
const Kc = ["type", "source", "patternTransform"];
class Ks {
  get type() {
    return "pattern";
  }
  set type(t) {
    ce("warn", "Setting type has no effect", t);
  }
  constructor(t) {
    f(this, "repeat", "repeat"), f(this, "offsetX", 0), f(this, "offsetY", 0), f(this, "crossOrigin", ""), this.id = he(), Object.assign(this, t);
  }
  isImageSource() {
    return !!this.source && typeof this.source.src == "string";
  }
  isCanvasSource() {
    return !!this.source && !!this.source.toDataURL;
  }
  sourceToString() {
    return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : "";
  }
  toLive(t) {
    return this.source && (!this.isImageSource() || this.source.complete && this.source.naturalWidth !== 0 && this.source.naturalHeight !== 0) ? t.createPattern(this.source, this.repeat) : null;
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const { repeat: e, crossOrigin: r } = this;
    return m(m({}, Je(this, t)), {}, { type: "pattern", source: this.sourceToString(), repeat: e, crossOrigin: r, offsetX: V(this.offsetX, j.NUM_FRACTION_DIGITS), offsetY: V(this.offsetY, j.NUM_FRACTION_DIGITS), patternTransform: this.patternTransform ? [...this.patternTransform] : null });
  }
  toSVG(t) {
    let { width: e, height: r } = t;
    const { source: s, repeat: i, id: n } = this, a = Me(this.offsetX / e, 0), l = Me(this.offsetY / r, 0), c = i === "repeat-y" || i === "no-repeat" ? 1 + Math.abs(a || 0) : Me(s.width / e, 0), h = i === "repeat-x" || i === "no-repeat" ? 1 + Math.abs(l || 0) : Me(s.height / r, 0);
    return ['<pattern id="SVGID_'.concat(n, '" x="').concat(a, '" y="').concat(l, '" width="').concat(c, '" height="').concat(h, '">'), '<image x="0" y="0" width="'.concat(s.width, '" height="').concat(s.height, '" xlink:href="').concat(this.sourceToString(), '"></image>'), "</pattern>", ""].join(`
`);
  }
  static async fromObject(t, e) {
    let { type: r, source: s, patternTransform: i } = t, n = X(t, Kc);
    const a = await ss(s, m(m({}, e), {}, { crossOrigin: n.crossOrigin }));
    return new this(m(m({}, n), {}, { patternTransform: i && i.slice(0), source: a }));
  }
}
f(Ks, "type", "Pattern"), k.setClass(Ks), k.setClass(Ks, "pattern");
const Jc = ["path", "left", "top"], Zc = ["d"];
class be extends ot {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { path: r, left: s, top: i } = e, n = X(e, Jc);
    super(), Object.assign(this, be.ownDefaults), this.setOptions(n), this._setPath(t || [], !0), typeof s == "number" && this.set(B, s), typeof i == "number" && this.set(ct, i);
  }
  _setPath(t, e) {
    this.path = Pc(Array.isArray(t) ? t : Rc(t)), this.setBoundingBox(e);
  }
  _findCenterFromElement() {
    const t = this._calcBoundsFromPath();
    return new b(t.left + t.width / 2, t.top + t.height / 2);
  }
  _renderPathCommands(t) {
    const e = -this.pathOffset.x, r = -this.pathOffset.y;
    t.beginPath();
    for (const s of this.path) switch (s[0]) {
      case "L":
        t.lineTo(s[1] + e, s[2] + r);
        break;
      case "M":
        t.moveTo(s[1] + e, s[2] + r);
        break;
      case "C":
        t.bezierCurveTo(s[1] + e, s[2] + r, s[3] + e, s[4] + r, s[5] + e, s[6] + r);
        break;
      case "Q":
        t.quadraticCurveTo(s[1] + e, s[2] + r, s[3] + e, s[4] + r);
        break;
      case "Z":
        t.closePath();
    }
  }
  _render(t) {
    this._renderPathCommands(t), this._renderPaintInOrder(t);
  }
  toString() {
    return "#<Path (".concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, " }>");
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return m(m({}, super.toObject(t)), {}, { path: this.path.map(((e) => e.slice())) });
  }
  toDatalessObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const e = this.toObject(t);
    return this.sourcePath && (delete e.path, e.sourcePath = this.sourcePath), e;
  }
  _toSVG() {
    const t = zc(this.path, j.NUM_FRACTION_DIGITS);
    return ["<path ", "COMMON_PARTS", 'd="'.concat(t, `" stroke-linecap="round" />
`)];
  }
  _getOffsetTransform() {
    const t = j.NUM_FRACTION_DIGITS;
    return " translate(".concat(V(-this.pathOffset.x, t), ", ").concat(V(-this.pathOffset.y, t), ")");
  }
  toClipPathSVG(t) {
    const e = this._getOffsetTransform();
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: t, additionalTransform: e });
  }
  toSVG(t) {
    const e = this._getOffsetTransform();
    return this._createBaseSVGMarkup(this._toSVG(), { reviver: t, additionalTransform: e });
  }
  complexity() {
    return this.path.length;
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t) {
    const { width: e, height: r, pathOffset: s } = this._calcDimensions();
    this.set({ width: e, height: r, pathOffset: s }), t && this.setPositionByOrigin(s, M, M);
  }
  _calcBoundsFromPath() {
    const t = [];
    let e = 0, r = 0, s = 0, i = 0;
    for (const n of this.path) switch (n[0]) {
      case "L":
        s = n[1], i = n[2], t.push({ x: e, y: r }, { x: s, y: i });
        break;
      case "M":
        s = n[1], i = n[2], e = s, r = i;
        break;
      case "C":
        t.push(...Co(s, i, n[1], n[2], n[3], n[4], n[5], n[6])), s = n[5], i = n[6];
        break;
      case "Q":
        t.push(...Co(s, i, n[1], n[2], n[1], n[2], n[3], n[4])), s = n[3], i = n[4];
        break;
      case "Z":
        s = e, i = r;
    }
    return Ht(t);
  }
  _calcDimensions() {
    const t = this._calcBoundsFromPath();
    return m(m({}, t), {}, { pathOffset: new b(t.left + t.width / 2, t.top + t.height / 2) });
  }
  static fromObject(t) {
    return this._fromObject(t, { extraParam: "path" });
  }
  static async fromElement(t, e, r) {
    const s = Qt(t, this.ATTRIBUTE_NAMES, r), { d: i } = s;
    return new this(i, m(m(m({}, X(s, Zc)), e), {}, { left: void 0, top: void 0 }));
  }
}
f(be, "type", "Path"), f(be, "cacheProperties", [...Zt, "path", "fillRule"]), f(be, "ATTRIBUTE_NAMES", [...ge, "d"]), k.setClass(be), k.setSVGClass(be);
const Qc = ["left", "top", "radius"], Fn = ["radius", "startAngle", "endAngle", "counterClockwise"];
class At extends ot {
  static getDefaults() {
    return m(m({}, super.getDefaults()), At.ownDefaults);
  }
  constructor(t) {
    super(), Object.assign(this, At.ownDefaults), this.setOptions(t);
  }
  _set(t, e) {
    return super._set(t, e), t === "radius" && this.setRadius(e), this;
  }
  _render(t) {
    t.beginPath(), t.arc(0, 0, this.radius, U(this.startAngle), U(this.endAngle), this.counterClockwise), this._renderPaintInOrder(t);
  }
  getRadiusX() {
    return this.get("radius") * this.get(ut);
  }
  getRadiusY() {
    return this.get("radius") * this.get(bt);
  }
  setRadius(t) {
    this.radius = t, this.set({ width: 2 * t, height: 2 * t });
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return super.toObject([...Fn, ...t]);
  }
  _toSVG() {
    const t = (this.endAngle - this.startAngle) % 360;
    if (t === 0) return ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', "".concat(this.radius), `" />
`];
    {
      const { radius: e } = this, r = U(this.startAngle), s = U(this.endAngle), i = Ut(r) * e, n = Nt(r) * e, a = Ut(s) * e, l = Nt(s) * e, c = t > 180 ? 1 : 0, h = this.counterClockwise ? 0 : 1;
      return ['<path d="M '.concat(i, " ").concat(n, " A ").concat(e, " ").concat(e, " 0 ").concat(c, " ").concat(h, " ").concat(a, " ").concat(l, '" '), "COMMON_PARTS", ` />
`];
    }
  }
  static async fromElement(t, e, r) {
    const s = Qt(t, this.ATTRIBUTE_NAMES, r), { left: i = 0, top: n = 0, radius: a = 0 } = s;
    return new this(m(m({}, X(s, Qc)), {}, { radius: a, left: i - a, top: n - a }));
  }
  static fromObject(t) {
    return super._fromObject(t);
  }
}
f(At, "type", "Circle"), f(At, "cacheProperties", [...Zt, ...Fn]), f(At, "ownDefaults", { radius: 0, startAngle: 0, endAngle: 360, counterClockwise: !1 }), f(At, "ATTRIBUTE_NAMES", ["cx", "cy", "r", ...ge]), k.setClass(At), k.setSVGClass(At);
const th = ["x1", "y1", "x2", "y2"], eh = ["x1", "y1", "x2", "y2"], fi = ["x1", "x2", "y1", "y2"];
class Vt extends ot {
  constructor() {
    let [t, e, r, s] = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [0, 0, 0, 0], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Object.assign(this, Vt.ownDefaults), this.setOptions(i), this.x1 = t, this.x2 = r, this.y1 = e, this.y2 = s, this._setWidthHeight();
    const { left: n, top: a } = i;
    typeof n == "number" && this.set(B, n), typeof a == "number" && this.set(ct, a);
  }
  _setWidthHeight() {
    const { x1: t, y1: e, x2: r, y2: s } = this;
    this.width = Math.abs(r - t), this.height = Math.abs(s - e);
    const { left: i, top: n, width: a, height: l } = Ht([{ x: t, y: e }, { x: r, y: s }]), c = new b(i + a / 2, n + l / 2);
    this.setPositionByOrigin(c, M, M);
  }
  _set(t, e) {
    return super._set(t, e), fi.includes(t) && this._setWidthHeight(), this;
  }
  _render(t) {
    t.beginPath();
    const e = this.calcLinePoints();
    t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2), t.lineWidth = this.strokeWidth;
    const r = t.strokeStyle;
    var s;
    vt(this.stroke) ? t.strokeStyle = this.stroke.toLive(t) : t.strokeStyle = (s = this.stroke) !== null && s !== void 0 ? s : t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = r;
  }
  _findCenterFromElement() {
    return new b((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return m(m({}, super.toObject(t)), this.calcLinePoints());
  }
  _getNonTransformedDimensions() {
    const t = super._getNonTransformedDimensions();
    return this.strokeLineCap === "butt" && (this.width === 0 && (t.y -= this.strokeWidth), this.height === 0 && (t.x -= this.strokeWidth)), t;
  }
  calcLinePoints() {
    const { x1: t, x2: e, y1: r, y2: s, width: i, height: n } = this, a = t <= e ? -1 : 1, l = r <= s ? -1 : 1;
    return { x1: a * i / 2, x2: a * -i / 2, y1: l * n / 2, y2: l * -n / 2 };
  }
  _toSVG() {
    const { x1: t, x2: e, y1: r, y2: s } = this.calcLinePoints();
    return ["<line ", "COMMON_PARTS", 'x1="'.concat(t, '" y1="').concat(r, '" x2="').concat(e, '" y2="').concat(s, `" />
`)];
  }
  static async fromElement(t, e, r) {
    const s = Qt(t, this.ATTRIBUTE_NAMES, r), { x1: i = 0, y1: n = 0, x2: a = 0, y2: l = 0 } = s;
    return new this([i, n, a, l], X(s, th));
  }
  static fromObject(t) {
    let { x1: e, y1: r, x2: s, y2: i } = t, n = X(t, eh);
    return this._fromObject(m(m({}, n), {}, { points: [e, r, s, i] }), { extraParam: "points" });
  }
}
f(Vt, "type", "Line"), f(Vt, "cacheProperties", [...Zt, ...fi]), f(Vt, "ATTRIBUTE_NAMES", ge.concat(fi)), k.setClass(Vt), k.setSVGClass(Vt);
class ye extends ot {
  static getDefaults() {
    return m(m({}, super.getDefaults()), ye.ownDefaults);
  }
  constructor(t) {
    super(), Object.assign(this, ye.ownDefaults), this.setOptions(t);
  }
  _render(t) {
    const e = this.width / 2, r = this.height / 2;
    t.beginPath(), t.moveTo(-e, r), t.lineTo(0, -r), t.lineTo(e, r), t.closePath(), this._renderPaintInOrder(t);
  }
  _toSVG() {
    const t = this.width / 2, e = this.height / 2;
    return ["<polygon ", "COMMON_PARTS", 'points="', "".concat(-t, " ").concat(e, ",0 ").concat(-e, ",").concat(t, " ").concat(e), '" />'];
  }
}
f(ye, "type", "Triangle"), f(ye, "ownDefaults", { width: 100, height: 100 }), k.setClass(ye), k.setSVGClass(ye);
const Ln = ["rx", "ry"];
class $t extends ot {
  static getDefaults() {
    return m(m({}, super.getDefaults()), $t.ownDefaults);
  }
  constructor(t) {
    super(), Object.assign(this, $t.ownDefaults), this.setOptions(t);
  }
  _set(t, e) {
    switch (super._set(t, e), t) {
      case "rx":
        this.rx = e, this.set("width", 2 * e);
        break;
      case "ry":
        this.ry = e, this.set("height", 2 * e);
    }
    return this;
  }
  getRx() {
    return this.get("rx") * this.get(ut);
  }
  getRy() {
    return this.get("ry") * this.get(bt);
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return super.toObject([...Ln, ...t]);
  }
  _toSVG() {
    return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(this.ry, `" />
`)];
  }
  _render(t) {
    t.beginPath(), t.save(), t.transform(1, 0, 0, this.ry / this.rx, 0, 0), t.arc(0, 0, this.rx, 0, ls, !1), t.restore(), this._renderPaintInOrder(t);
  }
  static async fromElement(t, e, r) {
    const s = Qt(t, this.ATTRIBUTE_NAMES, r);
    return s.left = (s.left || 0) - s.rx, s.top = (s.top || 0) - s.ry, new this(s);
  }
}
function rh(o) {
  if (!o) return [];
  const t = o.replace(/,/g, " ").trim().split(/\s+/), e = [];
  for (let r = 0; r < t.length; r += 2) e.push({ x: parseFloat(t[r]), y: parseFloat(t[r + 1]) });
  return e;
}
f($t, "type", "Ellipse"), f($t, "cacheProperties", [...Zt, ...Ln]), f($t, "ownDefaults", { rx: 0, ry: 0 }), f($t, "ATTRIBUTE_NAMES", [...ge, "cx", "cy", "rx", "ry"]), k.setClass($t), k.setSVGClass($t);
const sh = ["left", "top"], Bn = { exactBoundingBox: !1 };
class wt extends ot {
  static getDefaults() {
    return m(m({}, super.getDefaults()), wt.ownDefaults);
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), f(this, "strokeDiff", void 0), Object.assign(this, wt.ownDefaults), this.setOptions(e), this.points = t;
    const { left: r, top: s } = e;
    this.initialized = !0, this.setBoundingBox(!0), typeof r == "number" && this.set(B, r), typeof s == "number" && this.set(ct, s);
  }
  isOpen() {
    return !0;
  }
  _projectStrokeOnPoints(t) {
    return Gl(this.points, t, this.isOpen());
  }
  _calcDimensions(t) {
    t = m({ scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, strokeLineCap: this.strokeLineCap, strokeLineJoin: this.strokeLineJoin, strokeMiterLimit: this.strokeMiterLimit, strokeUniform: this.strokeUniform, strokeWidth: this.strokeWidth }, t || {});
    const e = this.exactBoundingBox ? this._projectStrokeOnPoints(t).map(((c) => c.projectedPoint)) : this.points;
    if (e.length === 0) return { left: 0, top: 0, width: 0, height: 0, pathOffset: new b(), strokeOffset: new b(), strokeDiff: new b() };
    const r = Ht(e), s = Ms(m(m({}, t), {}, { scaleX: 1, scaleY: 1 })), i = Ht(this.points.map(((c) => lt(c, s, !0)))), n = new b(this.scaleX, this.scaleY);
    let a = r.left + r.width / 2, l = r.top + r.height / 2;
    return this.exactBoundingBox && (a -= l * Math.tan(U(this.skewX)), l -= a * Math.tan(U(this.skewY))), m(m({}, r), {}, { pathOffset: new b(a, l), strokeOffset: new b(i.left, i.top).subtract(new b(r.left, r.top)).multiply(n), strokeDiff: new b(r.width, r.height).subtract(new b(i.width, i.height)).multiply(n) });
  }
  _findCenterFromElement() {
    const t = Ht(this.points);
    return new b(t.left + t.width / 2, t.top + t.height / 2);
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t) {
    const { left: e, top: r, width: s, height: i, pathOffset: n, strokeOffset: a, strokeDiff: l } = this._calcDimensions();
    this.set({ width: s, height: i, pathOffset: n, strokeOffset: a, strokeDiff: l }), t && this.setPositionByOrigin(new b(e + s / 2, r + i / 2), M, M);
  }
  isStrokeAccountedForInDimensions() {
    return this.exactBoundingBox;
  }
  _getNonTransformedDimensions() {
    return this.exactBoundingBox ? new b(this.width, this.height) : super._getNonTransformedDimensions();
  }
  _getTransformedDimensions() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (this.exactBoundingBox) {
      let n;
      if (Object.keys(t).some(((a) => this.strokeUniform || this.constructor.layoutProperties.includes(a)))) {
        var e, r;
        const { width: a, height: l } = this._calcDimensions(t);
        n = new b((e = t.width) !== null && e !== void 0 ? e : a, (r = t.height) !== null && r !== void 0 ? r : l);
      } else {
        var s, i;
        n = new b((s = t.width) !== null && s !== void 0 ? s : this.width, (i = t.height) !== null && i !== void 0 ? i : this.height);
      }
      return n.multiply(new b(t.scaleX || this.scaleX, t.scaleY || this.scaleY));
    }
    return super._getTransformedDimensions(t);
  }
  _set(t, e) {
    const r = this.initialized && this[t] !== e, s = super._set(t, e);
    return this.exactBoundingBox && r && ((t === ut || t === bt) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t)) && this.setDimensions(), s;
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return m(m({}, super.toObject(t)), {}, { points: this.points.map(((e) => {
      let { x: r, y: s } = e;
      return { x: r, y: s };
    })) });
  }
  _toSVG() {
    const t = [], e = this.pathOffset.x, r = this.pathOffset.y, s = j.NUM_FRACTION_DIGITS;
    for (let i = 0, n = this.points.length; i < n; i++) t.push(V(this.points[i].x - e, s), ",", V(this.points[i].y - r, s), " ");
    return ["<".concat(this.constructor.type.toLowerCase(), " "), "COMMON_PARTS", 'points="'.concat(t.join(""), `" />
`)];
  }
  _render(t) {
    const e = this.points.length, r = this.pathOffset.x, s = this.pathOffset.y;
    if (e && !isNaN(this.points[e - 1].y)) {
      t.beginPath(), t.moveTo(this.points[0].x - r, this.points[0].y - s);
      for (let i = 0; i < e; i++) {
        const n = this.points[i];
        t.lineTo(n.x - r, n.y - s);
      }
      !this.isOpen() && t.closePath(), this._renderPaintInOrder(t);
    }
  }
  complexity() {
    return this.points.length;
  }
  static async fromElement(t, e, r) {
    return new this(rh(t.getAttribute("points")), m(m({}, X(Qt(t, this.ATTRIBUTE_NAMES, r), sh)), e));
  }
  static fromObject(t) {
    return this._fromObject(t, { extraParam: "points" });
  }
}
f(wt, "ownDefaults", Bn), f(wt, "type", "Polyline"), f(wt, "layoutProperties", [Ne, qe, "strokeLineCap", "strokeLineJoin", "strokeMiterLimit", "strokeWidth", "strokeUniform", "points"]), f(wt, "cacheProperties", [...Zt, "points"]), f(wt, "ATTRIBUTE_NAMES", [...ge]), k.setClass(wt), k.setSVGClass(wt);
class lr extends wt {
  isOpen() {
    return !1;
  }
}
f(lr, "ownDefaults", Bn), f(lr, "type", "Polygon"), k.setClass(lr), k.setSVGClass(lr);
class In extends ot {
  isEmptyStyles(t) {
    if (!this.styles || t !== void 0 && !this.styles[t]) return !0;
    const e = t === void 0 ? this.styles : { line: this.styles[t] };
    for (const r in e) for (const s in e[r]) for (const i in e[r][s]) return !1;
    return !0;
  }
  styleHas(t, e) {
    if (!this.styles || e !== void 0 && !this.styles[e]) return !1;
    const r = e === void 0 ? this.styles : { 0: this.styles[e] };
    for (const s in r) for (const i in r[s]) if (r[s][i][t] !== void 0) return !0;
    return !1;
  }
  cleanStyle(t) {
    if (!this.styles) return !1;
    const e = this.styles;
    let r, s, i = 0, n = !0, a = 0;
    for (const l in e) {
      r = 0;
      for (const c in e[l]) {
        const h = e[l][c] || {};
        i++, h[t] !== void 0 ? (s ? h[t] !== s && (n = !1) : s = h[t], h[t] === this[t] && delete h[t]) : n = !1, Object.keys(h).length !== 0 ? r++ : delete e[l][c];
      }
      r === 0 && delete e[l];
    }
    for (let l = 0; l < this._textLines.length; l++) a += this._textLines[l].length;
    n && i === a && (this[t] = s, this.removeStyle(t));
  }
  removeStyle(t) {
    if (!this.styles) return;
    const e = this.styles;
    let r, s, i;
    for (s in e) {
      for (i in r = e[s], r) delete r[i][t], Object.keys(r[i]).length === 0 && delete r[i];
      Object.keys(r).length === 0 && delete e[s];
    }
  }
  _extendStyles(t, e) {
    const { lineIndex: r, charIndex: s } = this.get2DCursorLocation(t);
    this._getLineStyle(r) || this._setLineStyle(r);
    const i = ki(m(m({}, this._getStyleDeclaration(r, s)), e), ((n) => n !== void 0));
    this._setStyleDeclaration(r, s, i);
  }
  getSelectionStyles(t, e, r) {
    const s = [];
    for (let i = t; i < (e || t); i++) s.push(this.getStyleAtPosition(i, r));
    return s;
  }
  getStyleAtPosition(t, e) {
    const { lineIndex: r, charIndex: s } = this.get2DCursorLocation(t);
    return e ? this.getCompleteStyleDeclaration(r, s) : this._getStyleDeclaration(r, s);
  }
  setSelectionStyles(t, e, r) {
    for (let s = e; s < (r || e); s++) this._extendStyles(s, t);
    this._forceClearCache = !0;
  }
  _getStyleDeclaration(t, e) {
    var r;
    const s = this.styles && this.styles[t];
    return s && (r = s[e]) !== null && r !== void 0 ? r : {};
  }
  getCompleteStyleDeclaration(t, e) {
    return m(m({}, Je(this, this.constructor._styleProperties)), this._getStyleDeclaration(t, e));
  }
  _setStyleDeclaration(t, e, r) {
    this.styles[t][e] = r;
  }
  _deleteStyleDeclaration(t, e) {
    delete this.styles[t][e];
  }
  _getLineStyle(t) {
    return !!this.styles[t];
  }
  _setLineStyle(t) {
    this.styles[t] = {};
  }
  _deleteLineStyle(t) {
    delete this.styles[t];
  }
}
f(In, "_styleProperties", ll);
const ih = /  +/g, oh = /"/g;
function Js(o, t, e, r, s) {
  return "		".concat((function(i, n) {
    let { left: a, top: l, width: c, height: h } = n, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : j.NUM_FRACTION_DIGITS;
    const u = br(K, i, !1), [g, p, v, y] = [a, l, c, h].map(((x) => V(x, d)));
    return "<rect ".concat(u, ' x="').concat(g, '" y="').concat(p, '" width="').concat(v, '" height="').concat(y, '"></rect>');
  })(o, { left: t, top: e, width: r, height: s }), `
`);
}
const nh = ["textAnchor", "textDecoration", "dx", "dy", "top", "left", "fontSize", "strokeWidth"];
let Zs;
class it extends In {
  static getDefaults() {
    return m(m({}, super.getDefaults()), it.ownDefaults);
  }
  constructor(t, e) {
    super(), f(this, "__charBounds", []), Object.assign(this, it.ownDefaults), this.setOptions(e), this.styles || (this.styles = {}), this.text = t, this.initialized = !0, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords();
  }
  setPathInfo() {
    const t = this.path;
    t && (t.segmentsInfo = Dn(t.path));
  }
  _splitText() {
    const t = this._splitTextIntoLines(this.text);
    return this.textLines = t.lines, this._textLines = t.graphemeLines, this._unwrappedTextLines = t._unwrappedLines, this._text = t.graphemeText, t;
  }
  initDimensions() {
    this._splitText(), this._clearCache(), this.dirty = !0, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(jt) && this.enlargeSpaces();
  }
  enlargeSpaces() {
    let t, e, r, s, i, n, a;
    for (let l = 0, c = this._textLines.length; l < c; l++) if ((this.textAlign === jt || l !== c - 1 && !this.isEndOfWrapping(l)) && (s = 0, i = this._textLines[l], e = this.getLineWidth(l), e < this.width && (a = this.textLines[l].match(this._reSpacesAndTabs)))) {
      r = a.length, t = (this.width - e) / r;
      for (let h = 0; h <= i.length; h++) n = this.__charBounds[l][h], this._reSpaceAndTab.test(i[h]) ? (n.width += t, n.kernedWidth += t, n.left += s, s += t) : n.left += s;
    }
  }
  isEndOfWrapping(t) {
    return t === this._textLines.length - 1;
  }
  missingNewlineOffset(t) {
    return 1;
  }
  get2DCursorLocation(t, e) {
    const r = e ? this._unwrappedTextLines : this._textLines;
    let s;
    for (s = 0; s < r.length; s++) {
      if (t <= r[s].length) return { lineIndex: s, charIndex: t };
      t -= r[s].length + this.missingNewlineOffset(s, e);
    }
    return { lineIndex: s - 1, charIndex: r[s - 1].length < t ? r[s - 1].length : t };
  }
  toString() {
    return "#<Text (".concat(this.complexity(), '): { "text": "').concat(this.text, '", "fontFamily": "').concat(this.fontFamily, '" }>');
  }
  _getCacheCanvasDimensions() {
    const t = super._getCacheCanvasDimensions(), e = this.fontSize;
    return t.width += e * t.zoomX, t.height += e * t.zoomY, t;
  }
  _render(t) {
    const e = this.path;
    e && !e.isNotVisible() && e._render(t), this._setTextStyles(t), this._renderTextLinesBackground(t), this._renderTextDecoration(t, "underline"), this._renderText(t), this._renderTextDecoration(t, "overline"), this._renderTextDecoration(t, "linethrough");
  }
  _renderText(t) {
    this.paintFirst === dt ? (this._renderTextStroke(t), this._renderTextFill(t)) : (this._renderTextFill(t), this._renderTextStroke(t));
  }
  _setTextStyles(t, e, r) {
    if (t.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
      case M:
        t.textBaseline = "middle";
        break;
      case "ascender":
        t.textBaseline = ct;
        break;
      case "descender":
        t.textBaseline = ii;
    }
    t.font = this._getFontDeclaration(e, r);
  }
  calcTextWidth() {
    let t = this.getLineWidth(0);
    for (let e = 1, r = this._textLines.length; e < r; e++) {
      const s = this.getLineWidth(e);
      s > t && (t = s);
    }
    return t;
  }
  _renderTextLine(t, e, r, s, i, n) {
    this._renderChars(t, e, r, s, i, n);
  }
  _renderTextLinesBackground(t) {
    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
    const e = t.fillStyle, r = this._getLeftOffset();
    let s = this._getTopOffset();
    for (let i = 0, n = this._textLines.length; i < n; i++) {
      const a = this.getHeightOfLine(i);
      if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", i)) {
        s += a;
        continue;
      }
      const l = this._textLines[i].length, c = this._getLineLeftOffset(i);
      let h, d, u = 0, g = 0, p = this.getValueOfPropertyAt(i, 0, "textBackgroundColor");
      const v = this.getHeightOfLineImpl(i);
      for (let y = 0; y < l; y++) {
        const x = this.__charBounds[i][y];
        d = this.getValueOfPropertyAt(i, y, "textBackgroundColor"), this.path ? (t.save(), t.translate(x.renderLeft, x.renderTop), t.rotate(x.angle), t.fillStyle = d, d && t.fillRect(-x.width / 2, -v * (1 - this._fontSizeFraction), x.width, v), t.restore()) : d !== p ? (h = r + c + g, this.direction === "rtl" && (h = this.width - h - u), t.fillStyle = p, p && t.fillRect(h, s, u, v), g = x.left, u = x.width, p = d) : u += x.kernedWidth;
      }
      d && !this.path && (h = r + c + g, this.direction === "rtl" && (h = this.width - h - u), t.fillStyle = d, t.fillRect(h, s, u, v)), s += a;
    }
    t.fillStyle = e, this._removeShadow(t);
  }
  _measureChar(t, e, r, s) {
    const i = hr.getFontCache(e), n = this._getFontDeclaration(e), a = r ? r + t : t, l = r && n === this._getFontDeclaration(s), c = e.fontSize / this.CACHE_FONT_SIZE;
    let h, d, u, g;
    if (r && i.has(r) && (u = i.get(r)), i.has(t) && (g = h = i.get(t)), l && i.has(a) && (d = i.get(a), g = d - u), h === void 0 || u === void 0 || d === void 0) {
      const p = (function() {
        return Zs || (Zs = yt({ width: 0, height: 0 }).getContext("2d")), Zs;
      })();
      this._setTextStyles(p, e, !0), h === void 0 && (g = h = p.measureText(t).width, i.set(t, h)), u === void 0 && l && r && (u = p.measureText(r).width, i.set(r, u)), l && d === void 0 && (d = p.measureText(a).width, i.set(a, d), g = d - u);
    }
    return { width: h * c, kernedWidth: g * c };
  }
  getHeightOfChar(t, e) {
    return this.getValueOfPropertyAt(t, e, "fontSize");
  }
  measureLine(t) {
    const e = this._measureLine(t);
    return this.charSpacing !== 0 && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e;
  }
  _measureLine(t) {
    let e, r, s = 0;
    const i = this.pathSide === G, n = this.path, a = this._textLines[t], l = a.length, c = new Array(l);
    this.__charBounds[t] = c;
    for (let h = 0; h < l; h++) {
      const d = a[h];
      r = this._getGraphemeBox(d, t, h, e), c[h] = r, s += r.kernedWidth, e = d;
    }
    if (c[l] = { left: r ? r.left + r.width : 0, width: 0, kernedWidth: 0, height: this.fontSize, deltaY: 0 }, n && n.segmentsInfo) {
      let h = 0;
      const d = n.segmentsInfo[n.segmentsInfo.length - 1].length;
      switch (this.textAlign) {
        case B:
          h = i ? d - s : 0;
          break;
        case M:
          h = (d - s) / 2;
          break;
        case G:
          h = i ? 0 : d - s;
      }
      h += this.pathStartOffset * (i ? -1 : 1);
      for (let u = i ? l - 1 : 0; i ? u >= 0 : u < l; i ? u-- : u++) r = c[u], h > d ? h %= d : h < 0 && (h += d), this._setGraphemeOnPath(h, r), h += r.kernedWidth;
    }
    return { width: s, numOfSpaces: 0 };
  }
  _setGraphemeOnPath(t, e) {
    const r = t + e.kernedWidth / 2, s = this.path, i = Fc(s.path, r, s.segmentsInfo);
    e.renderLeft = i.x - s.pathOffset.x, e.renderTop = i.y - s.pathOffset.y, e.angle = i.angle + (this.pathSide === G ? Math.PI : 0);
  }
  _getGraphemeBox(t, e, r, s, i) {
    const n = this.getCompleteStyleDeclaration(e, r), a = s ? this.getCompleteStyleDeclaration(e, r - 1) : {}, l = this._measureChar(t, n, s, a);
    let c, h = l.kernedWidth, d = l.width;
    this.charSpacing !== 0 && (c = this._getWidthOfCharSpacing(), d += c, h += c);
    const u = { width: d, left: 0, height: n.fontSize, kernedWidth: h, deltaY: n.deltaY };
    if (r > 0 && !i) {
      const g = this.__charBounds[e][r - 1];
      u.left = g.left + g.width + l.kernedWidth - l.width;
    }
    return u;
  }
  getHeightOfLineImpl(t) {
    const e = this.__lineHeights;
    if (e[t]) return e[t];
    let r = this.getHeightOfChar(t, 0);
    for (let s = 1, i = this._textLines[t].length; s < i; s++) r = Math.max(this.getHeightOfChar(t, s), r);
    return e[t] = r * this._fontSizeMult;
  }
  getHeightOfLine(t) {
    return this.getHeightOfLineImpl(t) * this.lineHeight;
  }
  calcTextHeight() {
    let t = 0;
    for (let e = 0, r = this._textLines.length; e < r; e++) t += e === r - 1 ? this.getHeightOfLineImpl(e) : this.getHeightOfLine(e);
    return t;
  }
  _getLeftOffset() {
    return this.direction === "ltr" ? -this.width / 2 : this.width / 2;
  }
  _getTopOffset() {
    return -this.height / 2;
  }
  _renderTextCommon(t, e) {
    t.save();
    let r = 0;
    const s = this._getLeftOffset(), i = this._getTopOffset();
    for (let n = 0, a = this._textLines.length; n < a; n++) this._renderTextLine(e, t, this._textLines[n], s + this._getLineLeftOffset(n), i + r + this.getHeightOfLineImpl(n), n), r += this.getHeightOfLine(n);
    t.restore();
  }
  _renderTextFill(t) {
    (this.fill || this.styleHas(K)) && this._renderTextCommon(t, "fillText");
  }
  _renderTextStroke(t) {
    (this.stroke && this.strokeWidth !== 0 || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray), t.beginPath(), this._renderTextCommon(t, "strokeText"), t.closePath(), t.restore());
  }
  _renderChars(t, e, r, s, i, n) {
    const a = this.textAlign.includes(jt), l = this.path, c = !a && this.charSpacing === 0 && this.isEmptyStyles(n) && !l, h = this.direction === "ltr", d = this.direction === "ltr" ? 1 : -1, u = e.direction;
    let g, p, v, y, x, _ = "", S = 0;
    if (e.save(), u !== this.direction && (e.canvas.setAttribute("dir", h ? "ltr" : "rtl"), e.direction = h ? "ltr" : "rtl", e.textAlign = h ? B : G), i -= this.getHeightOfLineImpl(n) * this._fontSizeFraction, c) return this._renderChar(t, e, n, 0, r.join(""), s, i), void e.restore();
    for (let C = 0, T = r.length - 1; C <= T; C++) y = C === T || this.charSpacing || l, _ += r[C], v = this.__charBounds[n][C], S === 0 ? (s += d * (v.kernedWidth - v.width), S += v.width) : S += v.kernedWidth, a && !y && this._reSpaceAndTab.test(r[C]) && (y = !0), y || (g = g || this.getCompleteStyleDeclaration(n, C), p = this.getCompleteStyleDeclaration(n, C + 1), y = Fi(g, p, !1)), y && (l ? (e.save(), e.translate(v.renderLeft, v.renderTop), e.rotate(v.angle), this._renderChar(t, e, n, C, _, -S / 2, 0), e.restore()) : (x = s, this._renderChar(t, e, n, C, _, x, i)), _ = "", g = p, s += d * S, S = 0);
    e.restore();
  }
  _applyPatternGradientTransformText(t) {
    const e = this.width + this.strokeWidth, r = this.height + this.strokeWidth, s = yt({ width: e, height: r }), i = s.getContext("2d");
    return s.width = e, s.height = r, i.beginPath(), i.moveTo(0, 0), i.lineTo(e, 0), i.lineTo(e, r), i.lineTo(0, r), i.closePath(), i.translate(e / 2, r / 2), i.fillStyle = t.toLive(i), this._applyPatternGradientTransform(i, t), i.fill(), i.createPattern(s, "no-repeat");
  }
  handleFiller(t, e, r) {
    let s, i;
    return vt(r) ? r.gradientUnits === "percentage" || r.gradientTransform || r.patternTransform ? (s = -this.width / 2, i = -this.height / 2, t.translate(s, i), t[e] = this._applyPatternGradientTransformText(r), { offsetX: s, offsetY: i }) : (t[e] = r.toLive(t), this._applyPatternGradientTransform(t, r)) : (t[e] = r, { offsetX: 0, offsetY: 0 });
  }
  _setStrokeStyles(t, e) {
    let { stroke: r, strokeWidth: s } = e;
    return t.lineWidth = s, t.lineCap = this.strokeLineCap, t.lineDashOffset = this.strokeDashOffset, t.lineJoin = this.strokeLineJoin, t.miterLimit = this.strokeMiterLimit, this.handleFiller(t, "strokeStyle", r);
  }
  _setFillStyles(t, e) {
    let { fill: r } = e;
    return this.handleFiller(t, "fillStyle", r);
  }
  _renderChar(t, e, r, s, i, n, a) {
    const l = this._getStyleDeclaration(r, s), c = this.getCompleteStyleDeclaration(r, s), h = t === "fillText" && c.fill, d = t === "strokeText" && c.stroke && c.strokeWidth;
    if (d || h) {
      if (e.save(), e.font = this._getFontDeclaration(c), l.textBackgroundColor && this._removeShadow(e), l.deltaY && (a += l.deltaY), h) {
        const u = this._setFillStyles(e, c);
        e.fillText(i, n - u.offsetX, a - u.offsetY);
      }
      if (d) {
        const u = this._setStrokeStyles(e, c);
        e.strokeText(i, n - u.offsetX, a - u.offsetY);
      }
      e.restore();
    }
  }
  setSuperscript(t, e) {
    this._setScript(t, e, this.superscript);
  }
  setSubscript(t, e) {
    this._setScript(t, e, this.subscript);
  }
  _setScript(t, e, r) {
    const s = this.get2DCursorLocation(t, !0), i = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "fontSize"), n = this.getValueOfPropertyAt(s.lineIndex, s.charIndex, "deltaY"), a = { fontSize: i * r.size, deltaY: n + i * r.baseline };
    this.setSelectionStyles(a, t, e);
  }
  _getLineLeftOffset(t) {
    const e = this.getLineWidth(t), r = this.width - e, s = this.textAlign, i = this.direction, n = this.isEndOfWrapping(t);
    let a = 0;
    return s === jt || s === ur && !n || s === dr && !n || s === ms && !n ? 0 : (s === M && (a = r / 2), s === G && (a = r), s === ur && (a = r / 2), s === dr && (a = r), i === "rtl" && (s === G || s === jt || s === dr ? a = 0 : s === B || s === ms ? a = -r : s !== M && s !== ur || (a = -r / 2)), a);
  }
  _clearCache() {
    this._forceClearCache = !1, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
  }
  getLineWidth(t) {
    if (this.__lineWidths[t] !== void 0) return this.__lineWidths[t];
    const { width: e } = this.measureLine(t);
    return this.__lineWidths[t] = e, e;
  }
  _getWidthOfCharSpacing() {
    return this.charSpacing !== 0 ? this.fontSize * this.charSpacing / 1e3 : 0;
  }
  getValueOfPropertyAt(t, e, r) {
    var s;
    return (s = this._getStyleDeclaration(t, e)[r]) !== null && s !== void 0 ? s : this[r];
  }
  _renderTextDecoration(t, e) {
    if (!this[e] && !this.styleHas(e)) return;
    let r = this._getTopOffset();
    const s = this._getLeftOffset(), i = this.path, n = this._getWidthOfCharSpacing(), a = e === "linethrough" ? 0.5 : e === "overline" ? 1 : 0, l = this.offsets[e];
    for (let c = 0, h = this._textLines.length; c < h; c++) {
      const d = this.getHeightOfLine(c);
      if (!this[e] && !this.styleHas(e, c)) {
        r += d;
        continue;
      }
      const u = this._textLines[c], g = d / this.lineHeight, p = this._getLineLeftOffset(c);
      let v = 0, y = 0, x = this.getValueOfPropertyAt(c, 0, e), _ = this.getValueOfPropertyAt(c, 0, K), S = this.getValueOfPropertyAt(c, 0, Se), C = x, T = _, D = S;
      const A = r + g * (1 - this._fontSizeFraction);
      let O = this.getHeightOfChar(c, 0), L = this.getValueOfPropertyAt(c, 0, "deltaY");
      for (let W = 0, z = u.length; W < z; W++) {
        const F = this.__charBounds[c][W];
        C = this.getValueOfPropertyAt(c, W, e), T = this.getValueOfPropertyAt(c, W, K), D = this.getValueOfPropertyAt(c, W, Se);
        const tt = this.getHeightOfChar(c, W), Q = this.getValueOfPropertyAt(c, W, "deltaY");
        if (i && C && T) {
          const et = this.fontSize * D / 1e3;
          t.save(), t.fillStyle = _, t.translate(F.renderLeft, F.renderTop), t.rotate(F.angle), t.fillRect(-F.kernedWidth / 2, l * tt + Q - a * et, F.kernedWidth, et), t.restore();
        } else if ((C !== x || T !== _ || tt !== O || D !== S || Q !== L) && y > 0) {
          const et = this.fontSize * S / 1e3;
          let $ = s + p + v;
          this.direction === "rtl" && ($ = this.width - $ - y), x && _ && S && (t.fillStyle = _, t.fillRect($, A + l * O + L - a * et, y, et)), v = F.left, y = F.width, x = C, S = D, _ = T, O = tt, L = Q;
        } else y += F.kernedWidth;
      }
      let q = s + p + v;
      this.direction === "rtl" && (q = this.width - q - y), t.fillStyle = T;
      const Z = this.fontSize * D / 1e3;
      C && T && D && t.fillRect(q, A + l * O + L - a * Z, y - n, Z), r += d;
    }
    this._removeShadow(t);
  }
  _getFontDeclaration() {
    let { fontFamily: t = this.fontFamily, fontStyle: e = this.fontStyle, fontWeight: r = this.fontWeight, fontSize: s = this.fontSize } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    const n = t.includes("'") || t.includes('"') || t.includes(",") || it.genericFonts.includes(t.toLowerCase()) ? t : '"'.concat(t, '"');
    return [e, r, "".concat(i ? this.CACHE_FONT_SIZE : s, "px"), n].join(" ");
  }
  render(t) {
    this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._forceClearCache && this.initDimensions(), super.render(t)));
  }
  graphemeSplit(t) {
    return ji(t);
  }
  _splitTextIntoLines(t) {
    const e = t.split(this._reNewline), r = new Array(e.length), s = [`
`];
    let i = [];
    for (let n = 0; n < e.length; n++) r[n] = this.graphemeSplit(e[n]), i = i.concat(r[n], s);
    return i.pop(), { _unwrappedLines: r, lines: e, graphemeText: i, graphemeLines: r };
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return m(m({}, super.toObject([...hn, ...t])), {}, { styles: Kl(this.styles, this.text) }, this.path ? { path: this.path.toObject() } : {});
  }
  set(t, e) {
    const { textLayoutProperties: r } = this.constructor;
    super.set(t, e);
    let s = !1, i = !1;
    if (typeof t == "object") for (const n in t) n === "path" && this.setPathInfo(), s = s || r.includes(n), i = i || n === "path";
    else s = r.includes(t), i = t === "path";
    return i && this.setPathInfo(), s && this.initialized && (this.initDimensions(), this.setCoords()), this;
  }
  complexity() {
    return 1;
  }
  static async fromElement(t, e, r) {
    const s = Qt(t, it.ATTRIBUTE_NAMES, r), i = m(m({}, e), s), { textAnchor: n = B, textDecoration: a = "", dx: l = 0, dy: c = 0, top: h = 0, left: d = 0, fontSize: u = xi, strokeWidth: g = 1 } = i, p = X(i, nh), v = new this(fs(t.textContent || "").trim(), m({ left: d + l, top: h + c, underline: a.includes("underline"), overline: a.includes("overline"), linethrough: a.includes("line-through"), strokeWidth: 0, fontSize: u }, p)), y = v.getScaledHeight() / v.height, x = ((v.height + v.strokeWidth) * v.lineHeight - v.height) * y, _ = v.getScaledHeight() + x;
    let S = 0;
    return n === M && (S = v.getScaledWidth() / 2), n === G && (S = v.getScaledWidth()), v.set({ left: v.left - S, top: v.top - (_ - v.fontSize * (0.07 + v._fontSizeFraction)) / v.lineHeight, strokeWidth: g }), v;
  }
  static fromObject(t) {
    return this._fromObject(m(m({}, t), {}, { styles: Jl(t.styles || {}, t.text) }), { extraParam: "text" });
  }
}
f(it, "textLayoutProperties", cn), f(it, "cacheProperties", [...Zt, ...hn]), f(it, "ownDefaults", cl), f(it, "type", "Text"), f(it, "genericFonts", ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]), f(it, "ATTRIBUTE_NAMES", ge.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), yn(it, [class extends nn {
  _toSVG() {
    const o = this._getSVGLeftTopOffsets(), t = this._getSVGTextAndBg(o.textTop, o.textLeft);
    return this._wrapSVGTextAndBg(t);
  }
  toSVG(o) {
    const t = this._createBaseSVGMarkup(this._toSVG(), { reviver: o, noStyle: !0, withShadow: !0 }), e = this.path;
    return e ? t + e._createBaseSVGMarkup(e._toSVG(), { reviver: o, withShadow: !0, additionalTransform: vr(this.calcOwnMatrix()) }) : t;
  }
  _getSVGLeftTopOffsets() {
    return { textLeft: -this.width / 2, textTop: -this.height / 2, lineTop: this.getHeightOfLine(0) };
  }
  _wrapSVGTextAndBg(o) {
    let { textBgRects: t, textSpans: e } = o;
    const r = this.getSvgTextDecoration(this);
    return [t.join(""), '		<text xml:space="preserve" ', 'font-family="'.concat(this.fontFamily.replace(oh, "'"), '" '), 'font-size="'.concat(this.fontSize, '" '), this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : "", this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : "", r ? 'text-decoration="'.concat(r, '" ') : "", this.direction === "rtl" ? 'direction="'.concat(this.direction, '" ') : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", e.join(""), `</text>
`];
  }
  _getSVGTextAndBg(o, t) {
    const e = [], r = [];
    let s, i = o;
    this.backgroundColor && r.push(...Js(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
    for (let n = 0, a = this._textLines.length; n < a; n++) s = this._getLineLeftOffset(n), this.direction === "rtl" && (s += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", n)) && this._setSVGTextLineBg(r, n, t + s, i), this._setSVGTextLineText(e, n, t + s, i), i += this.getHeightOfLine(n);
    return { textSpans: e, textBgRects: r };
  }
  _createTextCharSpan(o, t, e, r, s) {
    const i = j.NUM_FRACTION_DIGITS, n = this.getSvgSpanStyles(t, o !== o.trim() || !!o.match(ih)), a = n ? 'style="'.concat(n, '"') : "", l = t.deltaY, c = l ? ' dy="'.concat(V(l, i), '" ') : "", { angle: h, renderLeft: d, renderTop: u, width: g } = s;
    let p = "";
    if (d !== void 0) {
      const v = g / 2;
      h && (p = ' rotate="'.concat(V(Kt(h), i), '"'));
      const y = Ke({ angle: Kt(h) });
      y[4] = d, y[5] = u;
      const x = new b(-v, 0).transform(y);
      e = x.x, r = x.y;
    }
    return '<tspan x="'.concat(V(e, i), '" y="').concat(V(r, i), '" ').concat(c).concat(p).concat(a, ">").concat(Ul(o), "</tspan>");
  }
  _setSVGTextLineText(o, t, e, r) {
    const s = this.getHeightOfLine(t), i = this.textAlign.includes(jt), n = this._textLines[t];
    let a, l, c, h, d, u = "", g = 0;
    r += s * (1 - this._fontSizeFraction) / this.lineHeight;
    for (let p = 0, v = n.length - 1; p <= v; p++) d = p === v || this.charSpacing || this.path, u += n[p], c = this.__charBounds[t][p], g === 0 ? (e += c.kernedWidth - c.width, g += c.width) : g += c.kernedWidth, i && !d && this._reSpaceAndTab.test(n[p]) && (d = !0), d || (a = a || this.getCompleteStyleDeclaration(t, p), l = this.getCompleteStyleDeclaration(t, p + 1), d = Fi(a, l, !0)), d && (h = this._getStyleDeclaration(t, p), o.push(this._createTextCharSpan(u, h, e, r, c)), u = "", a = l, this.direction === "rtl" ? e -= g : e += g, g = 0);
  }
  _setSVGTextLineBg(o, t, e, r) {
    const s = this._textLines[t], i = this.getHeightOfLine(t) / this.lineHeight;
    let n, a = 0, l = 0, c = this.getValueOfPropertyAt(t, 0, "textBackgroundColor");
    for (let h = 0; h < s.length; h++) {
      const { left: d, width: u, kernedWidth: g } = this.__charBounds[t][h];
      n = this.getValueOfPropertyAt(t, h, "textBackgroundColor"), n !== c ? (c && o.push(...Js(c, e + l, r, a, i)), l = d, a = u, c = n) : a += g;
    }
    n && o.push(...Js(c, e + l, r, a, i));
  }
  _getSVGLineTopOffset(o) {
    let t, e = 0;
    for (t = 0; t < o; t++) e += this.getHeightOfLine(t);
    const r = this.getHeightOfLine(t);
    return { lineTop: e, offset: (this._fontSizeMult - this._fontSizeFraction) * r / (this.lineHeight * this._fontSizeMult) };
  }
  getSvgStyles(o) {
    return "".concat(super.getSvgStyles(o), " text-decoration-thickness: ").concat(V(this.textDecorationThickness * this.getObjectScaling().y / 10, j.NUM_FRACTION_DIGITS), "%; white-space: pre;");
  }
  getSvgSpanStyles(o, t) {
    const { fontFamily: e, strokeWidth: r, stroke: s, fill: i, fontSize: n, fontStyle: a, fontWeight: l, deltaY: c, textDecorationThickness: h, linethrough: d, overline: u, underline: g } = o, p = this.getSvgTextDecoration({ underline: g ?? this.underline, overline: u ?? this.overline, linethrough: d ?? this.linethrough }), v = h || this.textDecorationThickness;
    return [s ? br(dt, s) : "", r ? "stroke-width: ".concat(r, "; ") : "", e ? "font-family: ".concat(e.includes("'") || e.includes('"') ? e : "'".concat(e, "'"), "; ") : "", n ? "font-size: ".concat(n, "px; ") : "", a ? "font-style: ".concat(a, "; ") : "", l ? "font-weight: ".concat(l, "; ") : "", p ? "text-decoration: ".concat(p, "; text-decoration-thickness: ").concat(V(v * this.getObjectScaling().y / 10, j.NUM_FRACTION_DIGITS), "%; ") : "", i ? br(K, i) : "", c ? "baseline-shift: ".concat(-c, "; ") : "", t ? "white-space: pre; " : ""].join("");
  }
  getSvgTextDecoration(o) {
    return ["overline", "underline", "line-through"].filter(((t) => o[t.replace("-", "")])).join(" ");
  }
}]), k.setClass(it), k.setSVGClass(it);
class ah {
  constructor(t) {
    f(this, "target", void 0), f(this, "__mouseDownInPlace", !1), f(this, "__dragStartFired", !1), f(this, "__isDraggingOver", !1), f(this, "__dragStartSelection", void 0), f(this, "__dragImageDisposer", void 0), f(this, "_dispose", void 0), this.target = t;
    const e = [this.target.on("dragenter", this.dragEnterHandler.bind(this)), this.target.on("dragover", this.dragOverHandler.bind(this)), this.target.on("dragleave", this.dragLeaveHandler.bind(this)), this.target.on("dragend", this.dragEndHandler.bind(this)), this.target.on("drop", this.dropHandler.bind(this))];
    this._dispose = () => {
      e.forEach(((r) => r())), this._dispose = void 0;
    };
  }
  isPointerOverSelection(t) {
    const e = this.target, r = e.getSelectionStartFromPointer(t);
    return e.isEditing && r >= e.selectionStart && r <= e.selectionEnd && e.selectionStart < e.selectionEnd;
  }
  start(t) {
    return this.__mouseDownInPlace = this.isPointerOverSelection(t);
  }
  isActive() {
    return this.__mouseDownInPlace;
  }
  end(t) {
    const e = this.isActive();
    return e && !this.__dragStartFired && (this.target.setCursorByClick(t), this.target.initDelayedCursor(!0)), this.__mouseDownInPlace = !1, this.__dragStartFired = !1, this.__isDraggingOver = !1, e;
  }
  getDragStartSelection() {
    return this.__dragStartSelection;
  }
  setDragImage(t, e) {
    var r;
    let { selectionStart: s, selectionEnd: i } = e;
    const n = this.target, a = n.canvas, l = new b(n.flipX ? -1 : 1, n.flipY ? -1 : 1), c = n._getCursorBoundaries(s), h = new b(c.left + c.leftOffset, c.top + c.topOffset).multiply(l).transform(n.calcTransformMatrix()), d = a.getScenePoint(t).subtract(h), u = n.getCanvasRetinaScaling(), g = n.getBoundingRect(), p = h.subtract(new b(g.left, g.top)), v = a.viewportTransform, y = p.add(d).transform(v, !0), x = n.backgroundColor, _ = Ai(n.styles);
    n.backgroundColor = "";
    const S = { stroke: "transparent", fill: "transparent", textBackgroundColor: "transparent" };
    n.setSelectionStyles(S, 0, s), n.setSelectionStyles(S, i, n.text.length), n.dirty = !0;
    const C = n.toCanvasElement({ enableRetinaScaling: a.enableRetinaScaling, viewportTransform: !0 });
    n.backgroundColor = x, n.styles = _, n.dirty = !0, gi(C, { position: "fixed", left: "".concat(-C.width, "px"), border: ht, width: "".concat(C.width / u, "px"), height: "".concat(C.height / u, "px") }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
      C.remove();
    }, St(t.target || this.target.hiddenTextarea).body.appendChild(C), (r = t.dataTransfer) === null || r === void 0 || r.setDragImage(C, y.x, y.y);
  }
  onDragStart(t) {
    this.__dragStartFired = !0;
    const e = this.target, r = this.isActive();
    if (r && t.dataTransfer) {
      const s = this.__dragStartSelection = { selectionStart: e.selectionStart, selectionEnd: e.selectionEnd }, i = e._text.slice(s.selectionStart, s.selectionEnd).join(""), n = m({ text: e.text, value: i }, s);
      t.dataTransfer.setData("text/plain", i), t.dataTransfer.setData("application/fabric", JSON.stringify({ value: i, styles: e.getSelectionStyles(s.selectionStart, s.selectionEnd, !0) })), t.dataTransfer.effectAllowed = "copyMove", this.setDragImage(t, n);
    }
    return e.abortCursorAnimation(), r;
  }
  canDrop(t) {
    if (this.target.editable && !this.target.getActiveControl() && !t.defaultPrevented) {
      if (this.isActive() && this.__dragStartSelection) {
        const e = this.target.getSelectionStartFromPointer(t), r = this.__dragStartSelection;
        return e < r.selectionStart || e > r.selectionEnd;
      }
      return !0;
    }
    return !1;
  }
  targetCanDrop(t) {
    return this.target.canDrop(t);
  }
  dragEnterHandler(t) {
    let { e } = t;
    const r = this.targetCanDrop(e);
    !this.__isDraggingOver && r && (this.__isDraggingOver = !0);
  }
  dragOverHandler(t) {
    const { e } = t, r = this.targetCanDrop(e);
    !this.__isDraggingOver && r ? this.__isDraggingOver = !0 : this.__isDraggingOver && !r && (this.__isDraggingOver = !1), this.__isDraggingOver && (e.preventDefault(), t.canDrop = !0, t.dropTarget = this.target);
  }
  dragLeaveHandler() {
    (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = !1);
  }
  dropHandler(t) {
    var e;
    const { e: r } = t, s = r.defaultPrevented;
    this.__isDraggingOver = !1, r.preventDefault();
    let i = (e = r.dataTransfer) === null || e === void 0 ? void 0 : e.getData("text/plain");
    if (i && !s) {
      const n = this.target, a = n.canvas;
      let l = n.getSelectionStartFromPointer(r);
      const { styles: c } = r.dataTransfer.types.includes("application/fabric") ? JSON.parse(r.dataTransfer.getData("application/fabric")) : {}, h = i[Math.max(0, i.length - 1)], d = 0;
      if (this.__dragStartSelection) {
        const u = this.__dragStartSelection.selectionStart, g = this.__dragStartSelection.selectionEnd;
        l > u && l <= g ? l = u : l > g && (l -= g - u), n.removeChars(u, g), delete this.__dragStartSelection;
      }
      n._reNewline.test(h) && (n._reNewline.test(n._text[l]) || l === n._text.length) && (i = i.trimEnd()), t.didDrop = !0, t.dropTarget = n, n.insertChars(i, c, l), a.setActiveObject(n), n.enterEditing(r), n.selectionStart = Math.min(l + d, n._text.length), n.selectionEnd = Math.min(n.selectionStart + i.length, n._text.length), n.hiddenTextarea.value = n.text, n._updateTextarea(), n.hiddenTextarea.focus(), n.fire(cs, { index: l + d, action: "drop" }), a.fire("text:changed", { target: n }), a.contextTopDirty = !0, a.requestRenderAll();
    }
  }
  dragEndHandler(t) {
    let { e } = t;
    if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
      var r;
      const s = this.target, i = this.target.canvas, { selectionStart: n, selectionEnd: a } = this.__dragStartSelection, l = ((r = e.dataTransfer) === null || r === void 0 ? void 0 : r.dropEffect) || ht;
      l === ht ? (s.selectionStart = n, s.selectionEnd = a, s._updateTextarea(), s.hiddenTextarea.focus()) : (s.clearContextTop(), l === "move" && (s.removeChars(n, a), s.selectionStart = s.selectionEnd = n, s.hiddenTextarea && (s.hiddenTextarea.value = s.text), s._updateTextarea(), s.fire(cs, { index: n, action: "dragend" }), i.fire("text:changed", { target: s }), i.requestRenderAll()), s.exitEditing());
    }
    this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = !1;
  }
  dispose() {
    this._dispose && this._dispose();
  }
}
const ko = /[ \n\.,;!\?\-]/;
class lh extends it {
  constructor() {
    super(...arguments), f(this, "_currentCursorOpacity", 1);
  }
  initBehavior() {
    this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this);
  }
  onDeselect(t) {
    return this.isEditing && this.exitEditing(), this.selected = !1, super.onDeselect(t);
  }
  _animateCursor(t) {
    let { toValue: e, duration: r, delay: s, onComplete: i } = t;
    return pn({ startValue: this._currentCursorOpacity, endValue: e, duration: r, delay: s, onComplete: i, abort: () => !this.canvas || this.selectionStart !== this.selectionEnd, onChange: (n) => {
      this._currentCursorOpacity = n, this.renderCursorOrSelection();
    } });
  }
  _tick(t) {
    this._currentTickState = this._animateCursor({ toValue: 0, duration: this.cursorDuration / 2, delay: Math.max(t || 0, 100), onComplete: this._onTickComplete });
  }
  _onTickComplete() {
    var t;
    (t = this._currentTickCompleteState) === null || t === void 0 || t.abort(), this._currentTickCompleteState = this._animateCursor({ toValue: 1, duration: this.cursorDuration, onComplete: this._tick });
  }
  initDelayedCursor(t) {
    this.abortCursorAnimation(), this._tick(t ? 0 : this.cursorDelay);
  }
  abortCursorAnimation() {
    let t = !1;
    [this._currentTickState, this._currentTickCompleteState].forEach(((e) => {
      e && !e.isDone() && (t = !0, e.abort());
    })), this._currentCursorOpacity = 1, t && this.clearContextTop();
  }
  restartCursorIfNeeded() {
    [this._currentTickState, this._currentTickCompleteState].some(((t) => !t || t.isDone())) && this.initDelayedCursor();
  }
  selectAll() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }
  cmdAll() {
    this.selectAll(), this.renderCursorOrSelection();
  }
  getSelectedText() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }
  findWordBoundaryLeft(t) {
    let e = 0, r = t - 1;
    if (this._reSpace.test(this._text[r])) for (; this._reSpace.test(this._text[r]); ) e++, r--;
    for (; /\S/.test(this._text[r]) && r > -1; ) e++, r--;
    return t - e;
  }
  findWordBoundaryRight(t) {
    let e = 0, r = t;
    if (this._reSpace.test(this._text[r])) for (; this._reSpace.test(this._text[r]); ) e++, r++;
    for (; /\S/.test(this._text[r]) && r < this._text.length; ) e++, r++;
    return t + e;
  }
  findLineBoundaryLeft(t) {
    let e = 0, r = t - 1;
    for (; !/\n/.test(this._text[r]) && r > -1; ) e++, r--;
    return t - e;
  }
  findLineBoundaryRight(t) {
    let e = 0, r = t;
    for (; !/\n/.test(this._text[r]) && r < this._text.length; ) e++, r++;
    return t + e;
  }
  searchWordBoundary(t, e) {
    const r = this._text;
    let s = t > 0 && this._reSpace.test(r[t]) && (e === -1 || !_i.test(r[t - 1])) ? t - 1 : t, i = r[s];
    for (; s > 0 && s < r.length && !ko.test(i); ) s += e, i = r[s];
    return e === -1 && ko.test(i) && s++, s;
  }
  selectWord(t) {
    var e;
    t = (e = t) !== null && e !== void 0 ? e : this.selectionStart;
    const r = this.searchWordBoundary(t, -1), s = Math.max(r, this.searchWordBoundary(t, 1));
    this.selectionStart = r, this.selectionEnd = s, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }
  selectLine(t) {
    var e;
    t = (e = t) !== null && e !== void 0 ? e : this.selectionStart;
    const r = this.findLineBoundaryLeft(t), s = this.findLineBoundaryRight(t);
    this.selectionStart = r, this.selectionEnd = s, this._fireSelectionChanged(), this._updateTextarea();
  }
  enterEditing(t) {
    !this.isEditing && this.editable && (this.enterEditingImpl(), this.fire("editing:entered", t ? { e: t } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", { target: this, e: t }), this.canvas.requestRenderAll()));
  }
  enterEditingImpl() {
    this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = !0, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick();
  }
  updateSelectionOnMouseMove(t) {
    if (this.getActiveControl()) return;
    const e = this.hiddenTextarea;
    St(e).activeElement !== e && e.focus();
    const r = this.getSelectionStartFromPointer(t), s = this.selectionStart, i = this.selectionEnd;
    (r === this.__selectionStartOnMouseDown && s !== i || s !== r && i !== r) && (r > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = r) : (this.selectionStart = r, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === s && this.selectionEnd === i || (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
  }
  _setEditingProps() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
  }
  fromStringToGraphemeSelection(t, e, r) {
    const s = r.slice(0, t), i = this.graphemeSplit(s).length;
    if (t === e) return { selectionStart: i, selectionEnd: i };
    const n = r.slice(t, e);
    return { selectionStart: i, selectionEnd: i + this.graphemeSplit(n).length };
  }
  fromGraphemeToStringSelection(t, e, r) {
    const s = r.slice(0, t).join("").length;
    return t === e ? { selectionStart: s, selectionEnd: s } : { selectionStart: s, selectionEnd: s + r.slice(t, e).join("").length };
  }
  _updateTextarea() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        const t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = t.selectionStart, this.hiddenTextarea.selectionEnd = t.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }
  updateFromTextArea() {
    if (!this.hiddenTextarea) return;
    this.cursorOffsetCache = {};
    const t = this.hiddenTextarea;
    this.text = t.value, this.set("dirty", !0), this.initDimensions(), this.setCoords();
    const e = this.fromStringToGraphemeSelection(t.selectionStart, t.selectionEnd, t.value);
    this.selectionEnd = this.selectionStart = e.selectionEnd, this.inCompositionMode || (this.selectionStart = e.selectionStart), this.updateTextareaPosition();
  }
  updateTextareaPosition() {
    if (this.selectionStart === this.selectionEnd) {
      const t = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = t.left, this.hiddenTextarea.style.top = t.top;
    }
  }
  _calcTextareaPosition() {
    if (!this.canvas) return { left: "1px", top: "1px" };
    const t = this.inCompositionMode ? this.compositionStart : this.selectionStart, e = this._getCursorBoundaries(t), r = this.get2DCursorLocation(t), s = r.lineIndex, i = r.charIndex, n = this.getValueOfPropertyAt(s, i, "fontSize") * this.lineHeight, a = e.leftOffset, l = this.getCanvasRetinaScaling(), c = this.canvas.upperCanvasEl, h = c.width / l, d = c.height / l, u = h - n, g = d - n, p = new b(e.left + a, e.top + e.topOffset + n).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new b(c.clientWidth / h, c.clientHeight / d));
    return p.x < 0 && (p.x = 0), p.x > u && (p.x = u), p.y < 0 && (p.y = 0), p.y > g && (p.y = g), p.x += this.canvas._offset.left, p.y += this.canvas._offset.top, { left: "".concat(p.x, "px"), top: "".concat(p.y, "px"), fontSize: "".concat(n, "px"), charHeight: n };
  }
  _saveEditingProps() {
    this._savedProps = { hasControls: this.hasControls, borderColor: this.borderColor, lockMovementX: this.lockMovementX, lockMovementY: this.lockMovementY, hoverCursor: this.hoverCursor, selectable: this.selectable, defaultCursor: this.canvas && this.canvas.defaultCursor, moveCursor: this.canvas && this.canvas.moveCursor };
  }
  _restoreEditingProps() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps);
  }
  _exitEditing() {
    const t = this.hiddenTextarea;
    this.selected = !1, this.isEditing = !1, t && (t.blur && t.blur(), t.parentNode && t.parentNode.removeChild(t)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop();
  }
  exitEditingImpl() {
    this._exitEditing(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords());
  }
  exitEditing() {
    const t = this._textBeforeEdit !== this.text;
    return this.exitEditingImpl(), this.fire("editing:exited"), t && this.fire(hs), this.canvas && (this.canvas.fire("text:editing:exited", { target: this }), t && this.canvas.fire("object:modified", { target: this })), this;
  }
  _removeExtraneousStyles() {
    for (const t in this.styles) this._textLines[t] || delete this.styles[t];
  }
  removeStyleFromTo(t, e) {
    const { lineIndex: r, charIndex: s } = this.get2DCursorLocation(t, !0), { lineIndex: i, charIndex: n } = this.get2DCursorLocation(e, !0);
    if (r !== i) {
      if (this.styles[r]) for (let a = s; a < this._unwrappedTextLines[r].length; a++) delete this.styles[r][a];
      if (this.styles[i]) for (let a = n; a < this._unwrappedTextLines[i].length; a++) {
        const l = this.styles[i][a];
        l && (this.styles[r] || (this.styles[r] = {}), this.styles[r][s + a - n] = l);
      }
      for (let a = r + 1; a <= i; a++) delete this.styles[a];
      this.shiftLineStyles(i, r - i);
    } else if (this.styles[r]) {
      const a = this.styles[r], l = n - s;
      for (let c = s; c < n; c++) delete a[c];
      for (const c in this.styles[r]) {
        const h = parseInt(c, 10);
        h >= n && (a[h - l] = a[c], delete a[c]);
      }
    }
  }
  shiftLineStyles(t, e) {
    const r = Object.assign({}, this.styles);
    for (const s in this.styles) {
      const i = parseInt(s, 10);
      i > t && (this.styles[i + e] = r[i], r[i - e] || delete this.styles[i]);
    }
  }
  insertNewlineStyleObject(t, e, r, s) {
    const i = {}, n = this._unwrappedTextLines[t].length, a = n === e;
    let l = !1;
    r || (r = 1), this.shiftLineStyles(t, r);
    const c = this.styles[t] ? this.styles[t][e === 0 ? e : e - 1] : void 0;
    for (const d in this.styles[t]) {
      const u = parseInt(d, 10);
      u >= e && (l = !0, i[u - e] = this.styles[t][d], a && e === 0 || delete this.styles[t][d]);
    }
    let h = !1;
    for (l && !a && (this.styles[t + r] = i, h = !0), (h || n > e) && r--; r > 0; ) s && s[r - 1] ? this.styles[t + r] = { 0: m({}, s[r - 1]) } : c ? this.styles[t + r] = { 0: m({}, c) } : delete this.styles[t + r], r--;
    this._forceClearCache = !0;
  }
  insertCharStyleObject(t, e, r, s) {
    this.styles || (this.styles = {});
    const i = this.styles[t], n = i ? m({}, i) : {};
    r || (r = 1);
    for (const l in n) {
      const c = parseInt(l, 10);
      c >= e && (i[c + r] = n[c], n[c - r] || delete i[c]);
    }
    if (this._forceClearCache = !0, s) {
      for (; r--; ) Object.keys(s[r]).length && (this.styles[t] || (this.styles[t] = {}), this.styles[t][e + r] = m({}, s[r]));
      return;
    }
    if (!i) return;
    const a = i[e ? e - 1 : 1];
    for (; a && r--; ) this.styles[t][e + r] = m({}, a);
  }
  insertNewStyleBlock(t, e, r) {
    const s = this.get2DCursorLocation(e, !0), i = [0];
    let n, a = 0;
    for (let l = 0; l < t.length; l++) t[l] === `
` ? (a++, i[a] = 0) : i[a]++;
    for (i[0] > 0 && (this.insertCharStyleObject(s.lineIndex, s.charIndex, i[0], r), r = r && r.slice(i[0] + 1)), a && this.insertNewlineStyleObject(s.lineIndex, s.charIndex + i[0], a), n = 1; n < a; n++) i[n] > 0 ? this.insertCharStyleObject(s.lineIndex + n, 0, i[n], r) : r && this.styles[s.lineIndex + n] && r[0] && (this.styles[s.lineIndex + n][0] = r[0]), r = r && r.slice(i[n] + 1);
    i[n] > 0 && this.insertCharStyleObject(s.lineIndex + n, 0, i[n], r);
  }
  removeChars(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t + 1;
    this.removeStyleFromTo(t, e), this._text.splice(t, e - t), this.text = this._text.join(""), this.set("dirty", !0), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  insertChars(t, e, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : r;
    s > r && this.removeStyleFromTo(r, s);
    const i = this.graphemeSplit(t);
    this.insertNewStyleBlock(i, r, e), this._text = [...this._text.slice(0, r), ...i, ...this._text.slice(s)], this.text = this._text.join(""), this.set("dirty", !0), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  setSelectionStartEndWithShift(t, e, r) {
    r <= t ? (e === t ? this._selectionDirection = B : this._selectionDirection === G && (this._selectionDirection = B, this.selectionEnd = t), this.selectionStart = r) : r > t && r < e ? this._selectionDirection === G ? this.selectionEnd = r : this.selectionStart = r : (e === t ? this._selectionDirection = G : this._selectionDirection === B && (this._selectionDirection = G, this.selectionStart = e), this.selectionEnd = r);
  }
}
class ch extends lh {
  initHiddenTextarea() {
    const t = this.canvas && St(this.canvas.getElement()) || Ue(), e = t.createElement("textarea");
    Object.entries({ autocapitalize: "off", autocorrect: "off", autocomplete: "off", spellcheck: "false", "data-fabric": "textarea", wrap: "off", name: "fabricTextarea" }).map(((n) => {
      let [a, l] = n;
      return e.setAttribute(a, l);
    }));
    const { top: r, left: s, fontSize: i } = this._calcTextareaPosition();
    e.style.cssText = "position: absolute; top: ".concat(r, "; left: ").concat(s, "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(i, ";"), (this.hiddenTextareaContainer || t.body).appendChild(e), Object.entries({ blur: "blur", keydown: "onKeyDown", keyup: "onKeyUp", input: "onInput", copy: "copy", cut: "copy", paste: "paste", compositionstart: "onCompositionStart", compositionupdate: "onCompositionUpdate", compositionend: "onCompositionEnd" }).map(((n) => {
      let [a, l] = n;
      return e.addEventListener(a, this[l].bind(this));
    })), this.hiddenTextarea = e;
  }
  blur() {
    this.abortCursorAnimation();
  }
  onKeyDown(t) {
    if (!this.isEditing) return;
    const e = this.direction === "rtl" ? this.keysMapRtl : this.keysMap;
    if (t.keyCode in e) this[e[t.keyCode]](t);
    else {
      if (!(t.keyCode in this.ctrlKeysMapDown) || !t.ctrlKey && !t.metaKey) return;
      this[this.ctrlKeysMapDown[t.keyCode]](t);
    }
    t.stopImmediatePropagation(), t.preventDefault(), t.keyCode >= 33 && t.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
  }
  onKeyUp(t) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = !1 : t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t), t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }
  onInput(t) {
    const e = this.fromPaste, { value: r, selectionStart: s, selectionEnd: i } = this.hiddenTextarea;
    if (this.fromPaste = !1, t && t.stopPropagation(), !this.isEditing) return;
    const n = () => {
      this.updateFromTextArea(), this.fire(cs), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
    };
    if (this.hiddenTextarea.value === "") return this.styles = {}, void n();
    const a = this._splitTextIntoLines(r).graphemeText, l = this._text.length, c = a.length, h = this.selectionStart, d = this.selectionEnd, u = h !== d;
    let g, p, v, y, x = c - l;
    const _ = this.fromStringToGraphemeSelection(s, i, r), S = h > _.selectionStart;
    u ? (p = this._text.slice(h, d), x += d - h) : c < l && (p = S ? this._text.slice(d + x, d) : this._text.slice(h, h - x));
    const C = a.slice(_.selectionEnd - x, _.selectionEnd);
    if (p && p.length && (C.length && (g = this.getSelectionStyles(h, h + 1, !1), g = C.map((() => g[0]))), u ? (v = h, y = d) : S ? (v = d - p.length, y = d) : (v = d, y = d + p.length), this.removeStyleFromTo(v, y)), C.length) {
      const { copyPasteData: T } = Lt();
      e && C.join("") === T.copiedText && !j.disableStyleCopyPaste && (g = T.copiedTextStyle), this.insertNewStyleBlock(C, h, g);
    }
    n();
  }
  onCompositionStart() {
    this.inCompositionMode = !0;
  }
  onCompositionEnd() {
    this.inCompositionMode = !1;
  }
  onCompositionUpdate(t) {
    let { target: e } = t;
    const { selectionStart: r, selectionEnd: s } = e;
    this.compositionStart = r, this.compositionEnd = s, this.updateTextareaPosition();
  }
  copy() {
    if (this.selectionStart === this.selectionEnd) return;
    const { copyPasteData: t } = Lt();
    t.copiedText = this.getSelectedText(), j.disableStyleCopyPaste ? t.copiedTextStyle = void 0 : t.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0;
  }
  paste() {
    this.fromPaste = !0;
  }
  _getWidthBeforeCursor(t, e) {
    let r, s = this._getLineLeftOffset(t);
    return e > 0 && (r = this.__charBounds[t][e - 1], s += r.left + r.width), s;
  }
  getDownCursorOffset(t, e) {
    const r = this._getSelectionForOffset(t, e), s = this.get2DCursorLocation(r), i = s.lineIndex;
    if (i === this._textLines.length - 1 || t.metaKey || t.keyCode === 34) return this._text.length - r;
    const n = s.charIndex, a = this._getWidthBeforeCursor(i, n), l = this._getIndexOnLine(i + 1, a);
    return this._textLines[i].slice(n).length + l + 1 + this.missingNewlineOffset(i);
  }
  _getSelectionForOffset(t, e) {
    return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart;
  }
  getUpCursorOffset(t, e) {
    const r = this._getSelectionForOffset(t, e), s = this.get2DCursorLocation(r), i = s.lineIndex;
    if (i === 0 || t.metaKey || t.keyCode === 33) return -r;
    const n = s.charIndex, a = this._getWidthBeforeCursor(i, n), l = this._getIndexOnLine(i - 1, a), c = this._textLines[i].slice(0, n), h = this.missingNewlineOffset(i - 1);
    return -this._textLines[i - 1].length + l - c.length + (1 - h);
  }
  _getIndexOnLine(t, e) {
    const r = this._textLines[t];
    let s, i, n = this._getLineLeftOffset(t), a = 0;
    for (let l = 0, c = r.length; l < c; l++) if (s = this.__charBounds[t][l].width, n += s, n > e) {
      i = !0;
      const h = n - s, d = n, u = Math.abs(h - e);
      a = Math.abs(d - e) < u ? l : l - 1;
      break;
    }
    return i || (a = r.length - 1), a;
  }
  moveCursorDown(t) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t);
  }
  moveCursorUp(t) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorUpOrDown("Up", t);
  }
  _moveCursorUpOrDown(t, e) {
    const r = this["get".concat(t, "CursorOffset")](e, this._selectionDirection === G);
    if (e.shiftKey ? this.moveCursorWithShift(r) : this.moveCursorWithoutShift(r), r !== 0) {
      const s = this.text.length;
      this.selectionStart = Xe(0, this.selectionStart, s), this.selectionEnd = Xe(0, this.selectionEnd, s), this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea();
    }
  }
  moveCursorWithShift(t) {
    const e = this._selectionDirection === B ? this.selectionStart + t : this.selectionEnd + t;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), t !== 0;
  }
  moveCursorWithoutShift(t) {
    return t < 0 ? (this.selectionStart += t, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t, this.selectionStart = this.selectionEnd), t !== 0;
  }
  moveCursorLeft(t) {
    this.selectionStart === 0 && this.selectionEnd === 0 || this._moveCursorLeftOrRight("Left", t);
  }
  _move(t, e, r) {
    let s;
    if (t.altKey) s = this["findWordBoundary".concat(r)](this[e]);
    else {
      if (!t.metaKey && t.keyCode !== 35 && t.keyCode !== 36) return this[e] += r === "Left" ? -1 : 1, !0;
      s = this["findLineBoundary".concat(r)](this[e]);
    }
    return s !== void 0 && this[e] !== s && (this[e] = s, !0);
  }
  _moveLeft(t, e) {
    return this._move(t, e, "Left");
  }
  _moveRight(t, e) {
    return this._move(t, e, "Right");
  }
  moveCursorLeftWithoutShift(t) {
    let e = !0;
    return this._selectionDirection = B, this.selectionEnd === this.selectionStart && this.selectionStart !== 0 && (e = this._moveLeft(t, "selectionStart")), this.selectionEnd = this.selectionStart, e;
  }
  moveCursorLeftWithShift(t) {
    return this._selectionDirection === G && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : this.selectionStart !== 0 ? (this._selectionDirection = B, this._moveLeft(t, "selectionStart")) : void 0;
  }
  moveCursorRight(t) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t);
  }
  _moveCursorLeftOrRight(t, e) {
    const r = "moveCursor".concat(t).concat(e.shiftKey ? "WithShift" : "WithoutShift");
    this._currentCursorOpacity = 1, this[r](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }
  moveCursorRightWithShift(t) {
    return this._selectionDirection === B && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = G, this._moveRight(t, "selectionEnd")) : void 0;
  }
  moveCursorRightWithoutShift(t) {
    let e = !0;
    return this._selectionDirection = G, this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e;
  }
}
const Oo = (o) => !!o.button;
class hh extends ch {
  constructor() {
    super(...arguments), f(this, "draggableTextDelegate", void 0);
  }
  initBehavior() {
    this.on("mousedown", this._mouseDownHandler), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("mousetripleclick", this.tripleClickHandler), this.draggableTextDelegate = new ah(this), super.initBehavior();
  }
  shouldStartDragging() {
    return this.draggableTextDelegate.isActive();
  }
  onDragStart(t) {
    return this.draggableTextDelegate.onDragStart(t);
  }
  canDrop(t) {
    return this.draggableTextDelegate.canDrop(t);
  }
  doubleClickHandler(t) {
    this.isEditing && (this.selectWord(this.getSelectionStartFromPointer(t.e)), this.renderCursorOrSelection());
  }
  tripleClickHandler(t) {
    this.isEditing && (this.selectLine(this.getSelectionStartFromPointer(t.e)), this.renderCursorOrSelection());
  }
  _mouseDownHandler(t) {
    let { e, alreadySelected: r } = t;
    this.canvas && this.editable && !Oo(e) && !this.getActiveControl() && (this.draggableTextDelegate.start(e) || (this.canvas.textEditingManager.register(this), r && (this.inCompositionMode = !1, this.setCursorByClick(e)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()), this.selected || (this.selected = r || this.isEditing)));
  }
  mouseUpHandler(t) {
    let { e, transform: r } = t;
    const s = this.draggableTextDelegate.end(e);
    if (this.canvas) {
      this.canvas.textEditingManager.unregister(this);
      const i = this.canvas._activeObject;
      if (i && i !== this) return;
    }
    !this.editable || this.group && !this.group.interactive || r && r.actionPerformed || Oo(e) || s || this.selected && !this.getActiveControl() && (this.enterEditing(e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection());
  }
  setCursorByClick(t) {
    const e = this.getSelectionStartFromPointer(t), r = this.selectionStart, s = this.selectionEnd;
    t.shiftKey ? this.setSelectionStartEndWithShift(r, s, e) : (this.selectionStart = e, this.selectionEnd = e), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }
  getSelectionStartFromPointer(t) {
    const e = this.canvas.getScenePoint(t).transform(Tt(this.calcTransformMatrix())).add(new b(-this._getLeftOffset(), -this._getTopOffset()));
    let r = 0, s = 0, i = 0;
    for (let c = 0; c < this._textLines.length && r <= e.y; c++) r += this.getHeightOfLine(c), i = c, c > 0 && (s += this._textLines[c - 1].length + this.missingNewlineOffset(c - 1));
    let n = Math.abs(this._getLineLeftOffset(i));
    const a = this._textLines[i].length, l = this.__charBounds[i];
    for (let c = 0; c < a; c++) {
      const h = n + l[c].kernedWidth;
      if (e.x <= h) {
        Math.abs(e.x - h) <= Math.abs(e.x - n) && s++;
        break;
      }
      n = h, s++;
    }
    return Math.min(this.flipX ? a - s : s, this._text.length);
  }
}
const jr = "moveCursorUp", Fr = "moveCursorDown", Lr = "moveCursorLeft", Br = "moveCursorRight", Ir = "exitEditing", Do = (o, t) => {
  const e = t.getRetinaScaling();
  o.setTransform(e, 0, 0, e, 0, 0);
  const r = t.viewportTransform;
  o.transform(r[0], r[1], r[2], r[3], r[4], r[5]);
}, dh = m({ selectionStart: 0, selectionEnd: 0, selectionColor: "rgba(17,119,255,0.3)", isEditing: !1, editable: !0, editingBorderColor: "rgba(102,153,255,0.25)", cursorWidth: 2, cursorColor: "", cursorDelay: 1e3, cursorDuration: 600, caching: !0, hiddenTextareaContainer: null, keysMap: { 9: Ir, 27: Ir, 33: jr, 34: Fr, 35: Br, 36: Lr, 37: Lr, 38: jr, 39: Br, 40: Fr }, keysMapRtl: { 9: Ir, 27: Ir, 33: jr, 34: Fr, 35: Lr, 36: Br, 37: Br, 38: jr, 39: Lr, 40: Fr }, ctrlKeysMapDown: { 65: "cmdAll" }, ctrlKeysMapUp: { 67: "copy", 88: "cut" } }, { _selectionDirection: null, _reSpace: /\s|\r?\n/, inCompositionMode: !1 });
class Yt extends hh {
  static getDefaults() {
    return m(m({}, super.getDefaults()), Yt.ownDefaults);
  }
  get type() {
    const t = super.type;
    return t === "itext" ? "i-text" : t;
  }
  constructor(t, e) {
    super(t, m(m({}, Yt.ownDefaults), e)), this.initBehavior();
  }
  _set(t, e) {
    return this.isEditing && this._savedProps && t in this._savedProps ? (this._savedProps[t] = e, this) : (t === "canvas" && (this.canvas instanceof pi && this.canvas.textEditingManager.remove(this), e instanceof pi && e.textEditingManager.add(this)), super._set(t, e));
  }
  setSelectionStart(t) {
    t = Math.max(t, 0), this._updateAndFire("selectionStart", t);
  }
  setSelectionEnd(t) {
    t = Math.min(t, this.text.length), this._updateAndFire("selectionEnd", t);
  }
  _updateAndFire(t, e) {
    this[t] !== e && (this._fireSelectionChanged(), this[t] = e), this._updateTextarea();
  }
  _fireSelectionChanged() {
    this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
  }
  initDimensions() {
    this.isEditing && this.initDelayedCursor(), super.initDimensions();
  }
  getSelectionStyles() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart || 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selectionEnd, r = arguments.length > 2 ? arguments[2] : void 0;
    return super.getSelectionStyles(t, e, r);
  }
  setSelectionStyles(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.selectionStart || 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.selectionEnd;
    return super.setSelectionStyles(t, e, r);
  }
  get2DCursorLocation() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart, e = arguments.length > 1 ? arguments[1] : void 0;
    return super.get2DCursorLocation(t, e);
  }
  render(t) {
    super.render(t), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
  }
  toCanvasElement(t) {
    const e = this.isEditing;
    this.isEditing = !1;
    const r = super.toCanvasElement(t);
    return this.isEditing = e, r;
  }
  renderCursorOrSelection() {
    if (!this.isEditing || !this.canvas) return;
    const t = this.clearContextTop(!0);
    if (!t) return;
    const e = this._getCursorBoundaries(), r = this.findAncestorsWithClipPath(), s = r.length > 0;
    let i, n = t;
    if (s) {
      i = yt(t.canvas), n = i.getContext("2d"), Do(n, this.canvas);
      const a = this.calcTransformMatrix();
      n.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
    }
    if (this.selectionStart !== this.selectionEnd || this.inCompositionMode ? this.renderSelection(n, e) : this.renderCursor(n, e), s) for (const a of r) {
      const l = a.clipPath, c = yt(t.canvas), h = c.getContext("2d");
      if (Do(h, this.canvas), !l.absolutePositioned) {
        const d = a.calcTransformMatrix();
        h.transform(d[0], d[1], d[2], d[3], d[4], d[5]);
      }
      l.transform(h), l.drawObject(h, !0, {}), this.drawClipPathOnCache(n, l, c);
    }
    s && (t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(i, 0, 0)), this.canvas.contextTopDirty = !0, t.restore();
  }
  findAncestorsWithClipPath() {
    const t = [];
    let e = this;
    for (; e; ) e.clipPath && t.push(e), e = e.parent;
    return t;
  }
  _getCursorBoundaries() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart, e = arguments.length > 1 ? arguments[1] : void 0;
    const r = this._getLeftOffset(), s = this._getTopOffset(), i = this._getCursorBoundariesOffsets(t, e);
    return { left: r, top: s, leftOffset: i.left, topOffset: i.top };
  }
  _getCursorBoundariesOffsets(t, e) {
    return e ? this.__getCursorBoundariesOffsets(t) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t);
  }
  __getCursorBoundariesOffsets(t) {
    let e = 0, r = 0;
    const { charIndex: s, lineIndex: i } = this.get2DCursorLocation(t);
    for (let c = 0; c < i; c++) e += this.getHeightOfLine(c);
    const n = this._getLineLeftOffset(i), a = this.__charBounds[i][s];
    a && (r = a.left), this.charSpacing !== 0 && s === this._textLines[i].length && (r -= this._getWidthOfCharSpacing());
    const l = { top: e, left: n + (r > 0 ? r : 0) };
    return this.direction === "rtl" && (this.textAlign === G || this.textAlign === jt || this.textAlign === dr ? l.left *= -1 : this.textAlign === B || this.textAlign === ms ? l.left = n - (r > 0 ? r : 0) : this.textAlign !== M && this.textAlign !== ur || (l.left = n - (r > 0 ? r : 0))), l;
  }
  renderCursorAt(t) {
    this._renderCursor(this.canvas.contextTop, this._getCursorBoundaries(t, !0), t);
  }
  renderCursor(t, e) {
    this._renderCursor(t, e, this.selectionStart);
  }
  getCursorRenderingData() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.selectionStart, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._getCursorBoundaries(t);
    const r = this.get2DCursorLocation(t), s = r.lineIndex, i = r.charIndex > 0 ? r.charIndex - 1 : 0, n = this.getValueOfPropertyAt(s, i, "fontSize"), a = this.getObjectScaling().x * this.canvas.getZoom(), l = this.cursorWidth / a, c = this.getValueOfPropertyAt(s, i, "deltaY"), h = e.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(s) / this.lineHeight - n * (1 - this._fontSizeFraction);
    return { color: this.cursorColor || this.getValueOfPropertyAt(s, i, "fill"), opacity: this._currentCursorOpacity, left: e.left + e.leftOffset - l / 2, top: h + e.top + c, width: l, height: n };
  }
  _renderCursor(t, e, r) {
    const { color: s, opacity: i, left: n, top: a, width: l, height: c } = this.getCursorRenderingData(r, e);
    t.fillStyle = s, t.globalAlpha = i, t.fillRect(n, a, l, c);
  }
  renderSelection(t, e) {
    const r = { selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd };
    this._renderSelection(t, r, e);
  }
  renderDragSourceEffect() {
    const t = this.draggableTextDelegate.getDragStartSelection();
    this._renderSelection(this.canvas.contextTop, t, this._getCursorBoundaries(t.selectionStart, !0));
  }
  renderDropTargetEffect(t) {
    const e = this.getSelectionStartFromPointer(t);
    this.renderCursorAt(e);
  }
  _renderSelection(t, e, r) {
    const s = e.selectionStart, i = e.selectionEnd, n = this.textAlign.includes(jt), a = this.get2DCursorLocation(s), l = this.get2DCursorLocation(i), c = a.lineIndex, h = l.lineIndex, d = a.charIndex < 0 ? 0 : a.charIndex, u = l.charIndex < 0 ? 0 : l.charIndex;
    for (let g = c; g <= h; g++) {
      const p = this._getLineLeftOffset(g) || 0;
      let v = this.getHeightOfLine(g), y = 0, x = 0, _ = 0;
      if (g === c && (x = this.__charBounds[c][d].left), g >= c && g < h) _ = n && !this.isEndOfWrapping(g) ? this.width : this.getLineWidth(g) || 5;
      else if (g === h) if (u === 0) _ = this.__charBounds[h][u].left;
      else {
        const A = this._getWidthOfCharSpacing();
        _ = this.__charBounds[h][u - 1].left + this.__charBounds[h][u - 1].width - A;
      }
      y = v, (this.lineHeight < 1 || g === h && this.lineHeight > 1) && (v /= this.lineHeight);
      let S = r.left + p + x, C = v, T = 0;
      const D = _ - x;
      this.inCompositionMode ? (t.fillStyle = this.compositionColor || "black", C = 1, T = v) : t.fillStyle = this.selectionColor, this.direction === "rtl" && (this.textAlign === G || this.textAlign === jt || this.textAlign === dr ? S = this.width - S - D : this.textAlign === B || this.textAlign === ms ? S = r.left + p - _ : this.textAlign !== M && this.textAlign !== ur || (S = r.left + p - _)), t.fillRect(S, r.top + r.topOffset + T, D, C), r.topOffset += y;
    }
  }
  getCurrentCharFontSize() {
    const t = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t.l, t.c, "fontSize");
  }
  getCurrentCharColor() {
    const t = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t.l, t.c, K);
  }
  _getCurrentCharIndex() {
    const t = this.get2DCursorLocation(this.selectionStart, !0), e = t.charIndex > 0 ? t.charIndex - 1 : 0;
    return { l: t.lineIndex, c: e };
  }
  dispose() {
    this.exitEditingImpl(), this.draggableTextDelegate.dispose(), super.dispose();
  }
}
f(Yt, "ownDefaults", dh), f(Yt, "type", "IText"), k.setClass(Yt), k.setClass(Yt, "i-text");
class xe extends Yt {
  static getDefaults() {
    return m(m({}, super.getDefaults()), xe.ownDefaults);
  }
  constructor(t, e) {
    super(t, m(m({}, xe.ownDefaults), e));
  }
  static createControls() {
    return { controls: Xl() };
  }
  initDimensions() {
    this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(jt) && this.enlargeSpaces(), this.height = this.calcTextHeight());
  }
  _generateStyleMap(t) {
    let e = 0, r = 0, s = 0;
    const i = {};
    for (let n = 0; n < t.graphemeLines.length; n++) t.graphemeText[s] === `
` && n > 0 ? (r = 0, s++, e++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t.graphemeText[s]) && n > 0 && (r++, s++), i[n] = { line: e, offset: r }, s += t.graphemeLines[n].length, r += t.graphemeLines[n].length;
    return i;
  }
  styleHas(t, e) {
    if (this._styleMap && !this.isWrapping) {
      const r = this._styleMap[e];
      r && (e = r.line);
    }
    return super.styleHas(t, e);
  }
  isEmptyStyles(t) {
    if (!this.styles) return !0;
    let e, r = 0, s = t + 1, i = !1;
    const n = this._styleMap[t], a = this._styleMap[t + 1];
    n && (t = n.line, r = n.offset), a && (s = a.line, i = s === t, e = a.offset);
    const l = t === void 0 ? this.styles : { line: this.styles[t] };
    for (const c in l) for (const h in l[c]) {
      const d = parseInt(h, 10);
      if (d >= r && (!i || d < e)) for (const u in l[c][h]) return !1;
    }
    return !0;
  }
  _getStyleDeclaration(t, e) {
    if (this._styleMap && !this.isWrapping) {
      const r = this._styleMap[t];
      if (!r) return {};
      t = r.line, e = r.offset + e;
    }
    return super._getStyleDeclaration(t, e);
  }
  _setStyleDeclaration(t, e, r) {
    const s = this._styleMap[t];
    super._setStyleDeclaration(s.line, s.offset + e, r);
  }
  _deleteStyleDeclaration(t, e) {
    const r = this._styleMap[t];
    super._deleteStyleDeclaration(r.line, r.offset + e);
  }
  _getLineStyle(t) {
    const e = this._styleMap[t];
    return !!this.styles[e.line];
  }
  _setLineStyle(t) {
    const e = this._styleMap[t];
    super._setLineStyle(e.line);
  }
  _wrapText(t, e) {
    this.isWrapping = !0;
    const r = this.getGraphemeDataForRender(t), s = [];
    for (let i = 0; i < r.wordsData.length; i++) s.push(...this._wrapLine(i, e, r));
    return this.isWrapping = !1, s;
  }
  getGraphemeDataForRender(t) {
    const e = this.splitByGrapheme, r = e ? "" : " ";
    let s = 0;
    return { wordsData: t.map(((i, n) => {
      let a = 0;
      const l = e ? this.graphemeSplit(i) : this.wordSplit(i);
      return l.length === 0 ? [{ word: [], width: 0 }] : l.map(((c) => {
        const h = e ? [c] : this.graphemeSplit(c), d = this._measureWord(h, n, a);
        return s = Math.max(d, s), a += h.length + r.length, { word: h, width: d };
      }));
    })), largestWordWidth: s };
  }
  _measureWord(t, e) {
    let r, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = 0;
    for (let n = 0, a = t.length; n < a; n++)
      i += this._getGraphemeBox(t[n], e, n + s, r, !0).kernedWidth, r = t[n];
    return i;
  }
  wordSplit(t) {
    return t.split(this._wordJoiners);
  }
  _wrapLine(t, e, r) {
    let { largestWordWidth: s, wordsData: i } = r, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    const a = this._getWidthOfCharSpacing(), l = this.splitByGrapheme, c = [], h = l ? "" : " ";
    let d = 0, u = [], g = 0, p = 0, v = !0;
    e -= n;
    const y = Math.max(e, s, this.dynamicMinWidth), x = i[t];
    let _;
    for (g = 0, _ = 0; _ < x.length; _++) {
      const { word: S, width: C } = x[_];
      g += S.length, d += p + C - a, d > y && !v ? (c.push(u), u = [], d = C, v = !0) : d += a, v || l || u.push(h), u = u.concat(S), p = l ? 0 : this._measureWord([h], t, g), g++, v = !1;
    }
    return _ && c.push(u), s + n > this.dynamicMinWidth && (this.dynamicMinWidth = s - a + n), c;
  }
  isEndOfWrapping(t) {
    return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line;
  }
  missingNewlineOffset(t, e) {
    return this.splitByGrapheme && !e ? this.isEndOfWrapping(t) ? 1 : 0 : 1;
  }
  _splitTextIntoLines(t) {
    const e = super._splitTextIntoLines(t), r = this._wrapText(e.lines, this.width), s = new Array(r.length);
    for (let i = 0; i < r.length; i++) s[i] = r[i].join("");
    return e.lines = s, e.graphemeLines = r, e;
  }
  getMinWidth() {
    return Math.max(this.minWidth, this.dynamicMinWidth);
  }
  _removeExtraneousStyles() {
    const t = /* @__PURE__ */ new Map();
    for (const e in this._styleMap) {
      const r = parseInt(e, 10);
      if (this._textLines[r]) {
        const s = this._styleMap[e].line;
        t.set("".concat(s), !0);
      }
    }
    for (const e in this.styles) t.has(e) || delete this.styles[e];
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return super.toObject(["minWidth", "splitByGrapheme", ...t]);
  }
}
f(xe, "type", "Textbox"), f(xe, "textLayoutProperties", [...Yt.textLayoutProperties, "width"]), f(xe, "ownDefaults", { minWidth: 20, dynamicMinWidth: 2, lockScalingFlip: !0, noScaleCache: !1, _wordJoiners: /[ \t\r]/, splitByGrapheme: !1 }), k.setClass(xe);
class Po extends Bs {
  shouldPerformLayout(t) {
    return !!t.target.clipPath && super.shouldPerformLayout(t);
  }
  shouldLayoutClipPath() {
    return !1;
  }
  calcLayoutResult(t, e) {
    const { target: r } = t, { clipPath: s, group: i } = r;
    if (!s || !this.shouldPerformLayout(t)) return;
    const { width: n, height: a } = Ht(wn(r, s)), l = new b(n, a);
    if (s.absolutePositioned)
      return { center: Fe(s.getRelativeCenterPoint(), void 0, i ? i.calcTransformMatrix() : void 0), size: l };
    {
      const c = s.getRelativeCenterPoint().transform(r.calcOwnMatrix(), !0);
      if (this.shouldPerformLayout(t)) {
        const { center: h = new b(), correction: d = new b() } = this.calcBoundingBox(e, t) || {};
        return { center: h.add(c), correction: d.subtract(c), size: l };
      }
      return { center: r.getRelativeCenterPoint().add(c), size: l };
    }
  }
}
f(Po, "type", "clip-path"), k.setClass(Po);
class Eo extends Bs {
  getInitialSize(t, e) {
    let { target: r } = t, { size: s } = e;
    return new b(r.width || s.x, r.height || s.y);
  }
}
f(Eo, "type", "fixed"), k.setClass(Eo);
class uh extends xr {
  subscribeTargets(t) {
    const e = t.target;
    t.targets.reduce(((r, s) => (s.parent && r.add(s.parent), r)), /* @__PURE__ */ new Set()).forEach(((r) => {
      r.layoutManager.subscribeTargets({ target: r, targets: [e] });
    }));
  }
  unsubscribeTargets(t) {
    const e = t.target, r = e.getObjects();
    t.targets.reduce(((s, i) => (i.parent && s.add(i.parent), s)), /* @__PURE__ */ new Set()).forEach(((s) => {
      !r.some(((i) => i.parent === s)) && s.layoutManager.unsubscribeTargets({ target: s, targets: [e] });
    }));
  }
}
class _e extends ne {
  static getDefaults() {
    return m(m({}, super.getDefaults()), _e.ownDefaults);
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Object.assign(this, _e.ownDefaults), this.setOptions(e);
    const { left: r, top: s, layoutManager: i } = e;
    this.groupInit(t, { left: r, top: s, layoutManager: i ?? new uh() });
  }
  _shouldSetNestedCoords() {
    return !0;
  }
  __objectSelectionMonitor() {
  }
  multiSelectAdd() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    this.multiSelectionStacking === "selection-order" ? this.add(...e) : e.forEach(((s) => {
      const i = this._objects.findIndex(((a) => a.isInFrontOf(s))), n = i === -1 ? this.size() : i;
      this.insertAt(n, s);
    }));
  }
  canEnterGroup(t) {
    return this.getObjects().some(((e) => e.isDescendantOf(t) || t.isDescendantOf(e))) ? (ce("error", "ActiveSelection: circular object trees are not supported, this call has no effect"), !1) : super.canEnterGroup(t);
  }
  enterGroup(t, e) {
    t.parent && t.parent === t.group ? t.parent._exitGroup(t) : t.group && t.parent !== t.group && t.group.remove(t), this._enterGroup(t, e);
  }
  exitGroup(t, e) {
    this._exitGroup(t, e), t.parent && t.parent._enterGroup(t, !0);
  }
  _onAfterObjectsChange(t, e) {
    super._onAfterObjectsChange(t, e);
    const r = /* @__PURE__ */ new Set();
    e.forEach(((s) => {
      const { parent: i } = s;
      i && r.add(i);
    })), t === Bi ? r.forEach(((s) => {
      s._onAfterObjectsChange(vs, e);
    })) : r.forEach(((s) => {
      s._set("dirty", !0);
    }));
  }
  onDeselect() {
    return this.removeAll(), !1;
  }
  toString() {
    return "#<ActiveSelection: (".concat(this.complexity(), ")>");
  }
  shouldCache() {
    return !1;
  }
  isOnACache() {
    return !1;
  }
  _renderControls(t, e, r) {
    t.save(), t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
    const s = m(m({ hasControls: !1 }, r), {}, { forActiveSelection: !0 });
    for (let i = 0; i < this._objects.length; i++) this._objects[i]._renderControls(t, s);
    super._renderControls(t, e), t.restore();
  }
}
f(_e, "type", "ActiveSelection"), f(_e, "ownDefaults", { multiSelectionStacking: "canvas-stacking" }), k.setClass(_e), k.setClass(_e, "activeSelection");
class gh {
  constructor() {
    f(this, "resources", {});
  }
  applyFilters(t, e, r, s, i) {
    const n = i.getContext("2d");
    if (!n) return;
    n.drawImage(e, 0, 0, r, s);
    const a = { sourceWidth: r, sourceHeight: s, imageData: n.getImageData(0, 0, r, s), originalEl: e, originalImageData: n.getImageData(0, 0, r, s), canvasEl: i, ctx: n, filterBackend: this };
    t.forEach(((c) => {
      c.applyTo(a);
    }));
    const { imageData: l } = a;
    return l.width === r && l.height === s || (i.width = l.width, i.height = l.height), n.putImageData(l, 0, 0), a;
  }
}
class Rn {
  constructor() {
    let { tileSize: t = j.textureSize } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    f(this, "aPosition", new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])), f(this, "resources", {}), this.tileSize = t, this.setupGLContext(t, t), this.captureGPUInfo();
  }
  setupGLContext(t, e) {
    this.dispose(), this.createWebGLCanvas(t, e);
  }
  createWebGLCanvas(t, e) {
    const r = yt({ width: t, height: e }), s = r.getContext("webgl", { alpha: !0, premultipliedAlpha: !1, depth: !1, stencil: !1, antialias: !1 });
    s && (s.clearColor(0, 0, 0, 0), this.canvas = r, this.gl = s);
  }
  applyFilters(t, e, r, s, i, n) {
    const a = this.gl, l = i.getContext("2d");
    if (!a || !l) return;
    let c;
    n && (c = this.getCachedTexture(n, e));
    const h = { originalWidth: e.width || e.naturalWidth || 0, originalHeight: e.height || e.naturalHeight || 0, sourceWidth: r, sourceHeight: s, destinationWidth: r, destinationHeight: s, context: a, sourceTexture: this.createTexture(a, r, s, c ? void 0 : e), targetTexture: this.createTexture(a, r, s), originalTexture: c || this.createTexture(a, r, s, c ? void 0 : e), passes: t.length, webgl: !0, aPosition: this.aPosition, programCache: this.programCache, pass: 0, filterBackend: this, targetCanvas: i }, d = a.createFramebuffer();
    return a.bindFramebuffer(a.FRAMEBUFFER, d), t.forEach(((u) => {
      u && u.applyTo(h);
    })), (function(u) {
      const g = u.targetCanvas, p = g.width, v = g.height, y = u.destinationWidth, x = u.destinationHeight;
      p === y && v === x || (g.width = y, g.height = x);
    })(h), this.copyGLTo2D(a, h), a.bindTexture(a.TEXTURE_2D, null), a.deleteTexture(h.sourceTexture), a.deleteTexture(h.targetTexture), a.deleteFramebuffer(d), l.setTransform(1, 0, 0, 1, 0, 0), h;
  }
  dispose() {
    this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
  }
  clearWebGLCaches() {
    this.programCache = {}, this.textureCache = {};
  }
  createTexture(t, e, r, s, i) {
    const { NEAREST: n, TEXTURE_2D: a, RGBA: l, UNSIGNED_BYTE: c, CLAMP_TO_EDGE: h, TEXTURE_MAG_FILTER: d, TEXTURE_MIN_FILTER: u, TEXTURE_WRAP_S: g, TEXTURE_WRAP_T: p } = t, v = t.createTexture();
    return t.bindTexture(a, v), t.texParameteri(a, d, i || n), t.texParameteri(a, u, i || n), t.texParameteri(a, g, h), t.texParameteri(a, p, h), s ? t.texImage2D(a, 0, l, l, c, s) : t.texImage2D(a, 0, l, e, r, 0, l, c, null), v;
  }
  getCachedTexture(t, e, r) {
    const { textureCache: s } = this;
    if (s[t]) return s[t];
    {
      const i = this.createTexture(this.gl, e.width, e.height, e, r);
      return i && (s[t] = i), i;
    }
  }
  evictCachesForKey(t) {
    this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]), delete this.textureCache[t]);
  }
  copyGLTo2D(t, e) {
    const r = t.canvas, s = e.targetCanvas, i = s.getContext("2d");
    if (!i) return;
    i.translate(0, s.height), i.scale(1, -1);
    const n = r.height - s.height;
    i.drawImage(r, 0, n, s.width, s.height, 0, 0, s.width, s.height);
  }
  copyGLTo2DPutImageData(t, e) {
    const r = e.targetCanvas.getContext("2d"), s = e.destinationWidth, i = e.destinationHeight, n = s * i * 4;
    if (!r) return;
    const a = new Uint8Array(this.imageBuffer, 0, n), l = new Uint8ClampedArray(this.imageBuffer, 0, n);
    t.readPixels(0, 0, s, i, t.RGBA, t.UNSIGNED_BYTE, a);
    const c = new ImageData(l, s, i);
    r.putImageData(c, 0, 0);
  }
  captureGPUInfo() {
    if (this.gpuInfo) return this.gpuInfo;
    const t = this.gl, e = { renderer: "", vendor: "" };
    if (!t) return e;
    const r = t.getExtension("WEBGL_debug_renderer_info");
    if (r) {
      const s = t.getParameter(r.UNMASKED_RENDERER_WEBGL), i = t.getParameter(r.UNMASKED_VENDOR_WEBGL);
      s && (e.renderer = s.toLowerCase()), i && (e.vendor = i.toLowerCase());
    }
    return this.gpuInfo = e, e;
  }
}
let Qs;
function ph() {
  const { WebGLProbe: o } = Lt();
  return o.queryWebGL(qt()), j.enableGLFiltering && o.isSupported(j.textureSize) ? new Rn({ tileSize: j.textureSize }) : new gh();
}
function ti() {
  return !Qs && (!(arguments.length > 0 && arguments[0] !== void 0) || arguments[0]) && (Qs = ph()), Qs;
}
const fh = ["filters", "resizeFilter", "src", "crossOrigin", "type"], zn = ["cropX", "cropY"];
class pt extends ot {
  static getDefaults() {
    return m(m({}, super.getDefaults()), pt.ownDefaults);
  }
  constructor(t, e) {
    super(), f(this, "_lastScaleX", 1), f(this, "_lastScaleY", 1), f(this, "_filterScalingX", 1), f(this, "_filterScalingY", 1), this.filters = [], Object.assign(this, pt.ownDefaults), this.setOptions(e), this.cacheKey = "texture".concat(he()), this.setElement(typeof t == "string" ? (this.canvas && St(this.canvas.getElement()) || Ue()).getElementById(t) : t, e);
  }
  getElement() {
    return this._element;
  }
  setElement(t) {
    var e;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._element = t, this._originalElement = t, this._setWidthHeight(r), (e = t.classList) === null || e === void 0 || e.add(pt.CSS_CANVAS), this.filters.length !== 0 && this.applyFilters(), this.resizeFilter && this.applyResizeFilters();
  }
  removeTexture(t) {
    const e = ti(!1);
    e instanceof Rn && e.evictCachesForKey(t);
  }
  dispose() {
    super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._cacheContext = null, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(((t) => {
      const e = this[t];
      e && Lt().dispose(e), this[t] = void 0;
    }));
  }
  getCrossOrigin() {
    return this._originalElement && (this._originalElement.crossOrigin || null);
  }
  getOriginalSize() {
    const t = this.getElement();
    return t ? { width: t.naturalWidth || t.width, height: t.naturalHeight || t.height } : { width: 0, height: 0 };
  }
  _stroke(t) {
    if (!this.stroke || this.strokeWidth === 0) return;
    const e = this.width / 2, r = this.height / 2;
    t.beginPath(), t.moveTo(-e, -r), t.lineTo(e, -r), t.lineTo(e, r), t.lineTo(-e, r), t.lineTo(-e, -r), t.closePath();
  }
  toObject() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const e = [];
    return this.filters.forEach(((r) => {
      r && e.push(r.toObject());
    })), m(m({}, super.toObject([...zn, ...t])), {}, { src: this.getSrc(), crossOrigin: this.getCrossOrigin(), filters: e }, this.resizeFilter ? { resizeFilter: this.resizeFilter.toObject() } : {});
  }
  hasCrop() {
    return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height;
  }
  _toSVG() {
    const t = [], e = this._element, r = -this.width / 2, s = -this.height / 2;
    let i = [], n = [], a = "", l = "";
    if (!e) return [];
    if (this.hasCrop()) {
      const c = he();
      i.push('<clipPath id="imageCrop_' + c + `">
`, '	<rect x="' + r + '" y="' + s + '" width="' + this.width + '" height="' + this.height + `" />
`, `</clipPath>
`), a = ' clip-path="url(#imageCrop_' + c + ')" ';
    }
    if (this.imageSmoothing || (l = ' image-rendering="optimizeSpeed"'), t.push("	<image ", "COMMON_PARTS", 'xlink:href="'.concat(this.getSvgSrc(!0), '" x="').concat(r - this.cropX, '" y="').concat(s - this.cropY, '" width="').concat(e.width || e.naturalWidth, '" height="').concat(e.height || e.naturalHeight, '"').concat(l).concat(a, `></image>
`)), this.stroke || this.strokeDashArray) {
      const c = this.fill;
      this.fill = null, n = ['	<rect x="'.concat(r, '" y="').concat(s, '" width="').concat(this.width, '" height="').concat(this.height, '" style="').concat(this.getSvgStyles(), `" />
`)], this.fill = c;
    }
    return i = this.paintFirst !== K ? i.concat(n, t) : i.concat(t, n), i;
  }
  getSrc(t) {
    const e = t ? this._element : this._originalElement;
    return e ? e.toDataURL ? e.toDataURL() : this.srcFromAttribute ? e.getAttribute("src") || "" : e.src : this.src || "";
  }
  getSvgSrc(t) {
    return this.getSrc(t);
  }
  setSrc(t) {
    let { crossOrigin: e, signal: r } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ss(t, { crossOrigin: e, signal: r }).then(((s) => {
      e !== void 0 && this.set({ crossOrigin: e }), this.setElement(s);
    }));
  }
  toString() {
    return '#<Image: { src: "'.concat(this.getSrc(), '" }>');
  }
  applyResizeFilters() {
    const t = this.resizeFilter, e = this.minimumScaleTrigger, r = this.getTotalObjectScaling(), s = r.x, i = r.y, n = this._filteredEl || this._originalElement;
    if (this.group && this.set("dirty", !0), !t || s > e && i > e) return this._element = n, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = s, void (this._lastScaleY = i);
    const a = yt(n), { width: l, height: c } = n;
    this._element = a, this._lastScaleX = t.scaleX = s, this._lastScaleY = t.scaleY = i, ti().applyFilters([t], n, l, c, this._element), this._filterScalingX = a.width / this._originalElement.width, this._filterScalingY = a.height / this._originalElement.height;
  }
  applyFilters() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.filters || [];
    if (t = t.filter(((i) => i && !i.isNeutralState())), this.set("dirty", !0), this.removeTexture("".concat(this.cacheKey, "_filtered")), t.length === 0) return this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, void (this._filterScalingY = 1);
    const e = this._originalElement, r = e.naturalWidth || e.width, s = e.naturalHeight || e.height;
    if (this._element === this._originalElement) {
      const i = yt({ width: r, height: s });
      this._element = i, this._filteredEl = i;
    } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, r, s), this._lastScaleX = 1, this._lastScaleY = 1);
    ti().applyFilters(t, this._originalElement, r, s, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height);
  }
  _render(t) {
    t.imageSmoothingEnabled = this.imageSmoothing, this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t), this._renderPaintInOrder(t);
  }
  drawCacheOnCanvas(t) {
    t.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(t);
  }
  shouldCache() {
    return this.needsItsOwnCache();
  }
  _renderFill(t) {
    const e = this._element;
    if (!e) return;
    const r = this._filterScalingX, s = this._filterScalingY, i = this.width, n = this.height, a = Math.max(this.cropX, 0), l = Math.max(this.cropY, 0), c = e.naturalWidth || e.width, h = e.naturalHeight || e.height, d = a * r, u = l * s, g = Math.min(i * r, c - d), p = Math.min(n * s, h - u), v = -i / 2, y = -n / 2, x = Math.min(i, c / r - a), _ = Math.min(n, h / s - l);
    e && t.drawImage(e, d, u, g, p, v, y, x, _);
  }
  _needsResize() {
    const t = this.getTotalObjectScaling();
    return t.x !== this._lastScaleX || t.y !== this._lastScaleY;
  }
  _resetWidthHeight() {
    this.set(this.getOriginalSize());
  }
  _setWidthHeight() {
    let { width: t, height: e } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const r = this.getOriginalSize();
    this.width = t || r.width, this.height = e || r.height;
  }
  parsePreserveAspectRatioAttribute() {
    const t = al(this.preserveAspectRatio || ""), e = this.width, r = this.height, s = { width: e, height: r };
    let i, n = this._element.width, a = this._element.height, l = 1, c = 1, h = 0, d = 0, u = 0, g = 0;
    return !t || t.alignX === ht && t.alignY === ht ? (l = e / n, c = r / a) : (t.meetOrSlice === "meet" && (l = c = Cc(this._element, s), i = (e - n * l) / 2, t.alignX === "Min" && (h = -i), t.alignX === "Max" && (h = i), i = (r - a * c) / 2, t.alignY === "Min" && (d = -i), t.alignY === "Max" && (d = i)), t.meetOrSlice === "slice" && (l = c = Sc(this._element, s), i = n - e / l, t.alignX === "Mid" && (u = i / 2), t.alignX === "Max" && (u = i), i = a - r / c, t.alignY === "Mid" && (g = i / 2), t.alignY === "Max" && (g = i), n = e / l, a = r / c)), { width: n, height: a, scaleX: l, scaleY: c, offsetLeft: h, offsetTop: d, cropX: u, cropY: g };
  }
  static fromObject(t, e) {
    let { filters: r, resizeFilter: s, src: i, crossOrigin: n, type: a } = t, l = X(t, fh);
    return Promise.all([ss(i, m(m({}, e), {}, { crossOrigin: n })), r && mr(r, e), s && mr([s], e), As(l, e)]).then(((c) => {
      let [h, d = [], [u] = [], g = {}] = c;
      return new this(h, m(m({}, l), {}, { src: i, filters: d, resizeFilter: u }, g));
    }));
  }
  static fromURL(t) {
    let { crossOrigin: e = null, signal: r } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 ? arguments[2] : void 0;
    return ss(t, { crossOrigin: e, signal: r }).then(((i) => new this(i, s)));
  }
  static async fromElement(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0;
    const s = Qt(t, this.ATTRIBUTE_NAMES, r);
    return this.fromURL(s["xlink:href"] || s.href, e, s).catch(((i) => (ce("log", "Unable to parse Image", i), null)));
  }
}
f(pt, "type", "Image"), f(pt, "cacheProperties", [...Zt, ...zn]), f(pt, "ownDefaults", { strokeWidth: 0, srcFromAttribute: !1, minimumScaleTrigger: 0.5, cropX: 0, cropY: 0, imageSmoothing: !0 }), f(pt, "CSS_CANVAS", "canvas-img"), f(pt, "ATTRIBUTE_NAMES", [...ge, "x", "y", "width", "height", "preserveAspectRatio", "xlink:href", "href", "crossOrigin", "image-rendering"]), k.setClass(pt), k.setSVGClass(pt);
Fs(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]);
const Rs = (o) => o.webgl !== void 0, Ii = "precision highp float", mh = `
    `.concat(Ii, `;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`), vh = ["type"], bh = ["type"], yh = new RegExp(Ii, "g");
class J {
  get type() {
    return this.constructor.type;
  }
  constructor() {
    let t = X(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, vh);
    Object.assign(this, this.constructor.defaults, t);
  }
  getFragmentSource() {
    return mh;
  }
  getVertexSource() {
    return `
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`;
  }
  createProgram(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getFragmentSource(), r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.getVertexSource();
    const { WebGLProbe: { GLPrecision: s = "highp" } } = Lt();
    s !== "highp" && (e = e.replace(yh, Ii.replace("highp", s)));
    const i = t.createShader(t.VERTEX_SHADER), n = t.createShader(t.FRAGMENT_SHADER), a = t.createProgram();
    if (!i || !n || !a) throw new Ft("Vertex, fragment shader or program creation error");
    if (t.shaderSource(i, r), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) throw new Ft("Vertex shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(i)));
    if (t.shaderSource(n, e), t.compileShader(n), !t.getShaderParameter(n, t.COMPILE_STATUS)) throw new Ft("Fragment shader compile error for ".concat(this.type, ": ").concat(t.getShaderInfoLog(n)));
    if (t.attachShader(a, i), t.attachShader(a, n), t.linkProgram(a), !t.getProgramParameter(a, t.LINK_STATUS)) throw new Ft('Shader link error for "'.concat(this.type, '" ').concat(t.getProgramInfoLog(a)));
    const l = this.getUniformLocations(t, a) || {};
    return l.uStepW = t.getUniformLocation(a, "uStepW"), l.uStepH = t.getUniformLocation(a, "uStepH"), { program: a, attributeLocations: this.getAttributeLocations(t, a), uniformLocations: l };
  }
  getAttributeLocations(t, e) {
    return { aPosition: t.getAttribLocation(e, "aPosition") };
  }
  getUniformLocations(t, e) {
    const r = this.constructor.uniformLocations, s = {};
    for (let i = 0; i < r.length; i++) s[r[i]] = t.getUniformLocation(e, r[i]);
    return s;
  }
  sendAttributeData(t, e, r) {
    const s = e.aPosition, i = t.createBuffer();
    t.bindBuffer(t.ARRAY_BUFFER, i), t.enableVertexAttribArray(s), t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0), t.bufferData(t.ARRAY_BUFFER, r, t.STATIC_DRAW);
  }
  _setupFrameBuffer(t) {
    const e = t.context;
    if (t.passes > 1) {
      const r = t.destinationWidth, s = t.destinationHeight;
      t.sourceWidth === r && t.sourceHeight === s || (e.deleteTexture(t.targetTexture), t.targetTexture = t.filterBackend.createTexture(e, r, s)), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t.targetTexture, 0);
    } else e.bindFramebuffer(e.FRAMEBUFFER, null), e.finish();
  }
  _swapTextures(t) {
    t.passes--, t.pass++;
    const e = t.targetTexture;
    t.targetTexture = t.sourceTexture, t.sourceTexture = e;
  }
  isNeutralState(t) {
    return !1;
  }
  applyTo(t) {
    Rs(t) ? (this._setupFrameBuffer(t), this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t);
  }
  applyTo2d(t) {
  }
  getCacheKey() {
    return this.type;
  }
  retrieveShader(t) {
    const e = this.getCacheKey();
    return t.programCache[e] || (t.programCache[e] = this.createProgram(t.context)), t.programCache[e];
  }
  applyToWebGL(t) {
    const e = t.context, r = this.retrieveShader(t);
    t.pass === 0 && t.originalTexture ? e.bindTexture(e.TEXTURE_2D, t.originalTexture) : e.bindTexture(e.TEXTURE_2D, t.sourceTexture), e.useProgram(r.program), this.sendAttributeData(e, r.attributeLocations, t.aPosition), e.uniform1f(r.uniformLocations.uStepW, 1 / t.sourceWidth), e.uniform1f(r.uniformLocations.uStepH, 1 / t.sourceHeight), this.sendUniformData(e, r.uniformLocations), e.viewport(0, 0, t.destinationWidth, t.destinationHeight), e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
  }
  bindAdditionalTexture(t, e, r) {
    t.activeTexture(r), t.bindTexture(t.TEXTURE_2D, e), t.activeTexture(t.TEXTURE0);
  }
  unbindAdditionalTexture(t, e) {
    t.activeTexture(e), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE0);
  }
  sendUniformData(t, e) {
  }
  createHelpLayer(t) {
    if (!t.helpLayer) {
      const { sourceWidth: e, sourceHeight: r } = t, s = yt({ width: e, height: r });
      t.helpLayer = s;
    }
  }
  toObject() {
    const t = Object.keys(this.constructor.defaults || {});
    return m({ type: this.type }, t.reduce(((e, r) => (e[r] = this[r], e)), {}));
  }
  toJSON() {
    return this.toObject();
  }
  static async fromObject(t, e) {
    return new this(X(t, bh));
  }
}
f(J, "type", "BaseFilter"), f(J, "uniformLocations", []);
const xh = { multiply: `gl_FragColor.rgb *= uColor.rgb;
`, screen: `gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`, add: `gl_FragColor.rgb += uColor.rgb;
`, difference: `gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`, subtract: `gl_FragColor.rgb -= uColor.rgb;
`, lighten: `gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`, darken: `gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`, exclusion: `gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`, overlay: `
    if (uColor.r < 0.5) {
      gl_FragColor.r *= 2.0 * uColor.r;
    } else {
      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
    }
    if (uColor.g < 0.5) {
      gl_FragColor.g *= 2.0 * uColor.g;
    } else {
      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
    }
    if (uColor.b < 0.5) {
      gl_FragColor.b *= 2.0 * uColor.b;
    } else {
      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
    }
    `, tint: `
    gl_FragColor.rgb *= (1.0 - uColor.a);
    gl_FragColor.rgb += uColor.rgb;
    ` };
class Rr extends J {
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          `.concat(xh[this.mode], `
        }
      }
      `);
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = new I(this.color).getSource(), s = this.alpha, i = r[0] * s, n = r[1] * s, a = r[2] * s, l = 1 - s;
    for (let c = 0; c < e.length; c += 4) {
      const h = e[c], d = e[c + 1], u = e[c + 2];
      let g, p, v;
      switch (this.mode) {
        case "multiply":
          g = h * i / 255, p = d * n / 255, v = u * a / 255;
          break;
        case "screen":
          g = 255 - (255 - h) * (255 - i) / 255, p = 255 - (255 - d) * (255 - n) / 255, v = 255 - (255 - u) * (255 - a) / 255;
          break;
        case "add":
          g = h + i, p = d + n, v = u + a;
          break;
        case "difference":
          g = Math.abs(h - i), p = Math.abs(d - n), v = Math.abs(u - a);
          break;
        case "subtract":
          g = h - i, p = d - n, v = u - a;
          break;
        case "darken":
          g = Math.min(h, i), p = Math.min(d, n), v = Math.min(u, a);
          break;
        case "lighten":
          g = Math.max(h, i), p = Math.max(d, n), v = Math.max(u, a);
          break;
        case "overlay":
          g = i < 128 ? 2 * h * i / 255 : 255 - 2 * (255 - h) * (255 - i) / 255, p = n < 128 ? 2 * d * n / 255 : 255 - 2 * (255 - d) * (255 - n) / 255, v = a < 128 ? 2 * u * a / 255 : 255 - 2 * (255 - u) * (255 - a) / 255;
          break;
        case "exclusion":
          g = i + h - 2 * i * h / 255, p = n + d - 2 * n * d / 255, v = a + u - 2 * a * u / 255;
          break;
        case "tint":
          g = i + h * l, p = n + d * l, v = a + u * l;
      }
      e[c] = g, e[c + 1] = p, e[c + 2] = v;
    }
  }
  sendUniformData(t, e) {
    const r = new I(this.color).getSource();
    r[0] = this.alpha * r[0] / 255, r[1] = this.alpha * r[1] / 255, r[2] = this.alpha * r[2] / 255, r[3] = this.alpha, t.uniform4fv(e.uColor, r);
  }
}
f(Rr, "defaults", { color: "#F95C63", mode: "multiply", alpha: 1 }), f(Rr, "type", "BlendColor"), f(Rr, "uniformLocations", ["uColor"]), k.setClass(Rr);
const _h = { multiply: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.rgba *= color2.rgba;
      gl_FragColor = color;
    }
    `, mask: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.a = color2.a;
      gl_FragColor = color;
    }
    ` }, wh = ["type", "image"];
class zr extends J {
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return _h[this.mode];
  }
  getVertexSource() {
    return `
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `;
  }
  applyToWebGL(t) {
    const e = t.context, r = this.createTexture(t.filterBackend, this.image);
    this.bindAdditionalTexture(e, r, e.TEXTURE1), super.applyToWebGL(t), this.unbindAdditionalTexture(e, e.TEXTURE1);
  }
  createTexture(t, e) {
    return t.getCachedTexture(e.cacheKey, e.getElement());
  }
  calculateMatrix() {
    const t = this.image, { width: e, height: r } = t.getElement();
    return [1 / t.scaleX, 0, 0, 0, 1 / t.scaleY, 0, -t.left / e, -t.top / r, 1];
  }
  applyTo2d(t) {
    let { imageData: { data: e, width: r, height: s }, filterBackend: { resources: i } } = t;
    const n = this.image;
    i.blendImage || (i.blendImage = qt());
    const a = i.blendImage, l = a.getContext("2d");
    a.width !== r || a.height !== s ? (a.width = r, a.height = s) : l.clearRect(0, 0, r, s), l.setTransform(n.scaleX, 0, 0, n.scaleY, n.left, n.top), l.drawImage(n.getElement(), 0, 0, r, s);
    const c = l.getImageData(0, 0, r, s).data;
    for (let h = 0; h < e.length; h += 4) {
      const d = e[h], u = e[h + 1], g = e[h + 2], p = e[h + 3], v = c[h], y = c[h + 1], x = c[h + 2], _ = c[h + 3];
      switch (this.mode) {
        case "multiply":
          e[h] = d * v / 255, e[h + 1] = u * y / 255, e[h + 2] = g * x / 255, e[h + 3] = p * _ / 255;
          break;
        case "mask":
          e[h + 3] = _;
      }
    }
  }
  sendUniformData(t, e) {
    const r = this.calculateMatrix();
    t.uniform1i(e.uImage, 1), t.uniformMatrix3fv(e.uTransformMatrix, !1, r);
  }
  toObject() {
    return m(m({}, super.toObject()), {}, { image: this.image && this.image.toObject() });
  }
  static async fromObject(t, e) {
    let { type: r, image: s } = t, i = X(t, wh);
    return pt.fromObject(s, e).then(((n) => new this(m(m({}, i), {}, { image: n }))));
  }
}
f(zr, "type", "BlendImage"), f(zr, "defaults", { mode: "multiply", alpha: 1 }), f(zr, "uniformLocations", ["uTransformMatrix", "uImage"]), k.setClass(zr);
class Wr extends J {
  getFragmentSource() {
    return `
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uDelta;
    varying vec2 vTexCoord;
    const float nSamples = 15.0;
    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
    float random(vec3 scale) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
    }
    void main() {
      vec4 color = vec4(0.0);
      float totalC = 0.0;
      float totalA = 0.0;
      float offset = random(v3offset);
      for (float t = -nSamples; t <= nSamples; t++) {
        float percent = (t + offset - 0.5) / nSamples;
        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);
        float weight = 1.0 - abs(percent);
        float alpha = weight * sample.a;
        color.rgb += sample.rgb * alpha;
        color.a += alpha;
        totalA += weight;
        totalC += alpha;
      }
      gl_FragColor.rgb = color.rgb / totalC;
      gl_FragColor.a = color.a / totalA;
    }
  `;
  }
  applyTo(t) {
    Rs(t) ? (this.aspectRatio = t.sourceWidth / t.sourceHeight, t.passes++, this._setupFrameBuffer(t), this.horizontal = !0, this.applyToWebGL(t), this._swapTextures(t), this._setupFrameBuffer(t), this.horizontal = !1, this.applyToWebGL(t), this._swapTextures(t)) : this.applyTo2d(t);
  }
  applyTo2d(t) {
    let { imageData: { data: e, width: r, height: s } } = t;
    this.aspectRatio = r / s, this.horizontal = !0;
    let i = this.getBlurValue() * r;
    const n = new Uint8ClampedArray(e), a = 15, l = 4 * r;
    for (let c = 0; c < e.length; c += 4) {
      let h = 0, d = 0, u = 0, g = 0, p = 0;
      const v = c - c % l, y = v + l;
      for (let x = -14; x < a; x++) {
        const _ = x / a, S = 4 * Math.floor(i * _), C = 1 - Math.abs(_);
        let T = c + S;
        T < v ? T = v : T > y && (T = y);
        const D = e[T + 3] * C;
        h += e[T] * D, d += e[T + 1] * D, u += e[T + 2] * D, g += D, p += C;
      }
      n[c] = h / g, n[c + 1] = d / g, n[c + 2] = u / g, n[c + 3] = g / p;
    }
    this.horizontal = !1, i = this.getBlurValue() * s;
    for (let c = 0; c < n.length; c += 4) {
      let h = 0, d = 0, u = 0, g = 0, p = 0;
      const v = c % l, y = n.length - l + v;
      for (let x = -14; x < a; x++) {
        const _ = x / a, S = Math.floor(i * _) * l, C = 1 - Math.abs(_);
        let T = c + S;
        T < v ? T = v : T > y && (T = y);
        const D = n[T + 3] * C;
        h += n[T] * D, d += n[T + 1] * D, u += n[T + 2] * D, g += D, p += C;
      }
      e[c] = h / g, e[c + 1] = d / g, e[c + 2] = u / g, e[c + 3] = g / p;
    }
  }
  sendUniformData(t, e) {
    const r = this.chooseRightDelta();
    t.uniform2fv(e.uDelta, r);
  }
  isNeutralState() {
    return this.blur === 0;
  }
  getBlurValue() {
    let t = 1;
    const { horizontal: e, aspectRatio: r } = this;
    return e ? r > 1 && (t = 1 / r) : r < 1 && (t = r), t * this.blur * 0.12;
  }
  chooseRightDelta() {
    const t = this.getBlurValue();
    return this.horizontal ? [t, 0] : [0, t];
  }
}
f(Wr, "type", "Blur"), f(Wr, "defaults", { blur: 0 }), f(Wr, "uniformLocations", ["uDelta"]), k.setClass(Wr);
class $r extends J {
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`;
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = Math.round(255 * this.brightness);
    for (let s = 0; s < e.length; s += 4) e[s] += r, e[s + 1] += r, e[s + 2] += r;
  }
  isNeutralState() {
    return this.brightness === 0;
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uBrightness, this.brightness);
  }
}
f($r, "type", "Brightness"), f($r, "defaults", { brightness: 0 }), f($r, "uniformLocations", ["uBrightness"]), k.setClass($r);
const Wn = { matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], colorsOnly: !0 };
class Ae extends J {
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  varying vec2 vTexCoord;
  uniform mat4 uColorMatrix;
  uniform vec4 uConstants;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color *= uColorMatrix;
    color += uConstants;
    gl_FragColor = color;
  }`;
  }
  applyTo2d(t) {
    const e = t.imageData.data, r = this.matrix, s = this.colorsOnly;
    for (let i = 0; i < e.length; i += 4) {
      const n = e[i], a = e[i + 1], l = e[i + 2];
      if (e[i] = n * r[0] + a * r[1] + l * r[2] + 255 * r[4], e[i + 1] = n * r[5] + a * r[6] + l * r[7] + 255 * r[9], e[i + 2] = n * r[10] + a * r[11] + l * r[12] + 255 * r[14], !s) {
        const c = e[i + 3];
        e[i] += c * r[3], e[i + 1] += c * r[8], e[i + 2] += c * r[13], e[i + 3] = n * r[15] + a * r[16] + l * r[17] + c * r[18] + 255 * r[19];
      }
    }
  }
  sendUniformData(t, e) {
    const r = this.matrix, s = [r[0], r[1], r[2], r[3], r[5], r[6], r[7], r[8], r[10], r[11], r[12], r[13], r[15], r[16], r[17], r[18]], i = [r[4], r[9], r[14], r[19]];
    t.uniformMatrix4fv(e.uColorMatrix, !1, s), t.uniform4fv(e.uConstants, i);
  }
  toObject() {
    return m(m({}, super.toObject()), {}, { matrix: [...this.matrix] });
  }
}
function ke(o, t) {
  var e;
  const r = (f(e = class extends Ae {
    toObject() {
      return { type: this.type, colorsOnly: this.colorsOnly };
    }
  }, "type", o), f(e, "defaults", { colorsOnly: !1, matrix: t }), e);
  return k.setClass(r, o), r;
}
f(Ae, "type", "ColorMatrix"), f(Ae, "defaults", Wn), f(Ae, "uniformLocations", ["uColorMatrix", "uConstants"]), k.setClass(Ae);
ke("Brownie", [0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965, 0, 0, 0, 1, 0]);
ke("Vintage", [0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0, 0, 0, 1, 0]);
ke("Kodachrome", [1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972, 0, 0, 0, 1, 0]);
ke("Technicolor", [1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137, 0, 0, 0, 1, 0]);
ke("Polaroid", [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0]);
ke("Sepia", [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0]);
ke("BlackWhite", [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]);
class Mo extends J {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(t), this.subFilters = t.subFilters || [];
  }
  applyTo(t) {
    Rs(t) && (t.passes += this.subFilters.length - 1), this.subFilters.forEach(((e) => {
      e.applyTo(t);
    }));
  }
  toObject() {
    return { type: this.type, subFilters: this.subFilters.map(((t) => t.toObject())) };
  }
  isNeutralState() {
    return !this.subFilters.some(((t) => !t.isNeutralState()));
  }
  static fromObject(t, e) {
    return Promise.all((t.subFilters || []).map(((r) => k.getClass(r.type).fromObject(r, e)))).then(((r) => new this({ subFilters: r })));
  }
}
f(Mo, "type", "Composed"), k.setClass(Mo);
class Vr extends J {
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`;
  }
  isNeutralState() {
    return this.contrast === 0;
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = Math.floor(255 * this.contrast), s = 259 * (r + 255) / (255 * (259 - r));
    for (let i = 0; i < e.length; i += 4) e[i] = s * (e[i] - 128) + 128, e[i + 1] = s * (e[i + 1] - 128) + 128, e[i + 2] = s * (e[i + 2] - 128) + 128;
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uContrast, this.contrast);
  }
}
f(Vr, "type", "Contrast"), f(Vr, "defaults", { contrast: 0 }), f(Vr, "uniformLocations", ["uContrast"]), k.setClass(Vr);
const Ch = { Convolute_3_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `, Convolute_3_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `, Convolute_5_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `, Convolute_5_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `, Convolute_7_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `, Convolute_7_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `, Convolute_9_1: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `, Convolute_9_0: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    ` };
class Xr extends J {
  getCacheKey() {
    return "".concat(this.type, "_").concat(Math.sqrt(this.matrix.length), "_").concat(this.opaque ? 1 : 0);
  }
  getFragmentSource() {
    return Ch[this.getCacheKey()];
  }
  applyTo2d(t) {
    const e = t.imageData, r = e.data, s = this.matrix, i = Math.round(Math.sqrt(s.length)), n = Math.floor(i / 2), a = e.width, l = e.height, c = t.ctx.createImageData(a, l), h = c.data, d = this.opaque ? 1 : 0;
    let u, g, p, v, y, x, _, S, C, T, D, A, O;
    for (D = 0; D < l; D++) for (T = 0; T < a; T++) {
      for (y = 4 * (D * a + T), u = 0, g = 0, p = 0, v = 0, O = 0; O < i; O++) for (A = 0; A < i; A++) _ = D + O - n, x = T + A - n, _ < 0 || _ >= l || x < 0 || x >= a || (S = 4 * (_ * a + x), C = s[O * i + A], u += r[S] * C, g += r[S + 1] * C, p += r[S + 2] * C, d || (v += r[S + 3] * C));
      h[y] = u, h[y + 1] = g, h[y + 2] = p, h[y + 3] = d ? r[y + 3] : v;
    }
    t.imageData = c;
  }
  sendUniformData(t, e) {
    t.uniform1fv(e.uMatrix, this.matrix);
  }
  toObject() {
    return m(m({}, super.toObject()), {}, { opaque: this.opaque, matrix: [...this.matrix] });
  }
}
f(Xr, "type", "Convolute"), f(Xr, "defaults", { opaque: !1, matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0] }), f(Xr, "uniformLocations", ["uMatrix", "uOpaque", "uHalfSize", "uSize"]), k.setClass(Xr);
const $n = "Gamma";
class Yr extends J {
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec3 uGamma;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    vec3 correction = (1.0 / uGamma);
    color.r = pow(color.r, correction.r);
    color.g = pow(color.g, correction.g);
    color.b = pow(color.b, correction.b);
    gl_FragColor = color;
    gl_FragColor.rgb *= color.a;
  }
`;
  }
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    super(t), this.gamma = t.gamma || this.constructor.defaults.gamma.concat();
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = this.gamma, s = 1 / r[0], i = 1 / r[1], n = 1 / r[2];
    this.rgbValues || (this.rgbValues = { r: new Uint8Array(256), g: new Uint8Array(256), b: new Uint8Array(256) });
    const a = this.rgbValues;
    for (let l = 0; l < 256; l++) a.r[l] = 255 * Math.pow(l / 255, s), a.g[l] = 255 * Math.pow(l / 255, i), a.b[l] = 255 * Math.pow(l / 255, n);
    for (let l = 0; l < e.length; l += 4) e[l] = a.r[e[l]], e[l + 1] = a.g[e[l + 1]], e[l + 2] = a.b[e[l + 2]];
  }
  sendUniformData(t, e) {
    t.uniform3fv(e.uGamma, this.gamma);
  }
  isNeutralState() {
    const { gamma: t } = this;
    return t[0] === 1 && t[1] === 1 && t[2] === 1;
  }
  toObject() {
    return { type: $n, gamma: this.gamma.concat() };
  }
}
f(Yr, "type", $n), f(Yr, "defaults", { gamma: [1, 1, 1] }), f(Yr, "uniformLocations", ["uGamma"]), k.setClass(Yr);
const Sh = { average: `
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      float average = (color.r + color.b + color.g) / 3.0;
      gl_FragColor = vec4(average, average, average, color.a);
    }
    `, lightness: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `, luminosity: `
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    ` };
class Hr extends J {
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    for (let r, s = 0; s < e.length; s += 4) {
      const i = e[s], n = e[s + 1], a = e[s + 2];
      switch (this.mode) {
        case "average":
          r = (i + n + a) / 3;
          break;
        case "lightness":
          r = (Math.min(i, n, a) + Math.max(i, n, a)) / 2;
          break;
        case "luminosity":
          r = 0.21 * i + 0.72 * n + 0.07 * a;
      }
      e[s + 2] = e[s + 1] = e[s] = r;
    }
  }
  getCacheKey() {
    return "".concat(this.type, "_").concat(this.mode);
  }
  getFragmentSource() {
    return Sh[this.mode];
  }
  sendUniformData(t, e) {
    t.uniform1i(e.uMode, 1);
  }
  isNeutralState() {
    return !1;
  }
}
f(Hr, "type", "Grayscale"), f(Hr, "defaults", { mode: "average" }), f(Hr, "uniformLocations", ["uMode"]), k.setClass(Hr);
const Th = m(m({}, Wn), {}, { rotation: 0 });
class ei extends Ae {
  calculateMatrix() {
    const t = this.rotation * Math.PI, e = Ut(t), r = Nt(t), s = 1 / 3, i = Math.sqrt(s) * r, n = 1 - e;
    this.matrix = [e + n / 3, s * n - i, s * n + i, 0, 0, s * n + i, e + s * n, s * n - i, 0, 0, s * n - i, s * n + i, e + s * n, 0, 0, 0, 0, 0, 1, 0];
  }
  isNeutralState() {
    return this.rotation === 0;
  }
  applyTo(t) {
    this.calculateMatrix(), super.applyTo(t);
  }
  toObject() {
    return { type: this.type, rotation: this.rotation };
  }
}
f(ei, "type", "HueRotation"), f(ei, "defaults", Th), k.setClass(ei);
class Gr extends J {
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    for (let r = 0; r < e.length; r += 4) e[r] = 255 - e[r], e[r + 1] = 255 - e[r + 1], e[r + 2] = 255 - e[r + 2], this.alpha && (e[r + 3] = 255 - e[r + 3]);
  }
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform int uInvert;
  uniform int uAlpha;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    if (uInvert == 1) {
      if (uAlpha == 1) {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);
      } else {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
      }
    } else {
      gl_FragColor = color;
    }
  }
`;
  }
  isNeutralState() {
    return !this.invert;
  }
  sendUniformData(t, e) {
    t.uniform1i(e.uInvert, Number(this.invert)), t.uniform1i(e.uAlpha, Number(this.alpha));
  }
}
f(Gr, "type", "Invert"), f(Gr, "defaults", { alpha: !1, invert: !0 }), f(Gr, "uniformLocations", ["uInvert", "uAlpha"]), k.setClass(Gr);
class Ur extends J {
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uStepH;
  uniform float uNoise;
  uniform float uSeed;
  varying vec2 vTexCoord;
  float rand(vec2 co, float seed, float vScale) {
    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
  }
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
    gl_FragColor = color;
  }
`;
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = this.noise;
    for (let s = 0; s < e.length; s += 4) {
      const i = (0.5 - Math.random()) * r;
      e[s] += i, e[s + 1] += i, e[s + 2] += i;
    }
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uNoise, this.noise / 255), t.uniform1f(e.uSeed, Math.random());
  }
  isNeutralState() {
    return this.noise === 0;
  }
}
f(Ur, "type", "Noise"), f(Ur, "defaults", { noise: 0 }), f(Ur, "uniformLocations", ["uNoise", "uSeed"]), k.setClass(Ur);
class Nr extends J {
  applyTo2d(t) {
    let { imageData: { data: e, width: r, height: s } } = t;
    for (let i = 0; i < s; i += this.blocksize) for (let n = 0; n < r; n += this.blocksize) {
      const a = 4 * i * r + 4 * n, l = e[a], c = e[a + 1], h = e[a + 2], d = e[a + 3];
      for (let u = i; u < Math.min(i + this.blocksize, s); u++) for (let g = n; g < Math.min(n + this.blocksize, r); g++) {
        const p = 4 * u * r + 4 * g;
        e[p] = l, e[p + 1] = c, e[p + 2] = h, e[p + 3] = d;
      }
    }
  }
  isNeutralState() {
    return this.blocksize === 1;
  }
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBlocksize;
  uniform float uStepW;
  uniform float uStepH;
  varying vec2 vTexCoord;
  void main() {
    float blockW = uBlocksize * uStepW;
    float blockH = uBlocksize * uStepH;
    int posX = int(vTexCoord.x / blockW);
    int posY = int(vTexCoord.y / blockH);
    float fposX = float(posX);
    float fposY = float(posY);
    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
    vec4 color = texture2D(uTexture, squareCoords);
    gl_FragColor = color;
  }
`;
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uBlocksize, this.blocksize);
  }
}
f(Nr, "type", "Pixelate"), f(Nr, "defaults", { blocksize: 4 }), f(Nr, "uniformLocations", ["uBlocksize"]), k.setClass(Nr);
class qr extends J {
  getFragmentSource() {
    return `
precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord);
  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
    gl_FragColor.a = 0.0;
  }
}
`;
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = 255 * this.distance, s = new I(this.color).getSource(), i = [s[0] - r, s[1] - r, s[2] - r], n = [s[0] + r, s[1] + r, s[2] + r];
    for (let a = 0; a < e.length; a += 4) {
      const l = e[a], c = e[a + 1], h = e[a + 2];
      l > i[0] && c > i[1] && h > i[2] && l < n[0] && c < n[1] && h < n[2] && (e[a + 3] = 0);
    }
  }
  sendUniformData(t, e) {
    const r = new I(this.color).getSource(), s = this.distance, i = [0 + r[0] / 255 - s, 0 + r[1] / 255 - s, 0 + r[2] / 255 - s, 1], n = [r[0] / 255 + s, r[1] / 255 + s, r[2] / 255 + s, 1];
    t.uniform4fv(e.uLow, i), t.uniform4fv(e.uHigh, n);
  }
}
f(qr, "type", "RemoveColor"), f(qr, "defaults", { color: "#FFFFFF", distance: 0.02, useAlpha: !1 }), f(qr, "uniformLocations", ["uLow", "uHigh"]), k.setClass(qr);
class Kr extends J {
  sendUniformData(t, e) {
    t.uniform2fv(e.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), t.uniform1fv(e.uTaps, this.taps);
  }
  getFilterWindow() {
    const t = this.tempScale;
    return Math.ceil(this.lanczosLobes / t);
  }
  getCacheKey() {
    const t = this.getFilterWindow();
    return "".concat(this.type, "_").concat(t);
  }
  getFragmentSource() {
    const t = this.getFilterWindow();
    return this.generateShader(t);
  }
  getTaps() {
    const t = this.lanczosCreate(this.lanczosLobes), e = this.tempScale, r = this.getFilterWindow(), s = new Array(r);
    for (let i = 1; i <= r; i++) s[i - 1] = t(i * e);
    return s;
  }
  generateShader(t) {
    const e = new Array(t);
    for (let r = 1; r <= t; r++) e[r - 1] = "".concat(r, ".0 * uDelta");
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[`.concat(t, `];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        `).concat(e.map(((r, s) => `
              color += texture2D(uTexture, vTexCoord + `.concat(r, ") * uTaps[").concat(s, "] + texture2D(uTexture, vTexCoord - ").concat(r, ") * uTaps[").concat(s, `];
              sum += 2.0 * uTaps[`).concat(s, `];
            `))).join(`
`), `
        gl_FragColor = color / sum;
      }
    `);
  }
  applyToForWebgl(t) {
    t.passes++, this.width = t.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = t.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t.destinationWidth = this.dW, super.applyTo(t), t.sourceWidth = t.destinationWidth, this.height = t.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t.destinationHeight = this.dH, super.applyTo(t), t.sourceHeight = t.destinationHeight;
  }
  applyTo(t) {
    Rs(t) ? this.applyToForWebgl(t) : this.applyTo2d(t);
  }
  isNeutralState() {
    return this.scaleX === 1 && this.scaleY === 1;
  }
  lanczosCreate(t) {
    return (e) => {
      if (e >= t || e <= -t) return 0;
      if (e < 11920929e-14 && e > -11920929e-14) return 1;
      const r = (e *= Math.PI) / t;
      return Math.sin(e) / e * Math.sin(r) / r;
    };
  }
  applyTo2d(t) {
    const e = t.imageData, r = this.scaleX, s = this.scaleY;
    this.rcpScaleX = 1 / r, this.rcpScaleY = 1 / s;
    const i = e.width, n = e.height, a = Math.round(i * r), l = Math.round(n * s);
    let c;
    c = this.resizeType === "sliceHack" ? this.sliceByTwo(t, i, n, a, l) : this.resizeType === "hermite" ? this.hermiteFastResize(t, i, n, a, l) : this.resizeType === "bilinear" ? this.bilinearFiltering(t, i, n, a, l) : this.resizeType === "lanczos" ? this.lanczosResize(t, i, n, a, l) : new ImageData(a, l), t.imageData = c;
  }
  sliceByTwo(t, e, r, s, i) {
    const n = t.imageData, a = 0.5;
    let l = !1, c = !1, h = e * a, d = r * a;
    const u = t.filterBackend.resources;
    let g = 0, p = 0;
    const v = e;
    let y = 0;
    u.sliceByTwo || (u.sliceByTwo = qt());
    const x = u.sliceByTwo;
    (x.width < 1.5 * e || x.height < r) && (x.width = 1.5 * e, x.height = r);
    const _ = x.getContext("2d");
    for (_.clearRect(0, 0, 1.5 * e, r), _.putImageData(n, 0, 0), s = Math.floor(s), i = Math.floor(i); !l || !c; ) e = h, r = d, s < Math.floor(h * a) ? h = Math.floor(h * a) : (h = s, l = !0), i < Math.floor(d * a) ? d = Math.floor(d * a) : (d = i, c = !0), _.drawImage(x, g, p, e, r, v, y, h, d), g = v, p = y, y += d;
    return _.getImageData(g, p, s, i);
  }
  lanczosResize(t, e, r, s, i) {
    const n = t.imageData.data, a = t.ctx.createImageData(s, i), l = a.data, c = this.lanczosCreate(this.lanczosLobes), h = this.rcpScaleX, d = this.rcpScaleY, u = 2 / this.rcpScaleX, g = 2 / this.rcpScaleY, p = Math.ceil(h * this.lanczosLobes / 2), v = Math.ceil(d * this.lanczosLobes / 2), y = {}, x = { x: 0, y: 0 }, _ = { x: 0, y: 0 };
    return (function S(C) {
      let T, D, A, O, L, q, Z, W, z, F, tt;
      for (x.x = (C + 0.5) * h, _.x = Math.floor(x.x), T = 0; T < i; T++) {
        for (x.y = (T + 0.5) * d, _.y = Math.floor(x.y), L = 0, q = 0, Z = 0, W = 0, z = 0, D = _.x - p; D <= _.x + p; D++) if (!(D < 0 || D >= e)) {
          F = Math.floor(1e3 * Math.abs(D - x.x)), y[F] || (y[F] = {});
          for (let Q = _.y - v; Q <= _.y + v; Q++) Q < 0 || Q >= r || (tt = Math.floor(1e3 * Math.abs(Q - x.y)), y[F][tt] || (y[F][tt] = c(Math.sqrt(Math.pow(F * u, 2) + Math.pow(tt * g, 2)) / 1e3)), A = y[F][tt], A > 0 && (O = 4 * (Q * e + D), L += A, q += A * n[O], Z += A * n[O + 1], W += A * n[O + 2], z += A * n[O + 3]));
        }
        O = 4 * (T * s + C), l[O] = q / L, l[O + 1] = Z / L, l[O + 2] = W / L, l[O + 3] = z / L;
      }
      return ++C < s ? S(C) : a;
    })(0);
  }
  bilinearFiltering(t, e, r, s, i) {
    let n, a, l, c, h, d, u, g, p, v, y, x, _, S = 0;
    const C = this.rcpScaleX, T = this.rcpScaleY, D = 4 * (e - 1), A = t.imageData.data, O = t.ctx.createImageData(s, i), L = O.data;
    for (u = 0; u < i; u++) for (g = 0; g < s; g++) for (h = Math.floor(C * g), d = Math.floor(T * u), p = C * g - h, v = T * u - d, _ = 4 * (d * e + h), y = 0; y < 4; y++) n = A[_ + y], a = A[_ + 4 + y], l = A[_ + D + y], c = A[_ + D + 4 + y], x = n * (1 - p) * (1 - v) + a * p * (1 - v) + l * v * (1 - p) + c * p * v, L[S++] = x;
    return O;
  }
  hermiteFastResize(t, e, r, s, i) {
    const n = this.rcpScaleX, a = this.rcpScaleY, l = Math.ceil(n / 2), c = Math.ceil(a / 2), h = t.imageData.data, d = t.ctx.createImageData(s, i), u = d.data;
    for (let g = 0; g < i; g++) for (let p = 0; p < s; p++) {
      const v = 4 * (p + g * s);
      let y = 0, x = 0, _ = 0, S = 0, C = 0, T = 0, D = 0;
      const A = (g + 0.5) * a;
      for (let O = Math.floor(g * a); O < (g + 1) * a; O++) {
        const L = Math.abs(A - (O + 0.5)) / c, q = (p + 0.5) * n, Z = L * L;
        for (let W = Math.floor(p * n); W < (p + 1) * n; W++) {
          let z = Math.abs(q - (W + 0.5)) / l;
          const F = Math.sqrt(Z + z * z);
          F > 1 && F < -1 || (y = 2 * F * F * F - 3 * F * F + 1, y > 0 && (z = 4 * (W + O * e), D += y * h[z + 3], _ += y, h[z + 3] < 255 && (y = y * h[z + 3] / 250), S += y * h[z], C += y * h[z + 1], T += y * h[z + 2], x += y));
        }
      }
      u[v] = S / x, u[v + 1] = C / x, u[v + 2] = T / x, u[v + 3] = D / _;
    }
    return d;
  }
}
f(Kr, "type", "Resize"), f(Kr, "defaults", { resizeType: "hermite", scaleX: 1, scaleY: 1, lanczosLobes: 3 }), f(Kr, "uniformLocations", ["uDelta", "uTaps"]), k.setClass(Kr);
class Jr extends J {
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uSaturation;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float rgMax = max(color.r, color.g);
    float rgbMax = max(rgMax, color.b);
    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
    gl_FragColor = color;
  }
`;
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = -this.saturation;
    for (let s = 0; s < e.length; s += 4) {
      const i = e[s], n = e[s + 1], a = e[s + 2], l = Math.max(i, n, a);
      e[s] += l !== i ? (l - i) * r : 0, e[s + 1] += l !== n ? (l - n) * r : 0, e[s + 2] += l !== a ? (l - a) * r : 0;
    }
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uSaturation, -this.saturation);
  }
  isNeutralState() {
    return this.saturation === 0;
  }
}
f(Jr, "type", "Saturation"), f(Jr, "defaults", { saturation: 0 }), f(Jr, "uniformLocations", ["uSaturation"]), k.setClass(Jr);
class Zr extends J {
  getFragmentSource() {
    return `
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVibrance;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float max = max(color.r, max(color.g, color.b));
    float avg = (color.r + color.g + color.b) / 3.0;
    float amt = (abs(max - avg) * 2.0) * uVibrance;
    color.r += max != color.r ? (max - color.r) * amt : 0.00;
    color.g += max != color.g ? (max - color.g) * amt : 0.00;
    color.b += max != color.b ? (max - color.b) * amt : 0.00;
    gl_FragColor = color;
  }
`;
  }
  applyTo2d(t) {
    let { imageData: { data: e } } = t;
    const r = -this.vibrance;
    for (let s = 0; s < e.length; s += 4) {
      const i = e[s], n = e[s + 1], a = e[s + 2], l = Math.max(i, n, a), c = (i + n + a) / 3, h = 2 * Math.abs(l - c) / 255 * r;
      e[s] += l !== i ? (l - i) * h : 0, e[s + 1] += l !== n ? (l - n) * h : 0, e[s + 2] += l !== a ? (l - a) * h : 0;
    }
  }
  sendUniformData(t, e) {
    t.uniform1f(e.uVibrance, -this.vibrance);
  }
  isNeutralState() {
    return this.vibrance === 0;
  }
}
f(Zr, "type", "Vibrance"), f(Zr, "defaults", { vibrance: 0 }), f(Zr, "uniformLocations", ["uVibrance"]), k.setClass(Zr);
var kh = Object.defineProperty, Oh = Object.getOwnPropertyDescriptor, te = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Oh(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && kh(t, e, s), s;
};
let Pt = class extends P {
  constructor() {
    super(...arguments), this.width = 800, this.height = 600, this.backgroundColor = "#ffffff", this.showToolbar = !0, this.snapToGrid = !1, this.gridSize = 20, this.drawingMode = "select", this.fabricCanvas = null, this.itemCounter = 0, this.isDrawingStart = !1, this.drawingStartPoint = null;
  }
  firstUpdated(o) {
    super.firstUpdated(o), this.initCanvas();
  }
  updated(o) {
    super.updated(o), (o.has("width") || o.has("height")) && this.resizeCanvas(), o.has("backgroundColor") && this.fabricCanvas && (this.fabricCanvas.backgroundColor = this.backgroundColor, this.fabricCanvas.renderAll());
  }
  initCanvas() {
    this.canvasElement && (this.fabricCanvas = new pi(this.canvasElement, {
      width: this.width,
      height: this.height,
      backgroundColor: this.backgroundColor,
      selection: !0,
      preserveObjectStacking: !0
    }), this.fabricCanvas.on("selection:created", (o) => this.handleSelectionChange(o)), this.fabricCanvas.on("selection:updated", (o) => this.handleSelectionChange(o)), this.fabricCanvas.on("selection:cleared", (o) => this.handleSelectionChange(o)), this.fabricCanvas.on("object:modified", (o) => this.handleObjectModified(o)), this.fabricCanvas.on("mouse:down", (o) => this.handleMouseDown(o)), this.fabricCanvas.on("mouse:up", (o) => this.handleMouseUp(o)), this.canvasElement.addEventListener("contextmenu", (o) => this.handleContextMenu(o)));
  }
  resizeCanvas() {
    this.fabricCanvas && (this.fabricCanvas.setDimensions({ width: this.width, height: this.height }), this.fabricCanvas.renderAll());
  }
  generateId() {
    return `item_${Date.now()}_${++this.itemCounter}`;
  }
  handleSelectionChange(o) {
    var r, s;
    const t = ((r = o.selected) == null ? void 0 : r.map((i) => i.customId).filter(Boolean)) || [], e = ((s = o.deselected) == null ? void 0 : s.map((i) => i.customId).filter(Boolean)) || [];
    this.emit("avgrd-selection-change", { selected: t, deselected: e });
  }
  handleObjectModified(o) {
    const t = o.target;
    if (!(t != null && t.customId)) return;
    const e = this.fabricObjectToItem(t);
    e && this.emit("avgrd-item-change", {
      id: t.customId,
      type: "modify",
      item: e
    });
  }
  handleMouseDown(o) {
    this.drawingMode === "select" || !o.pointer || (this.isDrawingStart = !0, this.drawingStartPoint = { x: o.pointer.x, y: o.pointer.y });
  }
  handleMouseUp(o) {
    if (!this.isDrawingStart || !this.drawingStartPoint || !o.pointer) {
      this.isDrawingStart = !1;
      return;
    }
    const t = this.drawingStartPoint, e = { x: o.pointer.x, y: o.pointer.y }, r = 10, s = Math.abs(e.x - t.x), i = Math.abs(e.y - t.y);
    s < r && i < r && this.drawingMode !== "text" ? this.createShapeAtPoint(t.x, t.y) : this.createShapeFromDrag(t, e), this.isDrawingStart = !1, this.drawingStartPoint = null, this.setDrawingMode("select");
  }
  createShapeAtPoint(o, t) {
    switch (this.drawingMode) {
      case "rect":
        this.addRect({ left: o - 50, top: t - 30, width: 100, height: 60 });
        break;
      case "circle":
        this.addCircle({ left: o, top: t, radius: 40 });
        break;
      case "text":
        this.addText({ left: o, top: t, text: "Text" });
        break;
      case "arrow":
        this.addArrow({ left: 0, top: 0, points: [o, t, o + 100, t] });
        break;
      case "line":
        this.addLine({ left: 0, top: 0, points: [o, t, o + 100, t] });
        break;
    }
  }
  createShapeFromDrag(o, t) {
    const e = Math.min(o.x, t.x), r = Math.min(o.y, t.y), s = Math.abs(t.x - o.x), i = Math.abs(t.y - o.y);
    switch (this.drawingMode) {
      case "rect":
        this.addRect({ left: e, top: r, width: s, height: i });
        break;
      case "circle":
        this.addCircle({ left: e + s / 2, top: r + i / 2, radius: Math.min(s, i) / 2 });
        break;
      case "text":
        this.addText({ left: e, top: r, text: "Text" });
        break;
      case "arrow":
        this.addArrow({ left: 0, top: 0, points: [o.x, o.y, t.x, t.y] });
        break;
      case "line":
        this.addLine({ left: 0, top: 0, points: [o.x, o.y, t.x, t.y] });
        break;
    }
  }
  handleContextMenu(o) {
    if (o.preventDefault(), !this.fabricCanvas) return;
    this.fabricCanvas.getScenePoint(o);
    const t = this.fabricCanvas.findTarget(o), e = this.fabricCanvas.getActiveObjects().map((r) => r.customId).filter(Boolean);
    this.emit("avgrd-context-menu", {
      itemId: (t == null ? void 0 : t.customId) || null,
      x: o.clientX,
      y: o.clientY,
      items: e
    });
  }
  /**
   * Set the current drawing mode
   */
  setDrawingMode(o) {
    this.drawingMode = o, this.fabricCanvas && (this.fabricCanvas.isDrawingMode = !1, this.fabricCanvas.selection = o === "select");
  }
  /**
   * Add a rectangle
   */
  addRect(o) {
    if (!this.fabricCanvas) return "";
    const t = o.id || this.generateId(), e = new Ct({
      left: o.left || 100,
      top: o.top || 100,
      width: o.width || 100,
      height: o.height || 60,
      fill: o.fill || "var(--avgrd-color-primary)",
      stroke: o.stroke || "var(--avgrd-color-border)",
      strokeWidth: o.strokeWidth || 1,
      rx: o.rx || 0,
      ry: o.ry || 0,
      angle: o.angle || 0
    });
    return e.customId = t, e.customType = "rect", e.metadata = o.metadata, this.fabricCanvas.add(e), this.fabricCanvas.renderAll(), this.emit("avgrd-item-added", { id: t, type: "rect" }), t;
  }
  /**
   * Add a circle
   */
  addCircle(o) {
    if (!this.fabricCanvas) return "";
    const t = o.id || this.generateId(), e = new At({
      left: o.left || 100,
      top: o.top || 100,
      radius: o.radius || 40,
      fill: o.fill || "var(--avgrd-color-primary)",
      stroke: o.stroke || "var(--avgrd-color-border)",
      strokeWidth: o.strokeWidth || 1,
      angle: o.angle || 0
    });
    return e.customId = t, e.customType = "circle", e.metadata = o.metadata, this.fabricCanvas.add(e), this.fabricCanvas.renderAll(), this.emit("avgrd-item-added", { id: t, type: "circle" }), t;
  }
  /**
   * Add text
   */
  addText(o) {
    if (!this.fabricCanvas) return "";
    const t = o.id || this.generateId(), e = new it(o.text || "Text", {
      left: o.left || 100,
      top: o.top || 100,
      fontSize: o.fontSize || 16,
      fontFamily: o.fontFamily || "PT Sans, sans-serif",
      fill: o.fill || "var(--avgrd-color-text-primary)",
      angle: o.angle || 0
    });
    return e.customId = t, e.customType = "text", e.metadata = o.metadata, this.fabricCanvas.add(e), this.fabricCanvas.renderAll(), this.emit("avgrd-item-added", { id: t, type: "text" }), t;
  }
  /**
   * Add an image
   */
  async addImage(o) {
    if (!this.fabricCanvas || !o.src) return "";
    const t = o.id || this.generateId();
    try {
      const e = await pt.fromURL(o.src);
      return e.set({
        left: o.left || 100,
        top: o.top || 100,
        angle: o.angle || 0
      }), o.width && e.scaleToWidth(o.width), o.height && e.scaleToHeight(o.height), e.customId = t, e.customType = "image", e.metadata = o.metadata, this.fabricCanvas.add(e), this.fabricCanvas.renderAll(), this.emit("avgrd-item-added", { id: t, type: "image" }), t;
    } catch (e) {
      return console.error("Failed to load image:", e), "";
    }
  }
  /**
   * Add an arrow
   */
  addArrow(o) {
    if (!this.fabricCanvas) return "";
    const t = o.id || this.generateId(), e = o.points || [0, 0, 100, 0], [r, s, i, n] = e, a = o.headSize || 10, l = Math.atan2(n - s, i - r), c = Math.PI / 6, h = [
      i,
      n,
      i - a * Math.cos(l - c),
      n - a * Math.sin(l - c),
      i - a * Math.cos(l + c),
      n - a * Math.sin(l + c)
    ], d = new Vt([r, s, i, n], {
      stroke: o.stroke || "var(--avgrd-color-text-primary)",
      strokeWidth: o.strokeWidth || 2
    }), u = new lr(
      [
        { x: h[0], y: h[1] },
        { x: h[2], y: h[3] },
        { x: h[4], y: h[5] }
      ],
      {
        fill: o.stroke || "var(--avgrd-color-text-primary)",
        stroke: o.stroke || "var(--avgrd-color-text-primary)",
        strokeWidth: 1
      }
    ), g = new ne([d, u], {
      left: o.left || 0,
      top: o.top || 0
    });
    return g.customId = t, g.customType = "arrow", g.metadata = o.metadata, this.fabricCanvas.add(g), this.fabricCanvas.renderAll(), this.emit("avgrd-item-added", { id: t, type: "arrow" }), t;
  }
  /**
   * Add a line
   */
  addLine(o) {
    if (!this.fabricCanvas) return "";
    const t = o.id || this.generateId(), e = o.points || [0, 0, 100, 0], r = new Vt(e, {
      left: o.left || 0,
      top: o.top || 0,
      stroke: o.stroke || "var(--avgrd-color-text-primary)",
      strokeWidth: o.strokeWidth || 2
    });
    return r.customId = t, r.customType = "line", r.metadata = o.metadata, this.fabricCanvas.add(r), this.fabricCanvas.renderAll(), this.emit("avgrd-item-added", { id: t, type: "line" }), t;
  }
  /**
   * Remove an item by ID
   */
  removeItem(o) {
    if (!this.fabricCanvas) return !1;
    const t = this.fabricCanvas.getObjects().find((e) => e.customId === o);
    return t ? (this.fabricCanvas.remove(t), this.fabricCanvas.renderAll(), this.emit("avgrd-item-removed", { id: o }), !0) : !1;
  }
  /**
   * Remove selected items
   */
  removeSelected() {
    if (!this.fabricCanvas) return;
    this.fabricCanvas.getActiveObjects().forEach((t) => {
      this.fabricCanvas.remove(t), t.customId && this.emit("avgrd-item-removed", { id: t.customId });
    }), this.fabricCanvas.discardActiveObject(), this.fabricCanvas.renderAll();
  }
  /**
   * Get an item by ID
   */
  getItem(o) {
    if (!this.fabricCanvas) return null;
    const t = this.fabricCanvas.getObjects().find((e) => e.customId === o);
    return t ? this.fabricObjectToItem(t) : null;
  }
  /**
   * Get all items
   */
  getItems() {
    return this.fabricCanvas ? this.fabricCanvas.getObjects().filter((o) => o.customId).map((o) => this.fabricObjectToItem(o)).filter((o) => o !== null) : [];
  }
  /**
   * Select an item by ID
   */
  selectItem(o) {
    if (!this.fabricCanvas) return;
    const t = this.fabricCanvas.getObjects().find((e) => e.customId === o);
    t && (this.fabricCanvas.setActiveObject(t), this.fabricCanvas.renderAll());
  }
  /**
   * Clear selection
   */
  clearSelection() {
    this.fabricCanvas && (this.fabricCanvas.discardActiveObject(), this.fabricCanvas.renderAll());
  }
  /**
   * Clear all items
   */
  clear() {
    this.fabricCanvas && (this.fabricCanvas.clear(), this.fabricCanvas.backgroundColor = this.backgroundColor, this.fabricCanvas.renderAll());
  }
  /**
   * Export canvas state to JSON
   */
  toJSON() {
    return {
      version: "1.0",
      width: this.width,
      height: this.height,
      backgroundColor: this.backgroundColor,
      items: this.getItems()
    };
  }
  /**
   * Load canvas state from JSON
   */
  loadFromJSON(o) {
    this.clear(), o.width && (this.width = o.width), o.height && (this.height = o.height), o.backgroundColor && (this.backgroundColor = o.backgroundColor), o.items.forEach((t) => {
      switch (t.type) {
        case "rect":
          this.addRect(t);
          break;
        case "circle":
          this.addCircle(t);
          break;
        case "text":
          this.addText(t);
          break;
        case "image":
          this.addImage(t);
          break;
        case "arrow":
          this.addArrow(t);
          break;
        case "line":
          this.addLine(t);
          break;
      }
    });
  }
  fabricObjectToItem(o) {
    const t = {
      id: o.customId || "",
      left: o.left || 0,
      top: o.top || 0,
      angle: o.angle,
      scaleX: o.scaleX,
      scaleY: o.scaleY,
      opacity: o.opacity,
      metadata: o.metadata
    };
    switch (o.customType) {
      case "rect":
        return {
          ...t,
          type: "rect",
          width: o.width || 0,
          height: o.height || 0,
          fill: o.fill,
          stroke: o.stroke,
          strokeWidth: o.strokeWidth
        };
      case "circle":
        return {
          ...t,
          type: "circle",
          radius: o.radius || 0,
          fill: o.fill,
          stroke: o.stroke,
          strokeWidth: o.strokeWidth
        };
      case "text":
        return {
          ...t,
          type: "text",
          text: o.text || "",
          fontSize: o.fontSize,
          fontFamily: o.fontFamily,
          fill: o.fill
        };
      case "line":
        const e = o;
        return {
          ...t,
          type: "line",
          points: [e.x1 || 0, e.y1 || 0, e.x2 || 0, e.y2 || 0],
          stroke: e.stroke,
          strokeWidth: e.strokeWidth
        };
      case "arrow":
        return {
          ...t,
          type: "arrow",
          points: [0, 0, 100, 0],
          // Would need to extract from group
          stroke: "var(--avgrd-color-text-primary)",
          strokeWidth: 2
        };
      default:
        return null;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.fabricCanvas && (this.fabricCanvas.dispose(), this.fabricCanvas = null);
  }
  renderToolbar() {
    return this.showToolbar ? E`
      <div class="toolbar">
        <button
          class=${this.drawingMode === "select" ? "active" : ""}
          @click=${() => this.setDrawingMode("select")}
        >
          Select
        </button>
        <button
          class=${this.drawingMode === "rect" ? "active" : ""}
          @click=${() => this.setDrawingMode("rect")}
        >
          Rectangle
        </button>
        <button
          class=${this.drawingMode === "circle" ? "active" : ""}
          @click=${() => this.setDrawingMode("circle")}
        >
          Circle
        </button>
        <button
          class=${this.drawingMode === "text" ? "active" : ""}
          @click=${() => this.setDrawingMode("text")}
        >
          Text
        </button>
        <button
          class=${this.drawingMode === "arrow" ? "active" : ""}
          @click=${() => this.setDrawingMode("arrow")}
        >
          Arrow
        </button>
        <button
          class=${this.drawingMode === "line" ? "active" : ""}
          @click=${() => this.setDrawingMode("line")}
        >
          Line
        </button>
        <button @click=${() => this.removeSelected()}>Delete</button>
      </div>
    ` : "";
  }
  render() {
    return E`
      <div class="canvas-container" part="container">
        ${this.renderToolbar()}
        <canvas class="canvas-element"></canvas>
      </div>
    `;
  }
};
Pt.styles = [
  P.styles,
  R`
      :host {
        display: block;
      }

      .canvas-container {
        position: relative;
        border: 1px solid var(--avgrd-color-border);
        border-radius: var(--avgrd-radius-sm);
        overflow: hidden;
        background-color: var(--avgrd-color-surface);
      }

      .canvas-container canvas {
        display: block;
      }

      .toolbar {
        display: flex;
        gap: var(--avgrd-spacing-xs);
        padding: var(--avgrd-spacing-sm);
        background-color: var(--avgrd-color-background);
        border-bottom: 1px solid var(--avgrd-color-border);
      }

      .toolbar button {
        padding: var(--avgrd-spacing-xs) var(--avgrd-spacing-sm);
        font-size: var(--avgrd-font-size-sm);
        font-family: var(--avgrd-font-family);
        background: var(--avgrd-color-surface);
        border: 1px solid var(--avgrd-color-border);
        border-radius: var(--avgrd-radius-sm);
        cursor: pointer;
      }

      .toolbar button:hover {
        background: #e5e5e5;
      }

      .toolbar button.active {
        background: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
        border-color: var(--avgrd-color-primary);
      }
    `
];
te([
  w({ type: Number })
], Pt.prototype, "width", 2);
te([
  w({ type: Number })
], Pt.prototype, "height", 2);
te([
  w({ type: String, attribute: "background-color" })
], Pt.prototype, "backgroundColor", 2);
te([
  w({ type: Boolean, attribute: "show-toolbar" })
], Pt.prototype, "showToolbar", 2);
te([
  w({ type: Boolean, attribute: "snap-to-grid" })
], Pt.prototype, "snapToGrid", 2);
te([
  w({ type: Number, attribute: "grid-size" })
], Pt.prototype, "gridSize", 2);
te([
  _s()
], Pt.prototype, "drawingMode", 2);
te([
  Bo(".canvas-element")
], Pt.prototype, "canvasElement", 2);
Pt = te([
  H("avgrd-canvas")
], Pt);
var Dh = Object.defineProperty, Ph = Object.getOwnPropertyDescriptor, zs = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Ph(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Dh(t, e, s), s;
};
let Ye = class extends P {
  constructor() {
    super(...arguments), this.variant = "default", this.size = "md", this.resizable = !1;
  }
  render() {
    const o = ["statusbar", this.resizable ? "statusbar--resizable" : ""].filter(Boolean).join(" ");
    return E`
      <div class=${o} part="container">
        <div class="statusbar__left" part="left">
          <slot></slot>
        </div>
        <div class="statusbar__right" part="right">
          <slot name="right"></slot>
        </div>
      </div>
    `;
  }
};
Ye.styles = [
  P.styles,
  R`
      :host {
        display: block;
        width: 100%;
      }

      .statusbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 22px;
        padding: 0 var(--avgrd-spacing-sm);
        background: var(--avgrd-color-surface);
        border-top: 1px solid var(--avgrd-color-border);
        font-family: var(--avgrd-font-family);
        font-size: var(--avgrd-font-size-xs);
        color: var(--avgrd-color-text-primary);
        user-select: none;
      }

      /* Variants */
      :host([variant='primary']) .statusbar {
        background: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
        border-top-color: var(--avgrd-color-primary-active);
      }

      :host([variant='success']) .statusbar {
        background: var(--avgrd-color-success);
        color: var(--avgrd-color-background);
        border-top-color: color-mix(in srgb, var(--avgrd-color-success) 80%, black);
      }

      :host([variant='warning']) .statusbar {
        background: var(--avgrd-color-warning);
        color: var(--avgrd-color-text-primary);
        border-top-color: color-mix(in srgb, var(--avgrd-color-warning) 80%, black);
      }

      :host([variant='error']) .statusbar {
        background: var(--avgrd-color-error);
        color: var(--avgrd-color-background);
        border-top-color: color-mix(in srgb, var(--avgrd-color-error) 80%, black);
      }

      .statusbar__left,
      .statusbar__right {
        display: flex;
        align-items: center;
        gap: var(--avgrd-spacing-md);
      }

      .statusbar__left {
        flex: 1;
        min-width: 0;
      }

      .statusbar__right {
        flex-shrink: 0;
      }

      /* Size variants */
      :host([size='sm']) .statusbar {
        min-height: 20px;
        font-size: 11px;
      }

      :host([size='lg']) .statusbar {
        min-height: 26px;
        font-size: var(--avgrd-font-size-sm);
      }

      /* Resize grip */
      .statusbar--resizable::after {
        content: '';
        width: 12px;
        height: 12px;
        margin-left: var(--avgrd-spacing-sm);
        background-image: linear-gradient(
          135deg,
          transparent 50%,
          var(--avgrd-color-border) 50%,
          var(--avgrd-color-border) 60%,
          transparent 60%,
          transparent 70%,
          var(--avgrd-color-border) 70%,
          var(--avgrd-color-border) 80%,
          transparent 80%
        );
        background-size: 4px 4px;
        opacity: 0.6;
        cursor: se-resize;
      }
    `
];
zs([
  w({ type: String, reflect: !0 })
], Ye.prototype, "variant", 2);
zs([
  w({ type: String, reflect: !0 })
], Ye.prototype, "size", 2);
zs([
  w({ type: Boolean, reflect: !0 })
], Ye.prototype, "resizable", 2);
Ye = zs([
  H("avgrd-statusbar")
], Ye);
var Eh = Object.defineProperty, Mh = Object.getOwnPropertyDescriptor, tr = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Mh(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Eh(t, e, s), s;
};
let de = class extends P {
  constructor() {
    super(...arguments), this.text = "", this.clickable = !1, this.separator = !1, this.status = "none", this.maxWidth = "";
  }
  handleClick(o) {
    this.clickable && this.emit("avgrd-click", { originalEvent: o });
  }
  render() {
    const o = [
      "item",
      this.clickable ? "item--clickable" : "",
      this.status !== "none" ? `item--${this.status}` : ""
    ].filter(Boolean).join(" "), t = this.maxWidth ? `max-width: ${this.maxWidth}` : "";
    return E`
      <div
        class=${o}
        part="container"
        style=${t}
        @click=${this.handleClick}
      >
        <span class="item__icon" part="icon">
          <slot name="icon"></slot>
        </span>
        <span class="item__text" part="text">
          ${this.text || E`<slot></slot>`}
        </span>
      </div>
    `;
  }
};
de.styles = [
  P.styles,
  R`
      :host {
        display: inline-flex;
        align-items: center;
      }

      .item {
        display: inline-flex;
        align-items: center;
        gap: var(--avgrd-spacing-xs);
        padding: var(--avgrd-spacing-xs) var(--avgrd-spacing-sm);
        font-family: var(--avgrd-font-family);
        font-size: inherit;
        color: inherit;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: var(--avgrd-border-radius-sm);
        transition: background var(--avgrd-transition-fast);
      }

      .item--clickable {
        cursor: pointer;
      }

      .item--clickable:hover {
        background: rgba(0, 0, 0, 0.1);
      }

      :host-context(avgrd-statusbar[variant='primary']) .item--clickable:hover,
      :host-context(avgrd-statusbar[variant='dark']) .item--clickable:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .item__icon {
        display: flex;
        align-items: center;
        font-size: 1em;
      }

      .item__text {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Separator style */
      :host([separator])::after {
        content: '';
        width: 1px;
        height: 14px;
        margin-left: var(--avgrd-spacing-sm);
        background: currentColor;
        opacity: 0.3;
      }

      /* Icon indicators */
      .item--success .item__icon {
        color: var(--avgrd-color-success);
      }

      .item--warning .item__icon {
        color: var(--avgrd-color-warning);
      }

      .item--error .item__icon {
        color: var(--avgrd-color-error);
      }

      .item--info .item__icon {
        color: var(--avgrd-color-info);
      }
    `
];
tr([
  w({ type: String })
], de.prototype, "text", 2);
tr([
  w({ type: Boolean, reflect: !0 })
], de.prototype, "clickable", 2);
tr([
  w({ type: Boolean, reflect: !0 })
], de.prototype, "separator", 2);
tr([
  w({ type: String, reflect: !0 })
], de.prototype, "status", 2);
tr([
  w({ type: String })
], de.prototype, "maxWidth", 2);
de = tr([
  H("avgrd-statusbar-item")
], de);
var Ah = Object.defineProperty, jh = Object.getOwnPropertyDescriptor, kr = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? jh(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Ah(t, e, s), s;
};
let Te = class extends P {
  constructor() {
    super(...arguments), this.variant = "default", this.position = "top", this.showAddButton = !1, this.activeIndex = 0, this.tabs = [];
  }
  firstUpdated(o) {
    super.firstUpdated(o), this.updateTabs();
  }
  handleSlotChange() {
    this.updateTabs(), this.requestUpdate();
  }
  updateTabs() {
    var e;
    const o = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    if (!o) return;
    this.tabs = o.assignedElements().filter((r) => r.tagName === "AVGRD-TAB");
    const t = this.tabs.find((r) => r.hasAttribute("active"));
    t ? this.activeIndex = this.tabs.indexOf(t) : this.tabs.length > 0 && this.activateTab(0);
  }
  activateTab(o) {
    if (o < 0 || o >= this.tabs.length) return;
    this.tabs.forEach((r, s) => {
      s === o ? r.setAttribute("active", "") : r.removeAttribute("active");
    }), this.activeIndex = o;
    const e = this.tabs[o].getAttribute("tab-id") || `tab-${o}`;
    this.emit("avgrd-tab-change", { tabId: e, index: o });
  }
  handleTabClick(o) {
    const e = o.target.closest("avgrd-tab");
    if (!e) return;
    const r = this.tabs.indexOf(e);
    r !== -1 && this.activateTab(r);
  }
  handleTabClose(o) {
    const { tabId: t, index: e } = o.detail;
    if (this.emit("avgrd-tab-close", { tabId: t, index: e }), e === this.activeIndex) {
      const r = Math.min(e, this.tabs.length - 2);
      r >= 0 && setTimeout(() => this.activateTab(r), 0);
    }
  }
  handleAddClick() {
    this.emit("avgrd-tab-add");
  }
  renderTabHeaders() {
    return this.tabs.map((o, t) => {
      const e = o, r = t === this.activeIndex;
      return E`
        <button
          class="tab-header ${r ? "tab-header--active" : ""}"
          data-index=${t}
          @click=${() => this.activateTab(t)}
        >
          <span class="tab-header__label">${e.label || `Tab ${t + 1}`}</span>
          ${e.modified ? E`<span class="tab-header__modified"></span>` : ""}
          ${e.closeable ? E`
            <button
              class="tab-header__close"
              @click=${(s) => {
        s.stopPropagation(), this.emit("avgrd-tab-close", { tabId: e.tabId || `tab-${t}`, index: t });
      }}
            >×</button>
          ` : ""}
        </button>
      `;
    });
  }
  render() {
    return E`
      <div class="tabcontrol">
        <div class="tabbar" part="tabbar">
          <div class="tabs" part="tabs">
            ${this.renderTabHeaders()}
          </div>
          <button
            class="add-button"
            part="add-button"
            title="New Tab"
            @click=${this.handleAddClick}
          >
            +
          </button>
        </div>
        <div class="panels" part="panels">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `;
  }
};
Te.styles = [
  P.styles,
  R`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
      }

      .tabcontrol {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
      }

      /* Tab bar */
      .tabbar {
        display: flex;
        align-items: flex-end;
        background: var(--avgrd-tabcontrol-bar-bg, var(--avgrd-color-surface));
        border-bottom: 1px solid var(--avgrd-color-border);
        min-height: 35px;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-width: thin;
      }

      .tabbar::-webkit-scrollbar {
        height: 4px;
      }

      .tabbar::-webkit-scrollbar-thumb {
        background: var(--avgrd-color-border);
        border-radius: 2px;
      }

      .tabs {
        display: flex;
        align-items: flex-end;
        gap: 1px;
        padding: 0 var(--avgrd-spacing-xs);
        flex: 1;
        min-width: 0;
      }

      /* Tab header buttons rendered by tabcontrol */
      .tab-header {
        display: flex;
        align-items: center;
        gap: var(--avgrd-spacing-sm);
        padding: var(--avgrd-spacing-sm) var(--avgrd-spacing-md);
        background: transparent;
        color: var(--avgrd-color-text-secondary);
        font-family: var(--avgrd-font-family);
        font-size: var(--avgrd-font-size-sm);
        border: none;
        border-top: 2px solid transparent;
        cursor: pointer;
        transition: background var(--avgrd-transition-fast), color var(--avgrd-transition-fast);
        max-width: 200px;
        min-width: 80px;
        margin-top: 3px;
        user-select: none;
      }

      .tab-header:hover {
        background: var(--avgrd-color-background);
        color: var(--avgrd-color-text-primary);
      }

      .tab-header--active {
        background: var(--avgrd-color-background);
        color: var(--avgrd-color-text-primary);
        border-top-color: var(--avgrd-color-primary);
      }

      .tab-header__label {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
      }

      .tab-header__modified {
        width: 8px;
        height: 8px;
        background: var(--avgrd-color-info);
        border-radius: 50%;
        flex-shrink: 0;
      }

      .tab-header__close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        background: transparent;
        border: none;
        color: inherit;
        cursor: pointer;
        border-radius: 2px;
        font-size: 14px;
        line-height: 1;
        opacity: 0;
        transition: opacity var(--avgrd-transition-fast), background var(--avgrd-transition-fast);
        flex-shrink: 0;
        padding: 0;
      }

      .tab-header:hover .tab-header__close,
      .tab-header--active .tab-header__close {
        opacity: 1;
      }

      .tab-header__close:hover {
        background: rgba(0, 0, 0, 0.1);
      }

      .add-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        margin: 3px var(--avgrd-spacing-xs);
        background: transparent;
        border: none;
        color: var(--avgrd-color-text-secondary);
        cursor: pointer;
        border-radius: var(--avgrd-border-radius-sm);
        font-size: 18px;
        flex-shrink: 0;
        transition: background var(--avgrd-transition-fast), color var(--avgrd-transition-fast);
      }

      .add-button:hover {
        background: var(--avgrd-color-background);
        color: var(--avgrd-color-text-primary);
      }

      /* Panels container */
      .panels {
        flex: 1;
        overflow: hidden;
        background: var(--avgrd-tabcontrol-panel-bg, var(--avgrd-color-background));
        position: relative;
      }

      /* Dark/Sublime variant */
      :host([variant='dark']) .tabbar {
        --avgrd-tabcontrol-bar-bg: #3c3f41;
        background: var(--avgrd-tabcontrol-bar-bg);
        border-bottom-color: #323232;
      }

      :host([variant='dark']) .add-button {
        color: #a9b7c6;
      }

      :host([variant='dark']) .add-button:hover {
        background: #4e5254;
        color: #ffffff;
      }

      :host([variant='dark']) .panels {
        --avgrd-tabcontrol-panel-bg: #2b2b2b;
        background: var(--avgrd-tabcontrol-panel-bg);
      }

      /* Position bottom */
      :host([position='bottom']) .tabcontrol {
        flex-direction: column-reverse;
      }

      :host([position='bottom']) .tabbar {
        border-bottom: none;
        border-top: 1px solid var(--avgrd-color-border);
        align-items: flex-start;
      }

      :host([position='bottom'][variant='dark']) .tabbar {
        border-top-color: #323232;
      }

      /* Hide add button */
      :host(:not([show-add-button])) .add-button {
        display: none;
      }
    `
];
kr([
  w({ type: String, reflect: !0 })
], Te.prototype, "variant", 2);
kr([
  w({ type: String, reflect: !0 })
], Te.prototype, "position", 2);
kr([
  w({ type: Boolean, reflect: !0, attribute: "show-add-button" })
], Te.prototype, "showAddButton", 2);
kr([
  _s()
], Te.prototype, "activeIndex", 2);
Te = kr([
  H("avgrd-tabcontrol")
], Te);
var Fh = Object.defineProperty, Lh = Object.getOwnPropertyDescriptor, er = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Lh(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Fh(t, e, s), s;
};
let ue = class extends P {
  constructor() {
    super(...arguments), this.label = "", this.tabId = "", this.active = !1, this.closeable = !1, this.modified = !1;
  }
  render() {
    return E`
      <div class="tab-panel" part="panel">
        <slot></slot>
      </div>
    `;
  }
};
ue.styles = [
  P.styles,
  R`
      :host {
        display: none;
        height: 100%;
      }

      :host([active]) {
        display: block;
      }

      .tab-panel {
        height: 100%;
        overflow: auto;
      }
    `
];
er([
  w({ type: String })
], ue.prototype, "label", 2);
er([
  w({ type: String, attribute: "tab-id" })
], ue.prototype, "tabId", 2);
er([
  w({ type: Boolean, reflect: !0 })
], ue.prototype, "active", 2);
er([
  w({ type: Boolean, reflect: !0 })
], ue.prototype, "closeable", 2);
er([
  w({ type: Boolean, reflect: !0 })
], ue.prototype, "modified", 2);
ue = er([
  H("avgrd-tab")
], ue);
var Bh = Object.defineProperty, Ih = Object.getOwnPropertyDescriptor, Vn = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? Ih(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Bh(t, e, s), s;
};
let xs = class extends P {
  constructor() {
    super(...arguments), this.padding = "none";
  }
  render() {
    return E`
      <div class="panel" part="panel">
        <slot></slot>
      </div>
    `;
  }
};
xs.styles = [
  P.styles,
  R`
      :host {
        display: block;
        height: 100%;
        overflow: auto;
      }

      .panel {
        height: 100%;
        box-sizing: border-box;
      }

      /* Padding variants */
      :host([padding='none']) .panel {
        padding: 0;
      }

      :host([padding='xs']) .panel {
        padding: var(--avgrd-spacing-xs);
      }

      :host([padding='sm']) .panel {
        padding: var(--avgrd-spacing-sm);
      }

      :host([padding='md']) .panel {
        padding: var(--avgrd-spacing-md);
      }

      :host([padding='lg']) .panel {
        padding: var(--avgrd-spacing-lg);
      }

      :host([padding='xl']) .panel {
        padding: var(--avgrd-spacing-xl);
      }

      /* Inherit colors from parent */
      :host-context(avgrd-tabcontrol[variant='dark']) .panel {
        color: #a9b7c6;
      }
    `
];
Vn([
  w({ type: String, reflect: !0 })
], xs.prototype, "padding", 2);
xs = Vn([
  H("avgrd-tabpanel")
], xs);
var Rh = Object.defineProperty, zh = Object.getOwnPropertyDescriptor, pe = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? zh(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Rh(t, e, s), s;
};
let Bt = class extends P {
  constructor() {
    super(...arguments), this.value = "", this.max = 99, this.variant = "default", this.size = "md", this.dot = !1, this.outlined = !1, this.square = !1;
  }
  getDisplayValue() {
    if (this.dot) return "";
    const o = Number(this.value);
    return !isNaN(o) && o > this.max ? `${this.max}+` : this.value;
  }
  render() {
    const o = [
      "badge",
      `badge--variant-${this.variant}`,
      `badge--size-${this.size}`,
      this.dot ? "badge--dot" : "",
      this.outlined ? "badge--outlined" : "",
      this.square ? "badge--square" : "badge--pill"
    ].filter(Boolean).join(" ");
    return E`
      <span class=${o} part="badge">
        ${this.dot ? "" : E`<slot>${this.getDisplayValue()}</slot>`}
      </span>
    `;
  }
};
Bt.styles = [
  P.styles,
  R`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: var(--avgrd-font-family);
        font-size: var(--avgrd-font-size-xs);
        font-weight: var(--avgrd-font-weight-semibold);
        line-height: 1;
        white-space: nowrap;
        transition: all var(--avgrd-transition-fast);
      }

      /* Sizes */
      .badge--size-sm {
        min-width: 16px;
        height: 16px;
        padding: 0 var(--avgrd-spacing-xs);
        font-size: 10px;
      }

      .badge--size-md {
        min-width: 20px;
        height: 20px;
        padding: 0 6px;
        font-size: var(--avgrd-font-size-xs);
      }

      .badge--size-lg {
        min-width: 24px;
        height: 24px;
        padding: 0 var(--avgrd-spacing-sm);
        font-size: var(--avgrd-font-size-sm);
      }

      /* Dot variant - no content, just a dot */
      .badge--dot {
        min-width: 8px;
        width: 8px;
        height: 8px;
        padding: 0;
      }

      .badge--dot.badge--size-sm {
        min-width: 6px;
        width: 6px;
        height: 6px;
      }

      .badge--dot.badge--size-lg {
        min-width: 10px;
        width: 10px;
        height: 10px;
      }

      /* Variants */
      .badge--variant-default {
        background-color: var(--avgrd-color-text-secondary);
        color: var(--avgrd-color-background);
      }

      .badge--variant-primary {
        background-color: var(--avgrd-color-primary);
        color: var(--avgrd-color-text-on-primary);
      }

      .badge--variant-success {
        background-color: var(--avgrd-color-success);
        color: var(--avgrd-color-background);
      }

      .badge--variant-warning {
        background-color: var(--avgrd-color-warning);
        color: var(--avgrd-color-text-primary);
      }

      .badge--variant-error {
        background-color: var(--avgrd-color-error);
        color: var(--avgrd-color-background);
      }

      .badge--variant-info {
        background-color: var(--avgrd-color-info);
        color: var(--avgrd-color-background);
      }

      /* Outlined variants */
      .badge--outlined {
        background-color: transparent;
        border: 1px solid currentColor;
      }

      .badge--outlined.badge--variant-default {
        color: var(--avgrd-color-text-secondary);
      }

      .badge--outlined.badge--variant-primary {
        color: var(--avgrd-color-primary);
      }

      .badge--outlined.badge--variant-success {
        color: var(--avgrd-color-success);
      }

      .badge--outlined.badge--variant-warning {
        color: var(--avgrd-color-warning);
      }

      .badge--outlined.badge--variant-error {
        color: var(--avgrd-color-error);
      }

      .badge--outlined.badge--variant-info {
        color: var(--avgrd-color-info);
      }

      /* Pill shape for text content */
      .badge--pill {
        border-radius: var(--avgrd-radius-full);
      }

      /* Square shape option */
      .badge--square {
        border-radius: var(--avgrd-radius-sm);
      }
    `
];
pe([
  w({ type: String })
], Bt.prototype, "value", 2);
pe([
  w({ type: Number })
], Bt.prototype, "max", 2);
pe([
  w({ type: String, reflect: !0 })
], Bt.prototype, "variant", 2);
pe([
  w({ type: String, reflect: !0 })
], Bt.prototype, "size", 2);
pe([
  w({ type: Boolean, reflect: !0 })
], Bt.prototype, "dot", 2);
pe([
  w({ type: Boolean, reflect: !0 })
], Bt.prototype, "outlined", 2);
pe([
  w({ type: Boolean, reflect: !0 })
], Bt.prototype, "square", 2);
Bt = pe([
  H("avgrd-badge")
], Bt);
var Wh = Object.defineProperty, $h = Object.getOwnPropertyDescriptor, fe = (o, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? $h(t, e) : t, i = o.length - 1, n; i >= 0; i--)
    (n = o[i]) && (s = (r ? n(t, e, s) : n(s)) || s);
  return r && s && Wh(t, e, s), s;
};
let It = class extends P {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.size = "md", this.labelOn = "", this.labelOff = "", this.labelPosition = "right", this.value = "";
  }
  handleClick(o) {
    o.preventDefault(), !this.disabled && (this.checked = !this.checked, this.emit("avgrd-change", { checked: this.checked, value: this.value }));
  }
  handleKeydown(o) {
    if (o.key === " " || o.key === "Enter") {
      if (o.preventDefault(), this.disabled) return;
      this.checked = !this.checked, this.emit("avgrd-change", { checked: this.checked, value: this.value });
    }
  }
  render() {
    const o = [
      "toggle",
      this.checked ? "toggle--checked" : "",
      this.disabled ? "toggle--disabled" : "",
      `toggle--size-${this.size}`,
      this.labelPosition === "left" ? "toggle--label-left" : ""
    ].filter(Boolean).join(" "), t = this.labelOn || this.labelOff;
    return E`
      <div class=${o} part="toggle" @click=${this.handleClick} @keydown=${this.handleKeydown} tabindex="0" role="switch" aria-checked=${this.checked}>
        <span class="toggle__control">
          <span class="toggle__track" part="track">
            <span class="toggle__thumb" part="thumb"></span>
          </span>
        </span>
        ${t ? E`
          <span class="toggle__state-label toggle__state-label--off">${this.labelOff}</span>
          <span class="toggle__state-label toggle__state-label--on">${this.labelOn}</span>
        ` : ""}
        <span class="toggle__label" part="label">
          <slot></slot>
        </span>
      </div>
    `;
  }
};
It.styles = [
  P.styles,
  R`
      :host {
        display: inline-block;
      }

      .toggle {
        display: inline-flex;
        align-items: center;
        gap: var(--avgrd-spacing-sm);
        cursor: pointer;
        user-select: none;
        font-family: var(--avgrd-font-family);
        font-size: var(--avgrd-font-size-md);
        color: var(--avgrd-color-text-primary);
      }

      .toggle--disabled {
        cursor: not-allowed;
        color: var(--avgrd-color-text-disabled);
      }

      .toggle__control {
        position: relative;
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
      }

      /* Track */
      .toggle__track {
        position: relative;
        width: 36px;
        height: 20px;
        background-color: var(--avgrd-color-border);
        border-radius: var(--avgrd-radius-full);
        transition: all var(--avgrd-transition-fast);
      }

      /* Size variants */
      .toggle--size-sm .toggle__track {
        width: 28px;
        height: 16px;
      }

      .toggle--size-lg .toggle__track {
        width: 44px;
        height: 24px;
      }

      .toggle:hover:not(.toggle--disabled) .toggle__track {
        background-color: var(--avgrd-color-text-secondary);
      }

      .toggle--checked .toggle__track {
        background-color: var(--avgrd-color-primary);
      }

      .toggle--checked:hover:not(.toggle--disabled) .toggle__track {
        background-color: var(--avgrd-color-primary-hover);
      }

      .toggle--disabled .toggle__track {
        background-color: var(--avgrd-color-disabled);
      }

      .toggle--checked.toggle--disabled .toggle__track {
        background-color: var(--avgrd-color-text-disabled);
      }

      /* Thumb */
      .toggle__thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background-color: var(--avgrd-color-background);
        border-radius: var(--avgrd-radius-full);
        box-shadow: var(--avgrd-shadow-sm);
        transition: all var(--avgrd-transition-fast);
      }

      .toggle--size-sm .toggle__thumb {
        width: 12px;
        height: 12px;
      }

      .toggle--size-lg .toggle__thumb {
        width: 20px;
        height: 20px;
      }

      .toggle--checked .toggle__thumb {
        left: calc(100% - 18px);
      }

      .toggle--size-sm.toggle--checked .toggle__thumb {
        left: calc(100% - 14px);
      }

      .toggle--size-lg.toggle--checked .toggle__thumb {
        left: calc(100% - 22px);
      }

      .toggle--disabled .toggle__thumb {
        background-color: var(--avgrd-color-disabled-border);
      }

      /* Focus ring */
      .toggle:focus-visible .toggle__track {
        outline: 2px solid var(--avgrd-color-border-focus);
        outline-offset: 2px;
      }

      .toggle:focus {
        outline: none;
      }

      /* Label */
      .toggle__label {
        line-height: 1.4;
      }

      /* State labels */
      .toggle__state-label {
        font-size: var(--avgrd-font-size-sm);
        color: var(--avgrd-color-text-secondary);
        min-width: 24px;
      }

      .toggle--size-sm .toggle__state-label {
        font-size: var(--avgrd-font-size-xs);
      }

      .toggle--checked .toggle__state-label--on,
      .toggle:not(.toggle--checked) .toggle__state-label--off {
        color: var(--avgrd-color-text-primary);
        font-weight: var(--avgrd-font-weight-semibold);
      }

      .toggle--disabled .toggle__state-label {
        color: var(--avgrd-color-text-disabled);
      }

      /* Label position */
      .toggle--label-left {
        flex-direction: row-reverse;
      }
    `
];
fe([
  w({ type: Boolean, reflect: !0 })
], It.prototype, "checked", 2);
fe([
  w({ type: Boolean, reflect: !0 })
], It.prototype, "disabled", 2);
fe([
  w({ type: String, reflect: !0 })
], It.prototype, "size", 2);
fe([
  w({ type: String, attribute: "label-on" })
], It.prototype, "labelOn", 2);
fe([
  w({ type: String, attribute: "label-off" })
], It.prototype, "labelOff", 2);
fe([
  w({ type: String, attribute: "label-position" })
], It.prototype, "labelPosition", 2);
fe([
  w({ type: String })
], It.prototype, "value", 2);
It = fe([
  H("avgrd-toggle")
], It);
function td(o) {
  switch (o) {
    case "top":
      return { position: "absolute", top: "0", left: "0", right: "0" };
    case "bottom":
      return { position: "absolute", bottom: "0", left: "0", right: "0" };
    case "left":
      return { position: "absolute", top: "0", bottom: "0", left: "0" };
    case "right":
      return { position: "absolute", top: "0", bottom: "0", right: "0" };
    case "fill":
      return { position: "absolute", top: "0", bottom: "0", left: "0", right: "0" };
    default:
      return {};
  }
}
function ed(o, t = "0") {
  const e = { position: "absolute" };
  return o.top && (e.top = t), o.bottom && (e.bottom = t), o.left && (e.left = t), o.right && (e.right = t), e;
}
export {
  Bt as AvgrdBadge,
  Ie as AvgrdButton,
  Pt as AvgrdCanvas,
  we as AvgrdCheckbox,
  $e as AvgrdContextMenu,
  P as AvgrdElement,
  le as AvgrdGroupbox,
  Dt as AvgrdLabel,
  ri as AvgrdMenuDivider,
  Ve as AvgrdMenuItem,
  as as AvgrdNavbar,
  ze as AvgrdNavbarItem,
  We as AvgrdNavbarProfile,
  ae as AvgrdPanel,
  Ce as AvgrdRadio,
  Re as AvgrdRadioGroup,
  Ye as AvgrdStatusbar,
  de as AvgrdStatusbarItem,
  ue as AvgrdTab,
  Te as AvgrdTabcontrol,
  xs as AvgrdTabpanel,
  ft as AvgrdTextbox,
  pr as AvgrdThemeProvider,
  It as AvgrdToggle,
  ed as anchorToCSS,
  Kh as applyTheme,
  Un as baseStyles,
  Hh as borderRadius,
  rt as colors,
  Fo as darkModeCSS,
  td as dockToCSS,
  Ao as focusStyles,
  jo as generateThemeCSS,
  Gn as globalTokensCSS,
  Nh as initAvgrdTokens,
  Nn as interactiveStyles,
  qh as setGlobalTokens,
  Gh as shadows,
  Xh as spacing,
  Jh as themeStyles,
  os as themes,
  Hn as tokenStyles,
  Uh as transitions,
  Yh as typography
};
