import{r,u as d,a as p,j as s,B as h}from"./index-9bd74233.js";import{P as f}from"./PageNav-df32ba7b.js";import"./Logo-815a4d36.js";const g="_login_c4qch_1",x="_form_c4qch_15",j="_row_c4qch_43",a={login:g,form:x,row:j};function y(){const[t,l]=r.useState("khosravi.webmaster@gmail.com"),[o,c]=r.useState("qwerty"),{login:m,isAuthenticated:i}=d(),n=p();function u(e){e.preventDefault(),t&&o&&m(t,o)}return r.useEffect(function(){i&&n("/app",{replace:!0})},[i,n]),s.jsxs("main",{className:a.login,children:[s.jsx(f,{}),s.jsxs("form",{className:a.form,onSubmit:u,children:[s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"email",children:"Email address"}),s.jsx("input",{type:"email",id:"email",onChange:e=>l(e.target.value),value:t})]}),s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",onChange:e=>c(e.target.value),value:o})]}),s.jsx("div",{children:s.jsx(h,{type:"primary",children:"Login"})})]})]})}export{y as default};
