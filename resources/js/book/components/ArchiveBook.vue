<template>
	<div>
		  <!-- Button trigger modal -->
        <button type="button" title="ArchiveBook" class="btn btn-warning btn-sm" data-toggle="modal" @click.prevent="open">
            <i class="ni ni-archive-2"></i>
        </button>

		<div class="modal fade" :id="`archive-book-${book.id}`" tabindex="-1" role="dialog" aria-labelledby="deleteBookModallLabel" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <form @submit.prevent="submit">
		      	<div class="modal-body">
		      		<p>Are you sure you want to archieve {{ book.title }} book? 
		      			<br>It can be recovered later though.</p>
		        </div>
		        <div class="modal-footer">
		        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		        	<button type="submit" class="btn btn-danger">Yes, Archive</button>
		        </div>
		     </form>

		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ArchiveBook',
		props: {
			book: {
				required: true,
				type: Object,
			},
		},
		computed: {
			openModal() {
				return $(`#archive-book-${this.book.id}`)
			}
		},
		methods: {
			open() {
				this.openModal.modal('toggle')
			},
			async submit() {
				try {
					let {data} = await axios.delete(`/api/book/${this.book.id}/archive`)

					this.$emit('isArchive', data.book);

					this.open();
				}
				catch(error) {
					console.log("Something went wrong in database. Contact Admin.");
				}
			}
		}
	};
</script>
