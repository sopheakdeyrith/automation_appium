describe("login fresh", ()=>{
    it("login fresh",async()=>{
        await driver.execute("mobile: activateApp", {
            appId: "com.nham24.freshinvantory.dev",
          });
        await $('//android.view.ViewGroup[@content-desc="Inventory"]').click();
        await driver.pause(3000); 
        await $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView').click();
        await $('//android.view.ViewGroup[@content-desc="Count"]').click();
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