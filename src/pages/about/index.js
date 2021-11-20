import React, { Component } from 'react'
import { Page, Container, Padding } from '../../components/layout'
import { Button, Primary } from '../../components/button'
import { HicetnuncContext } from '../../context/HicetnuncContext'
import { BottomBanner } from '../../components/bottom-banner'
import { getLanguage } from '../../constants'
import styles from './styles.module.scss'

export class About extends Component {
  static contextType = HicetnuncContext

  language = getLanguage()

  state = {
    reveal: false,
  }

  reveal = () => {
    this.setState({
      reveal: !this.state.reveal,
    })
  }

  render() {
    return (
      <Page title="about" large>
        <Container>
          <Padding>
            <strong>HECTIC NUN IS A GLITCHY MIRROR OF HEN, USE AT YOUR OWN RISK U MAD PPL. A project by M PLUMMER-FERNANDEZ</strong>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[0]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[1]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[2]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <div className={styles.buttons}>
              <p>preferably do not DM </p>
              &nbsp;
              <Button href="https://twitter.com/m_PF">
                <Primary>
                  <strong>M_PF on twitter</strong>
                </Primary>
              </Button>
              <p>,</p>&nbsp;
              <Button href="mailto:">
                <Primary>
                  <strong>sorry, no snail-mail</strong>
                </Primary>
              </Button>
              <p>,</p>&nbsp;
              <Button href="https://hecticnun.xyz/objkt/365628">
                <Primary>
                  <strong>Glitch Manifesto by Rosa Menkman</strong>
                </Primary>
              </Button>
              <p>,</p>&nbsp;
              <Button href="https://hecticnun.xyz/objkt/365628">
                <Primary>
                  <strong>more reading coming soon </strong>
                </Primary>
              </Button>
              <p>,</p>&nbsp;
              <Button href="https://hecticnun.xyz/objkt/365628">
                <Primary>
                  <strong>placeholder</strong>
                </Primary>
              </Button>
              &nbsp;blabla
              <Button href="https://hecticnun.xyz/objkt/365628">
                <Primary>
                  <strong>&nbsp;put stuff here later</strong>
                </Primary>
              </Button>.
            </div>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <div className={styles.buttons}>
              <p>stop reading already////////////////////</p>&nbsp;
              <Button href="https://hecticnun.xyz/objkt/365628">
                <Primary>
                  <strong>EmbRACE HECTIC </strong>
                </Primary>
              </Button>
            </div>
          </Padding>
        </Container>
        <Container>
          <Padding>
            <Button href="https://hecticnun.xyz/objkt/365628">
              <Primary>
                <strong>asda123;asdlk;saldasddddddd</strong>
              </Primary>
            </Button>
            {false && (
              <Button href="https://hecticnun.xyz/objkt/365628">
                <Primary>
                  <strong>asdaadasddasdassdaddd</strong>
                </Primary>
              </Button>
            )}
          </Padding>
        </Container>

        <Container>
          <Padding>
            <div className={styles.buttons}>
              <p>Report</p>&nbsp;
              <Button href="https://hecticnun.xyz/objkt/365628">
                <Primary>
                  <strong>tissues</strong>
                </Primary>
              </Button>
            </div>
          </Padding>
        </Container>
{/*         <BottomBanner>
        Collecting has been temporarily disabled. Follow <a href="https://twitter.com/hicetnunc2000" target="_blank">@hicetnunc2000</a> or <a href="https://discord.gg/jKNy6PynPK" target="_blank">join the discord</a> for updates.
        </BottomBanner> */}
      </Page>
    )
  }
}
