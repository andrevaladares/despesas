import { TextField } from '@material-ui/core'
import React from 'react'

function CadastroDespesa() {

    return (
        <>
            <p>Cadastro de Despesa</p>
            <form>
                <TextField
                    id="data"
                    label="Data (dd/mm/aaaa)"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    format="DD/MM/YYYY"
                />

            </form>

        </>

    )
}

export default CadastroDespesa