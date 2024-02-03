<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Drawer from "$lib/components/ui/drawer";
    import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";

    let open = false;
    let submitted = false
    let nameError = false
    let amountError = false

    let name = ""
    let amount = 1
    let attending = 'Yes'
    let data = {}

    const handleSubmit = async () => {
        console.log('Name:', name)
        console.log('Amount:', amount)
        console.log('Attending:', attending)
        if (name && amount && attending) {
            // Submiting data
            data = {
                name,
                amount,
                attending
            }
            const response = await fetch('https://nocodeform.io/f/65bd3ad5d330735cc318d9bf', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                // Error
                console.error('Error:', response.statusText)
            }
            const result = await response.json()
            console.log('Result:', result)
            open = false
        } else {
            if (!name) {
                nameError = true
            } 
            if (!amount) {
                amountError = true
            }
            // Name or amount missing
        }
    }

    const giveFocus = (e: any) => {
        e.target.focus()
    }

    let labelErrorClass = "text-rose-500"
    let inputErrorClass = "border-2 border-rose-500"
</script>

<Drawer.Root bind:open>
    <Button class="font-kalam text-xl h-12 rounded-md px-10"><Drawer.Trigger>Anmäl dig</Drawer.Trigger></Button>
    <Drawer.Content>
        <div class="w-full max-h-[450px] flex flex-col items-center justify-center p-4 font-kalam">
            <div class="max-w-[450px] w-full">
                <form action="" on:submit|preventDefault={handleSubmit}>
                <Drawer.Header>
                    <Drawer.Title class="text-center text-2xl">Anmälan</Drawer.Title>
                    <Drawer.Description class="text-center text-xl">Här kan ni anmäla er.</Drawer.Description>
                </Drawer.Header>
                <div>
                    <input type="radio" class="" name="attending" id="willAttend" checked bind:value={attending}>
                    <label for="willAttend">Vi kommer</label>
                </div>
                <div class="mt-2">
                    <input type="radio" name="attending" id="willNotAttend" bind:value={attending}>
                    <label for="willNotAttend">Tyvärr, vi kommer inte</label>
                </div>
                <div class="mt-4">
                    <Label for="name" class="{nameError ? labelErrorClass : ''}">Namn</Label>
                    <Input type="text" id="name" name="name" class="{nameError ? inputErrorClass : ''}" placeholder="Namn" on:keydown={() => nameError = false} bind:value={name} on:click={giveFocus} />
                </div>
                <div class="mt-4">
                    <Label for="amount" class="{amountError ? labelErrorClass : ''}">Antal</Label>
                    <Input type="number" id="amount" name="amount" class="{amountError ? inputErrorClass : ''}" placeholder="Antal" on:keydown={() => amountError = false} bind:value={amount} />
                </div>
                    <Drawer.Footer class="mt-4">
                        <Button type="submit" class="bg-pink-400 hover:bg-pink-500">Skicka</Button>
                        <Drawer.Close>Avbryt</Drawer.Close>
                    </Drawer.Footer>
                </form>
            </div>
        </div>
    </Drawer.Content>
</Drawer.Root>