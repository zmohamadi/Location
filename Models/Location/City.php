<?php

namespace Models\Location;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class City extends Model
{
    use Base;

    protected $table = 'location_city';
    protected $fillable = ['name', 'shahr_type', 'province_id', 'shahrestan', 'bakhsh', 'amar_code'];

    public function province()
    {
        return $this->belongsTo(Ostan::class, 'province_id', 'id');
    }

    public function shahrestan()
    {
        return $this->belongsTo(Shahrestan::class, 'shahrestan', 'id');
    }

    // public function bakhsh()
    // {
    //     return $this->belongsTo(Bakhsh::class, 'bakhsh', 'id');
    // }
}
