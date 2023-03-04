<script lang="ts">
    import { fly } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";

    import Header from "$lib/components/Header.svelte";
    import MenuNav from "$lib/components/MenuNav.svelte";
    import BackToHomeButton from "$lib/components/BackToHomeButton.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
</script>


<svelte:head>
    <title>Svelte Snake - The Game</title>
</svelte:head>



<div class='min-h-screen'>
    <BackToHomeButton />

    <div class='h-14' />

    <Header />

    <!-- Content -->
    <div class='container mx-auto p-4' in:fly={{ y: 25, delay: 500, duration: 500, easing: cubicInOut }}>
        <!-- Card Container -->
        <div class='card bg-white bg-opacity-70 shadow p-6 mb-16 flex flex-col items-center'>
            <MenuNav />
            <slot />
        </div>
    </div>
</div>

<Footer />