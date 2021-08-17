import React, { Component } from 'react'

import './reviews/style.css'
import './reviews/style.scss'
export class Review extends Component {
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
								<div class="user-info__img">
									<img src="img/user1.jpg" alt="User Img"/>
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">Kiran Acharya</h5>
									<p class="text-muted mb-0">28 yrs, Male</p>
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
				<div class="col-sm-6 col-md-6 col-lg-4">
					<div class="card bg-white p-3 mb-4 shadow">
						<div class="d-flex justify-content-between mb-4">
							<div class="user-info">
								<div class="user-info__img">
									<img src="img/user2.jpg" alt="User Img"/>
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">Sandeep Hegde</h5>
									<p class="text-muted mb-0">28 yrs, Male</p>
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
				<div class="col-sm-6 col-md-6 col-lg-4">
					<div class="card bg-white p-3 mb-4 shadow">
						<div class="d-flex justify-content-between mb-4">
							<div class="user-info">
								<div class="user-info__img">
									<img src="img/user3.jpg" alt="User Img"/>
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">John Doe</h5>
									<p class="text-muted mb-0">28 yrs, Male</p>
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
				<div class="col-sm-6 col-md-6 col-lg-4">
					<div class="card bg-white p-3 mb-4 shadow">
						<div class="d-flex justify-content-between mb-4">
							<div class="user-info">
								<div class="user-info__img">
									<img src="img/user7.jpg" alt="User Img"/>
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">Vishwanath</h5>
									<p class="text-muted mb-0">28 yrs, Male</p>
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
				<div class="col-sm-6 col-md-6 col-lg-4">
					<div class="card bg-white p-3 mb-4 shadow">
						<div class="d-flex justify-content-between mb-4">
							<div class="user-info">
								<div class="user-info__img">
									<img src="img/user1.jpg" alt="User Img"/>
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">Kiran Acharya</h5>
									<p class="text-muted mb-0">28 yrs, Male</p>
								</div>
							</div>
							
						</div>
						<h6 class="mb-0"></h6>
						<a href="#!"><small></small></a>
						<div class="d-flex justify-content-between mt-4">
							<div>
								<h5 class="mb-0">
									<small class="ml-1">3 Feb 2021</small>
								</h5>
							</div>
							<span class="text-primary font-weight-bold"></span>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-4">
					<div class="card bg-white p-3 mb-4 shadow">
						<div class="d-flex justify-content-between mb-4">
							<div class="user-info">
								<div class="user-info__img">
									<img src="img/user2.jpg" alt="User Img"/>
								</div>
								<div class="user-info__basic">
									<h5 class="mb-0">Sandeep Hegde</h5>
									<p class="text-muted mb-0">28 yrs, Male</p>
								</div>
							</div>
							
						</div>
						<h6 class="mb-0"></h6>
						<a href="#!"><small></small></a>
						<div class="d-flex justify-content-between mt-4">
							<div>
								<h5 class="mb-0">
									<small class="ml-1">3 Feb 2021</small>
								</h5>
							</div>
							<span class="text-primary font-weight-bold"></span>
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
