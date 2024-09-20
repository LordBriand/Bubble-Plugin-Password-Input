function(instance, context) {

    const id = Date.now()*Math.random()*1000;
	instance.data.isVisible = false;
    
instance.canvas.html(`<div class="password-input-container" id="${id}">
			<input type="password" id="password" class="password-input" placeholder="Enter your password" aria-describedby="password-requirements" />
			<button type="button" id="toggle-password" class="toggle-password" aria-label="Show password">
				<svg
					class="eye-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
					<circle cx="12" cy="12" r="3"></circle>
				</svg>
				<svg
					class="eye-off-icon hidden"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
					></path>
					<line x1="1" y1="1" x2="23" y2="23"></line>
				</svg>
			</button>
		</div>`);
    
    const baseContainer = document.getElementById(id);

	const passwordInput = baseContainer.querySelector("#password");
    const togglePassword = baseContainer.querySelector("#toggle-password");
    const eyeIcon = baseContainer.querySelector(".eye-icon");
    const eyeOffIcon = baseContainer.querySelector(".eye-off-icon");
   
    
    
 //BRIAND debut
     

    // Fonction pour évaluer la force du mot de passe
    function passwordStrength(pwd) {
        let strength = 0;
        const is_not_empty = pwd.trim() !== "";
        const is_long_enough = pwd.length >= 8;
        const has_uppercase = /[A-Z]/.test(pwd);
        const has_number = /[0-9]/.test(pwd);
        const has_non_alphanumeric = /[^a-zA-Z0-9]/.test(pwd);
        const tests = [is_not_empty, is_long_enough, has_uppercase, has_number, has_non_alphanumeric];
        
        const weights = [10, 35, 20, 10, 25];
        
        for (let i = 0; i < tests.length; i++) {
            if (tests[i]) {
                strength += weights[i];
            }
        }
        
        return strength;
    }

    // Fonction pour mettre à jour le style en fonction de la force du mot de passe
    function updatePasswordStrengthStyle(strength) {
        passwordInput.classList.remove('strength-weak', 'strength-medium', 'strength-strong', 'strength-very-strong');
        
        if (strength <= 25) {
            passwordInput.classList.add('strength-weak');
        } else if (strength <= 50) {
            passwordInput.classList.add('strength-medium');
        } else if (strength <= 75) {
            passwordInput.classList.add('strength-strong');
        } else {
            passwordInput.classList.add('strength-very-strong');
        }
    }

    // Fonction pour valider le mot de passe
    function validatePassword() {
        const strength = passwordStrength(passwordInput.value);
        updatePasswordStrengthStyle(strength);
        instance.publishState('strength', strength);
        instance.publishState('value', passwordInput.value);
    }

    passwordInput.addEventListener("input", validatePassword);

    // Gestion du basculement de la visibilité
    togglePassword.addEventListener('click', function() {
    instance.data.isVisible = !instance.data.isVisible;
    passwordInput.type = instance.data.isVisible ? 'text' : 'password';
    eyeIcon.classList.toggle('hidden');
    eyeOffIcon.classList.toggle('hidden');
    instance.publishState('is_visible', instance.data.isVisible);
	});

    // Méthode pour obtenir la valeur actuelle
    instance.expose.getValue = function() {
        return passwordInput.value;
    };

    // Méthode pour définir la valeur
    instance.expose.setValue = function(value) {
        passwordInput.value = value;
        validatePassword();
    };

    // Méthode pour obtenir la force du mot de passe
    instance.expose.getStrength = function() {
        return passwordStrength(passwordInput.value);
    };

    // Initialisation
    validatePassword();
    instance.publishState('is_visible', false);
}
  

// BRIAND fin
      
    
    
    
    
    
    
    
    
    
    
    
    
    