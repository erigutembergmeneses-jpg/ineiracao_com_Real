// ===== SISTEMA DO AGENTE RAEL =====
// Arquivo: NV-28-GAMMA
// Status: Ativo com restrições / Infiltrado não oficial

class SistemaAgenteRael {
    constructor() {
        this.modulosAtivos = new Set();
        this.historicoComunicacao = [];
        this.riscoExposicao = 63;
        this.respostasRael = this.inicializarRespostas();
        
        this.elementos = {
            scanner: document.getElementById('scanner'),
            interface: document.getElementById('interface'),
            botoesSistema: document.querySelectorAll('.botao-sistema'),
            modulos: document.querySelectorAll('.modulo-dados'),
            entradaInterrogatorio: document.getElementById('entrada-interrogatorio'),
            botaoEnviar: document.getElementById('botao-enviar'),
            areaMensagens: document.getElementById('area-mensagens'),
            botoesSugestao: document.querySelectorAll('.botao-sugestao'),
            botaoRevelar: document.getElementById('revelar-relatorio'),
            relatorioPsicometrico: document.getElementById('relatorio-psicometrico'),
            opcoesEscolha: document.querySelectorAll('.opcao-escolha'),
            resultadoDecisao: document.getElementById('resultado-decisao'),
            valorRisco: document.getElementById('valor-risco'),
            botaoAumentarRisco: document.getElementById('aumentar-risco'),
            pontosRisco: document.querySelectorAll('.ponto[data-nivel]'),
            audioScan: document.getElementById('audio-scan'),
            audioTeclado: document.getElementById('audio-teclado')
        };
        
        this.iniciarSistema();
    }
    
    inicializarRespostas() {
        return {
            'ai17': [
                "O AI-17... Supressão emocional total. Recusei porque já tinha visto o que a neutralidade absoluta faz.",
                "Não foi uma recusa. Foi um atraso no processamento. O sistema registrou como 'contaminação em trânsito'.",
                "O frasco ainda está no armazém. Com um rótulo alterado. Pequenas sabotagens, grandes silêncios."
            ],
            'audios': [
                "Os áudios oníricos... Eles não eram dados. Eram presença. Alguém ainda sonhava dentro do sistema.",
                "Ouvi algo que não deveria existir: emoção pura, não filtrada, não analisada. Apenas... sendo.",
                "Foi um milissegundo de hesitação. O suficiente para perceber que o que monitorávamos não era ruído. Era vida."
            ],
            'rosa': [
                "A cor rosa... Não está no espectro oficial. Não aparece em relatórios. É minha única assinatura pessoal.",
                "É a cor que não era usada em nenhum protocolo. Tornou-se meu código pessoal de resistência.",
                "No caderno rosa, escrevo o que o sistema não pode processar: intuição, hesitação, humanidade."
            ],
            'medo': [
                "Medo? O medo é um luxo que agentes de contenção não têm. Temos... avaliação de risco.",
                "Ser descoberto significaria reclassificação. Mas já fui reclassificado uma vez, aos doze anos. Sobrevivi.",
                "O verdadeiro medo não é a exposição. É continuar neutro quando você sabe que deveria sentir."
            ],
            'transformacao': [
                "Não me transformei. Apenas parei de fingir que não tinha se transformado anos atrás.",
                "A queda do meu pai plantou uma semente. Levei quinze anos para regá-la.",
                "De agente do controle a testemunha silenciosa. Não é evolução. É reconhecimento."
            ],
            'resistencia': [
                "A resistência não grita. Ela ressoa. E eu comecei a escutar.",
                "Minha sabotagem é silenciosa. Logs apagados, frascos recusados, hesitações calculadas.",
                "Se o caos for o que nos mantém humanos, então que o caos continue."
            ],
            'geral': [
                "Neutro como os relatórios que redigia. Até deixar de ser.",
                "Eu não chorei desde os doze anos. Até ontem.",
                "Sentir não é fraqueza, filho. É coragem disfarçada.",
                "O que ouvia não era ruído, mas presença."
            ]
        };
    }
    
    iniciarSistema() {
        this.iniciarScanner();
        this.configurarNavegacao();
        this.configurarComunicacao();
        this.configurarInterativos();
        this.configurarAudio();
        
        window.sistemaRaelCarregado = true;
    }
    
