// Theme Toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
function updateThemeIcon(theme) {
	if (theme === 'dark') {
		themeIcon.className = 'fas fa-sun';
	} else {
		themeIcon.className = 'fas fa-moon';
	}
}

// Initialize icon
updateThemeIcon(currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

	document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	updateThemeIcon(newTheme);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});
// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach((n) =>
	n.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	})
);

// Animate skill bars on scroll
function animateSkillBars() {
	const skillBars = document.querySelectorAll('.skill-bar');

	skillBars.forEach((bar) => {
		const rect = bar.getBoundingClientRect();
		const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

		if (isVisible && !bar.classList.contains('animate')) {
			const level = bar.getAttribute('data-level');
			bar.style.setProperty('--skill-level', level + '%');
			bar.classList.add('animate');
			bar.style.width = level + '%';
		}
	});
}

// Scroll event listeners
window.addEventListener('scroll', () => {
	animateSkillBars();
});

// Add typing animation to hero title
function typeWriter(element, text, speed = 100) {
	let i = 0;
	element.innerHTML = '';

	function typing() {
		if (i < text.length) {
			element.innerHTML += text.charAt(i);
			i++;
			setTimeout(typing, speed);
		}
	}

	typing();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
	const heroTitle = document.querySelector('.hero-title');
	const originalText = heroTitle.textContent;
	typeWriter(heroTitle, originalText, 50);
});

console.log('Portfolio website loaded successfully!');
console.log('Theme system active - toggle between light and dark modes');
console.log('All interactive features initialized');
