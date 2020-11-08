<template>
	<div>
		  <!-- Button trigger modal -->
        <button type="button" class="btn btn-danger btn-sm" title="Delete Book" data-toggle="modal" @click.prevent="open">
            <i class="ni ni-fat-remove"></i>
        </button>

		<div class="modal fade" :id="`delete-book-${book.id}`" tabindex="-1" role="dialog" aria-labelledby="deleteBookModallLabel" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <form @submit.prevent="submit">
		      	<div class="modal-body">
		      		<p>Are you sure you want to delete this {{ book.title }} book?</p>
		        </div>
		        <div class="modal-footer">
		        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		        	<button type="submit" class="btn btn-danger">Yes, Delete</button>
		        </div>
		     </form>

		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DeleteBook',
		props: {
			book: {
				required: true,
				type: Object,
			},
		},
		computed: {
			openModal() {
				return $(`#delete-book-${this.book.id}`)
			}
		},
		methods: {
			open() {
				this.openModal.modal('toggle')
			},
			async submit() {
				try {
					let {data} = await axios.delete(`/api/book/${this.book.id}/delete`);
					this.$emit('isDeleted', data.book)
					this.open();

					console.log("I am here but nothing happened")

				}
				catch(error) {
					console.log(error)
				}
			}
		}
	};
</script>
