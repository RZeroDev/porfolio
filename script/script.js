
        document.getElementById('menu-toggle').addEventListener('change', function() {
            if (this.checked) {
                document.getElementById('overlay').classList.remove('hidden');
            } else {
                document.getElementById('overlay').classList.add('hidden');
            }
        });

        document.getElementById('overlay').addEventListener('click', function() {
            document.getElementById('menu-toggle').checked = false;
            this.classList.add('hidden');
        });
 