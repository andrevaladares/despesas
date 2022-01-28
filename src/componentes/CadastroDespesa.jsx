import { Button, MenuItem, TextField } from '@material-ui/core'
import React from 'react'

const listaCategorias = [
    { value: 'Mercado', label: 'Mercado' },
    { value: 'Ctas da casa', label: 'Ctas da casa' },
    { value: 'Saúde', label: 'Saúde' },
    { value: 'Escola', label: 'Escola' },
    { value: 'Bebidas', label: 'Bebidas' },
    { value: 'Restaurantes', label: 'Restaurantes' },
    { value: 'Outros', label: 'Outros' },
    { value: 'Viagens e passeios', label: 'Viagens e passeios' },
    { value: 'Horta', label: 'Horta' },
    { value: 'Faxina', label: 'Faxina' },
    { value: 'Carro', label: 'Carro' },
    { value: 'Financiamento casa', label: 'Financiamento casa' },
    { value: 'Doações', label: 'Doações' },
    { value: 'Churras e semelhantes', label: 'Churras e semelhantes' }
]

function CadastroDespesa() {

/*    const getDataAtualFormatada = () => {
        const dataAtual = new Date()
        const dia = dataAtual.getDate().toString().padStart(2, '0')
        const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0')
        const ano = dataAtual.getFullYear().toString()

        return dia + "/" + mes + "/" + ano
    }
*/

    const [categoria, setCategoria] = React.useState('')
    const [data, setData] = React.useState(new Date().toISOString().substring(0,10))

    return (
        <>
            <p>Cadastro de Despesa</p>
            <form>
                <TextField
                    id="data"
                    label="Data"
                    type="date"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    required
                    margin="normal"
                    value={data}
                    onChange={(event) => { setData(event.target.value) }}
                />

                <TextField
                    id="categoria"
                    label="Categoria"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    select
                    value={categoria}
                    onChange={(event) => { setCategoria(event.target.value) }}
                >
                    {listaCategorias.map((opcao) =>
                        <MenuItem key={opcao.value} value={opcao.value}>{opcao.label}</MenuItem>
                    )}

                </TextField>

                <TextField
                    id="descricao"
                    label="Descrição"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    id="valor"
                    label="Valor"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                />

                <Button id="botaoLimpar" color="secondary" variant="contained">Limpar</Button>
                <Button id="botaoSalvar" type="submit" color="primary" variant="contained">Salvar</Button>

            </form>

        </>

    )
}

export default CadastroDespesa