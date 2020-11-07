<template>
	<div class="container-fluid mt--6">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header border-0">
						<h3 class="mb-0">List of Tables</h3>
						<add-book />
					</div>
					<div class="table-responsive">
						<table class="table align-items-center table-flush">
							<thead class="thead-light">
								<tr>
									<th scope="col">Name</th>
	                                <th scope="col">Isbn</th>
	                                <th scope="col">Page Numbers</th>
	                                <th scope="col">Publishers</th>
	                                <th scope="col"></th>
	                            </tr>
	                        </thead>
	                        <tbody>
	                        	<tr>
	                        		<td>One</td>
	                                <td>One</td>
	                                <td>One</td>
	                                <td>One</td>
	                                <td></td>
	                            </tr>
	                        </tbody>
	                    </table>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
import AddBook from "./../components/AddBookModal.vue"
	export default {
		name: "BookIndex",
		components: {
			AddBook,
		},
		data(){
			return {

			}
		}

	};
</script>