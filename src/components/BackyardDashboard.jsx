import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Table, Segment } from 'semantic-ui-react'
import BackyardArticles from '../modules/BackyardArticles'
import BackyardForm from './BackyardForm'
import { useTranslation } from 'react-i18next'

const BackyardDashboard = () => {
  const { location, backyardArticles, subscriber, update } = useSelector(
    (state) => state
  )
  const { t } = useTranslation()

  const getArticlesBasedOnPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      BackyardArticles.index(position.coords)
    })
  }

  useEffect(() => {
    getArticlesBasedOnPosition()
  }, [update])

  const listOfBackyardArticles = backyardArticles.map((backyardArticle) => (
    <Table.Row
      key={backyardArticle.id}
      textAlign='center'
      data-cy='backyard-article'>
      <Table.Cell
        data-cy='title'
        textAlign='center'
        width={5}
        style={{ fontWeight: 'bold' }}>
        {backyardArticle.title}
      </Table.Cell>
      <Table.Cell data-cy='theme' singleLine>
        {backyardArticle.theme}
      </Table.Cell>
      <Table.Cell data-cy='author'>
        {backyardArticle.author
          ? `${backyardArticle.author.first_name} ${backyardArticle.author.last_name}`
          : 'Bob Kramer'}
      </Table.Cell>
      <Table.Cell data-cy='date'>{backyardArticle.date}</Table.Cell>
      <Table.Cell>
        <Link
          data-cy='view-backyard-article-btn'
          to={`/backyards/${backyardArticle.id}`}>
          <Button>{t('backyardDashboardView')}</Button>
        </Link>
      </Table.Cell>
    </Table.Row>
  ))

  return (
    <>
      <div style={styles.container}>
        <div className='box-shadow' style={styles.articleContainer}>
          <Segment inverted attached='top' style={styles.header}>
            <h2 data-cy='backyard-header'>
              {location
                ? `${t('backyardDashboardHeaderLocationOn')} ${location}`
                : t('backyardDashboardeaderLocationOff')}
            </h2>
            {subscriber && location && <BackyardForm location={location} />}
          </Segment>
          <Table celled padded inverted style={{ overflowY: 'scroll' }}>
            <Table.Header>
              <Table.Row id='tr-head' textAlign='center'>
                <Table.HeaderCell singleLine>
                  {t('backyardDashboardTitle')}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {t('backyardDashboardTheme')}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {t('backyardDashboardWrittenBy')}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {t('backyardDashboardCreatedOn')}
                </Table.HeaderCell>
                <Table.HeaderCell>
                  {t('backyardDashboardAction')}
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            {backyardArticles[0] && (
              <Table.Body>{listOfBackyardArticles}</Table.Body>
            )}
          </Table>
        </div>
      </div>
      <p style={styles.disclaimer}>
        The views and opinions expressed in the Backyard are those of the users
        and do not necessarily reflect the official policy or position of Fake
        News. Any content provided by our patriots are of their opinion and are
        not intended to malign any religion, ethnic group, club, organization,
        company, individual or anyone or anything.
      </p>
    </>
  )
}

export default BackyardDashboard

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: '100px 15%',
  },
  articleContainer: {
    backgroundColor: '#202325',
    width: '100%',
  },
  formContainer: {
    width: '45%',
    marginLeft: '5%',
    padding: 10,
  },
  createButton: {
    position: 'absolute',
    top: 105,
    left: 300,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '2%',
    alignItems: 'center',
  },
  disclaimer: {
    color: '#cec269',
    fontSize: '10px',
    textAlign: 'center',
    width: '50%',
    margin: 'auto',
  },
}
