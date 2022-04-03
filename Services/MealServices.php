<?php

namespace Services;

use Model;
use Illuminate\Database\Capsule\Manager;
use Illuminate\Support\Collection;
use Model\DatabaseConnector;

class MealServices
{
    private DatabaseConnector $DBC;
    private Manager $connection;



    public function __construct()
    {
        $this->DBC = new DatabaseConnector();
        $this->connection = $this->DBC->getDbc();
    }


    /**
     * Get All Items in Table
     * @return Collection
     */
    function getMeals(): Collection
    {
        return $this->connection->table("Meals")->get();
    }

    /**
     * Get specific item from table using id
     * @param int $id
     * @return stdClass|null
     */
    function getProductById(int $id): ?stdClass
    {
        if ($id > 0) {
            return $this->connection->table("products")->where("id", "=", "$id")
                ->select(["name","description","price","image"])->first();
        } else {
            return null;
        }
    }

    /**
     * Get specific item from table using id
     * @param String $name
     * @param String $description
     * @param  int $price
     * @param string $img
     */
    function updateTableMeals(int $id,string $name,string $description,int $price ,string $img): int
    {
        return $this->connection->table("meal")
            ->where('id', $id)
            ->update([ "name" => $name ,"description" =>$description, "price" => $price, "image" =>$img]);
    }


    // insert products  : for future plans
    /**
     * Add new product to database
     * @param String $name
     * @param String $description
     * @param  int $price
     * @param string $img
     * @return bool
     */
    function addProduct(string $name, string $description, int $price, string $img): bool
    {
        return $this->connection->table("meal")->insert(['name' => $name, 'description' => $description, 'price'=>$price, 'image'=>$img]);
    }

    /**
     * Delete product from database
     * @param int $id
     * @return int
     */
    function deleteProduct(int $id): int
    {
        return $this->connection->table("meal")
            ->where('id', '=', $id)->first()->delete();
    }

}