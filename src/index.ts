import { LoyaltyUser } from './enums'

interface Review {
  name: string
  stars: number
  loyaltyUser: LoyaltyUser
  date: string
}

const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userDisplay = document.querySelector('#user') as HTMLSpanElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const toggleLoyalButton = document.querySelector('#toggle-loyal') as HTMLButtonElement

const returningUser = true
const userName = 'Indiphile'

if (returningUser) {
  returningUserDisplay.innerText = 'back'
}

userDisplay.innerText = userName

const reviews: Review[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: '27-03-2021',
  },
]

function renderReviews(reviewsToRender: Review[]): void {
  const reviewsHtml = reviewsToRender
    .map(review => {
      const loyaltyIcon = review.loyaltyUser === LoyaltyUser.GOLD_USER ? '⭐ Loyal Customer' : ''
      const stars = '⭐'.repeat(review.stars)

      return `
        <div class="review">
          <h6>${review.name} ${loyaltyIcon}</h6>
          <p>Stars: ${stars}</p>
          <p>Date: ${review.date}</p>
        </div>
      `
    })
    .join('')

  reviewTotalDisplay.innerHTML = reviewsHtml
}

renderReviews(reviews)

let showLoyalOnly = false

toggleLoyalButton.addEventListener('click', () => {
  showLoyalOnly = !showLoyalOnly

  const filteredReviews = showLoyalOnly
    ? reviews.filter(review => review.loyaltyUser === LoyaltyUser.GOLD_USER)
    : reviews

  renderReviews(filteredReviews)

  toggleLoyalButton.innerText = showLoyalOnly
    ? 'Show All Customers'
    : 'Show Loyal Customers Only'
})