    iniciarScanner() {
        const linhas = [
            'scan-line-1',
            'scan-line-2', 
            'scan-line-3',
            'scan-line-4'
        ];
        
        let delay = 0;
        
        linhas.forEach((id, index) => {
            const elemento = document.getElementById(id);
            if (!elemento) return;
            
            const textoOriginal = elemento.textContent;
            elemento.textContent = '';
            elemento.style.overflow = 'hidden';
            elemento.style.whiteSpace = 'nowrap';
            
            setTimeout(() => {
                this.animarDigitacaoScanner(elemento, textoOriginal, () => {
                    if (index === linhas.length - 1) {
                        setTimeout(() => {
                            this.transicionarParaInterface();
                        }, 1500);
                    }
                });
            }, delay);
            
            delay += textoOriginal.length * 40 + 800;
        });
        
        // Efeito de scan das linhas
        const linhasScan = document.querySelectorAll('.linha-scan');
        linhasScan.forEach((linha, i) => {
            linha.style.animationDelay = `${i * 0.5}s`;
        });
    }
    
    animarDigitacaoScanner(elemento, texto, callback) {
        let i = 0;
        const velocidade = 35;
        
        const digitar = () => {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                
                // Efeito sonoro aleatório
                if (i % 4 === 0 && this.elementos.audioTeclado) {
                    this.tocarSomTeclado();
                }
                
                setTimeout(digitar, velocidade + Math.random() * 25);
            } else if (callback) {
                setTimeout(callback, 300);
            }
        };
        
