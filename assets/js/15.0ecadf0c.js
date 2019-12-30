(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{231:function(a,t,e){"use strict";e.r(t);var n=e(0),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"react基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react基础"}},[a._v("#")]),a._v(" React基础")]),a._v(" "),e("p",[a._v("React只是简单地渲染组件，单独从两个地方获取数据：props 和 state。")]),a._v(" "),e("h2",{attrs:{id:"创建组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建组件"}},[a._v("#")]),a._v(" 创建组件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("import React, { Component } from 'react';\n\nclass Main extends Component {\n  render () {\n    return (\n      <div className=\"main\">\n        Main\n      </div>\n    );\n  }\n}\n\nexport default Main;\n\n")])])]),e("h2",{attrs:{id:"路由配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由配置"}},[a._v("#")]),a._v(" 路由配置")]),a._v(" "),e("p",[e("code",[a._v("Link")]),a._v("只配置路由，"),e("code",[a._v("NavLink")]),a._v("可做导航路由，可配置"),e("code",[a._v("activeClassName")]),a._v("和"),e("code",[a._v("activeStyle")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('import { NavLink, Link } from \'react-router-dom\';\n\nclass Nav extends Component {\n  render () {\n    return (\n      <ul className="nav">\n        <li className="list"><NavLink to="/archive" activeClassName=\'active\'>归档</NavLink></li>\n        <li className="list"><NavLink to="/about" activeClassName=\'active\'>关于</NavLink></li>\n      </ul>\n    );\n  };\n}\n\nexport default Nav;\n\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);