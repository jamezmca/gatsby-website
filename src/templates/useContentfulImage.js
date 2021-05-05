import { graphql, useStaticQuery } from 'gatsby'


export const useContentfulImage = (assetUrl) => {
    const { assets } = useStaticQuery(
        graphql`
            query CONTENTFUL_IMAGE_QUERY {
                assets: allContentfulAsset {
                    edges {
                        node {
                            contentful_id
                            fluid(maxWidth: 500, quality: 85) {
                                ... GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        `
    )
    const asset = assets.edges.find(({ node }) => node.contentful_id === assetUrl)
    return asset
}

