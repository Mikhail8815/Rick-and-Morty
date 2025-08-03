import {GetStaticPaths, GetStaticProps} from 'next';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import {API} from "../../assets/api/api";
import {CharacterType} from "../../assets/api/rick-and-morty-api";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {getLayout} from "../../components/Layout/BaseLayout/BaseLayout";


export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const character = await API.rickAndMorty.getCharacter(id as string)

    if (!character) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            character
        }
    }
}

type PropsType = {
    character: CharacterType
}

const Character = (props: PropsType) => {
    const {character} = props

    const router = useRouter()

    if (router.isFallback) return <h1>Loading...</h1>

    const characterId = router.query.id

    const goToCharacters = () => router.push('/characters')

    return (
        <PageWrapper>

        </PageWrapper>
    )
}

Character.getLayout = getLayout
export default Character

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`
