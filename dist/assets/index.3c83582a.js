import{g as r,S as u,A as f}from"./vendor.ca80a63e.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&d(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(l){if(l.ep)return;l.ep=!0;const a=i(l);fetch(l.href,a)}};v();const n={html:`<div id="content" class=" flex flex-col" style="font-family: Barlow;">\r
	<div id="whoobe-l4amd" class="w-full bg-gray-800 text-gray-300 shadow-lg py-6 md:grid flex flex-col md:grid-cols-12" x-data="{open : false}">\r
		<div id="whoobe-mdr76" class="items-center justify-center flex col-span-3 flex-row">\r
			<div id="whoobe-m040q" class="bg-gray-800 items-center text-purple-600  text-6xl justify-center md:justify-center h-full w-48 rounded-full shadow-lg py-2 flex flex-row col-span-1" style="font-family: &quot;Barlow Condensed&quot;;">\r
				<span class="text-white    text-2xl" id="whoobe-dezlc">whoobe</span>\r
				<span class="text-purple-400    text-2xl" id="whoobe-22jkq">\r
					<b>One</b>\r
				</span>\r
				<i class="text-yellow-500  text-2xl ml-1 material-icons" id="whoobe-6gywu">bubble_chart</i>\r
			</div>\r
		</div>\r
		<div id="whoobe-8oco8" class="items-center justify-center md:justify-start cursor-pointer my-4 md:my-0 text-sm md:flex flex-row md:col-span-6 hidden" x-bind:class="{ 'hidden' : !open }">\r
			<a href="https://whoobe-one-studio.vercel.app">\r
				<div title="div" class="md:border-b-2 border-transparent text-gray-200 hover:text-white mx-6 hover:border-red-500 my-4 md:my-0" id="whoobe-krfh8" style="font-family: Montserrat;">\r
					<b>Try now!</b>\r
				</div>\r
			</a>\r
			<a href="https://github.com/swina/whoobe-one-studio">\r
				<div title="div" class="md:border-b-2 border-transparent text-gray-200 hover:text-white mx-6 hover:border-red-500 my-4 md:my-0" id="whoobe-dbaq6" style="font-family: Montserrat;">\r
					<b>Github</b>\r
				</div>\r
			</a>\r
		</div>\r
		<div id="whoobe-g6e42" class="justify-start md:justify-end items-center md:pr-4 md:flex flex-col md:flex-row md:col-span-3 hidden" x-bind:class="{'hidden':!open}">\r
			<a href="https://whoobe-one-studio.vercel.app">\r
				<button value="button" title="button" class="bg-gray-500 px-4 text-white hover:bg-purple-600 text-xs font-bold py-2 mx-6 md:mx-0" id="whoobe-8g0p2" style="font-family: Montserrat;">Playground</button>\r
			</a>\r
		</div>\r
		<span id="whoobe-soz3p" class="z-highest w-auto h-auto text-2xl absolute right-0 top-0 m-1 z-modal cursor-pointer md:hidden" mode="render" block="" x-on:click="open = !open">\r
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" class="iconify iconify--dashicons">\r
				<path d="M20 5V2H0v3h20zm0 6V8H0v3h20zm0 6v-3H0v3h20z" fill="currentColor">\r
				</path>\r
			</svg>\r
		</span>\r
	</div>\r
	<div id="whoobe-asq7k" class="items-end justify-start w-full bg-white bg-opacity-75 m-auto h-screen md:h-auto  flex flex-col md:grid grid-cols-2">\r
		<div id="whoobe-1dy2w" class="items-start justify-center w-full p-5 h-full lg:px-32 flex flex-col col-span-1">\r
			<h4 class="text-gray-400 text-sm text-base" id="whoobe-jahgb" style="font-family: Barlow;">In browser app to design your components</h4>\r
			<h4 class="text-black text-5xl my-6" id="whoobe-qvh71" style="font-family: Barlow;">A <b>component designer</b>\r
			<br>for TailwindCSS</h4>\r
			<a href="https://whoobe-one-studio.vercel.app">\r
				<button value="button" title="button" class="text-white hover:bg-purple-600 bg-gray-500 p-4 text-2xl font-bold rounded-full shadow-lg mt-8" id="whoobe-j8vuk" style="font-family: Barlow;">Try now ! Is Free.</button>\r
			</a>\r
		</div>\r
		<div id="whoobe-hqvsa" class="items-center justify-center w-full p-5 h-2/3 bg-cover bg-center bg-no-repeat clip-path-diagonal shadow-lg rounded-bl-2xl flex flex-col" style="background-image: url(&quot;https://res.cloudinary.com/moodgiver/image/upload/v1635571292/whoobe-one-dashboard_hbzbjq.jpg&quot;);">\r
		</div>\r
	</div>\r
	<div id="whoobe-ibyzm" class="w-full bg-no-repeat bg-contain bg-right md:w-3/4 m-auto my-20 flex flex-col md:flex-row" style="background-image: url(&quot;https://res.cloudinary.com/moodgiver/image/upload/v1608729119/blobs_05_7e08689125.svg&quot;);">\r
		<div id="whoobe-n12pw" class="w-full md:w-3/4 h-auto order-last md:order-first m-auto flex">\r
			<img src="https://res.cloudinary.com/moodgiver/image/upload/v1634145505/whoobe-one-editor-01_f4bnjw.jpg" alt="img" title="img" class="w-full m-auto h-auto border shadow-lg my-8 rounded-2xl" id="whoobe-2108j">\r
			</div>\r
			<div id="whoobe-zt8lk" class="w-full md:w-1/3 flex">\r
				<div id="whoobe-71l1f" class="items-center justify-center h-auto md:p-2 lg:p-10  flex flex-col">\r
					<span id="whoobe-gg1ly" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" class="iconify iconify--dashicons">\r
							<path d="M18 17V3H2v14h16zM16 7H4V5h12v2zm-7 4H4V9h5v2zm7 0h-5V9h5v2zm-7 4H4v-2h5v2zm7 0h-5v-2h5v2z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-3q7v2" style="font-family: Barlow;">Editor</h4>\r
					<p class="mt-8 text-center text-lg" id="whoobe-10puy">\r
						<p>WYSIWG Editor to create pages, components with full control of your design, add AlpineJS directives or even GSAP animations.</p>\r
					</p>\r
				</div>\r
			</div>\r
		</div>\r
		<div id="whoobe-s2keq" class="px-2 md:px-10 mb-20 mt-20 w-full md:w-3/4 m-auto flex flex-col">\r
			<div id="whoobe-57790" class="w-full bg-contain bg-no-repeat bg-left flex flex-col md:flex-row" style="background-image: url(&quot;https://res.cloudinary.com/moodgiver/image/upload/v1608729119/blobs_05_7e08689125.svg&quot;);">\r
				<div id="whoobe-025ei" class="w-full md:w-1/3 flex">\r
					<div id="whoobe-9vrs4" class="items-center justify-center h-auto md:p-2 lg:p-10 flex flex-col">\r
						<span id="whoobe-xlcza" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--ic">\r
								<path d="M16.66 4.52l2.83 2.83l-2.83 2.83l-2.83-2.83l2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34L16.66 13l5.66-5.66l-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z" fill="currentColor">\r
								</path>\r
							</svg>\r
						</span>\r
						<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-8bkm0" style="font-family: Barlow;">UI Kits</h4>\r
						<p class="mt-8 text-center text-lg" id="whoobe-mmyw5">\r
							<p>Create your own UI Kits and save on your local file system. Export/Import them whenever you need. WhoobeOne comes with some free UI Kits ready to use</p>\r
						</p>\r
					</div>\r
				</div>\r
				<div id="whoobe-ke717" class="w-full md:w-3/4 h-auto m-auto  flex">\r
					<img src="https://res.cloudinary.com/moodgiver/image/upload/v1635848195/whoobe-one-ui-kits_sduygm.jpg" alt="img" title="img" class="w-full m-auto h-auto border shadow-lg my-8 rounded-2xl" id="whoobe-8950y">\r
					</div>\r
				</div>\r
			</div>\r
			<div id="whoobe-71chu" class="w-full md:w-3/4 m-auto flex flex-col md:flex-row">\r
				<div id="whoobe-c126z" class="w-full md:w-2/3 order-last md:order-first flex">\r
					<pre class="w-full overflow-x-auto max-w-screen" id="whoobe-wgeil">&lt;div class="bg-white  flex flex-col" id="content" &gt;
	&lt;header class=" flex flex-col"&gt;
		&lt;div class=" items-center justify-center p-8 md:grid flex flex-col md:grid-cols-3"&gt;
			&lt;div class="items-center text-purple-600    text-6xl justify-center md:justify-start h-full flex flex-row col-span-1" &gt;
				&lt;span class="text-black    text-2xl"&gt;whoobe&lt;/span&gt;
				&lt;span class="text-purple-400    text-2xl"&gt;
					&lt;b&gt;One&lt;/b&gt;
				&lt;/span&gt;
				&lt;i class="text-yellow-500  text-3xl material-icons"&gt;bubble_chart&lt;/i&gt;
			&lt;/div&gt;
			&lt;nav class="items-center text-lg text-black px-2 h-full justify-center md:justify-around flex flex-row col-span-2" &gt;
				&lt;span class="border-b-4 border-transparent hover:text-purple-600 hover:border-purple-600 mr-12 cursor-pointer"&gt;Try now!&lt;/span&gt;
				&lt;span class="border-b-4 border-transparent hover:text-purple-600 hover:border-purple-600 mr-12 cursor-pointer"&gt;Documentation&lt;/span&gt;
				&lt;span class="border-b-4 border-transparent hover:text-purple-600 hover:border-purple-600 mr-12 cursor-pointer"&gt;Github&lt;/span&gt;
			&lt;/nav&gt;
		&lt;/div&gt;
	&lt;/header&gt;<div>&lt;/div&gt;</div>\r
				</pre>\r
			</div>\r
			<div id="whoobe-fsi3q" class="w-full md:w-1/3 flex">\r
				<div id="whoobe-f9vmk" class="items-center justify-center h-auto md:p-2 lg:p-10 flex flex-col">\r
					<span id="whoobe-1xcer" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="0.71em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 361" class="iconify iconify--logos">\r
							<path d="M255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11z" fill="#E44D26">\r
							</path>\r
							<path d="M128 337.95l84.417-23.403l19.86-222.49H128V337.95z" fill="#F16529">\r
							</path>\r
							<path d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704z" fill="#EBEBEB">\r
							</path>\r
							<path d="M90.018 236.542h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471z" fill="#EBEBEB">\r
							</path>\r
							<path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0z" fill="#000">\r
							</path>\r
							<path d="M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001z" fill="#000">\r
							</path>\r
							<path d="M130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0z" fill="#000">\r
							</path>\r
							<path d="M193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" fill="#000">\r
							</path>\r
							<path d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937z" fill="#FFF">\r
							</path>\r
							<path d="M127.89 155.854v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86z" fill="#FFF">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-d4fs0" style="font-family: Barlow;">HTML Code</h4>\r
					<p class="mt-8 text-center text-lg" id="whoobe-00fav">\r
						<p>whoobeOne generates clean HTML code with no extra attributes other then the TailwindCSS classes you assign. Because clean is better.</p>\r
					</p>\r
				</div>\r
			</div>\r
		</div>\r
		<div id="whoobe-1y8q4" class="w-full md:w-3/4 m-auto my-20 flex flex-col md:flex-row">\r
			<div id="whoobe-bx8pp" class="w-full md:w-1/3 flex">\r
				<div id="whoobe-xahi7" class="items-center justify-center h-auto md:p-2 lg:p-10 flex flex-col">\r
					<span id="whoobe-dv0fl" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" class="iconify iconify--bi">\r
							<g fill="currentColor">\r
								<path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z">\r
								</path>\r
							</g>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-f0z65" style="font-family: Barlow;">Library</h4>\r
					<p class="mt-8 text-center text-lg" id="whoobe-0jxwy">\r
						<p>whoobeOne comes with a default library of components and pages ready to use or to start with to create your own. Create your custom library, import/export other components created with whoobeOne.</p>\r
					</p>\r
				</div>\r
			</div>\r
			<div id="whoobe-0hgi7" class="w-full md:w-2/3 flex">\r
				<img src="https://res.cloudinary.com/moodgiver/image/upload/v1634149257/whoobe-one-library_d73ok6.jpg" alt="img" title="img" class="w-full m-auto h-auto border shadow-lg my-8 rounded-2xl" id="whoobe-i8yke">\r
				</div>\r
			</div>\r
			<h2 class="text-center mt-20 text-2xl md:text-5xl border-b-4 border-purple-500 md:w-1/4 m-auto pb-4" id="whoobe-z9mgx">\r
				<b>Features</b>\r
			</h2>\r
			<main id="whoobe-ls527" class="px-2 md:px-10 md:w-3/4 m-auto bg-cover bg-no-repeat bg-center flex flex-wrap flex-col md:flex-row" style="background-image: url(&quot;https://res.cloudinary.com/moodgiver/image/upload/v1609491903/blobs_09_a2f39b210f.svg&quot;);">\r
				<div id="whoobe-in8wg" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-epy44" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20" class="iconify iconify--entypo">\r
							<path d="M18 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4.5 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5zm-2.75.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0zM18 16H2V7h16v9zm0-11H6V4h12.019L18 5z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-7r9b6" style="font-family: Barlow;">Browser UI</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-q45of">\r
						<p>In browser based app, that you can add to your desktop. </p>\r
						<p>No database or server required.</p>\r
					</p>\r
				</div>\r
				<div id="whoobe-xw1bv" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-o49yd" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify iconify--file-icons">\r
							<path d="M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-rqf55" style="font-family: Barlow;">TailwindCSS</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-fl3ns">\r
						<p>Manage almost all TailwindCSS utility-first classes with advanced and easy controls</p>\r
					</p>\r
				</div>\r
				<div id="whoobe-4zoxy" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-0vwgw" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--simple-icons">\r
							<path d="M24 12l-5.72 5.746l-5.724-5.741l5.724-5.75L24 12zM5.72 6.254L0 12l5.72 5.746h11.44L5.72 6.254z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-chs3y" style="font-family: Barlow;">AlpineJS</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-0t8z0">Assign AlpineJS directives and customize as per your needs</p>\r
				</div>\r
				<div id="whoobe-bjm54" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-nq0qc" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--akar-icons">\r
							<g fill="none">\r
								<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h24v24H0V0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113zm-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416z" fill="currentColor">\r
								</path>\r
							</g>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-9xjps" style="font-family: Barlow;">Custom JS</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-qsmco">Add custom Javascript to your component.</p>\r
				</div>\r
				<div id="whoobe-paxxe" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-pv0vn" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" class="iconify iconify--cib">\r
							<path d="M17.964 31.932c-.417-.073-.849-.271-1.094-.49a.964.964 0 0 1-.266-.646c0-.245.125-.589.323-.932c.12-.193.214-.401.281-.62c.042-.151.13-.396.198-.552l.12-.286l.031-1.911c.016-1.057.047-2.036.073-2.188c.068-.438.182-.865.333-1.281l.115-.276l-.167-.099c-.151-.094-.276-.224-.771-.813c-.609-.719-1.411-1.115-2.547-1.25c-.37-.036-.745-.063-1.12-.078c-1.667-.078-2.62-.427-3.479-1.271c-.641-.63-.974-1.365-1.109-2.448c-.182-1.464-.385-2.214-.76-2.823a2.793 2.793 0 0 0-.318-.422l-.151-.151l-.333.214c-.182.12-.438.271-.563.339c-.417.229-.813.484-1.193.76c-.932.677-1.948 1.526-2.505 2.083c-.25.25-.38.359-.438.349c-.38-.057-.089-1.703.531-2.943c.792-1.599 2.125-3.073 3.667-4.068c1.266-.818 3.313-1.943 4.26-2.339c1.682-.703 3.859-1.464 5.349-1.87c.313-.089.505-.167.635-.255c.292-.203.578-.302.906-.307c.276-.005.302-.01.568-.188c.313-.203.406-.214.719-.104l.203.073l.25-.172l.25-.167l.359.005c.276.005.401-.005.521-.057c.151-.068.156-.078.198-.328c.094-.542.104-.813.047-1.141c-.073-.432-.083-2.109-.01-2.438c.078-.354.13-.427.396-.557c.396-.193.693-.25 1.375-.25c.833 0 1.255.115 1.568.417c.281.271.328.906.182 2.396c-.089.859-.099 1.099-.073 1.661c.01.359.036.698.047.745c.021.089.042.094.344.099c.297.005.349.021.63.167c.271.141.474.313.516.438c.005.026.052.026.135 0c.161-.047.302.005.417.146c.068.089.109.104.266.104c.214 0 .292.052.469.313a.78.78 0 0 0 .328.266c.292.146.688.552.839.875c.234.479.281 1.036.135 1.536c-.052.188-.052.193.057.375c.229.391.313.87.219 1.276l-.052.24l.156.156c.776.776.661 2.042-.286 3.172a2.01 2.01 0 0 0-.266.422c-.182.484-.391.823-.661 1.104l-.276.281h-.281c-.281 0-.677-.094-.917-.219c-.099-.052-.104-.052-.083.01c.063.229.219 1.161.271 1.677c.083.792.057 1.943-.052 2.438a3.805 3.805 0 0 1-.396 1.047c-.104.167-.109.203-.089.406c.031.286-.036.766-.151 1.083c-.141.37-.193.542-.224.729c-.026.161-.026.161.089.161c.151 0 .234.089.234.266c0 .078-.068.5-.151.932c-.229 1.214-.245 1.349-.245 2.526c-.005 1.214-.005 1.203.271 1.385l.62.401a8.616 8.616 0 0 0 1.703.875c.87.344.99.432.99.724c0 .13-.026.177-.135.281c-.333.323-.99.396-2.313.255a22.717 22.717 0 0 0-2.068-.099c-1.823-.026-2.089-.089-2.328-.542c-.135-.26-.109-.599.078-1.156c.083-.245.156-.495.219-.75c.125-.604.042-1.323-.25-2.135l-.25-.693c-.245-.703-.38-1.99-.234-2.281c.026-.057.073-.068.198-.063l.156.016l.13-.271c.099-.214.208-.354.505-.651l.38-.38l-.021-.245c-.016-.234-.323-1.37-.365-1.365c-.016 0-.099.115-.193.26c-.229.344-.734.875-1.021 1.068c-.125.083-.229.182-.229.214c-.005.141-.125.417-.271.609c-.141.188-.151.219-.13.385c.036.245-.042 1.031-.135 1.443a4.67 4.67 0 0 1-.344.885c-.359.745-.63 1.411-.698 1.719a7.563 7.563 0 0 0-.094.896c-.016.354-.052.698-.078.771c-.036.099-.036.177-.005.328c.026.109.042.354.036.547c-.005.266.016.438.094.75c.135.531.161.865.099 1.063c-.042.125-.083.172-.224.24c-.313.161-1.198.25-1.677.167zm1.265-.427c.182-.052.339-.208.339-.349c0-.063-.052-.245-.115-.406c-.125-.307-.339-1.12-.339-1.255c0-.068.005-.073.109-.016l.115.063v-.146a2.08 2.08 0 0 0-.089-.396c-.099-.297-.109-.302-.74-.339l-.427-.021l-.156.151a1.581 1.581 0 0 0-.224.292c-.068.135-.094.339-.052.385c.01.016.115 0 .229-.026a.897.897 0 0 1 .208-.036c0 .005-.115.099-.26.198c-.625.469-.844.755-.844 1.12c0 .38.359.677.922.766c.385.057 1.135.073 1.323.016zm8.474-.62c.156-.188.135-.38-.063-.599c-.115-.115-.245-.214-.391-.292s-.292-.167-.438-.26a11.063 11.063 0 0 0-.813-.479c-.24-.13-.474-.266-.703-.411l-.094-.073v-1.432c0-1.411-.005-1.432-.078-1.411c-.365.099-.969.146-1.734.13l-.828-.01l.12.292c.224.552.339 1.292.339 2.141c0 .318-.021.432-.099.656c-.042.109-.078.219-.115.328c-.016.047.042.083.255.146c.156.047.385.094.516.109l.24.026l-.026.24c-.026.271.005.557.073.646c.042.052.198.073.922.104c.547.026 1.141.083 1.609.151c.406.063.844.115.974.115c.219.005.24-.005.333-.115zm-8.338-2.437c.021-.016.052-.297.063-.63c.042-.932.078-1.068.547-2.12c.385-.859.589-1.661.573-2.229l-.01-.339l-.146.141c-.302.302-.094-.172.266-.594c.271-.323.365-.5.406-.786c.021-.115.063-.172.24-.307a4.481 4.481 0 0 0 1.474-1.948c.073-.188.26-.828.417-1.422c.292-1.099.448-1.573.589-1.776c.052-.078.073-.094.063-.042a7.41 7.41 0 0 0-.177.849c-.042.255-.12.755-.172 1.104c-.099.714-.203 1.172-.344 1.526l-.094.24l.25.646c.26.661.38 1.141.401 1.604l.016.26l-.203.042a1.051 1.051 0 0 0-.667.417c-.177.255-.276.464-.229.51c.021.021.276.068.568.104c.453.052.625.052 1.224.016c.26-.01.516-.036.771-.073c.057-.021.115-.135.208-.432c.214-.682.255-.922.229-1.401l-.021-.422l.109-.141c.255-.323.453-.906.536-1.589c.099-.833-.083-2.578-.422-4.078c-.161-.714-.229-1.141-.229-1.453v-.276l-.255.026c-.917.099-2.026.073-2.703-.068c-.37-.073-1.302-.349-1.505-.438l-.161-.073l-.021.182c-.016.099-.031.198-.052.302c-.031.109-.021.135.172.323c.24.245.313.37.313.536c0 .104-.057.188-.349.49a4.367 4.367 0 0 1-.693.599l-.339.229l-.146.505c-.521 1.849-.62 3.531-.276 4.734l.083.302l-.167.208c-.625.786-.995 1.385-1.052 1.719a8.22 8.22 0 0 1-.115.49c-.135.516-.24 1.271-.286 2.089a54.34 54.34 0 0 1-.135 2.052l-.026.203l.26.078c.146.047.365.099.49.12c.234.036.667.026.734-.01zm5.057-2.865c.406-.026.776-.089.849-.151c.031-.021.068-.13.078-.24l.026-.198l-.323.073c-.255.052-.51.083-.766.104c-.615.026-1.234.01-1.844-.052c-.203-.031-.203-.031-.141.234c.052.198.063.208.594.245c.354.031.849.026 1.526-.016zm-.339-.906c.531-.047 1.193-.161 1.323-.229c.042-.021.078-.099.094-.188l.047-.276l.026-.13l-.13.026c-.578.12-1.016.156-1.891.156c-.854 0-.953-.005-1.177-.083a.82.82 0 0 0-.271-.063c-.036.021-.042.318-.01.526c.021.125.042.146.167.182c.396.109 1.063.135 1.823.073zm-9.666-4.698c1.333-.385 3.078-1.516 4.505-2.932c.464-.464.521-.526.583-.734l.083-.266c.01-.021-.073-.057-.182-.083c-.286-.068-.505-.234-.505-.385c0-.089-.052-.177-.203-.339c-.245-.276-.307-.396-.333-.661l-.021-.214l-.292-.208c-.167-.12-.75-.443-1.37-.755a18.569 18.569 0 0 1-1.385-.75c-.521-.349-.87-.766-1.068-1.26c-.036-.099-.083-.182-.099-.182c-.042 0-1.214 1.13-1.714 1.661c-1.234 1.302-2.083 2.432-2.62 3.479c-.135.26-.281.568-.323.682l-.078.208l.094.349c.057.188.177.495.271.677c.328.646.719 1.036 1.365 1.354c.693.344 1.307.464 2.333.448c.552-.005.714-.021.958-.094zM3.896 15.411c.875-.776 2.083-1.625 3.563-2.505c.969-.578 4.714-2.453 6.438-3.219c.313-.141.594-.271.625-.286c.031-.021.12-.245.203-.495c.365-1.156.547-1.385 1.208-1.536c.083-.021.104-.047.104-.13c0-.151.104-.5.193-.656c.068-.12.068-.125.01-.109c-.036.01-.255.073-.484.141c-3.177.917-5.953 2.135-8.349 3.656c-2.557 1.625-4.031 3.573-4.458 5.906l-.031.172l.313-.307c.167-.172.469-.453.667-.625zm23.568.443c.255-.13.651-.729.797-1.203c.042-.167.125-.323.245-.453c.385-.427.703-1.203.708-1.734c0-.828-.469-1.146-1.151-.792c-.089.042-.161.073-.172.063c-.036-.036.156-.224.391-.37c.307-.203.365-.323.365-.755a1.69 1.69 0 0 0-.297-.979c-.094-.141-.13-.234-.115-.292l.094-.349c.13-.464.083-.995-.12-1.333c-.302-.51-.672-.76-1.188-.802l-.302-.021l.177.198c.526.568.781 1.281.677 1.891c-.052.313-.099.375-.401.495l-.177.073l.021.24c.036.391-.031.677-.281 1.203c-.125.266-.219.505-.208.531c.031.089.375.255.646.323l.266.063l-.167.057c-.219.068-.266.167-.266.526c0 .328.047.464.286.823c.109.156.182.318.193.411c.021.146.016.156-.104.198a1.891 1.891 0 0 1-.417.068c-.49.031-.526.047-.745.255c-.198.188-.203.198-.203.406c0 .286.109.865.177.943c.089.094.583.339.776.375a.706.706 0 0 0 .495-.057zm-7.214-.39c.318-.25.568-.5.708-.714c.089-.13.094-.156.052-.266c-.073-.167-.552-.599-.818-.729a2.08 2.08 0 0 0-.557-.161l-.328-.042l-.203-.255c-.422-.521-.656-.927-.99-1.714c-.292-.667-.547-1.057-.953-1.443c-.167-.156-.286-.286-.276-.286c.021 0 .219.099.448.219c.38.203.427.219.599.193c.62-.073 1.167-.786 1.365-1.786c.057-.281.172-.568.292-.74c.005-.005.245.151.526.354c.714.505.87.583 1.276.599c.266.01.417-.01.896-.125c1.021-.25 2.125-.349 2.797-.26c.38.052.927.219 1.333.411c.401.188.479.198.609.083c.109-.094.109-.109.109-.458c-.005-.516-.193-1.073-.479-1.406c-.146-.172-.557-.453-.964-.667a28.154 28.154 0 0 1-.432-.234c-.193-.115-.411-.099-1.005.057c-.688.177-.87.177-1.656-.026c-.667-.167-.708-.172-1.365-.068c-.349.052-1.224.021-1.516-.057c-.146-.042-.292-.083-.432-.135c-.255-.099-.698-.115-1.099-.042c-.797.141-1.401.573-1.62 1.161c-.115.297-.099.438.052.531c.24.151.557.563.557.724c0 .01-.078-.057-.167-.151c-.224-.234-.427-.339-.667-.339a.834.834 0 0 0-.734.484a4.98 4.98 0 0 0-.177.563c-.146.531-.276.813-.552 1.188c-.245.339-.281.49-.193.87c.219.958.599 1.344 2.187 2.245c.833.474 1.26.74 1.573.974c.24.177.245.188.224.323c-.047.313.151.651.542.927c.099.068.161.141.161.193c0 .094.266.224.458.224c.109 0 .193-.047.417-.219zm6.422-1.756c.604.021.635-.026.313-.401c-.339-.391-.432-.708-.307-1.057l.052-.135l-.214-.104c-.073-.036-.146-.073-.219-.099c-.036.141-.073.276-.104.417c-.078.318-.172 1.141-.177 1.49c0 .031.052.021.141-.036c.125-.073.188-.083.516-.073zm-2.026-.031c.365-.021.74-.047.839-.063l.182-.026l.021-.599c.031-.854.156-1.359.526-2.167c.26-.573.375-1.073.318-1.448c-.021-.161-.031-.172-.25-.266a5.765 5.765 0 0 0-1.245-.339c-.411-.057-1.62-.026-2.073.063c-.188.031-.531.104-.76.161c-.568.13-.87.115-1.302-.073c-.427-.188-.698-.359-.953-.599c-.203-.188-.224-.198-.276-.135c-.042.047-.063.188-.078.49c-.016.464-.089.708-.292 1.036a1.266 1.266 0 0 0-.115.214c0 .016.156.198.349.396c.667.693.995.87 1.521.833c.172-.016.292-.01.292.01c0 .042-.339.307-.479.38c-.068.036-.083.073-.073.151l.083.547c.047.313.083.458.13.5c.125.104.771.438 1.177.604c.531.214.823.292 1.229.328c.5.042.51.042 1.229 0zm-4.307-.573c.01-.016-.026-.318-.094-.667c-.083-.474-.13-.646-.182-.693c-.036-.031-.229-.167-.422-.307a6.579 6.579 0 0 1-.719-.599l-.359-.354l-.193.099l-.203.109a.93.93 0 0 0 .083.234c.057.125.172.432.255.682c.219.651.391.964.823 1.531l.161.214l.307.047c.172.026.344.063.391.078c.073.031.083.016.104-.151c.01-.073.026-.151.047-.224zm6.599-6.479c.266-.026.313-.063.198-.182c-.073-.073-.24-.078-.375-.016c-.089.042-.109.031-.25-.12c-.146-.161-.156-.167-.339-.146c-.167.021-.193.016-.214-.052a1.342 1.342 0 0 0-.24-.302a1.156 1.156 0 0 0-.432-.307c-.323-.125-.505-.109-.813.063c-.891.484-.854.479-1.714.26c-.802-.203-1.401-.411-1.594-.542c-.161-.109-.505-.229-.792-.266c-.214-.031-.349.016-.552.182l-.109.089l.099.172c.135.24.12.255-.083.078c-.219-.182-.479-.307-.646-.313c-.12 0-.474.156-.516.224c-.016.021.094.047.24.057c.151.016.359.068.5.125c.365.156.552.208.885.24c.365.036 1.026-.005 1.104-.068c.042-.036.156-.042.396-.021c.318.021.448.052 1.203.255c.438.12.745.109 1.266-.031c.24-.068.542-.135.667-.151c.214-.021.255-.01.589.141c.531.24.813.391.969.531c.156.135.177.135.552.104zm-2.969-.911l.318-.167l-.01-.323c-.005-.224-.016-.443-.026-.661l-.026-.333l-.318.245c-.188.146-.37.255-.448.271c-.229.042-1.359 0-1.464-.057a3.056 3.056 0 0 1-.391-.344l-.292-.297l-.005.177c0 .094-.01.255-.031.354c-.026.188-.026.193.177.448c.109.141.198.266.198.281c0 .099 1.505.568 1.844.573c.109 0 .245-.047.474-.167zm-.604-1.183c.375-.073.557-.344.698-1.031c.146-.74.219-1.901.151-2.396c-.063-.448-.563-.646-1.516-.615c-.594.021-.839.078-1.042.25c-.125.104-.125.115-.182.609c-.104.948.052 2.297.323 2.802c.13.245.245.333.484.375c.271.047.849.047 1.083.005z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-2x50a" style="font-family: Barlow;">GSAP</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-hy0iv">GreenSock animation support. 15 most used animations presets. Cusomize duration, ease and delay.</p>\r
				</div>\r
				<div id="whoobe-qkael" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-rsb9z" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--bx">\r
							<path d="M13 2h-2C7.691 2 5 4.691 5 8v8c0 3.309 2.691 6 6 6h2c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-2 2v6H7V8c0-2.206 1.794-4 4-4zm6 12c0 2.206-1.794 4-4 4h-2c-2.206 0-4-1.794-4-4v-4h10v4zm-4-6V4c2.206 0 4 1.794 4 4v2h-4z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-bo3vp" style="font-family: Barlow;">Snippets</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-lokml">\r
						<p>Add preset templates like info card, hero section, team and more with one click</p>\r
					</p>\r
				</div>\r
				<div id="whoobe-myhfk" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-xms9e" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" class="iconify iconify--vaadin">\r
							<path fill="currentColor" d="M14 4V2H0v12h16V4h-2zm-4-1h3v1h-3V3zM6 3h3v1H6V3zm9 10H1V3h4v2h10v8z">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-e1ltp" style="font-family: Barlow;">Multitabs</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-7uwd9">\r
						<p>Open multiple editors to speed your workflow on different components simultaneously</p>\r
					</p>\r
				</div>\r
				<div id="whoobe-igo14" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-2mmig" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" class="iconify iconify--octicon">\r
							<path d="M10.5 3a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 10.5 3z" fill="currentColor">\r
							</path>\r
							<path fill-rule="evenodd" d="M6.75 0A1.75 1.75 0 0 0 5 1.75v7.5c0 .966.784 1.75 1.75 1.75h7.5A1.75 1.75 0 0 0 16 9.25v-7.5A1.75 1.75 0 0 0 14.25 0h-7.5zM6.5 1.75a.25.25 0 0 1 .25-.25h7.5a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25v-7.5z" fill="currentColor">\r
							</path>\r
							<path d="M1.75 5A1.75 1.75 0 0 0 0 6.75v7.5C0 15.216.784 16 1.75 16h7.5A1.75 1.75 0 0 0 11 14.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-7.5a.25.25 0 0 1-.25-.25v-7.5a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-9qkz8" style="font-family: Barlow;">Duplicate</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-til0i">Duplicate blocks easely with a simple Alt + D</p>\r
				</div>\r
				<div id="whoobe-bzwtw" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-ayvmr" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" class="iconify iconify--vaadin">\r
							<path fill="currentColor" d="M13 4h-3V0H0v14h6v2h10V7l-3-3zM3 1h4v1H3V1zm12 14H7V5h5v3h3v7zm-2-8V5l2 2h-2z">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-kjwr9" style="font-family: Barlow;">Copy&amp;Paste</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-ht9ka">Copy&amp;Paste blocks also between different components in different tabs.</p>\r
				</div>\r
				<div id="whoobe-uppd2" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-qwj6c" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--ic">\r
							<path opacity=".3" d="M15.22 4.75L7.87 7.79l4.96 11.96l7.35-3.05l-4.96-11.95zM11 10c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z" fill="currentColor">\r
							</path>\r
							<path d="M3.87 11.18l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61l1.34.56v-9.03zm18.16 4.77L17.07 3.98a2.013 2.013 0 0 0-1.81-1.23c-.26 0-.53.04-.79.15L7.1 5.95a1.999 1.999 0 0 0-1.08 2.6l4.96 11.97a1.998 1.998 0 0 0 2.6 1.08l7.36-3.05a1.994 1.994 0 0 0 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95l-7.35 3.05z" fill="currentColor">\r
							</path>\r
							<circle cx="11" cy="9" r="1" fill="currentColor">\r
							</circle>\r
							<path d="M9.33 21.75l-3.45-8.34v6.34c0 1.1.9 2 2 2h1.45z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-3tk5z" style="font-family: Barlow;">CopyFormat</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-1ckp5">Copy CSS and style and paste to any element to replicate the same design</p>\r
				</div>\r
				<div id="whoobe-2fjvk" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
					<span id="whoobe-bu6uu" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--ic">\r
							<path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" fill="currentColor">\r
							</path>\r
						</svg>\r
					</span>\r
					<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-7nrrl" style="font-family: Barlow;">Export/Import</h4>\r
					<p class="mt-8 text-center text-base p-2" id="whoobe-lmbo3">Export/Import any template to/from JSON<div>on your local file system</div>\r
				</p>\r
			</div>\r
			<div id="whoobe-0umfw" class="items-center justify-start h-auto md:p-2 text-center md:w-1/3 md:p-10 my-4 flex flex-col">\r
				<span id="whoobe-ubqd9" class="z-highest w-auto h-auto text-bluegray-500    text-8xl" mode="render" block="">\r
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" class="iconify iconify--bi">\r
						<g fill="currentColor">\r
							<path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z">\r
							</path>\r
							<path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z">\r
							</path>\r
						</g>\r
					</svg>\r
				</span>\r
				<h4 class="text-white bg-purple-800 mt-8 px-3 rounded-full font-bold text-2xl py-1" id="whoobe-nnyhx" style="font-family: Barlow;">Shortcuts</h4>\r
				<p class="mt-8 text-center text-base p-2" id="whoobe-5kwqh">Speed-up your workflow with support of hotkeys for most used operations</p>\r
			</div>\r
		</main>\r
		<div id="whoobe-cfa0d" class="text-center items-center justify-center text-gray-400 bg-gray-800 clip-path-diagonal-reverse flex flex-col" style="font-family: Barlow;">\r
			<div id="whoobe-t2otb" class="items-center justify-start mt-2 flex flex-col">\r
				<div class="text-lg mb-2" id="whoobe-ok8ky">\r
					<b>whoobeOne</b>\r
				</div>\r
				<div class="text-xs" id="whoobe-aacik" style="font-family: Barlow;">is a free and open source project<div>created by Antonio Nardone</div>\r
			</div>\r
			<div class="text-xs" id="whoobe-uyd8q">\r
				<div>\r
					<br>\r
					</div>MIT License - 2021</div>\r
				</div>\r
				<div id="whoobe-i88ku" class="text-center items-center justify-center flex flex-col">\r
					<div class="text-sm" id="whoobe-64rak">\r
						<div>made with</div>\r
					</div>\r
					<div id="whoobe-2rach" class="my-2 flex">\r
						<span id="whoobe-kdlyv" class="z-highest w-auto h-auto text-2xl mx-2" mode="render" block="">\r
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--akar-icons">\r
								<g fill="none">\r
									<path d="M19.114 2H15l-3 4.9L9.429 2H0l12 21L24 2h-4.886zM3 3.75h2.914L12 14.6l6.086-10.85H21L12 19.5L3 3.75z" fill="currentColor">\r
									</path>\r
								</g>\r
							</svg>\r
						</span>\r
						<span id="whoobe-y6cip" class="z-highest w-auto h-auto text-2xl mx-2" mode="render" block="">\r
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--bx">\r
								<path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51z" fill="currentColor">\r
								</path>\r
							</svg>\r
						</span>\r
						<span id="whoobe-l2405" class="z-highest w-auto h-auto text-2xl mx-2" mode="render" block="">\r
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--ci">\r
								<g fill="none">\r
									<path d="M21 21H3V3h18v18zM9.1 17.232l-1.368.844c.213.468.559.863.994 1.137c.473.271 1.01.41 1.555.4c.286-.002.57-.035.849-.1a2.108 2.108 0 0 0 1.358-1.058c.28-.66.384-1.382.3-2.094v-.415c.005-1.027 0-2.072 0-3.084v-1.593H11.1v4.897c.05.5.014 1.003-.107 1.49a.786.786 0 0 1-.759.422a1.43 1.43 0 0 1-.416-.063a1.43 1.43 0 0 1-.623-.641l-.033-.056c-.031-.053-.052-.09-.062-.09v.004zm5.949-.2l-1.373.787c.112.246.268.47.458.662c.047.052.1.108.149.17c.671.6 1.549.918 2.449.887a2.63 2.63 0 0 0 2.7-1.641v-.008c.114-.4.132-.82.053-1.228l.034.049c-.148-.929-.821-1.574-2.252-2.155c-.111-.052-.226-.1-.338-.15c-.445-.192-.865-.372-1.011-.7a.886.886 0 0 1-.034-.529a.762.762 0 0 1 .808-.543c.111 0 .222.016.329.048c.33.11.595.357.732.676c.775-.507.775-.507 1.316-.844a3.247 3.247 0 0 0-.439-.586a2.466 2.466 0 0 0-2-.776h-.12l-.528.067a2.435 2.435 0 0 0-1.283.754a2.354 2.354 0 0 0 .427 3.354c.438.3.91.546 1.407.733c.641.27 1.194.5 1.306.921a.811.811 0 0 1-.135.707a1.3 1.3 0 0 1-1.027.37a2.58 2.58 0 0 1-.313-.02a1.977 1.977 0 0 1-1.317-1.008l.002.003z" fill="currentColor">\r
									</path>\r
								</g>\r
							</svg>\r
						</span>\r
						<span id="whoobe-vx2oj" class="z-highest w-auto h-auto text-2xl mx-2" mode="render" block="">\r
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--simple-icons">\r
								<path d="M24 12l-5.72 5.746l-5.724-5.741l5.724-5.75L24 12zM5.72 6.254L0 12l5.72 5.746h11.44L5.72 6.254z" fill="currentColor">\r
								</path>\r
							</svg>\r
						</span>\r
					</div>\r
				</div>\r
			</div>\r
		</div>`,fonts:["Barlow+Condensed","Montserrat","Barlow"],title:"WhoobeOne",description:"In browser app to design TailwindCSS components without coding with a WYSIWYG editor",animations:[],tags:"tailwindcss,html blocks editor",analytics:"G-4XJVPYXZZV"},o=.7;r.registerEffect({name:"scale",effect:(e,t)=>r.fromTo(e,{scale:0,opacity:0},{scale:1,opacity:1,duration:t.duration,ease:t.ease,delay:t.delay}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"scale-out",effect:(e,t)=>r.fromTo(e,{scale:1},{scale:1.1,opacity:1,duration:t.duration,ease:t.ease,delay:t.delay}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"scale-in",effect:(e,t)=>r.fromTo(e,{scale:2,opacity:0},{scale:1,opacity:1,duration:t.duration,ease:t.ease,delay:t.delay}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"fade",effect:(e,t)=>r.fromTo(e,{opacity:0},{opacity:1,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"rotate-scale",effect:(e,t)=>r.fromTo(e,{opacity:0,scale:.5,x:300},{duration:t.duration,opacity:1,scale:1,rotation:360,x:0,ease:t.ease,delay:t.delay}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"rotate",effect:(e,t)=>r.to(e,{rotationX:360,opacity:1,scale:1,duration:t.duration,ease:t.ease}),defaults:{duration:o},extendTimeline:!0});r.registerEffect({name:"flip-x",effect:(e,t)=>r.fromTo(e,{opacity:0},{rotationX:360,opacity:1,scale:1,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"flip-y",effect:(e,t)=>r.fromTo(e,{opacity:0},{rotationY:360,opacity:1,scale:1,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"rotate-hover",effect:(e,t)=>r.fromTo(e,{opacity:.4,scaleX:2,rotationX:90},{rotationX:360,opacity:1,scale:1,duration:1,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"slide-left",effect:(e,t)=>r.fromTo(e,{autoAlpha:0,x:300},{autoAlpha:1,x:0,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"slide-right",effect:(e,t)=>r.fromTo(e,{autoAlpha:0,x:-300},{autoAlpha:1,x:0,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"slide-top",effect:(e,t)=>r.fromTo(e,{autoAlpha:0,y:200},{autoAlpha:1,y:0,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"slide-down",effect:(e,t)=>r.fromTo(e,{autoAlpha:0,y:-200},{autoAlpha:1,y:0,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"grow-width",effect:(e,t)=>r.fromTo(e,{opacity:0,x:"100%"},{opacity:1,x:0,duration:t.duration,delay:t.delay,ease:t.ease,clearProps:"opacity"}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"width-reverse",effect:(e,t)=>r.fromTo(e,{opacity:0,x:"100%",width:0},{opacity:1,x:0,width:"100%",duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"close-left",effect:(e,t)=>r.fromTo(e,{scaleX:1,width:"100%",height:"100%"},{scaleX:0,transformOrigin:"0% 100%",duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"close-right",effect:(e,t)=>r.fromTo(e,{x:0},{x:"100%",duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:0,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"growh-eight",effect:(e,t)=>r.fromTo(e,{autoAlpha:1,scaleY:0},{autoAlpha:1,scaleY:1,duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:1,ease:"power1"},extendTimeline:!0});r.registerEffect({name:"rotate-3DY",effect:(e,t)=>r.fromTo(e,{opacity:1},{opacity:1,rotateY:"28deg",transformPerspective:"80vw",duration:t.duration,delay:t.delay,ease:t.ease}),defaults:{duration:o,delay:1,ease:"power1"},extendTimeline:!0});r.registerPlugin(u);document.body.innerHTML=n.html;const x=document.querySelector(".whoobe-slider");var p=document.head;if(n.fonts.length){var c=document.createElement("link");c.type="text/css",c.rel="stylesheet",c.href="https://fonts.googleapis.com/css?family="+n.fonts.join("|"),p.appendChild(c)}try{var m=document.createElement("meta");m.name="keywords",m.setAttribute("content",n.tags),p.appendChild(m)}catch(e){console.log(e)}n.animations&&n.animations.forEach(e=>{let t=document.querySelector("#"+e.id);console.log(e);let i=r.effects[e.gsap.animation](t,{trigger:t,duration:parseFloat(e.gsap.duration),delay:parseFloat(e.gsap.delay),ease:e.gsap.ease});u.create({id:e.id,start:"top 99.99%",trigger:t,toggleActions:"play pause restart none",animation:i,onEnter:()=>{e.gsap.delay?i.play():i.play(0)}})});try{document.title=n.title}catch(e){console.log(e)}try{var w=document.createElement("meta");w.name="description",w.setAttribute("content",n.description),p.appendChild(w)}catch(e){console.log(e)}try{var s=0;let e=parseInt(x.getAttribute("slides")),t=document.querySelector(".slider-next"),i=document.querySelector(".slider-prev"),d=new f(x,{swipe:l=>{l.direction==="Left"&&(s<e&&(s=s+1),t.click()),l.direction==="Right"&&(s>0&&(s=s-1),i.click())},doubleTap:l=>{t.click()}})}catch(e){console.log("No slider found")}
