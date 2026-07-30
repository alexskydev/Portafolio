(function () {
	"use strict";

	var translations = {
		es: {
			nav_home: "Inicio",
			nav_about: "Sobre mí",
			nav_skills: "Habilidades",
			nav_experience: "Experiencia",
			nav_portfolio: "Portafolio",
			nav_education: "Educación",
			nav_contact: "Contáctame",
			intro_web_1: "WEB DEVELOPMENT",
			intro_web_2: "FULL STACK",
			intro_ui_1: "UI/UX DESIGNING",
			intro_ui_2: "CREATIVE DESIGN",
			intro_app_1: "APP DEVELOPMENT",
			intro_app_2: "MOBILE & WEB APPS",
			intro_experience_label: "EXPERIENCIA",
			intro_experience_value: "+5 Años",
			btn_download_cv: "Descargar CV",
			about_title: "Sobre mí",
			about_subtitle: "VISIÓN PROFESIONAL",
			about_text:
				"Soy una persona preocupada por las facetas del proceso de desarrollo de software, incluyendo el análisis, el diseño, la programación y las pruebas de software. Desarrollando programas que sean rápidos, versátiles y eficientes, cuyo objetivo es hacer que el software funcione de manera más eficiente. Me gusta trabajar en equipo, aprender y compartir conocimientos. Me considero una persona reflexiva ante las nuevas metodologías, con alto sentido de pertenencia y manejo de información de datos, contribuyendo al logro de metas corporativas y un mejor desempeño.",
			skills_title: "Habilidades",
			skills_subtitle: "MISIÓN PROFESIONAL",
			experience_title: "Experiencia Laboral",
			experience_subtitle: "TRABAJOS ANTERIORES",
			exp1_role: "SOFTWARE ENGINEER",
			exp1_date: "Octubre 2022 - Junio 2026",
			exp1_location: "SAN FRANCISCO - CALIFORNIA | En remoto",
			exp2_role: "SOFTWARE DEVELOPER",
			exp2_date: "Mayo 2021 - Mayo 2022",
			exp2_location: "MEDELLÍN - ANTIOQUIA | En remoto",
			exp3_role: "DESARROLLADOR JUNIOR",
			exp3_date: "Septiembre 2020 - Enero 2021",
			exp3_location: "ENVIGADO - ANTIOQUIA | Presencial",
			exp4_role: "DESARROLLADOR WEB",
			exp4_date: "Noviembre 2018 - Agosto 2020",
			exp4_location: "ENVIGADO - ANTIOQUIA | Presencial",
			exp5_role: "SOPORTE TÉCNICO",
			exp5_date: "Febrero 2016 - Septiembre 2018",
			exp5_location: "MEDELLÍN - ANTIOQUIA | Presencial",
			quote_title: "No hay secreto para el éxito",
			quote_body:
				'<b>Es el resultado de preparación, <span class="font-yellow">perseverancia</span> y aprender de los errores.</b>',
			portfolio_title: "Portafolio",
			portfolio_subtitle: "MI TRABAJO",
			education_title: "Educación",
			education_subtitle: "CARRERA ACADÉMICA",
			edu1_title: "TECNOLOGÍA EN DESARROLLO DE SOFTWARE Y APLICATIVOS MÓVILES",
			edu1_date: "2026 - Actualidad",
			edu2_title: "TÉCNICO LABORAL EN SISTEMAS",
			edu3_title: "BACHILLER ACADÉMICO",
			edu4_title: "BÁSICA PRIMARIA",
			courses_title: "Cursos",
			courses_subtitle: "FORMACIÓN PARTICULAR",
			course1_title: "INTERNET Y ESTRATEGIAS DE DISEÑO DE PÁGINAS WEB",
			course2_title: "PROGRAMACIÓN EN PHP",
			course3_title: "DESARROLLO WEB",
			course10_title: "BASES DE DATOS",
			label_virtual: "VIRTUAL",
			btn_download_cert: "Descargar Certificado",
			contact_title: "Contáctame",
			contact_subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
			contact_direct: "💬 Contáctame directamente",
			contact_choose: "Elige tu método preferido de comunicación",
			contact_social: "📱 Sígueme en redes sociales",
			footer_rights: "Todos los derechos reservados",
			email_subject: "Hola desde tu portafolio",
			email_body: "Hola Alex, me interesa tu trabajo...",
			whatsapp_text: "Hola Alex, vi tu portafolio y me interesa tu trabajo...",
			intro_hello: "Hola, soy:",
			typing_roles: [
				"Software Developer",
				"Web Developer",
				"Full Stack Developer",
				"UI/UX Designer",
				"Mobile App Developer"
			]
		},
		en: {
			nav_home: "Home",
			nav_about: "About",
			nav_skills: "Skills",
			nav_experience: "Experience",
			nav_portfolio: "Portfolio",
			nav_education: "Education",
			nav_contact: "Contact",
			intro_web_1: "WEB DEVELOPMENT",
			intro_web_2: "FULL STACK",
			intro_ui_1: "UI/UX DESIGNING",
			intro_ui_2: "CREATIVE DESIGN",
			intro_app_1: "APP DEVELOPMENT",
			intro_app_2: "MOBILE & WEB APPS",
			intro_experience_label: "EXPERIENCE",
			intro_experience_value: "+5 Years",
			btn_download_cv: "Download CV",
			about_title: "About Me",
			about_subtitle: "PROFESSIONAL VISION",
			about_text:
				"I care deeply about every stage of the software development process, including analysis, design, programming, and testing. I build fast, versatile, and efficient applications with the goal of making software work better. I enjoy teamwork, learning, and sharing knowledge. I consider myself thoughtful about new methodologies, with a strong sense of ownership and data awareness, contributing to corporate goals and better performance.",
			skills_title: "Skills",
			skills_subtitle: "PROFESSIONAL MISSION",
			experience_title: "Work Experience",
			experience_subtitle: "PREVIOUS ROLES",
			exp1_role: "SOFTWARE ENGINEER",
			exp1_date: "October 2022 - June 2026",
			exp1_location: "SAN FRANCISCO - CALIFORNIA | Remote",
			exp2_role: "SOFTWARE DEVELOPER",
			exp2_date: "May 2021 - May 2022",
			exp2_location: "MEDELLÍN - ANTIOQUIA | Remote",
			exp3_role: "JUNIOR DEVELOPER",
			exp3_date: "September 2020 - January 2021",
			exp3_location: "ENVIGADO - ANTIOQUIA | On-site",
			exp4_role: "WEB DEVELOPER",
			exp4_date: "November 2018 - August 2020",
			exp4_location: "ENVIGADO - ANTIOQUIA | On-site",
			exp5_role: "TECHNICAL SUPPORT",
			exp5_date: "February 2016 - September 2018",
			exp5_location: "MEDELLÍN - ANTIOQUIA | On-site",
			quote_title: "There is no secret to success",
			quote_body:
				'<b>It is the result of preparation, <span class="font-yellow">perseverance</span> and learning from mistakes.</b>',
			portfolio_title: "Portfolio",
			portfolio_subtitle: "MY WORK",
			education_title: "Education",
			education_subtitle: "ACADEMIC PATH",
			edu1_title: "SOFTWARE DEVELOPMENT AND MOBILE APPS TECHNOLOGY",
			edu1_date: "2026 - Present",
			edu2_title: "TECHNICAL CERTIFICATE IN SYSTEMS",
			edu3_title: "HIGH SCHOOL DIPLOMA",
			edu4_title: "PRIMARY EDUCATION",
			courses_title: "Courses",
			courses_subtitle: "ADDITIONAL TRAINING",
			course1_title: "INTERNET AND WEB DESIGN STRATEGIES",
			course2_title: "PHP PROGRAMMING",
			course3_title: "WEB DEVELOPMENT",
			course10_title: "DATABASES",
			label_virtual: "ONLINE",
			btn_download_cert: "Download Certificate",
			contact_title: "Contact Me",
			contact_subtitle: "Have a project in mind? Let's talk!",
			contact_direct: "💬 Contact me directly",
			contact_choose: "Choose your preferred way to get in touch",
			contact_social: "📱 Follow me on social media",
			footer_rights: "All rights reserved",
			email_subject: "Hello from your portfolio",
			email_body: "Hi Alex, I'm interested in your work...",
			whatsapp_text: "Hi Alex, I saw your portfolio and I'm interested in your work...",
			intro_hello: "Hi, I'm:",
			typing_roles: [
				"Software Developer",
				"Web Developer",
				"Full Stack Developer",
				"UI/UX Designer",
				"Mobile App Developer"
			]
		}
	};

	function getLang() {
		return localStorage.getItem("lang") || "es";
	}

	function setLang(lang) {
		localStorage.setItem("lang", lang);
	}

	function applyContactLinks(lang) {
		var t = translations[lang];
		var emailBtn = document.getElementById("contactEmailBtn");
		var whatsappBtn = document.getElementById("contactWhatsappBtn");

		if (emailBtn) {
			emailBtn.href =
				"mailto:alexjw2009@outlook.com?subject=" +
				encodeURIComponent(t.email_subject) +
				"&body=" +
				encodeURIComponent(t.email_body);
		}

		if (whatsappBtn) {
			whatsappBtn.href =
				"https://wa.me/573013739383?text=" + encodeURIComponent(t.whatsapp_text);
		}
	}

	function applyLanguage(lang) {
		var t = translations[lang];
		if (!t) return;

		document.documentElement.lang = lang;

		document.querySelectorAll("[data-i18n]").forEach(function (el) {
			var key = el.getAttribute("data-i18n");
			if (typeof t[key] === "string") {
				el.textContent = t[key];
			}
		});

		document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
			var key = el.getAttribute("data-i18n-html");
			if (typeof t[key] === "string") {
				el.innerHTML = t[key];
			}
		});

		applyContactLinks(lang);

		var label = document.getElementById("langToggleLabel");
		if (label) {
			label.textContent = lang === "es" ? "EN" : "ES";
		}

		var toggle = document.getElementById("langToggle");
		if (toggle) {
			toggle.setAttribute(
				"aria-label",
				lang === "es" ? "Switch to English" : "Cambiar a Español"
			);
		}

		if (typeof window.restartTypingEffect === "function") {
			window.restartTypingEffect({
				hello: t.intro_hello,
				name: "Alexander Narváez",
				roles: t.typing_roles
			});
		}
	}

	function initializeLanguage() {
		var langToggle = document.getElementById("langToggle");
		var currentLang = getLang();

		applyLanguage(currentLang);

		if (!langToggle) return;

		langToggle.addEventListener("click", function () {
			var nextLang = getLang() === "es" ? "en" : "es";
			setLang(nextLang);
			applyLanguage(nextLang);
		});
	}

	document.addEventListener("DOMContentLoaded", function () {
		initializeLanguage();
	});

	window.I18n = {
		getLang: getLang,
		applyLanguage: applyLanguage,
		translations: translations
	};
})();