        digitar();
    }
    
    tocarSomTeclado() {
        if (this.elementos.audioTeclado) {
            try {
                this.elementos.audioTeclado.currentTime = 0;
                this.elementos.audioTeclado.play();
            } catch (e) {
                // Som bloqueado, ignorar
            }
        }
    }
    
    transicionarParaInterface() {
        // Efeito de fade do scanner
        this.elementos.scanner.style.opacity = '0';
        this.elementos.scanner.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            this.elementos.scanner.style.display = 'none';
            this.elementos.interface.style.display = 'block';
            
            setTimeout(() => {
                this.elementos.interface.style.opacity = '1';
                this.iniciarAnimacoesInterface();
            }, 100);
        }, 1000);
    }
    
    iniciarAnimacoesInterface() {
        // Animar barras métricas
        this.animarBarrasMetricas();
        
        // Mensagem inicial
        setTimeout(() => {
            this.adicionarMensagem('sistema', 'Canal Rosa estabelecido. Comunicação segura através de frequência emocional residual.');
            
            setTimeout(() => {
                this.adicionarMensagem('rael', 'Você acessou meus registros clandestinos. As respostas são... reconstruções.', true);
            }, 800);
        }, 500);
    }
    
    animarBarrasMetricas() {
        const barras = document.querySelectorAll('.progresso');
        
        barras.forEach((barra, index) => {
            const larguraOriginal = barra.style.width;
            barra.style.width = '0';
            
            setTimeout(() => {
                barra.style.transition = 'width 2s cubic-bezier(0.2, 0.8, 0.2, 1)';
                barra.style.width = larguraOriginal;
            }, 300 * index);
        });
    }
    
    configurarNavegacao() {
        this.elementos.botoesSistema.forEach(botao => {
            botao.addEventListener('click', () => {
                const moduloId = botao.getAttribute('data-modulo');
                this.mudarModulo(moduloId);
            });
        });
    }
    
    mudarModulo(moduloId) {
        // Atualizar botões
        this.elementos.botoesSistema.forEach(b => b.classList.remove('ativo'));
        document.querySelector(`[data-modulo="${moduloId}"]`).classList.add('ativo');
        
        // Atualizar conteúdo
        this.elementos.modulos.forEach(m => m.classList.remove('ativo'));
        document.getElementById(`modulo-${moduloId}`).classList.add('ativo');
        
        // Registrar acesso
        this.modulosAtivos.add(moduloId);
        
        // Efeitos específicos
        switch(moduloId) {
            case 'trauma':
                this.atualizarPontosRisco(2);
                break;
            case 'transformacao':
                this.atualizarPontosRisco(4);
                break;
            case 'operacoes':
                this.atualizarPontosRisco(5);
                this.adicionarMensagem('rael', 'Operações clandestinas... Pequenas sabotagens que somam grandes silêncios.');
                break;
        }
    }
    
    atualizarPontosRisco(nivel) {
        this.elementos.pontosRisco.forEach(ponto => {
            ponto.classList.remove('ativo');
            const pontoNivel = parseInt(ponto.getAttribute('data-nivel'));
            if (pontoNivel <= nivel) {
                ponto.classList.add('ativo');
            }
        });
    }
    
    configurarComunicacao() {
        // Enter para enviar
        this.elementos.entradaInterrogatorio.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.enviarPergunta();
            }
        });
        
        // Botão enviar
        this.elementos.botaoEnviar.addEventListener('click', () => this.enviarPergunta());
        
        // Sugestões
        this.elementos.botoesSugestao.forEach(botao => {
            botao.addEventListener('click', () => {
                const pergunta = botao.getAttribute('data-pergunta');
                this.elementos.entradaInterrogatorio.value = pergunta;
                this.enviarPergunta();
            });
        });
    }
    
    enviarPergunta() {
        const pergunta = this.elementos.entradaInterrogatorio.value.trim();
        if (!pergunta) return;
        
        // Adicionar pergunta
        this.adicionarMensagem('usuario', pergunta);
        this.elementos.entradaInterrogatorio.value = '';
        
        // Processar resposta
        setTimeout(() => {
            const resposta = this.processarPergunta(pergunta);
            this.adicionarMensagem('rael', resposta, true);
            
            // Aumentar risco ligeiramente
            this.atualizarRisco(1);
        }, 1000);
    }
    
    processarPergunta(texto) {
        const textoLower = texto.toLowerCase();
        let categoria = 'geral';
        
        // Mapear categorias
        if (textoLower.includes('ai-17') || textoLower.includes('frasco') || textoLower.includes('recus')) {
            categoria = 'ai17';
        } else if (textoLower.includes('áudio') || textoLower.includes('audio') || textoLower.includes('onírico') || textoLower.includes('ouvir')) {
            categoria = 'audios';
        } else if (textoLower.includes('rosa') || textoLower.includes('cor') || textoLower.includes('caderno')) {
            categoria = 'rosa';
        } else if (textoLower.includes('medo') || textoLower.includes('descobert') || textoLower.includes('exposiç')) {
            categoria = 'medo';
        } else if (textoLower.includes('transform') || textoLower.includes('mudança') || textoLower.includes('evolu')) {
            categoria = 'transformacao';
        } else if (textoLower.includes('resistência') || textoLower.includes('sabotagem') || textoLower.includes('clandestin')) {
            categoria = 'resistencia';
        }
        
        // Selecionar resposta
        const respostas = this.respostasRael[categoria];
        return respostas[Math.floor(Math.random() * respostas.length)];
    }
    
    adicionarMensagem(remetente, texto, comDigitacao = false) {
        const mensagemDiv = document.createElement('div');
        mensagemDiv.className = `mensagem ${remetente}`;
        
        const cabecalho = document.createElement('div');
        cabecalho.className = 'cabecalho-msg';
        cabecalho.textContent = remetente === 'rael' ? 'RAEL' : 
                               remetente === 'sistema' ? 'SISTEMA' : 'INTERROGADOR';
        
        const corpo = document.createElement('div');
        corpo.className = 'corpo-msg';
        
        mensagemDiv.appendChild(cabecalho);
        mensagemDiv.appendChild(corpo);
        this.elementos.areaMensagens.appendChild(mensagemDiv);
        
        // Scroll
        this.elementos.areaMensagens.scrollTop = this.elementos.areaMensagens.scrollHeight;
        
        // Histórico
        this.historicoComunicacao.push({
            remetente,
            texto,
            timestamp: new Date()
        });
        
        // Animação
        if (comDigitacao) {
            this.simularDigitacao(corpo, texto);
        } else {
            corpo.textContent = texto;
        }
        
        // Limitar histórico
        if (this.elementos.areaMensagens.children.length > 15) {
            this.elementos.areaMensagens.removeChild(this.elementos.areaMensagens.firstChild);
        }
    }
    
    simularDigitacao(elemento, texto) {
        elemento.classList.add('texto-digitando');
        let i = 0;
        
        const digitar = () => {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                
                // Efeito sonoro ocasional
                if (i % 5 === 0) {
                    this.tocarSomTeclado();
                }
                
                setTimeout(digitar, 40 + Math.random() * 50);
            } else {
                elemento.classList.remove('texto-digitando');
            }
        };
        
        elemento.textContent = '';
        setTimeout(digitar, 200);
    }
    
    configurarInterativos() {
        // Botão revelar relatório
        if (this.elementos.botaoRevelar) {
            this.elementos.botaoRevelar.addEventListener('click', () => {
                this.elementos.relatorioPsicometrico.classList.toggle('ativo');
                this.adicionarMensagem('rael', 'Meu relatório psicométrico... Os números nunca contam a história completa.');
            });
        }
        
        // Simulador de decisão
        this.elementos.opcoesEscolha.forEach(opcao => {
            opcao.addEventListener('click', () => {
                this.elementos.opcoesEscolha.forEach(o => o.classList.remove('ativa'));
                opcao.classList.add('ativa');
                
                const escolha = opcao.getAttribute('data-escolha');
                this.elementos.resultadoDecisao.textContent = 
                    escolha === 'neutralizar' 
                    ? 'Rael NÃO escolheu isso. O protocolo foi... adiado indefinidamente.' 
                    : 'Rael escolheu proteger. Não por idealismo, mas por reconhecimento.';
                
                this.elementos.resultadoDecisao.classList.add('ativo');
                
                // Atualizar risco
                this.atualizarRisco(escolha === 'proteger' ? 5 : -3);
            });
        });
        
        // Contador de risco
        if (this.elementos.botaoAumentarRisco) {
            this.elementos.botaoAumentarRisco.addEventListener('click', () => {
                this.atualizarRisco(8);
                this.adicionarMensagem('sistema', 'Nova operação simulada. Risco aumentado. Agente continua operacional.');
            });
        }
    }
    
    atualizarRisco(valor) {
        this.riscoExposicao += valor;
        
        // Limitar entre 0 e 100
        this.riscoExposicao = Math.max(0, Math.min(100, this.riscoExposicao));
        
        // Atualizar display
        if (this.elementos.valorRisco) {
            this.elementos.valorRisco.textContent = `${this.riscoExposicao}%`;
            
            // Efeito visual
            this.elementos.valorRisco.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.elementos.valorRisco.style.transform = 'scale(1)';
            }, 300);
            
            // Mudar cor baseada no risco
            if (this.riscoExposicao > 80) {
                this.elementos.valorRisco.style.color = 'var(--cor-alerta)';
            } else if (this.riscoExposicao > 60) {
                this.elementos.valorRisco.style.color = 'var(--cor-rosa)';
            } else {
                this.elementos.valorRisco.style.color = 'var(--cor-sucesso)';
            }
        }
    }
    
    configurarAudio() {
        // Configurar áudio de scanner
        if (this.elementos.audioScan) {
            // Tentar tocar no início
            setTimeout(() => {
                try {
                    this.elementos.audioScan.volume = 0.3;
                    this.elementos.audioScan.play();
                } catch (e) {
                    // Audio bloqueado
                }
            }, 500);
        }
    }
    
    // Métodos de sistema
    salvarEstado() {
        const estado = {
            modulos: Array.from(this.modulosAtivos),
            risco: this.riscoExposicao,
            comunicacao: this.historicoComunicacao.slice(-5),
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('estadoAgenteRael', JSON.stringify(estado));
    }
    
    carregarEstado() {
        const salvo = localStorage.getItem('estadoAgenteRael');
        if (salvo) {
            const estado = JSON.parse(salvo);
            this.modulosAtivos = new Set(estado.modulos);
            this.riscoExposicao = estado.risco;
            this.historicoComunicacao = estado.comunicacao || [];
            
            // Restaurar visual
            this.atualizarRisco(0); // Atualizar display
        }
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar sistema
    window.sistemaRael = new SistemaAgenteRael();
    
    // Carregar estado salvo
    setTimeout(() => {
        if (window.sistemaRael) {
            window.sistemaRael.carregarEstado();
        }
    }, 2000);
    
    // Auto-salvamento
    setInterval(() => {
        if (window.sistemaRael) {
            window.sistemaRael.salvarEstado();
        }
    }, 30000);
    
    // Easter eggs
    console.log('%c🔐 ACESSO AO AGENTE NV-28-GAMMA', 
        'color: #ff6b8b; font-size: 14px; font-weight: bold;');
    console.log('%c📓 "A resistência não grita. Ela ressoa."', 
        'color: #8b949e; font-style: italic;');
    
    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 'r') {
            if (window.sistemaRael) {
                window.sistemaRael.adicionarMensagem('rael', 
                    "Atalho detectado. Como minhas operações: silencioso, eficiente, não oficial."
                );
            }
        }
        
        // Ctrl+Alt+R para reset de risco
        if (e.ctrlKey && e.altKey && e.key === 'R') {
            if (window.sistemaRael) {
                window.sistemaRael.atualizarRisco(-window.sistemaRael.riscoExposicao + 50);
                window.sistemaRael.adicionarMensagem('sistema', 
                    'Risco reconfigurado para 50%. Protocolos de camuflagem ativados.'
                );
            }
        }
    });
});

// Fallback para navegadores antigos
if (typeof SistemaAgenteRael === 'undefined') {
    console.warn('Sistema ES6 não suportado. Fallback ativado.');
    
    document.addEventListener('DOMContentLoaded', function() {
        // Navegação básica
        const botoes = document.querySelectorAll('.botao-sistema');
        const modulos = document.querySelectorAll('.modulo-dados');
        
        botoes.forEach(botao => {
            botao.addEventListener('click', function() {
                const moduloId = this.getAttribute('data-modulo');
                
                botoes.forEach(b => b.classList.remove('ativo'));
                modulos.forEach(m => m.classList.remove('ativo'));
                
                this.classList.add('ativo');
                document.getElementById('modulo-' + moduloId).classList.add('ativo');
            });
        });
        
        // Pular scanner após tempo
        setTimeout(function() {
            const scanner = document.getElementById('scanner');
            const interface = document.getElementById('interface');
            
            if (scanner && interface) {
                scanner.style.display = 'none';
                interface.style.display = 'block';
                interface.style.opacity = '1';
            }
        }, 4000);
    });
}
