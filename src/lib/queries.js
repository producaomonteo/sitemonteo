export const NOTICIAS_HOME_QUERY = `
  {
    "destaque": *[_type == "noticia"
      && destaque == true
      && defined(slug.current)
      && !(_id in path("drafts.**"))]
      | order(publicadoEm desc)[0] {
        _id,
        titulo,
        "slug": slug.current,
        resumo,
        categoria,
        publicadoEm,
        capa {
          ...,
          asset->,
          alt
        }
      },
    "candidatos": *[_type == "noticia"
      && defined(slug.current)
      && !(_id in path("drafts.**"))]
      | order(publicadoEm desc)[0...4] {
        _id,
        titulo,
        "slug": slug.current,
        resumo,
        categoria,
        publicadoEm,
        capa {
          ...,
          asset->,
          alt
        }
      }
  }
`

export const NOTICIAS_LIST_QUERY = `
  *[_type == "noticia" && defined(slug.current) && !(_id in path("drafts.**"))]
    | order(publicadoEm desc) {
      _id,
      titulo,
      "slug": slug.current,
      resumo,
      categoria,
      publicadoEm,
      capa {
        ...,
        asset->,
        alt
      }
    }
`

export const NOTICIA_BY_SLUG_QUERY = `
  *[_type == "noticia" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    titulo,
    "slug": slug.current,
    resumo,
    categoria,
    publicadoEm,
    autor->{
      _id,
      nome,
      cargo,
      foto {
        ...,
        asset->,
        alt
      }
    },
    capa {
      ...,
      asset->,
      alt,
      legenda
    },
    corpo[] {
      ...,
      _type == "image" => {
        ...,
        asset->,
        alt,
        legenda
      }
    },
    metaTitle,
    metaDescription
  }
`

export const NOTICIAS_RELACIONADAS_QUERY = `
  *[_type == "noticia"
    && slug.current != $slug
    && categoria == $categoria
    && !(_id in path("drafts.**"))]
    | order(publicadoEm desc)[0...3] {
      _id,
      titulo,
      "slug": slug.current,
      resumo,
      categoria,
      publicadoEm,
      capa {
        ...,
        asset->,
        alt
      }
    }
`
