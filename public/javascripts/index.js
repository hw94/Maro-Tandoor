let state= {}

const setState = updates => {
	Object.assign(state,updates)
	ReactDOM.render(React.createElement(Root,state), document.getElementById('root'))
}


const Root = state => 
	React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black", 'min-height':"auto"}},null,
		React.createElement('div', {className: 'container-fluid'}, null,
				React.createElement('div', {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"},null,
					React.createElement('div',{className: "jumbotron vertical-center", style : {backgroundColor:"black",width: '70%', margin:'0 auto 0 auto', marginTop:"-50px"}},null,
						React.createElement('div', {className: 'container-fluid'}, null,
							React.createElement('div', {className: "col-lg-10 col-md-10 col-sm-10 col-xs-12"},null,
								React.createElement('img',{className: "img-responsive",src: "../images/logo.png", style : {width:"300", padding:"0px 0px 0px 5px"}},null )),
							React.createElement('div',{className: "col-lg-2 col-md-2 col-sm-2 col-xs-2"},null,
								React.createElement('form', {action: "/contactUs", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black",'border-color':'green'},value:'Contact Us'})))),
						React.createElement('div',{className: "container-fluid", style: {display: 'table'}}, null,
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/mainMenu", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Order'}))),
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/menu", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Menu'}))),
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/deals", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'Deals'}))),
							React.createElement('div',{className: "col-lg-3 col-md-3 col-sm-3 col-xs-6"},null,
								React.createElement('form', {action: "/aboutUs", method:"get"},null,
									React.createElement('input',{type:'submit', className: "btn btn-warning btn-lg text-center", style:{marginTop:'25px', backgroundColor:"black"},value:'About Us'})))),
						React.createElement('div',{id : 'myslider', className:"carousel slide", 'data-ride':'carousel',style: {marginTop:"20px"}},null,
							React.createElement('ol',{className: "carousel-indicators"},null,
								React.createElement('li', {className:"active", 'data-target' : '#myslider', 'data-slide-to':'0'},null),
								React.createElement('li', {'data-target' : '#myslider', 'data-slide-to':'1'},null),
								React.createElement('li', {'data-target' : '#myslider', 'data-slide-to':'2'},null)),
								React.createElement('div',{className:"carousel-inner"},null,
									React.createElement('div',{className: "item active"},null,
										React.createElement('img', {src:"../images/img1.jpg"},null),
										React.createElement('div',{className: "slide1"},null)),
									React.createElement('div',{className: "item"},null,
										React.createElement('img', {src:"../images/img2.jpg"},null),
										React.createElement('div',{className: "slide2"},null)),
									React.createElement('div',{className: "item"},null,
										React.createElement('img', {src:"../images/img3.jpg"},null),
										React.createElement('div',{className: "slide3"},null))),
								React.createElement('a', {className:'left carousel-control', href:'#myslider', 'data-slide':'prev', 'role' :'button'},null,
									React.createElement('span',{className:"glyphicon glyphicon-chevron-left",'aria-hidden':'true'},null)),
								React.createElement('a', {className:'right carousel-control', href:'#myslider', 'data-slide':'next','role':'button'},null,
									React.createElement('span',{className:"glyphicon glyphicon-chevron-right",'aria-hidden':'true'},null))),
						React.createElement('footer',{style:{marginTop:'30px',marginBottom:'-80px'}},null,
							React.createElement('div',{className:'container text-center'},null,
								React.createElement('a',{href:'#',style:{'font-size':'30'}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-facebook-square','aria-hidden':"true"})),
								React.createElement('a',{href:'#',style:{'font-size':'30','aria-hidden':"true"}},null,
									React.createElement('i',{className:'fa fa-cog fa-fw fa-instagram'})),
								React.createElement('h5', {style:{color:'white'}}, 'Copyright 2017 Maro Tandoor | All rights reserved'),
								React.createElement('h5', {style:{color:'white'}}, 'Fonts and logos used are intellectual property of Maro Tandoors. Copying for public use without prior permission can result in legal action.')))))))

setState({})