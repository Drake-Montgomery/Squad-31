using Microsoft.EntityFrameworkCore;
using Abar.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<Context_Pessoa>(options => options.UseSqlServer(@"Server=abarsquad31.database.windows.net;Database=AbarDB;User Id=squad31;Password=JorgePig48;"));

builder.Services.AddControllersWithViews();


// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
