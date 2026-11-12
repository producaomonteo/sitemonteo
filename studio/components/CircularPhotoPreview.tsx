import React from 'react'
import createImageUrlBuilder from '@sanity/image-url'
import {ObjectFieldProps} from 'sanity'

const builder = createImageUrlBuilder({projectId: '5ved96b8', dataset: 'production'})

const CircularPhotoPreview = (props: ObjectFieldProps) => {
  const value: any = props.value
  const hasImage = value && value.asset
  const url = hasImage
    ? builder.image(value).width(192).height(192).fit('crop').auto('format').url()
    : null

  return (
    <div>
      {props.renderDefault(props)}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginTop: 16,
          padding: 16,
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.05)',
            flexShrink: 0,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {url ? (
            <img
              src={url}
              alt=""
              style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}
            />
          ) : null}
        </div>
        <div style={{fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5}}>
          Prévia circular (como aparece na matéria). Ajuste o hotspot acima para centralizar o rosto.
        </div>
      </div>
    </div>
  )
}

export default CircularPhotoPreview
