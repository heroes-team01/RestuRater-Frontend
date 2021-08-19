import React, { Component } from 'react'

import './reviews/style.css'
import './reviews/style.scss'
export class Review extends Component {
	constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
    render() {
        return (
            <section class="main-content">
		<div class="container">
			<h1>RestuRater Reviews</h1>
			<br></br>

			<br></br>

			<div class="row">

				<div class="col-sm-6 col-md-6 col-lg-4">
					<div class="card bg-white p-3 mb-4 shadow">
						<div class="d-flex justify-content-between mb-4">
							<div class="user-info">
								
								<div class="user-info__basic">
									<h5>Kiran Acharya</h5>
									<p>🍴Restrunt Name : Superiority Burger</p>
									<p>🧾Review : The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome
</p>
								</div>
							</div>
							
						</div>
						<h6 class="mb-0"></h6>
						<a href="#!"><small></small></a>
						<div class="d-flex justify-content-between mt-4">
							<div>
								<h5 class="mb-0">
									<small class="ml-1">2 Feb 2021</small>
								</h5>
							</div>
							<span class="text-success font-weight-bold"></span>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	</section>

        )
    }

}

export default Review
