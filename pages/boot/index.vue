<template>
    <div>
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text class="text-red-300">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button
                pill variant="success"
                tag="p"
                style="color:#fff"
                @click="getPdf"
            >Go somewhere</b-button>
        </b-card>
        <a href="/info.pdf" download="">pdf</a>
    </div>
</template>

<script>
export default {
    methods: {
        getPdf(){
            const url = '/info.pdf'
            const link = document.createElement("a");
            document.body.appendChild(link);
            link.download = 'info.pdf';
            link.href = url;
            link.click();
            link.remove();
        },
        openPage(){
            window.open('/static/info.pdf', '_blank')
        }
    }
}

</script>
