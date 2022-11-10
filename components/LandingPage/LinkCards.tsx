import React from 'react'
import { styled } from '../../stitches.config'
import { SoundProtocolIcon, SoundSDKIcon, SoundAPIIcon } from '../icons'
import Link from 'next/link'
import { SectionContainer } from '../Containers'

const content = {
  protocol: {
    heading: 'Sound Protocol',
    description:
      'The Sound Protocol is a permissionless, open-source, modular smart contract framework for musicians and creators.',
    icon: SoundProtocolIcon,
    path: '/protocol/overview',
    color: '$iconProtocol',
  },
  sdk: {
    heading: 'Sound SDK',
    description: 'The Sound SDK is a Typescript library for building applications on the Sound Protocol.',
    icon: SoundSDKIcon,
    path: '/sdk',
    color: '$iconSDK',
  },
  api: {
    heading: 'Sound API',
    description:
      'Our official GraphQL API serves indexed event data from Sound Protocol, including metadata like image and audio URLs.',
    icon: SoundAPIIcon,
    path: '/sound-api',
    color: '$iconAPI',
  },
}

export const LinkCard = ({ type }: { type: 'protocol' | 'sdk' | 'api' }) => {
  const currentContent = content[type]
  return (
    <OuterContainer>
      <Link href={currentContent.path} legacyBehavior>
        <a>
          <InnerContainer
            css={{
              '&:hover > div': {
                borderColor: currentContent.color,
              },
            }}
            className="inner"
          >
            <IconContainer>{currentContent.icon()}</IconContainer>
            <Heading>{currentContent.heading}</Heading>
            <Description>{currentContent.description}</Description>
          </InnerContainer>
        </a>
      </Link>
    </OuterContainer>
  )
}

export const LinkCards = () => {
  return (
    <SectionContainer css={{ backgroundColor: '$neutral50' }}>
      <MiddleLinks>
        <LinkCard type="protocol" />
        <LinkCard type="sdk" />
        <LinkCard type="api" />
      </MiddleLinks>
    </SectionContainer>
  )
}

const MiddleLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@tabletLandscape': {
    flexDirection: 'row',
  },
})

const OuterContainer = styled('div', {
  color: '$darkBg',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 0,
})

const InnerContainer = styled('div', {
  padding: '50px 0',
  maxWidth: 290,
  margin: '0 auto',

  svg: {
    opacity: 0.9,
  },

  '&:hover': {
    svg: {
      opacity: 1,
    },
  },
})

const Heading = styled('h2', {
  fontSize: 34,
  fontWeight: 500,
  marginTop: 32,
  color: '$neutral900',
})

const Description = styled('p', {
  marginTop: 16,
  color: '$neutral700',
})

const IconContainer = styled('div', {
  backgroundColor: '$black',
  width: 100,
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  borderWidth: 2,
  borderColor: '$black',
  transition: 'all 0.2s ease-in-out',
})
