'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var UnreachableError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(UnreachableError, _Error);

  function UnreachableError(_nvr, message) {
    return _Error.call(this, message) || this;
  }

  return UnreachableError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var _templateObject, _templateObject2;
function getSize(size) {
  switch (size) {
    case 'large':
      return '14px 18px';

    case 'medium':
      return '12px 16px';

    case 'small':
      return '8px 12px';

    default:
      throw new UnreachableError(size, 'Got an unexpected size for the Button Component');
  }
}
function getColors(theme, color) {
  return {
    "default": theme.color[color].neutral,
    hover: theme.color[color].hover,
    focus: theme.color[color].active,
    disabled: theme.color[color].disabled
  };
}
function getVariant(variant, colorState) {
  switch (variant) {
    case 'filled':
      return styled.css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        color: #ffffff;\n\n        background-color: ", ";\n\n        &:hover {\n          background-color: ", ";\n        }\n\n        &:focus {\n          background-color: ", ";\n        }\n\n        &:disabled {\n          background-color: ", ";\n        }\n      "])), colorState["default"], colorState.hover, colorState.focus, colorState.disabled);

    case 'ghost':
      return styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n        color: ", ";\n\n        background-color: #ffffff;\n\n        border: 2px solid ", ";\n\n        &:hover {\n          color: ", ";\n          border: 2px solid ", ";\n        }\n\n        &:focus {\n          color: ", ";\n          border: 2px solid ", ";\n        }\n\n        &:disabled {\n          color: ", ";\n          border: 2px solid ", ";\n        }\n      "])), colorState["default"], colorState["default"], colorState.hover, colorState.hover, colorState.focus, colorState.focus, colorState.disabled, colorState.disabled);

    default:
      throw new UnreachableError(variant, 'Got an unexpected variant for the Button Component');
  }
}

var _templateObject$1;
var StyledButton = /*#__PURE__*/styled__default.button(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  border-style: none;\n  padding: ", ";\n  border-radius: 8px;\n  gap: 8px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 28px;\n  cursor: pointer;\n\n  ", "\n"])), function (_ref) {
  var size = _ref.size;
  return getSize(size);
}, function (_ref2) {
  var variant = _ref2.variant,
      color = _ref2.color,
      theme = _ref2.theme;
  return getVariant(variant, getColors(theme, color));
});

function Button(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      onClick = _ref.onClick,
      text = _ref.text;
  return React.createElement(StyledButton, {
    onClick: onClick,
    disabled: disabled,
    color: color,
    size: size,
    variant: variant
  }, text);
}

exports.Button = Button;
//# sourceMappingURL=storybook-test.cjs.development.js.map
