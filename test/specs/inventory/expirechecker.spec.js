describe("login fresh", ()=>{
    it("login fresh",async()=>{
        await driver.execute("mobile: activateApp", {
            appId: "com.nham24.freshinvantory.dev",
          });
        await $('//android.view.ViewGroup[@content-desc="Expire Checker"]').click();
        await $('//com.horcrux.svg.PathView').click();
        await $('//android.view.ViewGroup[@content-desc="Scan Inventory"]/android.view.ViewGroup[2]').click();
        await $('//android.widget.EditText[@text="Search by"]').setValue("sl2401068087449847");
        await driver.pressKeyCode(66);
        await $('//android.view.ViewGroup[@content-desc="Expiry Date"]').click();
        await $('//android.view.ViewGroup[@content-desc="6"]').click();
        await $('//android.widget.EditText[@text="Quantity"]').setValue(10);
        await $('//android.widget.EditText[@text="Add any relevant notes (optional)"]').setValue('We are testing');
        await $('//android.view.ViewGroup[@content-desc="Submit"]').click();
        await $('//android.widget.TextView[@text="Yes"]').click();

    })
})