using UnityEngine;
using UnityEngine.UI;

public class ControladorFase : MonoBehaviour
{
    internal float TempoRestante;
    public GameObject telaGanhou, telaPerdeuErrou, telaPerdeuTempo, telaPause;

    // Elementos gráficos presentes na barra superior do game
    public Image imagemTacaSelecionada;
    public Text textoTempoRestante, textoFaseAtual;

    // Vetores das imagens das garrafas e dos tipos de bebidas
    public Sprite[] bebidas;
    public string[] tipos;

    // Variáveis representando o objeto do personagem e da garrafa
    public GameObject personagem;
    public SpriteRenderer bebidaNaTela;

    // Variáveis de controle
    internal int faseatual, numbebidaatual;
    internal string nomeBedidaAtual, nomeTacaAtual;
    internal Vector3 posInicialPersonagem;

    // Start is called once before the first execution of update afte
    private void Start()
    {
        posInicialPersonagem = personagem.transform.localPosition;
        TempoRestante = 60;
        faseatual = 1;
        nomeTacaAtual = "";
        EscolherUmaBebida();

        imagemTacaSelecionada.sprite = null;
    }

    // Update is called once  per frame
    void Update()
    {
        // Código para diminuir o tempo
        TempoRestante -= Time.deltaTime;

        // Código para atualizar os textos na tela :
        textoTempoRestante.text = "Tempo restante:" + TempoRestante.ToString("00");
        textoFaseAtual.text = "Fase: " + faseatual;

        // Verificare se o tempo acabou: 
        if (TempoRestante <= 0)
        {
            telaPerdeuTempo.SetActive(true);
            Time.timeScale = 0;
            TempoRestante = 0;
        }
    }

    public void PegarTaca(GameObject taca)
    {
        imagemTacaSelecionada.sprite = taca.GetComponent<SpriteRenderer>().sprite;
        imagemTacaSelecionada.preserveAspect = true;
        nomeTacaAtual = taca.GetComponent<ControladorTaca1>().tipo;
    }


    public void Comparar()
    {
        if (nomeTacaAtual == nomeBedidaAtual)
        {
            telaGanhou.SetActive(true);
            Time.timeScale = 0;
        }


        else if (nomeTacaAtual != "")
        {
            telaPerdeuErrou.SetActive(true);
            Time.timeScale = 0;
        }
    }
    public void EscolherUmaBebida()
    {
        int valorAleatorio = (int)(Random.value * bebidas.Length);

        if (numbebidaatual == valorAleatorio)
            valorAleatorio++;

        bebidaNaTela.sprite = bebidas[valorAleatorio];
        nomeBedidaAtual = tipos[valorAleatorio];

    }

    public void Pausar()
    {
        telaPause.SetActive(true);
        Time.timeScale = 0;
    }
    public void Despausar()
    {
        telaPause.SetActive(false);
        Time.timeScale = 1;
    }

    public void AvancarFase()
    {
        //Avanço para a próxima fase
        faseatual += 1;

        // Reposiciono o personagem na posição inicial
        personagem.transform.localPosition = posInicialPersonagem;

        // Acrescento 10s ao tempo restante
        TempoRestante += 10;

        // "Tiro" a taça da mão do jogador e mando escolher nova bebida 
        nomeTacaAtual = "";
        EscolherUmaBebida();
        imagemTacaSelecionada.sprite = null;

        // Desligo a "tela ganhou" e descongelo o tempo 
        telaGanhou.SetActive(false);
        Time.timeScale = 1;

    }

    public void RecomecarFase()
    {

        faseatual += 1;

        // Reposiciono o personagem na posição inicial
        personagem.transform.localPosition = posInicialPersonagem;

        TempoRestante = 60;

        // "Tiro" a taça da mão do jogador e mando escolher nova bebida 
        nomeTacaAtual = "";
        EscolherUmaBebida();
        imagemTacaSelecionada.sprite = null;

        telaPerdeuErrou.SetActive(false);
        telaPerdeuTempo.SetActive(false); // Essa Linha é duplicada da de cima, mas adaptada
        Time.timeScale = 1;




    }
}