describe("login fresh", ()=>{
    it("login fresh",async()=>{
        await driver.execute("mobile: activateApp", {
            appId: "com.nham24.freshinvantory.dev",
          });
        await $('//android.view.ViewGroup[@content-desc="Start Counting"]').click();
        await $('//com.horcrux.svg.PathView').click();
        await $('//android.widget.EditText[@text="Search by"]').setValue("sl2401068087449847");
        await driver.pressKeyCode(66);
        await $('//android.widget.TextView[@text="Add expiration"]').click();
        await $('//com.horcrux.svg.PathView').click();
        await $('//android.widget.TextView[@text="7"]').click();
        await $('//android.widget.EditText[@text="Quantity"]').setValue(3);
        await $('//android.widget.EditText[@text="Add any relevant notes (optional)"]').setValue("Testing ng hah")
        await $('//android.view.ViewGroup[@content-desc="Submit"]').click();
        await $('//android.view.ViewGroup[@content-desc="Yes"]').click();
        await $('//android.widget.EditText[@text="Enter Stock Quantity"]').setValue(10);
        await $('//android.widget.TextView[@text="Report"]').click();
        await $('//android.widget.EditText[@text="Explain the issue here"]').setValue("Overstock");
        await $('//android.view.ViewGroup[@content-desc="Report a Mistake"]').click();
        await $('//android.widget.TextView[@text="Yes"]').click();
        await $('//android.view.ViewGroup[@content-desc="Done"]').click();
    


    })
})