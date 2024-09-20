function(instance, properties) {
    
	instance.canvas.html(`
<style>
			.password-input-container,
			.password-input-container * {
				box-sizing: border-box;
			}
			.password-input-container {
				position: relative;
				width: 100%;
				min-width: 150px;
				padding: 0;
			}
			.password-input {
				width: 100%;
				padding: 10px 50px 10px 10px;
				font-size: 16px;
				border: 2px solid #ccc;
				border-radius: 4px;
				transition: all 0.3s ease;
			}
			.password-input:hover {
				border-color: #999;
			}
			.password-input:focus {
				outline: none;
				border-color: #007bff;
				box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
			}



			.password-input.strength-weak {
                border-color: #dc3545;
                box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.25);
            }
            .password-input.strength-medium {
                border-color: #ffc107;
                box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.25);
            }
            .password-input.strength-strong {
                border-color: #28a745;
                box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.25);
            }
            .password-input.strength-very-strong {
                border-color: #007bff;
                box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
            }



			.toggle-password {
				position: absolute;
				right: 10px;
				top: 50%;
				transform: translateY(-50%);
				background: none;
				border: none;
				cursor: pointer;
				color: #666;
			}
			.toggle-password:hover,
			.toggle-password:focus {
				color: #333;
				outline: none;
			}
			.eye-icon,
			.eye-off-icon {
				box-sizing: content-box;
				width: 24px;
				height: 24px;
			}
			.hidden {
				display: none;
			}
</style>

<div class="password-input-container">
			<input type="password" id="password" class="password-input" placeholder="${properties.placeholder ? properties.placeholder : "Enter your password"}" aria-describedby="password-requirements" />
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
			</button>
		</div>`);
}