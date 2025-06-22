interface Review {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}

const returningUserDisplay = document.querySelector("#returning-user") as HTMLSpanElement;
const userDisplay = document.querySelector("#user") as HTMLSpanElement;

const returningUser: boolean = true;
const userName: string = "Indiphile";

if (returningUser) {
  returningUserDisplay.textContent = "back ";
}

userDisplay.textContent = userName;

const reviewTotalDisplay = document.querySelector("#reviews") as HTMLElement;

const reviews: Review[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

reviewTotalDisplay.textContent = `Total Reviews: ${reviews.length}`;

function renderReviews(reviews: Review[]): void {
  const reviewsHtml = reviews
    .map(review => {
      const loyaltyStatus = review.loyaltyUser ? "⭐ Loyal Customer" : "";
      const stars = '⭐'.repeat(review.stars);

      return `
        <div class="review">
          <h6>${review.name} ${loyaltyStatus}</h6>
          <p>Stars: ${stars}</p>
          <p>Date: ${review.date}</p>
        </div>
      `;
    })
    .join("");

  reviewTotalDisplay.innerHTML = reviewsHtml;
}

renderReviews(reviews);


