import React from 'react'
import { Chip, Avatar } from '@material-ui/core'


function ResumoDespesasMes() {

    const obterResumoMes = (nome) => {
        if (nome === 'andre') return '2500,00'
        if (nome === 'flavia') return '3000,00'
        if (nome === 'total') return '5500,00'
    }

    const resumoandre = obterResumoMes('andre')
    const resumoflavia = obterResumoMes('flavia')
    const resumototal = obterResumoMes('total')

    return (
        <>
            <p>Resumo do mês</p>

            <Chip id='resumoandre' label={resumoandre} avatar={<Avatar>A</Avatar>} />
            <Chip id='resumoflavia' label={resumoflavia} avatar={<Avatar>F</Avatar>} />
            <Chip id='resumogeral' label={resumototal} avatar={<Avatar>G</Avatar>} />

        </>
    )
}

export default ResumoDespesasMes