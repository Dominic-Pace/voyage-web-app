import React from 'react'
import {
  calculatePackagePrice,
  getDifferenceInDays
} from '../../utils/date'

import { Col, Row } from 'react-bootstrap'
import Image from '../image'
import Rating from 'react-rating'
import { RoundedButton } from '../button'
import Dropdown from '../dropdown'

import './styles.css'

const numOfPeopleOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
]

const CheckoutFooter = ({
  buttonLabel,
  buttonType,
  checkoutPrice,
  currentPackage,
  currentStep,
  handleNumOfPeopleSelect,
  isAuthed,
  isMobileView,
  isButtonDisabled,
  nextBtnSize,
  numOfPeople,
  onButtonClick
}) => {
  const differenceInDays = getDifferenceInDays(currentPackage.startDate, currentPackage.endDate)

  return (
    <Row className="checkout-footer">
      <Col className="checkout-footer-logo-container">
        <Image
          alt="Voyago Logo"
          className="checkout-footer-logo"
          image="logo"
          size={64}
        />
      </Col>
      <Col style={{ width: '45%'}}>
        <div className="checkout-footer-name-container">
          <div className="checkout-footer-name">
            { currentPackage.name }
          </div>
          <div className="checkout-footer-dates">
            {`${differenceInDays + 1 } Days ${differenceInDays} Nights`}
            <span className="checkout-footer-rating">
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating={currentPackage.avgRating || 0}
                readonly
              />
            </span>
            <span className="checkout-footer-rating-num">{`(${currentPackage.ratings || 0})`}</span>
          </div>
        </div>
      </Col>
      <Col className="checkout-footer-checkout-container">
        <div className="checkout-footer-checkout-btn-container">
          {
            (handleNumOfPeopleSelect) && (currentStep !== 0) && !isMobileView &&
            <div className="checkout-footer-total-title">{`# of People: `}</div>
          }
          {
            handleNumOfPeopleSelect && (currentStep !== 0) &&
            <Dropdown
              defaultValue={numOfPeopleOptions[3]}
              handleChange={handleNumOfPeopleSelect}
              options={numOfPeopleOptions}
              style={{ marginLeft: -22 }}
            />
          }
          <span className="checkout-footer-total-amount">
              {
                checkoutPrice ?
                  `$${Math.round(checkoutPrice)}`
                  :
                  `$${Math.round(calculatePackagePrice(currentPackage))}`

              }
            <span className="checkout-footer-total-per">
            /person
          </span>
        </span>
          <div className="checkout-footer-total-container">
            {
              numOfPeople &&
              <Col className="checkout-footer-total">
                {`TOTAL: `}
              </Col>
            }
            {
              numOfPeople &&
              <span className="checkout-footer-total-amount">
                {
                  checkoutPrice ?
                    `$${Math.round(checkoutPrice) * numOfPeople}`
                    :
                    `$${Math.round(calculatePackagePrice(currentPackage)) * numOfPeople}`
                }
              </span>
            }
          </div>
          <RoundedButton
            className="top-section-btn"
            disabled={isButtonDisabled}
            label={buttonLabel}
            linkTo={isAuthed ? `/booking/${currentPackage.id}` : '/auth'}
            onClick={onButtonClick}
            style={{
              borderRadius: 3,
              fontWeight: 600,
              width: nextBtnSize || '30%',
            }}
            type={buttonType}
            uppercase
          />
        </div>
      </Col>
    </Row>
  )
}

export default CheckoutFooter
