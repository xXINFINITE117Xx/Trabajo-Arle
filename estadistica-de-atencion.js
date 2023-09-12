let totalUsuarios = 0;
        let terminalEstudiantes = 0;
        let terminalDocentes = 0;
        let oficinaEstudiantes = 0;
        let oficinaDocentes = 0;
        let transferenciaTerminalToOficina = 0;
        let transferenciaOficinaToTerminal = 0;
        let moduloActual = "terminal";

        function registrarAtencion(modulo, tipoUsuario) {
            if (modulo === "terminal") {
                if (tipoUsuario === "estudiante") {
                    terminalEstudiantes++;
                } else if (tipoUsuario === "docente") {
                    terminalDocentes++;
                }
            } else if (modulo === "oficina") {
                if (tipoUsuario === "estudiante") {
                    oficinaEstudiantes++;
                } else if (tipoUsuario === "docente") {
                    oficinaDocentes++;
                }
            }

            totalUsuarios++;
            actualizarEstadisticas();
        }

        function trasferirAtencion() {
            if (moduloActual === "terminal") {
                transferenciaTerminalToOficina++;
                moduloActual = "oficina";
            } else if (moduloActual === "oficina") {
                transferenciaOficinaToTerminal++;
                moduloActual = "terminal";
            }

            actualizarEstadisticas();
        }

        function actualizarEstadisticas() {
            document.getElementById("totalUsuarios").textContent = totalUsuarios;
            document.getElementById("terminalEstudiantes").textContent = terminalEstudiantes;
            document.getElementById("terminalDocentes").textContent = terminalDocentes;
            document.getElementById("oficinaEstudiantes").textContent = oficinaEstudiantes;
            document.getElementById("oficinaDocentes").textContent = oficinaDocentes;
            document.getElementById("transferenciaTerminalToOficina").textContent = transferenciaTerminalToOficina;
            document.getElementById("transferenciaOficinaToTerminal").textContent = transferenciaOficinaToTerminal;
        }