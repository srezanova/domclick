(this.webpackJsonpdomclick=this.webpackJsonpdomclick||[]).push([[0],{85:function(e,t,n){"use strict";n.r(t);n(66);var a=n(43),r=n(17),c=n(8),i=n(4),s=n(95),l=n(21),o=n(62),d=n(96),j=n(98),u=n(58),b=Object(o.a)({uri:"http://localhost:8000/graphql/"}),h=Object(u.a)((function(e,t){var n=t.headers,a=localStorage.getItem("auth");return{headers:Object(l.a)(Object(l.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),O=new d.a({link:h.concat(b),cache:new j.a}),m=n(2);function x(e){var t=e.children;return Object(m.jsx)(s.a,{client:O,children:Object(m.jsxs)(i.MantineProvider,{children:[Object(m.jsx)(i.GlobalStyles,{}),Object(m.jsx)(i.NormalizeCSS,{}),t]})})}var g,p=n(14),v=n(13),f=n(0),y=n(97),k=n(101),S=n(26),T=n(20),w=Object(T.createUseStyles)((function(e){return{wrapper:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.colors.gray[0]},title:{marginBottom:1.5*e.spacing.xl},field:{marginBottom:e.spacing.md},inner:{width:400},controls:{marginTop:e.spacing.lg}}}),{theming:i.theming});function C(e){var t=e.onSubmit,n=e.loading,a=e.error,r=w(),c=Object(S.useForm)({initialValues:{email:"",password:""},validationRules:{email:function(e){return e.includes("@")},password:function(e){return e.trim().length>0}}});return Object(m.jsx)("div",{className:r.wrapper,children:Object(m.jsxs)(i.Paper,{className:r.inner,shadow:"sm",padding:"xl",children:[Object(m.jsx)(i.LoadingOverlay,{visible:n}),Object(m.jsx)(i.Title,{align:"center",className:r.title,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(m.jsxs)("form",{onSubmit:c.onSubmit((function(e){t(e)})),children:[Object(m.jsx)(i.TextInput,{className:r.field,label:"\u041f\u043e\u0447\u0442\u0430",placeholder:"email@example.com",value:c.values.email,onChange:function(e){return c.setFieldValue("email",e.currentTarget.value)},error:c.errors.email&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}),Object(m.jsx)(i.PasswordInput,{className:r.field,label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:c.values.password,onChange:function(e){return c.setFieldValue("password",e.currentTarget.value)},error:c.errors.password&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),a&&Object(m.jsx)(i.Text,{color:"red",size:"sm",children:a}),Object(m.jsxs)(i.Group,{position:"apart",className:r.controls,children:[Object(m.jsx)(i.Button,{color:"gray",variant:"link",onClick:function(){c.setValues({email:"user1@email.com",password:"testpassword"})},children:"\u0414\u0435\u043c\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c (\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a)"}),Object(m.jsx)(i.Button,{type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})})}var P=Object(y.a)(g||(g=Object(v.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      errors\n    }\n  }\n"])));function N(){var e=Object(f.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(f.useState)(!1),c=Object(p.a)(r,2),i=c[0],s=c[1],l=Object(k.a)(P),o=Object(p.a)(l,1)[0];return Object(m.jsx)(C,{onSubmit:function(e){a(!0),o({variables:e}).then((function(e){var t=e.data.login.token;t?(s(!1),window.localStorage.setItem("auth",t)):s(!0),a(!1)}))},loading:n,error:i&&"\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})}var D=n(34),I=n(99),B=n(18),$=n.n(B),Y=n(61),M=n(46),A={CONSULTING:{name:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f",color:"grape"},DIAGNOSIS:{name:"\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430",color:"indigo"},REPAIR:{name:"\u0420\u0435\u043c\u043e\u043d\u0442",color:"blue"},OTHER:{name:"\u041f\u0440\u043e\u0447\u0435\u0435",color:"gray"}};function E(e){var t=e.category,n=A[t],a=n.name,r=n.color;return Object(m.jsx)(i.Badge,{color:r,variant:"light",children:a})}var F=Object(T.createUseStyles)((function(e){return{wrapper:{display:"flex",margin:-5,marginBottom:e.spacing.xl},field:{flex:1,margin:5}}}),{theming:i.theming}),V=Object.keys(A).map((function(e){return{value:e,label:A[e].name}}));function R(e){var t=e.values,n=e.onFilterChange,a=F();return Object(m.jsxs)("div",{className:a.wrapper,children:[Object(m.jsx)(i.TextInput,{className:a.field,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u0430",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u0430",value:t.customerPhone,onChange:function(e){return n("customerPhone",e.currentTarget.value)}}),Object(m.jsx)(i.Select,{className:a.field,data:V,label:"\u0422\u0438\u043f \u0437\u0430\u044f\u0432\u043a\u0438",placeholder:"\u0422\u0438\u043f \u0437\u0430\u044f\u0432\u043a\u0438",value:t.category,onChange:function(e){return n("category",e)},clearable:!0}),Object(m.jsx)(M.DatePicker,{className:a.field,locale:"ru",label:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",placeholder:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",value:t.createdAt,onChange:function(e){return n("createdAt",e)}}),Object(m.jsx)(M.DateRangePicker,{className:a.field,locale:"ru",inputFormat:"DD MMMM",label:"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b",placeholder:"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b",value:t.range,onChange:function(e){return n("range",e)}})]})}var z={ACCEPTED:{name:"\u041f\u0440\u0438\u043d\u044f\u0442\u043e",color:"teal"},IN_PROGRESS:{name:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",color:"indigo"},READY:{name:"\u0413\u043e\u0442\u043e\u0432\u043e",color:"red"},CLOSED:{name:"\u0417\u0430\u043a\u0440\u044b\u0442\u043e",color:"gray"}};function G(e){var t=e.status,n=z[t],a=n.name,r=n.color;return Object(m.jsx)(i.Badge,{color:r,variant:"outline",children:a})}var q,L=Object(T.createUseStyles)((function(e){return{wrapper:{backgroundColor:e.colors.gray[0],minHeight:"100vh",paddingTop:2*e.spacing.xl,paddingBottom:2*e.spacing.xl},header:{marginBottom:e.spacing.md}}}),{theming:i.theming});function U(e){var t=e.data,n=e.values,a=e.onFilterChange,c=L(),s=t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:Object(m.jsx)(i.Text,{size:"xs",children:e.description})}),Object(m.jsx)("td",{children:Object(m.jsx)(i.Text,{size:"xs",children:e.customer.phone})}),Object(m.jsx)("td",{children:$()(e.createdAt).locale("ru").format("DD MMMM YYYY")}),Object(m.jsx)("td",{children:Object(m.jsx)(G,{status:e.status})}),Object(m.jsx)("td",{children:Object(m.jsx)(E,{category:e.category})}),Object(m.jsx)("td",{children:Object(m.jsx)(i.ActionIcon,{component:r.b,to:"/tasks/".concat(e.id,"/"),variant:"outline",children:Object(m.jsx)(Y.a,{})})})]},e.id)}));return Object(m.jsx)("div",{className:c.wrapper,children:Object(m.jsxs)(i.Container,{size:"xl",children:[Object(m.jsxs)(i.Group,{position:"apart",className:c.header,children:[Object(m.jsx)(i.Title,{children:"\u0412\u0441\u0435 \u0437\u0430\u044f\u0432\u043a\u0438"}),Object(m.jsx)(i.Button,{component:r.b,to:"/new-task/",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]}),Object(m.jsx)(R,{values:n,onFilterChange:a}),Object(m.jsx)(i.Paper,{shadow:"sm",padding:"xl",children:Object(m.jsxs)(i.Table,{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u044f\u0432\u043a\u0438"}),Object(m.jsx)("th",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(m.jsx)("th",{children:"\u041a\u043b\u0438\u0435\u043d\u0442"}),Object(m.jsx)("th",{children:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}),Object(m.jsx)("th",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(m.jsx)("th",{children:"\u0422\u0438\u043f \u0437\u0430\u044f\u0432\u043a\u0438"}),Object(m.jsx)("th",{})]})}),Object(m.jsx)("tbody",{children:s})]})})]})})}var H,Q=Object(y.a)(q||(q=Object(v.a)(["\n  query tasks($customerPhone: String, $category: CategoryEnum, $createdAt: String, $dateStart: String, $dateEnd: String) {\n    allTasks(customerPhone: $customerPhone, category: $category, createdAt: $createdAt, dateStart: $dateStart, dateEnd: $dateEnd) {\n      id\n      createdAt\n      category\n      status\n      description\n      customer {\n        id\n        phone\n        name\n      }\n      employee {\n        id\n        email\n      }\n    }\n  }\n"])));function J(){var e=Object(f.useState)({customerPhone:"",category:null,createdAt:null,range:[null,null]}),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(I.a)(Q,{variables:{customerPhone:n.customerPhone.trim().length>0?n.customerPhone:void 0,category:n.category||void 0,createdAt:n.createdAt?$()(n.createdAt).format("YYYY-MM-DD"):void 0,dateStart:n.range[0]?$()(n.range[0]).format("YYYY-MM-DD"):void 0,dateEnd:n.range[1]?$()(n.range[1]).format("YYYY-MM-DD"):void 0}}),c=r.data,i=r.loading;return Object(m.jsx)("div",{children:Object(m.jsx)(U,{data:i?[]:c.allTasks,values:n,onFilterChange:function(e,t){return a((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(D.a)({},e,t))}))}})})}var _,K=Object(y.a)(H||(H=Object(v.a)(["\n  mutation deleteTaskMutation($id: ID!) {\n    deleteTask(id: $id) {\n      id\n    }\n  }\n"])));function W(e){var t=e.data,n=Object(k.a)(K),a=Object(p.a)(n,1)[0],s=Object(c.e)();return Object(m.jsx)("div",{style:{marginTop:100},children:Object(m.jsxs)(i.Container,{children:[Object(m.jsxs)("div",{style:{marginBottom:30,display:"flex",justifyContent:"space-between"},children:[Object(m.jsx)(i.Title,{children:"\u0417\u0430\u044f\u0432\u043a\u0430"}),Object(m.jsxs)(i.Group,{children:[Object(m.jsx)(i.Button,{color:"red",onClick:function(){a({variables:{id:t.id},refetchQueries:[{query:Q}]}).then((function(){return s.replace("/")}))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"}),Object(m.jsx)(i.Button,{component:r.b,to:"/tasks/".concat(t.id,"/edit"),children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]})]}),Object(m.jsx)(i.Table,{children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u044f\u0432\u043a\u0438"}),Object(m.jsx)("td",{children:t.id})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}),Object(m.jsx)("td",{children:$()(t.createdAt).locale("ru").format("DD MMMM YYYY")})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(m.jsx)("td",{children:t.customer.phone})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u0418\u043c\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(m.jsx)("td",{children:t.customer.name})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a"}),Object(m.jsx)("td",{children:t.employee.email})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u0422\u0438\u043f \u0437\u0430\u044f\u0432\u043a\u0438"}),Object(m.jsx)("td",{children:Object(m.jsx)(E,{category:t.category})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(m.jsx)("td",{children:Object(m.jsx)(G,{status:t.status})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(m.jsx)("td",{children:Object(m.jsx)(i.Text,{size:"sm",children:t.description})})]})]})})]})})}var X=Object(y.a)(_||(_=Object(v.a)(["\n  query taskQuery($id: ID!) {\n    taskById(id: $id) {\n      id\n      createdAt\n      employee {\n        id\n        email\n      }\n      category\n      status\n      description\n      customer {\n        id\n        name\n        phone\n      }\n    }\n  }\n"])));function Z(){var e=Object(c.f)(),t=Object(I.a)(X,{variables:{id:e.id}}),n=t.data,a=t.loading;return Object(m.jsx)("div",{children:a?Object(m.jsx)(i.LoadingOverlay,{visible:!0}):Object(m.jsx)(W,{data:n.taskById})})}var ee,te=Object(T.createUseStyles)((function(e){return{wrapper:{minHeight:"100vh",backgroundColor:e.colors.gray[0],display:"flex",alignItems:"center",justifyContent:"center"},field:{marginBottom:e.spacing.md},inner:{width:500},title:{marginBottom:1.5*e.spacing.xl}}}),{theming:i.theming}),ne={category:null,status:"ACCEPTED",description:"",customerPhone:""},ae=Object.keys(z).map((function(e){return{value:e,label:z[e].name}})),re=Object.keys(A).map((function(e){return{value:e,label:A[e].name}})),ce=function(e){return e&&e.trim().length>0};function ie(e){var t=e.title,n=e.initialValues,a=e.onSubmit,r=te(),c=Object(S.useForm)({initialValues:n||ne,validationRules:{category:ce,status:ce,description:ce,customerPhone:ce}});return Object(m.jsx)("div",{className:r.wrapper,children:Object(m.jsxs)(i.Paper,{shadow:"sm",padding:"xl",className:r.inner,children:[Object(m.jsx)(i.Title,{align:"center",className:r.title,children:t}),Object(m.jsxs)("form",{onSubmit:c.onSubmit(a),children:[Object(m.jsx)(i.TextInput,{className:r.field,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u0430",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043a\u043b\u0438\u0435\u043d\u0442\u0430",value:c.values.customerPhone,onChange:function(e){return c.setFieldValue("customerPhone",e.currentTarget.value)},error:c.errors.customerPhone&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(m.jsx)(i.Textarea,{className:r.field,label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",autosize:!0,value:c.values.description,onChange:function(e){return c.setFieldValue("description",e.currentTarget.value)},error:c.errors.description&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(m.jsx)(i.Select,{className:r.field,data:ae,label:"\u0421\u0442\u0430\u0442\u0443\u0441",placeholder:"\u0421\u0442\u0430\u0442\u0443\u0441",value:c.values.status,onChange:function(e){return c.setFieldValue("status",e)},error:c.errors.status&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(m.jsx)(i.Select,{className:r.field,data:re,label:"\u0422\u0438\u043f \u0437\u0430\u044f\u0432\u043a\u0438",placeholder:"\u0422\u0438\u043f \u0437\u0430\u044f\u0432\u043a\u0438",value:c.values.category,onChange:function(e){return c.setFieldValue("category",e)},error:c.errors.category&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}),Object(m.jsx)(i.Group,{position:"right",children:Object(m.jsx)(i.Button,{type:"submit",children:t})})]})]})})}var se,le=Object(y.a)(ee||(ee=Object(v.a)(["\n  mutation createNewTask($input: TaskInput!) {\n    createTask(taskData: $input) {\n      task {\n        id\n      }\n    }\n  }\n"])));function oe(){var e=Object(c.e)(),t=Object(k.a)(le),n=Object(p.a)(t,1)[0];return Object(m.jsx)(ie,{title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u044f\u0432\u043a\u0443",onSubmit:function(t){n({variables:{input:t}}).then((function(t){return e.push("/tasks/".concat(t.data.createTask.task.id))}))}})}var de=Object(y.a)(se||(se=Object(v.a)(["\n  mutation updateTask($input: TaskInput!) {\n    updateTask(taskData: $input) {\n      task {\n        id\n      }\n    }\n  }\n"])));function je(){var e=Object(c.f)(),t=Object(c.e)(),n=Object(I.a)(X,{variables:{id:e.id}}),a=n.data,r=n.loading,s=Object(k.a)(de),o=Object(p.a)(s,1)[0];return r?Object(m.jsx)(i.LoadingOverlay,{visible:!0}):Object(m.jsx)(ie,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443",onSubmit:function(n){var a={id:e.id,description:n.description,customerPhone:n.customerPhone,category:n.category,status:n.status};o({variables:{input:a},refetchQueries:[{query:X,variables:{id:e.id}}]}).then((function(e){return t.push("/tasks/".concat(e.data.updateTask.task.id))}))},initialValues:Object(l.a)(Object(l.a)({},a.taskById),{},{customerPhone:a.taskById.customer.phone})})}function ue(){return Object(m.jsx)(x,{children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(c.a,{path:"/",exact:!0,children:Object(m.jsx)(J,{})}),Object(m.jsx)(c.a,{path:"/new-task",exact:!0,children:Object(m.jsx)(oe,{})}),Object(m.jsx)(c.a,{path:"/tasks/:id/",exact:!0,children:Object(m.jsx)(Z,{})}),Object(m.jsx)(c.a,{path:"/tasks/:id/edit",exact:!0,children:Object(m.jsx)(je,{})}),Object(m.jsx)(c.a,{path:"/login",children:Object(m.jsx)(N,{})})]})})}Object(a.render)(Object(m.jsx)(ue,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.083d2233.chunk.js.map