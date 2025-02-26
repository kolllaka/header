class ThemePicker {
	constructor($el, themeArray = []) {
		this.$element = $el
		this.themeArray = themeArray

		this.initTheme()
	}

	initTheme() {
		const themeName = localStorage.getItem('theme');
		this.changeTheme(themeName)

		this.$element.addEventListener('click', () => {
			const themeName = localStorage.getItem('theme');
			const newThemeName = this.nextTheme(themeName)

			this.changeTheme(newThemeName)

			localStorage.setItem('theme', newThemeName);
		})
	}

	changeTheme(themeName) {
		if (!themeName) {
			themeName = this.themeArray[0]
		}

		document.documentElement.dataset.theme = themeName
	}

	nextTheme(themeName) {
		const index = this.themeArray.findIndex(name => name === themeName)

		return this.themeArray[(index + 1) % this.themeArray.length]
	}
}